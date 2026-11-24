"""Verify every rendered visitor guide, using the candidate build as the reference for live reads."""
import concurrent.futures
import hashlib
import json
import sys
import urllib.request
from pathlib import Path
from lxml import html,etree

base='https://www.cruzdelcondor.com'
live='live' in sys.argv
out=Path(sys.argv[-1])
root=Path('.next/server/app')
languages=['en','es','zh','qu']
places=json.loads(Path('src/i18n/colca-places.json').read_text())
notes=json.loads(Path('src/i18n/colca-observations.json').read_text())
def read(path, production=False):
    if production:
        request=urllib.request.Request(base+path,headers={'User-Agent':'Colca Regional Guide Release Verification'})
        with urllib.request.urlopen(request,timeout=25) as response:
            if response.status!=200:raise ValueError(str(response.status))
            return response.read()
    suffix='.body' if path.endswith('.xml') else '.html'
    return (root/(path.lstrip('/')+suffix)).read_bytes()
def doc(path,production=False):
    return html.fromstring(read(path,production).decode())
def norm(element):return ' '.join(' '.join(element.itertext()).split())
def digest(element): return hashlib.sha256(norm(element).encode()).hexdigest()
sitemap=etree.fromstring(read('/sitemap.xml',live))
mapped=set(sitemap.xpath('//*[local-name()="loc"]/text()'))
old_footers={l:norm(doc('/'+l,live).xpath('//footer')[0]) for l in languages}
for lang in languages:
    home=doc('/'+lang,live)
    assert '/'+lang+'/nearby' in home.xpath('//a/@href')
    directory=doc('/'+lang+'/nearby',live)
    assert len(directory.xpath('//main//ul//li/a'))==31, lang
def verify(args):
    lang,slug=args; p=places[slug]; ident=p['id']; path='/'+lang+'/nearby/'+slug
    try:
        expected=doc(path);d=doc(path,live) if live else expected
        m=d.xpath('//main')[0]; tag=m.xpath('.//h1')[0]
        checks={'h1':norm(tag)==p['name'][lang], 'intro':notes[ident][lang] in norm(m),'discovery':p['discover'][lang] in norm(m),'language':m.get('lang')==lang,'image':bool(m.xpath('.//img[@src=$p]',p='/nearby/'+ident+'.webp')),'hero':bool(m.xpath('.//*[contains(@class,"hero-bg") and contains(@style,$p)]',p='/nearby/'+ident+'.webp')),'steps':len(m.xpath('.//ol/li'))==3,'faq':len(m.xpath('.//details'))==3,'table':len(m.xpath('.//table//tr'))>=6,'map':bool(m.xpath('.//iframe[contains(@src,"maps.google.com")]')),'footer':norm(d.xpath('//footer')[0])==old_footers[lang], 'canonical':d.xpath('//link[@rel="canonical"]/@href')==[base+path], 'alternate':len(d.xpath('//link[@rel="alternate"]'))>=4,'sitemap':base+path in mapped,'fullbody':digest(m)==digest(expected.xpath('//main')[0])}
        return {'url':base+path,'ok':all(checks.values()),'failed':[k for k,v in checks.items() if not v],'body':digest(m)}
    except Exception as exc:return {'url':base+path,'ok':False,'error':str(exc)[:160]}
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    pages=list(pool.map(verify,[(l,s) for l in languages for s in places]))
passed=sum(x['ok'] for x in pages)
out.write_text(json.dumps({'routes':len(pages),'passed':passed,'directory':len(languages),'pages':pages},indent=2)+'\n')
print(passed,'/',len(pages),'details; four home and directory checks passed')
assert passed==124

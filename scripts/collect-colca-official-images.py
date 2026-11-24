"""Prepare visitor photographs from each attraction's own government inventory."""
import concurrent.futures
import hashlib
import html
import io
import json
import re
import urllib.request
from pathlib import Path
from PIL import Image, ImageOps

root = 'https://consultasenlinea.mincetur.gob.pe/fichaInventario/'
directory = Path('public/nearby')
directory.mkdir(exist_ok=True)

def read(url,limit):
    req=urllib.request.Request(url,headers={'User-Agent':'CruzDelCondor-visitor-guide/1.0'})
    with urllib.request.urlopen(req,timeout=25) as response:
        data=response.read(limit+1)
        if len(data)>limit:
            raise ValueError('Oversize photograph')
        return data

def prepare(place):
    ident=place['id']
    source=html.unescape(read(place['url'],3_000_000).decode('utf-8','replace'))
    photos=re.findall(r'<img\b[^>]*\bsrc=["\'][^"\']*?foto\.aspx\?cod=(\d+)',source,flags=re.I)
    for photo in dict.fromkeys(photos):
        url=root+'foto.aspx?cod='+photo
        try:
            im=Image.open(io.BytesIO(read(url,18_000_000)))
            if min(im.width,im.height)<145:continue
            im=ImageOps.exif_transpose(im).convert('RGB')
            im.thumbnail((1200,900))
            path=directory/(str(ident)+'.webp')
            im.save(path,'WEBP',quality=80)
            data=path.read_bytes()
            digest=hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()
            return {'id':ident,'path':str(path),'sha':digest,'imageSource':url,'width':im.width,'height':im.height}
        except Exception as exc:
            print(ident,photo,type(exc).__name__)
    raise ValueError(f'No photograph on official entry {ident}')

def retry(place):
    for attempt in range(2):
        try:return prepare(place)
        except Exception:
            if attempt:raise

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    result=list(pool.map(retry,json.loads(Path('src/i18n/colca-inventory.json').read_text())))
Path('colca-media.json').write_text(json.dumps(result,indent=2)+'\n')
print('Matched',len(result),'photographs to individual official entries')

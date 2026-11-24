import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {LangProvider} from '@/components/LangProvider';
import {Nav,Footer} from '@/components/ColcaChrome';
import places from '@/i18n/colca-places.json';
import records from '@/i18n/colca-inventory.json';
import access from '@/i18n/colca-access.json';
import walks from '@/i18n/colca-walks.json';
import observations from '@/i18n/colca-observations.json';
import groups from '@/i18n/colca-categories.json';
import strings from '@/i18n/colca-interface.json';
import './ColcaGuide.css';

export type Locale=keyof typeof strings;
export type PlaceKey=keyof typeof places;
type RecordKey=keyof typeof access;
const langs: Locale[]=['es','en','zh','qu'];
const domain='https://www.cruzdelcondor.com';
export function validLocale(value:string): Locale {
  if(!langs.includes(value as Locale)) notFound();
  return value as Locale;
}
function alternatives(locale:Locale,path:string) {
  return {canonical:domain+'/'+locale+path,languages:Object.fromEntries(langs.map(l=>[l,domain+'/'+l+path]))};
}
export function placeMetadata(locale:Locale,key:PlaceKey): Metadata {
  const p=places[key],id=p.id as RecordKey;
  return {title:p.name[locale],description:observations[id][locale],alternates:alternatives(locale,'/nearby/'+key)};
}
export function directoryMetadata(locale:Locale): Metadata {
  return {title:strings[locale].dir,alternates:alternatives(locale,'/nearby')};
}
export function Directory({locale}:{locale:Locale}) {
  const t=strings[locale];
  return <LangProvider initialLocale={locale}><Nav/><main lang={locale}>
    <section className="hero"><div className="hero-bg"/><div className="hero-texture"/><div className="hero-overlay"/><div className="hero-content"><p className="hero-tagline">{t.near}</p><h1 className="hero-title">{t.dir}</h1><a className="hero-cta" href="#places">{t.more}</a></div></section>
    <section className="section colca-guide" id="places"><h2>{t.near}</h2><ul className="colca-places">{Object.entries(places).map(([slug,p])=><li key={slug}><a href={'/'+locale+'/nearby/'+slug}>{p.name[locale]}</a><span>{access[p.id as RecordKey].district}</span></li>)}</ul><a href={'/'+locale}>{t.home}</a></section>
  </main><Footer/></LangProvider>;
}
export function Detail({locale,slug}:{locale:Locale;slug:PlaceKey}) {
  const p=places[slug],id=p.id as RecordKey,t=strings[locale],a=access[id];
  const r=records.find(row=>String(row.id)===p.id)!;
  const group=groups[p.category as keyof typeof groups][locale];
  const name=p.name[locale],image='/nearby/'+p.id+'.webp';
  const query=r.name+', '+a.district+', Caylloma, Arequipa, Perú';
  const map='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query);
  const fee=({uyo:t.uyofee,calera:t.calerafee,chacapi:t.chacfee,pass:t.passfee,register:t.regfee})[a.fee as 'uyo'|'calera'|'chacapi'|'pass'|'register'];
  const route=walks[id][locale],manager=r.manager||t.no;
  const stay=['Cabanaconde','Tapay'].includes(a.district)?t.canyon:t.lodging;
  const facts=[[t.name,name],[t.district,a.district+', '+t.province],[t.height,r.altitude||'—'],[t.kind,group.name],[t.manager,manager],[t.window,a.hours]];
  return <LangProvider initialLocale={locale}><Nav/><main lang={locale}>
    <section className="hero"><div className="hero-bg" style={{backgroundImage:`url('${image}')`}}/><div className="hero-texture"/><div className="hero-overlay"/><div className="hero-content">
      <p className="hero-tagline">{group.name}</p><h1 className="hero-title">{name}</h1><p className="hero-subtitle">{a.district} · {t.province}</p><p>{t.window} · {a.hours}</p>
      <a className="hero-cta" href={map}>{t.open} ↗</a><a className="colca-hero-link" href="#reviews">{t.reviews} ↓</a></div></section>
    <article className="section colca-guide"><a href={'/'+locale+'/nearby'}>{t.near}</a>
      <section><h2>{t.intro}</h2><p>{observations[id][locale]}</p></section>
      <section><h2>{t.tips}</h2><p>{group.transport}</p></section>
      <section><h2>{t.features}</h2><p>{p.photo[locale]}</p></section>
      <section><h2>{t.about}</h2><p>{group.setting}</p><p>{t.manager} · {manager}</p><a href={r.url}>{t.source} · MINCETUR {r.id} ↗</a></section>
      <section><h2>{t.facts}</h2><table><tbody>{facts.map(([label,value])=><tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></section>
      <section><h2>{t.hours}</h2><p><strong>{a.hours}</strong></p><p>{t.feeNote}</p></section>
      <section><h2>{t.fee}</h2><p>{fee}</p></section>
      <section><h2>{t.transport}</h2><p>{a.district} · {t.province}, {t.country}</p><p>{route[0]}</p><a href={map}>{t.open} ↗</a></section>
      <section><h2>{t.discover}</h2><p>{p.discover[locale]}</p></section>
      <section><h2>{t.route}</h2><ol>{route.map(s=><li key={s}>{s}</li>)}</ol></section>
      <section><h2>{t.notice}</h2><p>{group.notice}</p></section>
      <section><h2>{t.photo}</h2><p>{p.photo[locale]}</p><figure><img loading="lazy" src={image} width={p.width} height={p.height} alt={name}/><figcaption><a href={p.imageSource}>{t.credit} · MINCETUR</a></figcaption></figure></section>
      <section><h2>{t.stay}</h2><p>{stay} {t.book}</p></section>
      <section id="reviews"><h2>{t.reviews}</h2><p>{t.reviewlink}</p><a href={map}>Google Maps · {name} ↗</a></section>
      <section><h2>{t.ask}</h2>{[[t.ask1,route[0]],[t.ask2,a.hours+' · '+t.feeNote],[t.ask3,p.photo[locale]]].map(([q,answer])=><details key={q}><summary>{q}</summary><p>{answer}</p></details>)}</section>
      <section><h2>{t.map}</h2><p>{r.name}, {a.district}, {t.province}, {t.country}</p><iframe loading="lazy" title={name} src={'https://maps.google.com/maps?q='+encodeURIComponent(query)+'&z=15&output=embed'}/><a href={map}>{t.open} ↗</a></section>
      <a href={'/'+locale+'/nearby'}>{t.back}</a>
    </article></main><Footer/></LangProvider>;
}

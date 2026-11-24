import {Detail,placeMetadata,validLocale} from '@/components/ColcaGuide';
type Input={params:Promise<{locale:string}>};
const slug='cuevas-mollepunku';
export async function generateMetadata({params}:Input){return placeMetadata(validLocale((await params).locale),slug);}
export default async function Page({params}:Input){return <Detail locale={validLocale((await params).locale)} slug={slug}/>;}

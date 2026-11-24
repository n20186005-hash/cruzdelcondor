import {Directory,directoryMetadata,validLocale} from '@/components/ColcaGuide';
type Input={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Input){return directoryMetadata(validLocale((await params).locale));}
export default async function Page({params}:Input){return <Directory locale={validLocale((await params).locale)}/>;}

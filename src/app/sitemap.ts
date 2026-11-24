import { MetadataRoute } from 'next';

import places from '@/i18n/colca-places.json';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'cruzdelcondor.com'}`;

  const languages = {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    qu: `${baseUrl}/qu`,
  };

  return [
    ...['nearby', ...Object.keys(places).map(s => 'nearby/'+s)].flatMap(path => {
      const links = Object.fromEntries(Object.keys(languages).map(l=>[l, `https://www.cruzdelcondor.com/${l}/${path}`]));
      return Object.values(links).map(url=>({url, alternates:{languages:links}}));
    }),
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages,
      },
    },
    {
      url: `${baseUrl}/qu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages,
      },
    },
  ];
}

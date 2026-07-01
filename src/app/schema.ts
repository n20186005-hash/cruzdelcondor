export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "cruzdelcondor.com"}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-PE" : locale === "qu" ? "qu-PE" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Viewpoint"],
        "name": locale === "en" ? "Mirador Cruz del Cóndor" : locale === "es" ? "Mirador Cruz del Cóndor" : locale === "qu" ? "Mirador Cruz del Cóndor" : "科尔卡峡谷神鹰十字观景台",
        "description": locale === "en"
          ? "Mirador Cruz del Cóndor is a famous viewpoint in Colca Canyon, Arequipa, Peru. It is the best place to observe Andean condors in their natural habitat, soaring along the canyon cliffs."
          : locale === "es"
          ? "El Mirador Cruz del Cóndor es un famoso mirador en el Cañón del Colca, Arequipa, Perú. Es el mejor lugar para observar cóndores andinos en su hábitat natural."
          : locale === "qu"
          ? "Mirador Cruz del Cóndor nisqa Cañón del Colca, Arequipa, Piruwpi famoso mirador. Cóndor andino rikuy allin."
          : "科尔卡峡谷神鹰十字观景台是秘鲁阿雷基帕大区科尔卡峡谷的著名观景点。这里是观察安第斯神鹰在自然栖息地飞翔的最佳地点。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["Viewpoint", "Birdwatching", "Nature", "Canyon", "Wildlife"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -15.583333,
          "longitude": -71.783333
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "attractionType",
            "value": "Viewpoint, Condor Watching",
            "description": "Famous viewpoint for observing Andean condors in Colca Canyon"
          },
          {
            "@type": "PropertyValue",
            "name": "rating",
            "value": "4.7/5",
            "description": "Rated 4.7 out of 5 with 6,050 Google reviews"
          },
          {
            "@type": "PropertyValue",
            "name": "canyonDepth",
            "value": "4,160 meters",
            "description": "Colca Canyon is one of the deepest canyons in the world"
          }
        ],
        "isAccessibleForFree": false,
        "maximumAttendeeCapacity": 200,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "93QV+FH",
          "addressLocality": "San Juan de Chuccho",
          "addressRegion": "Arequipa",
          "addressCountry": "PE",
          "telephone": "+5154222222"
        },
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "Mirador Cruz del Cóndor: Best Place to See Condors" : locale === "es" ? "Mirador Cruz del Cóndor: Mejor Lugar para Ver Cóndores" : locale === "qu" ? "Mirador Cruz del Cóndor: Cóndor rikuy" : "科尔卡峡谷神鹰十字观景台：观鹰最佳地点",
            "about": "Guide to Mirador Cruz del Cóndor, a famous viewpoint in Colca Canyon, Peru for observing Andean condors"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Arequipa Attractions" : locale === "es" ? "Atractivos de Arequipa" : locale === "qu" ? "Arequipa atractivokuna" : "阿雷基帕大区景点",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}

import type { Metadata, Viewport } from "next";
import { HtmlLangSetter } from "@/components/HtmlLangSetter";

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "cruzdelcondor.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: locale === "es" ? "Mirador Cruz del Cóndor — Cañón del Colca, Arequipa, Perú"
        : locale === "zh" ? "科尔卡峡谷神鹰十字观景台 — 秘鲁阿雷基帕大区"
        : locale === "qu" ? "Mirador Cruz del Cóndor — Cañón del Colca, Arequipa, Piruw"
        : "Mirador Cruz del Cóndor — Colca Canyon, Arequipa, Peru",
      template: locale === "es" ? "%s | Mirador Cruz del Cóndor"
        : locale === "zh" ? "%s | 科尔卡峡谷神鹰十字观景台"
        : locale === "qu" ? "%s | Mirador Cruz del Cóndor"
        : "%s | Mirador Cruz del Cóndor",
    },
    description:
      locale === 'es' ? "Guía de viaje al Mirador Cruz del Cóndor en el Cañón del Colca, Arequipa, Perú. El mejor lugar para observar cóndores andinos en su hábitat natural." :
      locale === 'zh' ? "科尔卡峡谷神鹰十字观景台旅行指南——探索秘鲁阿雷基帕大区科尔卡峡谷，观看安第斯神鹰的最佳地点。" :
      locale === 'qu' ? "Mirador Cruz del Cóndor rikuy, Cañón del Colca, Arequipa, Piruw. Cóndor andino rikuy." :
      "A travel guide to Mirador Cruz del Cóndor in Colca Canyon, Arequipa, Peru. The best place to observe Andean condors in their natural habitat.",
    keywords: [
      "Mirador Cruz del Cóndor",
      "Cruz del Condor viewpoint",
      "Colca Canyon",
      "Cañón del Colca",
      "Arequipa tourism",
      "Peru viewpoint",
      "Andean condor",
      "Cóndor andino",
      "Colca Canyon attractions",
      "Peru birdwatching",
      "Arequipa attractions",
    ],
    authors: [{ name: "Mirador Cruz del Cóndor Travel Guide" }],
    creator: "Mirador Cruz del Cóndor Travel Guide",
    publisher: "Mirador Cruz del Cóndor Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_PE" : locale === "zh" ? "zh_CN" : locale === "qu" ? "qu_PE" : "en_US",
      alternateLocale: (locale === "es" ? ["en_US", "zh_CN", "qu_PE"] : locale === "en" ? ["es_PE", "zh_CN", "qu_PE"] : locale === "zh" ? ["es_PE", "en_US", "qu_PE"] : ["es_PE", "en_US", "zh_CN"]),
      url: `${baseUrl}/${locale}`,
      title: locale === "es" ? "Mirador Cruz del Cóndor — Cañón del Colca, Arequipa, Perú"
        : locale === "zh" ? "科尔卡峡谷神鹰十字观景台 — 秘鲁阿雷基帕大区"
        : locale === "qu" ? "Mirador Cruz del Cóndor — Cañón del Colca, Arequipa, Piruw"
        : "Mirador Cruz del Cóndor — Colca Canyon, Arequipa, Peru",
      description: locale === 'es' ? "Guía de viaje al Mirador Cruz del Cóndor en el Cañón del Colca, Arequipa, Perú. El mejor lugar para observar cóndores andinos." :
        (locale === 'zh' ? "科尔卡峡谷神鹰十字观景台旅行指南——探索秘鲁阿雷基帕大区科尔卡峡谷。" :
        (locale === 'qu' ? "Mirador Cruz del Cóndor rikuy, Cañón del Colca, Arequipa, Piruw." :
        "A travel guide to Mirador Cruz del Cóndor in Colca Canyon, Arequipa, Peru.")),
      siteName: locale === "es" ? "Mirador Cruz del Cóndor Guía de Viaje"
        : locale === "zh" ? "科尔卡峡谷神鹰十字观景台旅行指南"
        : locale === "qu" ? "Mirador Cruz del Cóndor rikuy"
        : "Mirador Cruz del Cóndor Travel Guide",
      images: [
        {
          url: "/gallery/mirador-cruz-del-condor (1).jpg",
          width: 1200,
          height: 630,
          alt: locale === "es" ? "Mirador Cruz del Cóndor - Cañón del Colca, Arequipa, Perú"
            : locale === "zh" ? "科尔卡峡谷神鹰十字观景台 - 秘鲁阿雷基帕大区"
            : locale === "qu" ? "Mirador Cruz del Cóndor - Cañón del Colca, Arequipa, Piruw"
            : "Mirador Cruz del Cóndor - Colca Canyon, Arequipa, Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "es" ? "Mirador Cruz del Cóndor — Cañón del Colca, Arequipa, Perú"
        : locale === "zh" ? "科尔卡峡谷神鹰十字观景台 — 秘鲁阿雷基帕大区"
        : locale === "qu" ? "Mirador Cruz del Cóndor — Cañón del Colca, Arequipa, Piruw"
        : "Mirador Cruz del Cóndor — Colca Canyon, Arequipa, Peru",
      description:
        locale === 'es' ? "Guía de viaje al Mirador Cruz del Cóndor en el Cañón del Colca, Arequipa, Perú." :
        locale === 'zh' ? "科尔卡峡谷神鹰十字观景台旅行指南——探索秘鲁阿雷基帕大区科尔卡峡谷。" :
        locale === 'qu' ? "Mirador Cruz del Cóndor rikuy, Cañón del Colca, Arequipa, Piruw." :
        "A travel guide to Mirador Cruz del Cóndor in Colca Canyon, Arequipa, Peru.",
      images: ["/gallery/mirador-cruz-del-condor (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "es": "/es",
        "en": "/en",
        "zh": "/zh",
        "qu": "/qu",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }, { locale: "qu" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <>
      <HtmlLangSetter locale={locale} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}

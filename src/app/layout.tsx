import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'cruzdelcondor.com'}`),
  alternates: {
    canonical: "/en",
    languages: {
      "es": "https://cruzdelcondor.com/es",
      "en": "https://cruzdelcondor.com/en",
      "zh": "https://cruzdelcondor.com/zh",
      "qu": "https://cruzdelcondor.com/qu",
      "x-default": "https://cruzdelcondor.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

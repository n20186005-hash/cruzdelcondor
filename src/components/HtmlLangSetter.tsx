"use client";

import { useEffect } from "react";

// Next.js App Router requires <html>/<body> only in the root layout, so the
// per-locale `lang` attribute cannot be set at the root. This client component
// corrects document.documentElement.lang after hydration (and on locale change),
// keeping the declared language accurate for assistive tech and crawlers that
// execute JS.
export function HtmlLangSetter({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}

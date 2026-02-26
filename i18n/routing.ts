export const locales = ["tr", "en"] as const;

export type AppLocale = (typeof locales)[number];

export const routing = {
  locales,
  defaultLocale: "tr" as AppLocale,
};



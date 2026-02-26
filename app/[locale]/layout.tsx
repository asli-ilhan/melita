import type {ReactNode} from "react";
import {notFound} from "next/navigation";
import {routing, type AppLocale} from "@/i18n/routing";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import type {Metadata} from "next";
import Script from "next/script";

type Props = {
  children: ReactNode;
  params: Promise<{locale: AppLocale}>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: AppLocale}>;
}): Promise<Metadata> {
  const {locale} = await params;

  const baseTitle =
    locale === "tr"
      ? "Melita Laundry Services | Endüstriyel Çamaşırhane"
      : "Melita Laundry Services | Industrial Laundry";

  const description =
    locale === "tr"
      ? "Hatay kamu hastaneleri ve Antalya otelleri için hijyen odaklı, yüksek kapasiteli endüstriyel çamaşırhane hizmetleri."
      : "Hygiene-driven, high-capacity industrial laundry services for public hospitals and hotels in Turkey.";

  const urlBase = "https://www.melitalaundry.com";
  const localePath = locale === "tr" ? "/tr" : "/en";
  const url = `${urlBase}${localePath}`;

  return {
    title: baseTitle,
    description,
    metadataBase: new URL(urlBase),
    openGraph: {
      title: baseTitle,
      description,
      url,
      siteName: "Melita Laundry Services",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description,
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Melita Laundry Services",
          legalName: "Melita Müteahhitlik",
          description:
            locale === "tr"
              ? "Hatay kamu hastaneleri ve Antalya otelleri için hijyen odaklı, yüksek kapasiteli endüstriyel çamaşırhane hizmetleri."
              : "Hygiene-driven, high-capacity industrial laundry services for public hospitals and hotels in Turkey.",
          url: "https://www.melitalaundry.com",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress:
                "Duraliler Mah. 4583 Sk. Aspendos Kurumları No: 63",
              addressLocality: "Kepez",
              addressRegion: "Antalya",
              addressCountry: "TR",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Üçtepe Mah. Mehmet Özelkara Cad. No: 1",
              addressLocality: "Reyhanlı",
              addressRegion: "Hatay",
              addressCountry: "TR",
            },
          ],
          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Hatay",
            },
            {
              "@type": "AdministrativeArea",
              name: "Antalya",
            },
          ],
          sameAs: [],
          priceRange: "$$",
          inLanguage: locale,
        })}
      </Script>
      <div className="flex min-h-screen flex-col bg-surface text-slate-900">
        <Header locale={locale} />
        <main className="flex-1">
          <div className="mx-auto max-w-6xl px-3 pb-16 pt-8 sm:px-5 lg:px-6 lg:pt-10">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}


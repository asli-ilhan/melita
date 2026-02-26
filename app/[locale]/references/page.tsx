import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";
import {BrandedImage} from "@/components/common/BrandedImage";

type PageProps = {
  params: Promise<{locale: AppLocale}>;
};

export default async function ReferencesPage({params}: PageProps) {
  const {locale} = await params;
  const allMessages = {tr: trMessages, en: enMessages} as const;
  const messages = allMessages[locale] ?? allMessages.tr;
  const t = messages.References;

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {locale === "tr" ? "Referanslar" : "References"}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          {t.intro}
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        <ol className="relative space-y-4 border-l border-slate-200 pl-4 text-sm text-slate-700">
          {t.timeline.map((item) => (
            <li key={`${item.year}-${item.title}`} className="space-y-1">
              <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-white bg-primary shadow-sm" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {item.year}
              </p>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-[13px] leading-relaxed text-slate-700">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="space-y-4">
          <BrandedImage
            src="/5.png"
            alt={
              locale === "tr"
                ? "Paketlenmiş tekstil ürünleri ile lojistik hazırlık"
                : "Packaged textile products ready for logistics"
            }
            wrapperClassName="aspect-[4/3]"
          />
        </div>
      </section>
    </div>
  );
}


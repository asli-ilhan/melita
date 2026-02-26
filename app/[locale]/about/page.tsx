import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";
import {BrandedImage} from "@/components/common/BrandedImage";

type PageProps = {
  params: Promise<{locale: AppLocale}>;
};

export default async function AboutPage({params}: PageProps) {
  const {locale} = await params;
  const allMessages = {tr: trMessages, en: enMessages} as const;
  const messages = allMessages[locale] ?? allMessages.tr;
  const t = messages.About;

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {locale === "tr" ? "Kurumsal" : "About"}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t.title}
        </h1>
      </header>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>{t.founded}</p>
          <p>{t.relocation}</p>
          <p>{t.focus}</p>
          <p>{t.approach}</p>
        </div>
        <div className="space-y-4">
          <BrandedImage
            src="/6.png"
            alt={
              locale === "tr"
                ? "Melita Laundry Services depolama alanı ve kurumsal düzen"
                : "Melita Laundry Services storage area and institutional layout"
            }
            wrapperClassName="aspect-[4/3]"
          />
        </div>
      </section>
    </div>
  );
}


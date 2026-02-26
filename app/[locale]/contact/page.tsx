import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";
import {BrandedImage} from "@/components/common/BrandedImage";

type PageProps = {
  params: Promise<{locale: AppLocale}>;
};

export default async function ContactPage({params}: PageProps) {
  const {locale} = await params;
  const allMessages = {tr: trMessages, en: enMessages} as const;
  const messages = allMessages[locale] ?? allMessages.tr;
  const t = messages.Contact;

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {locale === "tr" ? "İletişim" : "Contact"}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          {t.intro}
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                {t.formName}
              </label>
              <input
                type="text"
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
                placeholder=""
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                {t.formInstitution}
              </label>
              <input
                type="text"
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                {t.formPhone}
              </label>
              <input
                type="tel"
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
                placeholder=""
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-700">
                {t.formEmail}
              </label>
              <input
                type="email"
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
                placeholder=""
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-700">
              {t.formMessage}
            </label>
            <textarea
              rows={4}
              className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary/20 placeholder:text-slate-400 focus:border-primary focus:ring-2"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
            >
              {t.submit}
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm text-slate-700 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t.hqTitle}
            </p>
            <p className="mt-2 text-sm">{t.hqAddress}</p>
            <div className="mt-4 h-px w-10 bg-slate-200" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t.facilityTitle}
            </p>
            <p className="mt-2 text-sm">{t.facilityAddress}</p>
          </div>

          <BrandedImage
            src="/6.png"
            alt={
              locale === "tr"
                ? "Melita Laundry Services tesisine ait depolama ve operasyon alanı"
                : "Storage and operational area of Melita Laundry Services"
            }
            wrapperClassName="aspect-[4/3]"
          />
        </div>
      </section>
    </div>
  );
}


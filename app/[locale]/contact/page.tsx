import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";
import {BrandedImage} from "@/components/common/BrandedImage";
import {ContactForm} from "@/components/contact/ContactForm";

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
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          {t.intro}
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <ContactForm
          messages={{
            formName: t.formName,
            formInstitution: t.formInstitution,
            formPhone: t.formPhone,
            formEmail: t.formEmail,
            formMessage: t.formMessage,
            submit: t.submit,
            success: t.success,
            error: t.error,
          }}
        />

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-sm text-slate-700 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t.contactDirectTitle}
            </p>
            <p className="mt-2 text-sm">
              {t.emailLabel}:{" "}
              <a href={`mailto:${t.contactEmail}`} className="text-primary hover:underline">
                {t.contactEmail}
              </a>
            </p>
            <p className="mt-1 text-sm">
              {t.phoneLabel}:{" "}
              <a href={`tel:${t.contactPhone}`} className="text-primary hover:underline">
                {t.contactPhone}
              </a>
            </p>
          </div>
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


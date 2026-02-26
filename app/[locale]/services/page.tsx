import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";
import {BrandedImage} from "@/components/common/BrandedImage";

type PageProps = {
  params: Promise<{locale: AppLocale}>;
};

export default async function ServicesPage({params}: PageProps) {
  const {locale} = await params;
  const allMessages = {tr: trMessages, en: enMessages} as const;
  const messages = allMessages[locale] ?? allMessages.tr;
  const t = messages.Services;
  const industries = messages.Industries;
  const facility = messages.Facility;

  const basePath = `/${locale}`;

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {locale === "tr" ? "Hizmetler" : "Services"}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t.title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          {t.intro}
        </p>
      </header>

      {/* Core service flow */}
      <section className="grid gap-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900">
              {t.washTitle}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {t.washBody}
            </p>
          </div>
          <BrandedImage
            src="/2.png"
            alt={
              locale === "tr"
                ? "Endüstriyel yıkama makineleri ile çamaşırhane süreci"
                : "Industrial washing machines in operation"
            }
            wrapperClassName="aspect-[4/3]"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:flex-row-reverse">
          <BrandedImage
            src="/3.png"
            alt={
              locale === "tr"
                ? "Endüstriyel kurutma makineleri ile tekstil kurutma süreci"
                : "Industrial dryers used for textile drying"
            }
            wrapperClassName="aspect-[4/3] md:order-2"
          />
          <div className="space-y-3 md:order-1">
            <h2 className="text-base font-semibold text-slate-900">
              {t.dryTitle}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {t.dryBody}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900">
              {t.ironTitle}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {t.ironBody}
            </p>
          </div>
          <BrandedImage
            src="/4.png"
            alt={
              locale === "tr"
                ? "Rulo ütü ile nevresim ve çarşaf ütüleme süreci"
                : "Roller iron processing bed linen"
            }
            wrapperClassName="aspect-[4/3]"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:flex-row-reverse">
          <BrandedImage
            src="/5.png"
            alt={
              locale === "tr"
                ? "Paketlenmiş ve barkodlanmış nevresim ve havlular"
                : "Neatly packaged linens with barcodes"
            }
            wrapperClassName="aspect-[4/3] md:order-2"
          />
          <div className="space-y-3 md:order-1">
            <h2 className="text-base font-semibold text-slate-900">
              {t.packTitle}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {t.packBody}
            </p>
          </div>
        </div>
      </section>

      {/* Industries served – merged block */}
      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            {industries.title}
          </h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {industries.healthcareTitle}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed">
                {industries.healthcareBody}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {industries.hospitalityTitle}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed">
                {industries.hospitalityBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & capacity – merged, minimal view */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            {facility.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            {facility.intro}
          </p>
          <div className="grid gap-3 text-xs text-slate-700 sm:grid-cols-2">
            <FacilityChip
              label={facility.washersTitle}
              items={facility.washersItems}
            />
            <FacilityChip
              label={facility.dryersTitle}
              items={facility.dryersItems}
            />
            <FacilityChip
              label={facility.ironersTitle}
              items={facility.ironersItems}
            />
            <FacilityChip
              label={facility.powerTitle}
              items={facility.powerItems}
            />
          </div>
        </div>
        <div />
      </section>
    </div>
  );
}

type FacilityChipProps = {
  label: string;
  items: string[];
};

function FacilityChip({label, items}: FacilityChipProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
        {label}
      </p>
      <ul className="mt-1.5 space-y-1 text-[11px] text-slate-700">
        {items.slice(0, 2).map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}


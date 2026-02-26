"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {BrandedImage} from "@/components/common/BrandedImage";
import type {AppLocale} from "@/i18n/routing";

type HomeMessages = typeof import("@/i18n/messages/tr.json")["Home"];

type Props = {
  locale: AppLocale;
  t: HomeMessages;
};

export function HomeClient({locale, t}: Props) {
  const basePath = `/${locale}`;

  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:items-center">
        <motion.div
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="space-y-6"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`${basePath}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-primary/90"
              style={{color: "#ffffff"}}
            >
              {t.ctaPrimary}
            </Link>
            <Link
              href={`${basePath}/facility`}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
        >
          <BrandedImage
            src="/1.png"
            alt={
              locale === "tr"
                ? "Melita Laundry Services tesisi, dış cephe görünümü"
                : "Melita Laundry Services facility exterior"
            }
            wrapperClassName="aspect-[16/9]"
            priority
          />
        </motion.div>
      </section>

      <section className="grid gap-6 rounded-2xl bg-primary-soft/60 p-6 ring-1 ring-slate-200/80 sm:grid-cols-3 sm:p-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            01
          </p>
          <h2 className="text-sm font-semibold text-slate-900">
            {t.valueTitleHygiene}
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            {t.valueBodyHygiene}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            02
          </p>
          <h2 className="text-sm font-semibold text-slate-900">
            {t.valueTitleThroughput}
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            {t.valueBodyThroughput}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            03
          </p>
          <h2 className="text-sm font-semibold text-slate-900">
            {t.valueTitleLogistics}
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            {t.valueBodyLogistics}
          </p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            {t.industriesHeading}
          </h2>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t.industriesHealthcareTitle}
              </p>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                {t.industriesHealthcareBody}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {t.industriesHospitalityTitle}
              </p>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                {t.industriesHospitalityBody}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            {t.facilityHeading}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            {t.facilityBody}
          </p>
          <div className="grid gap-3 text-xs text-slate-700 sm:grid-cols-3">
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-3 py-3">
              <p className="font-semibold text-slate-900">
                {locale === "tr" ? "Hatay" : "Hatay"}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-slate-600">
                {t.facilityStatHospitals}
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-3 py-3">
              <p className="font-semibold text-slate-900">
                {locale === "tr" ? "Antalya" : "Antalya"}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-slate-600">
                {t.facilityStatHotels}
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-3 py-3">
              <p className="font-semibold text-slate-900">
                {locale === "tr" ? "Operasyon" : "Operations"}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-slate-600">
                {t.facilityStatShifts}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


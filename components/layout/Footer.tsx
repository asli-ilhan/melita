import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";

const messages = {tr: trMessages, en: enMessages} as const;

type FooterProps = { locale?: AppLocale | string };

export function Footer({locale = "tr"}: FooterProps) {
  const t = messages[locale === "en" ? "en" : "tr"].Contact;
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-3 py-8 text-sm text-slate-600 sm:flex-row sm:justify-between sm:px-5 lg:px-6">
        <div>
          <p className="font-semibold text-slate-900">
            Melita Laundry Services
          </p>
          <p className="text-xs text-slate-500">Melita Müteahhitlik</p>
          <p className="mt-2 max-w-sm text-xs text-slate-500">
            Endüstriyel çamaşırhane operasyonlarında hijyen, süreklilik ve
            kurumsal ölçekli hizmet.
          </p>
          <div className="mt-3 space-y-1 text-xs">
            <p className="font-semibold text-slate-900">{t.contactDirectTitle}</p>
            <p className="text-slate-600">
              {t.emailLabel}:{" "}
              <a href={`mailto:${t.contactEmail}`} className="text-primary hover:underline">
                {t.contactEmail}
              </a>
            </p>
            <p className="text-slate-600">
              {t.phoneLabel}:{" "}
              <a href={`tel:${t.contactPhone}`} className="text-primary hover:underline">
                {t.contactPhone}
              </a>
            </p>
          </div>
        </div>
        <div className="grid gap-4 text-xs sm:grid-cols-2">
          <div>
            <p className="font-semibold text-slate-900">
              {locale === "en" ? "Headquarters - Antalya" : "Genel Merkez - Antalya"}
            </p>
            <p className="mt-1 text-slate-600">
              Duraliler Mah. 4583 Sk. Aspendos Kurumları No: 63 Kepez / Antalya
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">
              {locale === "en" ? "Operating Facility - Hatay" : "Operasyon Tesisi - Hatay"}
            </p>
            <p className="mt-1 text-slate-600">
              Üçtepe Mah. Mehmet Özelkara Cad. No: 1 Reyhanlı / Hatay
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 text-[11px] text-slate-400 sm:px-5 lg:px-6">
          <span>© {new Date().getFullYear()} Melita Müteahhitlik</span>
          <span>Industrial Laundry Operations</span>
        </div>
      </div>
    </footer>
  );
}


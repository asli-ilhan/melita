import type {AppLocale} from "@/i18n/routing";
import trMessages from "@/i18n/messages/tr.json";
import enMessages from "@/i18n/messages/en.json";
import {HomeClient} from "@/components/home/HomeClient";

type PageProps = {
  params: Promise<{locale: AppLocale}>;
};

export default async function HomePage({params}: PageProps) {
  const {locale} = await params;
  const allMessages = {tr: trMessages, en: enMessages} as const;
  const messages = allMessages[locale] ?? allMessages.tr;
  return <HomeClient locale={locale} t={messages.Home} />;
}

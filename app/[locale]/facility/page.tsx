import type {AppLocale} from "@/i18n/routing";
import {redirect} from "next/navigation";

type PageProps = {
  params: Promise<{locale: AppLocale}>;
};

export default async function FacilityPage({params}: PageProps) {
  const {locale} = await params;
  redirect(`/${locale}/services`);
}


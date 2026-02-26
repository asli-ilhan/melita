"use client";

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import type {AppLocale} from "@/i18n/routing";

const navLabels: Record<
  AppLocale,
  {
    home: string;
    services: string;
    industries: string;
    facility: string;
    about: string;
    references: string;
    contact: string;
  }
> = {
  tr: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    industries: "Sektörler",
    facility: "Tesis ve Kapasite",
    about: "Kurumsal",
    references: "Referanslar",
    contact: "İletişim",
  },
  en: {
    home: "Home",
    services: "Services",
    industries: "Industries",
    facility: "Facility & Capacity",
    about: "About",
    references: "References",
    contact: "Contact",
  },
};

const navItems: {href: string; key: string}[] = [
  {href: "/", key: "home"},
  {href: "/services", key: "services"},
  {href: "/about", key: "about"},
  {href: "/contact", key: "contact"},
];

type HeaderProps = {
  locale: AppLocale | string;
};

export function Header({locale}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentLocale: AppLocale =
    locale === "en" || locale === "tr" ? locale : "tr";
  const labels = navLabels[currentLocale];

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-3 py-3 sm:px-5 lg:px-6 lg:py-4">
        <Link
          href={`/${currentLocale}`}
          className="flex flex-none items-center"
        >
          <div className="relative h-10 w-auto sm:h-11 lg:h-12">
            <Image
              src="/brand/melita-logo.png"
              alt="Melita Laundry Services"
              width={176}
              height={40}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${currentLocale}${item.href === "/" ? "" : item.href}`}
              className="whitespace-nowrap hover:text-primary"
            >
              {labels[item.key as keyof typeof labels]}
            </Link>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-3">
          <div className="inline-flex overflow-hidden rounded-full border border-slate-200 bg-slate-50 text-[11px] font-medium">
            <Link
              href="/tr"
              className={`px-2 py-1 ${
                currentLocale === "tr"
                  ? "bg-primary"
                  : "text-slate-600"
              }`}
              style={currentLocale === "tr" ? {color: "#ffffff"} : undefined}
            >
              TR
            </Link>
            <Link
              href="/en"
              className={`px-2 py-1 ${
                currentLocale === "en"
                  ? "bg-primary"
                  : "text-slate-600"
              }`}
              style={currentLocale === "en" ? {color: "#ffffff"} : undefined}
            >
              EN
            </Link>
          </div>
          <button
            type="button"
            className="ml-1 inline-flex items-center rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <span className="mr-1">{mobileOpen ? "Close" : "Menu"}</span>
            <span className="flex flex-col gap-[3px]">
              <span className="h-[1px] w-3 bg-slate-600" />
              <span className="h-[1px] w-3 bg-slate-600" />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white/95 md:hidden">
          <div className="mx-auto max-w-6xl px-3 py-3 sm:px-5 lg:px-6">
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${currentLocale}${
                    item.href === "/" ? "" : item.href
                  }`}
                  className="py-1.5"
                  onClick={() => setMobileOpen(false)}
                >
                  {labels[item.key as keyof typeof labels]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}


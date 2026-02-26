import "./globals.css";
import {Inter} from "next/font/google";
import type {ReactNode} from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} bg-surface text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}


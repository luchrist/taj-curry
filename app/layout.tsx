import type { Metadata, Viewport } from "next";
import { Noto_Serif_Display, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/lib/restaurant";

const notoSerif = Noto_Serif_Display({ subsets: ["latin"], variable: "--font-noto-serif", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const SEO_TITLE = `${restaurant.name} | Indische Küche in ${restaurant.address.city}`;
const SEO_DESCRIPTION = `${restaurant.name} in ${restaurant.address.city}: indische Küche aus Tandoor und Topf, frisch gekocht, mit selbst gemahlenen Masalas. Reservierung, Abholung und Lieferung.`;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    restaurant.name,
    `Indisch ${restaurant.address.city}`,
    `${restaurant.name} ${restaurant.address.city}`,
    "Curry Eppelheim",
    "Tandoori Eppelheim",
    "Biryani Heidelberg",
  ],
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    locale: restaurant.seo.locale,
  },
};

export const viewport: Viewport = { themeColor: "#FDF8EC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${notoSerif.variable} ${dmSans.variable} ${geistMono.variable}`}>
      <body className="grain bg-bone text-ink">{children}</body>
    </html>
  );
}

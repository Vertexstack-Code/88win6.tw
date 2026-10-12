import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import "@/styles/globals.css";

// Latin text uses Inter; Chinese falls through to the system CJK face (see
// tailwind.config.ts) instead of shipping a multi-megabyte webfont.
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title}｜${SITE.tagline}`,
    template: `%s | ${SITE.title}`,
  },
  description: SITE.description,
  applicationName: SITE.title,
  // app/icon.png and app/apple-icon.png generate the icon tags.
};

export const viewport: Viewport = {
  themeColor: "#0d1a38",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.locale} className={sans.variable}>
      <body className="min-h-screen font-sans">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          跳到主要內容
        </a>
        <Header />
        <main id="main-content">{children}</main>
        {/* Bottom padding clears the fixed mobile bar below xl. */}
        <div className="pb-[62px] xl:pb-0">
          <Footer />
        </div>
        <MobileBar />
      </body>
    </html>
  );
}

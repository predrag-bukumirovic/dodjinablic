import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import { site } from "@/data/site";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Preloader from "@/components/motion/Preloader";
import PageShell from "@/components/motion/PageShell";
import Cursor from "@/components/motion/Cursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FlashMark } from "@/components/ui/brand";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} — ${site.owner} | Fotograf`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.brand} — ${site.owner}`,
    description: site.description,
    locale: "sr_RS",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SmoothScroll />
        <Preloader />
        <Header />
        <PageShell>
          <main id="main">{children}</main>
          <Footer />
        </PageShell>
        <div id="curtain" className="curtain" aria-hidden="true">
          <FlashMark id="curtain-mark" />
        </div>
        <Cursor />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

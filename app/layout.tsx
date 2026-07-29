import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { firm } from "@/content/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const siteUrl = "https://morrisconsultinggroup.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${firm.name} — Advisory to CEOs & Boards`,
    template: `%s — ${firm.name}`,
  },
  description:
    "Morris Consulting Group is a boutique advisory firm counseling chief executives and boards of directors on governance, enterprise performance, and strategic leadership. Founded 2017 in Oxford, Mississippi.",
  keywords: [
    "board governance",
    "executive advisory",
    "enterprise performance",
    "succession planning",
    "boutique advisory firm",
    "Oxford Mississippi",
  ],
  authors: [{ name: firm.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${firm.name} — Advisory to CEOs & Boards`,
    description:
      "Counsel for leaders navigating what comes next. Governance, enterprise performance, and executive advisory.",
    siteName: firm.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen font-body antialiased">
        <SmoothScroll />
        <CustomCursor />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-deep-blue focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-eyebrow focus:text-bone-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

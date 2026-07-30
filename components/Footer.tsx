import Link from "next/link";
import { Monogram } from "@/components/Monogram";
import { firm, footer } from "@/content/site";

export function Footer() {
  const year = 2026; // Established copy year; updated on each publish.

  return (
    <footer className="bg-deep-blue text-bone-white">
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          {/* Monogram + tagline */}
          <div className="md:col-span-5">
            <Monogram href="/" variant="mark" className="text-bone-white" />
            <p className="mt-6 max-w-xs font-display text-2xl font-light leading-tight text-bone-white/90">
              {footer.tagline}
            </p>
          </div>

          {/* Sitemap */}
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="eyebrow text-soft-brown">Sitemap</p>
            <ul className="mt-6 space-y-3">
              {footer.sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-body text-sm text-bone-white/80 hover:text-bone-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact block */}
          <div className="md:col-span-4">
            <p className="eyebrow text-soft-brown">The firm</p>
            <address className="mt-6 space-y-3 font-body text-sm not-italic text-bone-white/80">
              <p>{firm.legalName}</p>
              <p>{firm.location}</p>
              <p>
                <a
                  href={`mailto:${firm.email}`}
                  className="link-underline text-bone-white/80 hover:text-bone-white"
                >
                  {firm.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-20 flex flex-col gap-4 border-t border-bone-white/15 pt-8 font-mono text-[0.7rem] uppercase tracking-eyebrow text-bone-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {firm.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

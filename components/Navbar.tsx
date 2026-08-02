"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Monogram } from "@/components/Monogram";
import { Magnetic } from "@/components/Magnetic";
import { nav, contactNav } from "@/content/site";
import { editorialEase } from "@/lib/motion";

/** Routes that render a dark full-bleed hero the navbar sits over. */
const HERO_ROUTES = new Set(["/"]);

export function Navbar() {
  const pathname = usePathname();
  const overHero = HERO_ROUTES.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Solid unless we're over a hero and haven't scrolled yet.
  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ease-editorial",
        solid
          ? "border-b border-warm-brown/15 bg-bone-white/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Monogram
          href="/"
          className={cn(
            "transition-colors duration-500",
            solid ? "text-ink" : "text-bone-white"
          )}
        />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href;

              if (item.children) {
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      className={cn(
                        "link-underline inline-flex items-center gap-1 font-body text-sm transition-colors duration-500",
                        solid ? "text-ink" : "text-bone-white",
                        active && "after:scale-x-100"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        aria-hidden="true"
                        className="text-warm-brown transition-transform duration-300 group-hover:translate-y-0.5"
                      />
                    </Link>

                    <div className="pointer-events-none absolute left-0 top-full z-10 pt-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <ul className="min-w-[14rem] border border-warm-brown/20 bg-bone-white py-2 shadow-[0_12px_40px_-12px_rgba(11,37,69,0.25)]">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-5 py-2.5 font-body text-sm text-ink transition-colors duration-300 hover:text-warm-brown focus-visible:text-warm-brown"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "link-underline font-body text-sm transition-colors duration-500",
                      solid ? "text-ink" : "text-bone-white",
                      active && "after:scale-x-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Magnetic strength={3}>
            <Link
              href={contactNav.href}
              className={cn(
                "group inline-flex items-center gap-2 font-body text-sm transition-colors duration-500",
                solid ? "text-ink" : "text-bone-white"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-warm-brown transition-transform duration-300 group-hover:scale-125" />
              {contactNav.label}
            </Link>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "-mr-2 inline-flex h-10 w-10 items-center justify-center transition-colors duration-500 md:hidden",
            solid || menuOpen ? "text-ink" : "text-bone-white"
          )}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <MobileMenu open={menuOpen} />
    </header>
  );
}

function MobileMenu({ open }: { open: boolean }) {
  const pathname = usePathname();
  const items = [...nav, contactNav];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: editorialEase }}
          className="overflow-hidden border-t border-warm-brown/15 bg-bone-white md:hidden"
        >
          <ul className="container flex flex-col py-4">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 py-4 font-display text-2xl font-medium text-ink",
                      active && "text-warm-brown"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 ml-1 flex flex-col border-l border-warm-brown/25 pl-5">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block py-2 font-body text-base text-ink/70 transition-colors",
                                childActive && "text-warm-brown"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

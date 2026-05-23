"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, brand } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color:var(--color-bg)]/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-neon)]"
            style={{ boxShadow: "0 0 12px rgba(0,245,212,0.75)" }}
            aria-hidden
          />
          <span>
            {brand.name}
            <span className="text-[color:var(--color-neon)]"> AI</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-medium bg-[color:var(--color-neon)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-neon-2)] shadow-[0_0_18px_-4px_rgba(0,245,212,0.6)] transition-colors"
        >
          בואו נדבר
        </Link>

        <button
          type="button"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-b border-white/[0.06]",
          open
            ? "max-h-96 opacity-100 bg-[color:var(--color-bg)]/95 backdrop-blur-xl"
            : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base text-white/85 hover:text-white hover:bg-white/5 rounded-xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[color:var(--color-neon)] text-[color:var(--color-bg)] font-semibold px-4 py-3 rounded-xl shadow-[0_0_24px_-4px_rgba(0,245,212,0.55)]"
            >
              בואו נדבר
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

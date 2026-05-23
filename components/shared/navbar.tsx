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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed top-4 inset-x-4 sm:inset-x-6 z-50 transition-all duration-300",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between px-3 sm:px-4 rounded-full transition-all duration-300",
          scrolled
            ? "bg-[color:var(--color-bg)]/75 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,245,212,0.18)]"
            : "bg-[color:var(--color-surface)]/40 backdrop-blur-xl border border-white/[0.06]",
        )}
      >
        <Link
          href="#top"
          className="flex items-center gap-2 px-3 text-base font-bold tracking-tight"
        >
          <span className="relative inline-flex">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-neon)]"
              style={{ boxShadow: "0 0 14px rgba(0,245,212,0.85)" }}
              aria-hidden
            />
            <span
              className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-[color:var(--color-neon)] animate-ping opacity-60"
              style={{ animationDuration: "2.4s" }}
              aria-hidden
            />
          </span>
          <span>
            {brand.name}
            <span className="text-[color:var(--color-neon)]"> AI</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-1.5 text-sm text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center h-9 px-4 rounded-full text-sm font-semibold bg-[color:var(--color-neon)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-neon-2)] shadow-[0_0_18px_-4px_rgba(0,245,212,0.7)] transition-all"
        >
          בואו נדבר
        </Link>

        <button
          type="button"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 mt-2 rounded-2xl",
          open
            ? "max-h-96 opacity-100 bg-[color:var(--color-bg)]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,245,212,0.2)]"
            : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-3 gap-1">
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

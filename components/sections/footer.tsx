import Link from "next/link";
import { brand, navLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-[color:var(--color-bg)] mt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="#top"
            className="flex items-center gap-2 text-lg font-bold"
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
          <p className="mt-3 text-sm text-white/55 max-w-md">
            {brand.coreMessage}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/[0.04]">
        <p className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-5 text-xs text-white/40 text-center md:text-start">
          © {year} {brand.name}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}

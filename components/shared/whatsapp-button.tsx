"use client";

import * as React from "react";
import { whatsapp, buildWhatsAppUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.tooltipLabel}
      className={`group fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:bg-[#1ebe5d] hover:shadow-[0_12px_40px_-3px_rgba(37,211,102,0.75)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)] ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      {/* Pulse ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"
        style={{ animationDuration: "2.6s" }}
      />
      <WhatsAppIcon className="relative h-7 w-7" />

      {/* Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-[color:var(--color-surface)] border border-white/10 px-3 py-1.5 text-sm text-white opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
      >
        {whatsapp.tooltipLabel}
      </span>
    </a>
  );
}

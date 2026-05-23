import { cn } from "@/lib/utils";

type FloatingBackgroundProps = {
  className?: string;
  variant?: "hero" | "subtle" | "ambient";
};

export function FloatingBackground({
  className,
  variant = "hero",
}: FloatingBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, #000 30%, transparent 75%)",
        }}
      />

      {/* Radial gradient orbs */}
      <div
        className="absolute -top-32 right-[10%] h-[480px] w-[480px] rounded-full blur-3xl animate-float-slow animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,212,0.35) 0%, rgba(0,194,186,0.12) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[40%] -left-24 h-[520px] w-[520px] rounded-full blur-3xl animate-float-slower"
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,186,0.28) 0%, rgba(0,245,212,0.08) 50%, transparent 75%)",
          opacity: variant === "hero" ? 0.85 : 0.5,
        }}
      />
      {variant === "hero" && (
        <div
          className="absolute bottom-[-160px] right-[30%] h-[420px] w-[420px] rounded-full blur-3xl animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(0,245,212,0.22) 0%, transparent 65%)",
          }}
        />
      )}

      {/* Subtle particles (dots) - only in hero */}
      {variant === "hero" && <Particles />}

      {/* Bottom fade to background - only in hero */}
      {variant === "hero" && (
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--color-bg)]" />
      )}
    </div>
  );
}

// Lightweight ambient backdrop for non-hero sections - adds depth without competing with content.
type SectionAmbienceProps = {
  className?: string;
  side?: "left" | "right" | "center";
  intensity?: "low" | "mid";
};

export function SectionAmbience({
  className = "",
  side = "right",
  intensity = "low",
}: SectionAmbienceProps) {
  const opacity = intensity === "mid" ? 0.6 : 0.35;
  const sidePosClass =
    side === "left"
      ? "-left-32"
      : side === "center"
        ? "left-1/2 -translate-x-1/2"
        : "-right-32";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${sidePosClass} h-[420px] w-[420px] rounded-full blur-3xl animate-float-slower`}
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,186,0.22) 0%, rgba(0,245,212,0.05) 50%, transparent 75%)",
          opacity,
        }}
      />
    </div>
  );
}

function Particles() {
  const particles = [
    { top: "12%", left: "18%", size: 4, delay: "0s" },
    { top: "22%", left: "74%", size: 3, delay: "1.2s" },
    { top: "38%", left: "12%", size: 2, delay: "0.6s" },
    { top: "55%", left: "82%", size: 4, delay: "2s" },
    { top: "68%", left: "30%", size: 3, delay: "0.4s" },
    { top: "78%", left: "60%", size: 2, delay: "1.8s" },
    { top: "30%", left: "50%", size: 2, delay: "2.5s" },
    { top: "48%", left: "44%", size: 3, delay: "1.5s" },
  ];
  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[color:var(--color-neon)] animate-pulse-glow"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 12px rgba(0,245,212,0.65)",
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}

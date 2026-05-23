import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
};

export function Marquee({ items, className, itemClassName }: MarqueeProps) {
  // Render twice for seamless loop with translateX(-50%).
  return (
    <div
      aria-hidden
      className={cn("relative overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
      }}
    >
      <div className="flex w-max gap-12 animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "shrink-0 font-display font-bold tracking-tight whitespace-nowrap",
              itemClassName,
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

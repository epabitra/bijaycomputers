import { cn } from "../../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4",
            light ? "bg-white/10 text-amber-300" : "bg-amber-50 text-amber-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-balance",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

import { Check } from "lucide-react";
import Button from "../common/Button";
import { cn } from "../../utils/cn";

export default function PricingCard({ plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-7 border transition-all duration-300",
        plan.highlight
          ? "bg-navy-950 border-navy-900 shadow-lift lg:-translate-y-3"
          : "bg-white border-slate-100 shadow-soft hover:shadow-card"
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-soft whitespace-nowrap">
          {plan.badge}
        </span>
      )}
      <h3 className={cn("font-display font-semibold text-xl", plan.highlight ? "text-white" : "text-navy-950")}>
        {plan.name}
      </h3>
      <p className={cn("mt-1 text-sm", plan.highlight ? "text-slate-300" : "text-slate-500")}>{plan.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className={cn("text-4xl font-display font-bold", plan.highlight ? "text-white" : "text-navy-950")}>
          {plan.price}
        </span>
        <span className={cn("text-sm", plan.highlight ? "text-slate-400" : "text-slate-500")}>{plan.priceNote}</span>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={cn("size-4 mt-0.5 shrink-0", plan.highlight ? "text-amber-400" : "text-emerald-600")} />
            <span className={plan.highlight ? "text-slate-200" : "text-slate-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        to={plan.ctaLink}
        variant={plan.highlight ? "primary" : "outline"}
        className="mt-7 w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}

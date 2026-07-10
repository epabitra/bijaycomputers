import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy-950 text-sm md:text-base">{item.q}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-amber-600 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-slate-600 leading-relaxed pr-8">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items, allowMultiple = false, defaultOpenIndex = null }) {
  const [openIndexes, setOpenIndexes] = useState(
    defaultOpenIndex !== null ? new Set([defaultOpenIndex]) : new Set()
  );

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set();
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="divide-y-0">
      {items.map((item, i) => (
        <FAQItem key={i} item={item} isOpen={openIndexes.has(i)} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}

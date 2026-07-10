import { Star, Quote } from "lucide-react";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
      <Quote className="size-8 text-amber-200" />
      <div className="flex text-amber-400 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4" fill={i < testimonial.rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">"{testimonial.quote}"</p>
      <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-center size-11 rounded-full bg-navy-100 text-navy-800 font-semibold text-sm shrink-0">
          {initials(testimonial.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy-950">{testimonial.name}</p>
          <p className="text-xs text-slate-500">
            {testimonial.location} · {testimonial.service}
          </p>
        </div>
      </div>
    </div>
  );
}

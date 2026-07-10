import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center justify-center size-11 rounded-xl bg-white shadow-soft text-amber-600">
          <Icon className="size-5" />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-navy-950 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{service.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-amber-600 transition-colors">
          Learn more
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Breadcrumb({ items = [], light = false }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center flex-wrap gap-1.5 text-sm",
        light ? "text-slate-300" : "text-slate-500"
      )}
    >
      <Link
        to="/"
        className={cn(
          "flex items-center gap-1 transition-colors",
          light ? "hover:text-amber-300" : "hover:text-amber-600"
        )}
      >
        <Home className="size-3.5" />
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className={cn("size-3.5", light ? "text-white/30" : "text-slate-300")} />
          {item.to ? (
            <Link
              to={item.to}
              className={cn("transition-colors", light ? "hover:text-amber-300" : "hover:text-amber-600")}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn("font-medium", light ? "text-white" : "text-navy-900")}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

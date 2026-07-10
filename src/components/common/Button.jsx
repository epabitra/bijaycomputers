import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-amber-500 text-white hover:bg-amber-600 shadow-soft hover:shadow-card focus-visible:outline-amber-600",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-soft hover:shadow-card focus-visible:outline-navy-900",
  outline:
    "bg-transparent text-navy-900 border border-navy-200 hover:border-navy-400 hover:bg-navy-50 focus-visible:outline-navy-900",
  outlineLight:
    "bg-white/0 text-white border border-white/40 hover:bg-white/10 focus-visible:outline-white",
  ghost: "bg-transparent text-navy-700 hover:bg-navy-50",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-7 py-3.5",
};

export default function Button({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  iconPosition = "right",
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="size-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="size-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  const Comp = as || "button";
  return (
    <Comp className={classes} {...props}>
      {content}
    </Comp>
  );
}

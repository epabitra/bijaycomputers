import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { mainNav } from "../../data/navigation";
import { siteConfig, NAV_PHONE_LINK, NAV_WHATSAPP_LINK } from "../../data/siteConfig";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      {/* Top info bar */}
      <div
        className={cn(
          "hidden lg:block border-b transition-colors",
          scrolled ? "border-slate-100 bg-navy-950" : "border-white/10 bg-navy-950"
        )}
      >
        <Container className="flex items-center justify-between py-2 text-xs text-slate-300">
          <div className="flex items-center gap-5">
            <span>{siteConfig.address.full}</span>
            <span className="text-slate-500">|</span>
            <span>Open Daily: {siteConfig.hours.weekday}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={NAV_PHONE_LINK} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="size-3.5" />
              {siteConfig.contact.phonePrimaryDisplay}
            </a>
            <a
              href={NAV_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
            <span className="flex items-center justify-center size-11 rounded-xl bg-navy-950 text-white font-display font-bold text-lg">
              BC
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-display font-bold text-lg",
                  scrolled || mobileOpen ? "text-navy-950" : "text-white"
                )}
              >
                Bijaya Computer
              </span>
              <span
                className={cn(
                  "text-[11px] font-medium tracking-wide",
                  scrolled || mobileOpen ? "text-slate-500" : "text-slate-300"
                )}
              >
                Sales &amp; Service · Mohana
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors",
                        scrolled ? "text-navy-800 hover:text-amber-600" : "text-white hover:text-amber-300",
                        isActive && (scrolled ? "text-amber-600" : "text-amber-300")
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown className="size-3.5" />
                  </NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="bg-white rounded-2xl shadow-lift border border-slate-100 p-2 grid grid-cols-1 max-h-[70vh] overflow-y-auto">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end={child.to === "/services"}
                          className={({ isActive }) =>
                            cn(
                              "px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-navy-50 hover:text-navy-900 transition-colors",
                              isActive && "bg-amber-50 text-amber-700"
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors",
                      scrolled ? "text-navy-800 hover:text-amber-600" : "text-white hover:text-amber-300",
                      isActive && (scrolled ? "text-amber-600" : "text-amber-300")
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button to="/book-a-repair" size="md">
              Book a Repair
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "lg:hidden flex items-center justify-center size-10 rounded-lg",
              scrolled || mobileOpen ? "text-navy-900" : "text-white"
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-t border-slate-100",
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        )}
      >
        <Container className="py-4 flex flex-col gap-1">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-navy-900 font-semibold text-sm"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown className={cn("size-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 flex flex-col gap-0.5 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-navy-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-navy-900 font-semibold text-sm rounded-lg hover:bg-navy-50"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="flex flex-col gap-2 mt-3 px-3">
            <Button to="/book-a-repair" onClick={() => setMobileOpen(false)}>
              Book a Repair
            </Button>
            <Button href={NAV_PHONE_LINK} variant="outline" icon={Phone} iconPosition="left">
              Call {siteConfig.contact.phonePrimaryDisplay}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Star } from "lucide-react";
import Container from "../common/Container";
import { siteConfig, NAV_PHONE_LINK, NAV_WHATSAPP_LINK } from "../../data/siteConfig";
import { footerServiceLinks, footerCompanyLinks, footerSupportLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center size-11 rounded-xl bg-white text-navy-950 font-display font-bold text-lg">
                BC
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg text-white">Bijaya Computer</span>
                <span className="text-[11px] text-slate-400">Sales &amp; Service · Mohana</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-1.5 mt-4 text-sm">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4"
                    fill={i < Math.round(siteConfig.rating.value) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-white font-semibold">{siteConfig.rating.value}</span>
              <span className="text-slate-500">({siteConfig.rating.count} Google reviews)</span>
            </div>
            <a
              href={NAV_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerCompanyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-amber-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerServiceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-amber-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wide mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-amber-400" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-amber-400" />
                <a href={NAV_PHONE_LINK} className="hover:text-amber-300 transition-colors">
                  {siteConfig.contact.phonePrimaryDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-amber-400" />
                <a href={`tel:+91${siteConfig.contact.phoneSecondary}`} className="hover:text-amber-300 transition-colors">
                  {siteConfig.contact.phoneSecondaryDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-amber-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-300 transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="size-4 mt-0.5 shrink-0 text-amber-400" />
                <span>Open Daily: {siteConfig.hours.weekday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4">
          <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wide mb-3">
            Support
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerSupportLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-amber-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} Bijaya Computer, Mohana. All rights reserved.</p>
          <p>Near JMFC Court, SBI Road, Mohana, Gajapati, Odisha – 761015</p>
        </div>
      </Container>
    </footer>
  );
}

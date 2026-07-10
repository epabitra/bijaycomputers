import { Phone, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { siteConfig, NAV_PHONE_LINK } from "../../data/siteConfig";

export default function CTASection({
  eyebrow = "Need Help Right Now?",
  title = "Get a Free Diagnosis Today",
  description = "Bring your device in or book online — our technicians will diagnose the issue at no cost and give you a clear, honest estimate before any repair begins.",
  primaryLabel = "Book a Repair",
  primaryTo = "/book-a-repair",
  showCall = true,
}) {
  return (
    <section className="section-y relative overflow-hidden bg-navy-950">
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-navy-500/30 blur-3xl" />
      <Container className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left max-w-xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4 bg-white/10 text-amber-300">
            {eyebrow}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white text-balance">{title}</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Button to={primaryTo} size="lg" icon={ArrowRight}>
            {primaryLabel}
          </Button>
          {showCall && (
            <Button href={NAV_PHONE_LINK} variant="outlineLight" size="lg" icon={Phone} iconPosition="left">
              {siteConfig.contact.phonePrimaryDisplay}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

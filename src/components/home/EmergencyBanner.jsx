import { Siren, Building2, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

export default function EmergencyBanner() {
  return (
    <section className="section-y bg-slate-50">
      <Container className="grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-red-500/20 blur-2xl" />
          <div>
            <div className="flex items-center justify-center size-12 rounded-xl bg-red-500/15 text-red-400 mb-5">
              <Siren className="size-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">
              Emergency Computer Support
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-sm">
              System down and can't wait? Call us directly for priority same-day diagnosis — we know downtime
              costs you money and time.
            </p>
          </div>
          <Button href="tel:+916374163751" variant="primary" className="mt-6 w-fit" icon={ArrowRight}>
            Call Now for Urgent Help
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 md:p-10 flex flex-col justify-between min-h-[260px] shadow-soft">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-amber-400/10 blur-2xl" />
          <div>
            <div className="flex items-center justify-center size-12 rounded-xl bg-navy-50 text-navy-800 mb-5">
              <Building2 className="size-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-navy-950">
              Business IT Solutions
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm">
              Setting up a new office or shop? We handle computers, networking, CCTV and billing systems as one
              coordinated project — with AMC plans to keep it running.
            </p>
          </div>
          <Button to="/services/business-it-solutions" variant="outline" className="mt-6 w-fit" icon={ArrowRight}>
            Explore Business Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}

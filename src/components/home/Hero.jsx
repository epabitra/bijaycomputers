import { ArrowRight, Phone, ShieldCheck, Clock3, Star } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { siteConfig, NAV_PHONE_LINK } from "../../data/siteConfig";
import heroImage from "../../assets/images/hero/shop-exterior-independence-day.webp";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-0 right-0 size-[32rem] rounded-full bg-navy-500/20 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-amber-500/10 blur-3xl translate-y-1/4 -translate-x-1/4" />

      <Container className="relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <Star className="size-3.5 fill-amber-300" />
            {siteConfig.rating.value} Rated · {siteConfig.rating.count} Google Reviews
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] text-balance">
            Mohana's Trusted Partner for{" "}
            <span className="text-amber-400">Computer &amp; IT Services</span>
          </h1>
          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Laptop &amp; desktop repair, printer service, CCTV installation, networking and genuine hardware —
            all under one roof, with honest pricing and fast turnaround.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button to="/book-a-repair" size="lg" icon={ArrowRight}>
              Book a Repair
            </Button>
            <Button href={NAV_PHONE_LINK} variant="outlineLight" size="lg" icon={Phone} iconPosition="left">
              {siteConfig.contact.phonePrimaryDisplay}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-slate-300">
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="size-5 text-amber-400" />
              Genuine Parts &amp; Software
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock3 className="size-5 text-amber-400" />
              Same-Day Turnaround
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-lift border border-white/10">
            <img
              src={heroImage}
              alt="Bijaya Computer shop front in Mohana, decorated for Independence Day"
              className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white rounded-2xl shadow-lift px-5 py-4">
            <div className="flex items-center justify-center size-11 rounded-xl bg-amber-50 text-amber-600">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <p className="font-display font-bold text-navy-950 text-lg leading-none">
                {siteConfig.stats.yearsExperience}+ Years
              </p>
              <p className="text-xs text-slate-500 mt-1">of trusted local service</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

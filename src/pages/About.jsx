import { Target, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/sections/CTASection";
import { teamHighlights, certifications } from "../data/team";
import { siteConfig } from "../data/siteConfig";
import shopExterior from "../assets/images/hero/shop-exterior-signboard-close.webp";
import staffCounter from "../assets/images/technicians/staff-counter-stock.webp";
import SEO from "../components/seo/SEO";

const values = [
  {
    icon: HeartHandshake,
    title: "Honest Pricing",
    desc: "Free diagnosis, written estimates, and no hidden charges — every single time.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Parts",
    desc: "We stand behind every repair with authentic or quality-tested components.",
  },
  {
    icon: Target,
    title: "Quick Turnaround",
    desc: "We respect that you need your device back — most repairs are same-day.",
  },
  {
    icon: Eye,
    title: "Long-Term Trust",
    desc: "We're your neighbours on SBI Road — our reputation depends on doing right by you.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Bijaya Computer — a local, family-run computer sales & service shop in Mohana, Gajapati, Odisha. Honest pricing, genuine parts and 8+ years serving the community."
        keywords={["about Bijaya Computer", "computer shop Mohana history", "Bijay Computer Gajapati team"]}
      />
      <PageHeader
        title="About Bijaya Computer"
        description="Mohana's local computer sales & service center — built on honest repairs, genuine parts, and a team that's actually here when you need us."
        breadcrumbItems={[{ label: "About Us" }]}
      />

      {/* Our Story */}
      <section className="section-y bg-white">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100">
            <img
              src={shopExterior}
              alt="Bijaya Computer shop front on SBI Road, Mohana"
              className="w-full h-[380px] md:h-[440px] object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="A Local Shop Built on Trust"
              className="mx-0"
            />
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Bijaya Computer started as a small sales-and-service counter in Mohana and has grown into a
                full-service computer, printer, networking and CCTV shop — without losing the personal,
                walk-in-and-we'll-sort-it-out approach that got us here.
              </p>
              <p>
                We're located near JMFC Court on SBI Road, Mohana, Gajapati — a spot regulars know well. Whether
                it's a laptop that won't boot, a shop that needs its first CCTV setup, or a growing business
                that needs a reliable IT partner, we treat every job — big or small — with the same care.
              </p>
              <p>
                Today, our team handles everything from component-level repairs to full office IT setups, backed
                by authorized stock from HP, Dell, Canon, Epson, Brother and more.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-y bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Mission &amp; Values"
            description="The principles behind every repair, sale and installation we do."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6 text-center hover:shadow-card transition-shadow"
                >
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-amber-50 text-amber-600 mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display font-semibold text-navy-950">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <StatsSection />

      {/* Team */}
      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="Certified, Experienced Technicians"
            description="A small, hands-on team you'll recognize every time you walk in."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamHighlights.map((member) => (
              <div
                key={member.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow"
              >
                <img src={member.image} alt={member.title} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-navy-950">{member.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-950 rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center overflow-hidden relative">
            <div className="absolute -right-16 -bottom-16 size-60 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden">
              <img src={staffCounter} alt="Bijaya Computer team at the sales counter" className="w-full h-64 object-cover" />
            </div>
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                Why Customers Trust Our Team
              </h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <ShieldCheck className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Visit Us"
        title="Come Say Hello at Our Mohana Shop"
        description={`${siteConfig.address.full}. Open daily, ${siteConfig.hours.weekday}.`}
        primaryLabel="Get Directions"
        primaryTo="/contact"
      />
    </>
  );
}

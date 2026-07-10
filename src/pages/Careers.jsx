import { Briefcase, GraduationCap, TrendingUp, Users2, Mail, Phone } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { siteConfig, NAV_PHONE_LINK } from "../data/siteConfig";

const perks = [
  {
    icon: GraduationCap,
    title: "Hands-On Learning",
    desc: "Work across real repairs, sales and installations — not stuck doing one narrow task.",
  },
  {
    icon: TrendingUp,
    title: "Room to Grow",
    desc: "As we take on more AMC and business clients, we grow our team from within.",
  },
  {
    icon: Users2,
    title: "Small, Supportive Team",
    desc: "You'll work closely with experienced technicians who are happy to teach.",
  },
  {
    icon: Briefcase,
    title: "Local, Stable Work",
    desc: "A steady local business with growing demand for computer & IT services in Mohana.",
  },
];

const openRoles = [
  {
    title: "Laptop & Desktop Repair Technician",
    type: "Full-Time",
    desc: "Diagnose and repair laptops and desktops — hardware and software. Prior repair experience preferred; we also consider trainees with strong fundamentals.",
  },
  {
    title: "Sales & Customer Support Executive",
    type: "Full-Time",
    desc: "Handle walk-in customers, billing, product sales and follow-ups. Good communication in Odia and Hindi required.",
  },
  {
    title: "Networking & CCTV Installation Technician",
    type: "Full-Time / On-Site",
    desc: "Install and configure routers, LAN networks, CCTV systems and biometric devices at customer sites.",
  },
];

export default function Careers() {
  return (
    <>
      <PageHeader
        title="Careers at Bijaya Computer"
        description="Join a growing local team fixing real problems for real customers across Mohana."
        breadcrumbItems={[{ label: "Careers" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="Build Real Skills, Close to Home"
            description="We're a small team that takes on a wide variety of work — you'll learn fast."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-amber-50 text-amber-600 mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display font-semibold text-navy-950">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-y bg-slate-50">
        <Container>
          <SectionHeading eyebrow="Open Positions" title="Current Openings" />
          <div className="mt-12 max-w-3xl mx-auto space-y-5">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="font-display font-semibold text-navy-950">{role.title}</h3>
                  <span className="inline-block mt-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    {role.type}
                  </span>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-xl">{role.desc}</p>
                </div>
                <Button href={`mailto:${siteConfig.contact.email}?subject=Application: ${role.title}`} variant="outline" className="shrink-0">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-navy-950 rounded-2xl p-8 text-center">
            <h3 className="font-display font-semibold text-xl text-white">Don't See a Fit? Reach Out Anyway</h3>
            <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto">
              We're always happy to hear from motivated people in and around Mohana. Send your details and
              we'll keep you in mind for future openings.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={`mailto:${siteConfig.contact.email}`} icon={Mail} iconPosition="left">
                Email Your Resume
              </Button>
              <Button href={NAV_PHONE_LINK} variant="outlineLight" icon={Phone} iconPosition="left">
                {siteConfig.contact.phonePrimaryDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

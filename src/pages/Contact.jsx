import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig, NAV_PHONE_LINK, NAV_WHATSAPP_LINK } from "../data/siteConfig";
import SEO from "../components/seo/SEO";

const infoCards = [
  {
    icon: MapPin,
    title: "Visit Our Shop",
    lines: [siteConfig.address.full],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [siteConfig.contact.phonePrimaryDisplay, siteConfig.contact.phoneSecondaryDisplay],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.contact.email],
  },
  {
    icon: Clock3,
    title: "Working Hours",
    lines: siteConfig.hours.schedule.map((s) => `${s.day}: ${s.time}`),
  },
];

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.mapsQuery
  )}&output=embed`;

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Bijaya Computer — call, WhatsApp, or visit us near JMFC Court, SBI Road, Mohana, Gajapati, Odisha. Open daily 9:30 AM – 9:00 PM."
        keywords={["Bijaya Computer contact number", "computer shop Mohana address", "Bijay Computer Gajapati phone"]}
      />
      <PageHeader
        title="Contact Us"
        description="Questions, quotes, or just want to check on a repair? We're one call, WhatsApp message or visit away."
        breadcrumbItems={[{ label: "Contact Us" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-6 text-center">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-amber-50 text-amber-600 mb-4">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display font-semibold text-navy-950">{card.title}</h3>
                  {card.title === "Call Us" ? (
                    <>
                      <a href={NAV_PHONE_LINK} className="block mt-1.5 text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        {card.lines[0]}
                      </a>
                      <a
                        href={`tel:+91${siteConfig.contact.phoneSecondary}`}
                        className="block mt-1 text-sm text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        {card.lines[1]}
                      </a>
                    </>
                  ) : (
                    card.lines.map((line) => (
                      <p key={line} className="mt-1.5 text-sm text-slate-600">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-6 md:p-10">
              <h2 className="font-display font-bold text-2xl text-navy-950 mb-2">Send Us a Message</h2>
              <p className="text-sm text-slate-500 mb-8">We usually respond within a few hours.</p>
              <ContactForm />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 h-72 lg:h-auto lg:flex-1 min-h-[320px]">
                <iframe
                  title="Bijaya Computer location map"
                  src={mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={NAV_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-5 hover:bg-emerald-100 transition-colors"
              >
                <div className="flex items-center justify-center size-12 rounded-xl bg-emerald-500 text-white shrink-0">
                  <MessageCircle className="size-6" />
                </div>
                <div>
                  <p className="font-display font-semibold text-navy-950">Chat With Us on WhatsApp</p>
                  <p className="text-sm text-slate-600">Fastest way to reach us for quick questions</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-14 text-center">
            <h2 className="font-display font-bold text-2xl text-navy-950">Our Service Area</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We're based in Mohana, Gajapati and provide on-site service across Mohana town and nearby areas.
              For locations further out, remote support is available for software-related issues, or you're
              welcome to drop off your device at our shop.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

import { Phone, MessageCircle, MapPin, Clock3 } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ServiceRequestForm from "../components/contact/ServiceRequestForm";
import { siteConfig, NAV_PHONE_LINK, NAV_WHATSAPP_LINK } from "../data/siteConfig";

export default function BookRepair() {
  return (
    <>
      <PageHeader
        title="Book a Repair"
        description="Tell us what's wrong and we'll get back to you to confirm your appointment — free diagnosis, honest estimate, no obligation."
        breadcrumbItems={[{ label: "Book a Repair" }]}
      />

      <section className="section-y bg-white">
        <Container className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-card p-6 md:p-10">
            <h2 className="font-display font-bold text-2xl text-navy-950 mb-2">Service Request Form</h2>
            <p className="text-sm text-slate-500 mb-8">
              Fill in the details below and our team will call you back to confirm your booking.
            </p>
            <ServiceRequestForm />
          </div>

          <aside className="space-y-6">
            <div className="bg-navy-950 rounded-2xl p-6 text-white">
              <h3 className="font-display font-semibold text-lg mb-4">Prefer to Talk Directly?</h3>
              <div className="space-y-4 text-sm">
                <a href={NAV_PHONE_LINK} className="flex items-center gap-3 hover:text-amber-300 transition-colors">
                  <Phone className="size-5 text-amber-400 shrink-0" />
                  {siteConfig.contact.phonePrimaryDisplay}
                </a>
                <a
                  href={NAV_WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-amber-300 transition-colors"
                >
                  <MessageCircle className="size-5 text-amber-400 shrink-0" />
                  Chat on WhatsApp
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="size-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Open Daily: {siteConfig.hours.weekday}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="font-display font-semibold text-navy-950 mb-2">What Happens Next?</h3>
              <ol className="space-y-3 text-sm text-slate-700 list-decimal list-inside">
                <li>We review your request and call to confirm details</li>
                <li>We schedule a walk-in, on-site visit or pickup</li>
                <li>Free diagnosis and a written estimate</li>
                <li>Repair begins only after you approve the estimate</li>
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import { siteConfig } from "../data/siteConfig";
import SEO from "../components/seo/SEO";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      `By using this website or availing services from ${siteConfig.legalName}, you agree to the terms outlined below.`,
    ],
  },
  {
    title: "2. Service Estimates",
    body: [
      "All diagnosis is provided free of charge. Written estimates are given before any paid repair work begins. Final pricing may vary if additional issues are discovered during the repair process — we will always contact you before proceeding with any additional work.",
    ],
  },
  {
    title: "3. Repair Warranty",
    body: [
      "Our standard repair work carries a 30-day service warranty (15 days for printer repairs), covering the specific issue repaired. This warranty does not cover new, unrelated issues, physical damage, liquid damage, or issues caused by third-party servicing after our repair.",
      "New hardware components carry their respective manufacturer warranty.",
    ],
  },
  {
    title: "4. Customer Responsibility",
    body: [
      "Customers are responsible for backing up their data before handing over a device for repair. While we take reasonable care, we are not liable for data loss during the repair process, particularly for devices already experiencing hardware or storage failure.",
    ],
  },
  {
    title: "5. Uncollected Devices",
    body: [
      "Devices left for repair and not collected within 30 days of completion notice may be subject to a storage fee, and after 90 days, we reserve the right to dispose of the device to recover part costs, in accordance with applicable local regulations.",
    ],
  },
  {
    title: "6. Payments",
    body: [
      "Payment is due upon completion of the service unless otherwise agreed (such as under an AMC contract). We accept cash and digital payments (UPI/PhonePe/Paytm).",
    ],
  },
  {
    title: "7. AMC Terms",
    body: [
      "Annual Maintenance Contract terms, including visit frequency, coverage and pricing, are defined individually in each AMC agreement signed with the customer or business.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      `${siteConfig.shortName} is not liable for indirect, incidental, or consequential damages arising from the use of a repaired device or installed system, beyond the cost of the service provided.`,
    ],
  },
  {
    title: "9. Changes to These Terms",
    body: ["We may update these Terms & Conditions from time to time. Updates will be posted on this page."],
  },
];

export default function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms & Conditions for Bijaya Computer's website and services." noindex />
      <PageHeader title="Terms &amp; Conditions" breadcrumbItems={[{ label: "Terms & Conditions" }]} />
      <section className="section-y bg-white">
        <Container className="max-w-3xl">
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display font-bold text-xl text-navy-950 mb-3">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-2">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <div>
              <h2 className="font-display font-bold text-xl text-navy-950 mb-3">10. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                Questions about these Terms? Reach us at {siteConfig.contact.email} or{" "}
                {siteConfig.contact.phonePrimaryDisplay}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import { siteConfig } from "../data/siteConfig";

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use our website's Contact or Book a Repair forms, we may collect information you provide directly, such as your name, phone number, email address, device details and a description of the issue you're facing.",
      "We do not collect payment information through this website — all payments are handled in person at our shop.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you submit solely to respond to your inquiry, schedule a service, or provide a quote. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Data Storage & Security",
    body: [
      "We take reasonable measures to protect any information collected. Since this website currently operates without a connected backend database, form submissions are used only for direct communication and are not stored on our servers.",
    ],
  },
  {
    title: "4. Cookies & Analytics",
    body: [
      "This website may use basic, privacy-respecting analytics to understand how visitors use our site, helping us improve content and navigation. We do not use this data to identify individual visitors.",
    ],
  },
  {
    title: "5. Third-Party Links",
    body: [
      "Our website may contain links to third-party services (such as WhatsApp or Google Maps). We are not responsible for the privacy practices of these external services.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You may contact us at any time to ask what information we hold about you, or to request that it be deleted, using the contact details below.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes to our practices. Updates will be posted on this page.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumbItems={[{ label: "Privacy Policy" }]} />
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
              <h2 className="font-display font-bold text-xl text-navy-950 mb-3">8. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this Privacy Policy, contact us at {siteConfig.contact.email} or{" "}
                {siteConfig.contact.phonePrimaryDisplay}, or visit us at {siteConfig.address.full}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

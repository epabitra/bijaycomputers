import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import FAQAccordion from "../components/faq/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import { faqCategories } from "../data/faqs";

export default function FAQs() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often — about repairs, pricing, brands and services."
        breadcrumbItems={[{ label: "FAQs" }]}
      />

      <section className="section-y bg-white">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-display font-bold text-xl text-navy-950 mb-3">{cat.category}</h2>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 px-6 md:px-8">
                  <FAQAccordion items={cat.items} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Still Have Questions?"
        title="We're Happy to Help"
        description="Can't find what you're looking for? Reach out and we'll answer directly."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import FAQAccordion from "../faq/FAQAccordion";
import { faqCategories } from "../../data/faqs";
import { ArrowRight } from "lucide-react";

export default function FAQPreview() {
  const items = faqCategories.flatMap((c) => c.items).slice(0, 6);

  return (
    <section className="section-y bg-slate-50">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Quick answers to what customers ask us most often."
        />
        <div className="mt-10 bg-white rounded-2xl border border-slate-100 shadow-soft px-6 md:px-8">
          <FAQAccordion items={items} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button to="/faqs" variant="outline" size="lg" icon={ArrowRight}>
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}

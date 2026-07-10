import { Info } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import PricingCard from "../components/pricing/PricingCard";
import CTASection from "../components/sections/CTASection";
import { pricingPlans, priceList, pricingNote } from "../data/pricing";

export default function Pricing() {
  return (
    <>
      <PageHeader
        title="Pricing & Service Plans"
        description="Transparent, upfront pricing — free diagnosis on every job, with AMC plans for ongoing peace of mind."
        breadcrumbItems={[{ label: "Pricing" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            eyebrow="Service Plans"
            title="Choose the Plan That Fits You"
            description="From one-off repairs to full annual maintenance contracts for your business."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Common Job Pricing"
            title="Typical Service Rates"
            description="A general guide to what common repairs and services cost."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {priceList.map((cat) => (
              <div key={cat.category} className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
                <h3 className="font-display font-semibold text-lg text-navy-950 mb-4">{cat.category}</h3>
                <ul className="divide-y divide-slate-100">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-slate-600">{item.name}</span>
                      <span className="font-semibold text-navy-900 whitespace-nowrap ml-4">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-5 max-w-3xl mx-auto">
            <Info className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">{pricingNote}</p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Get an Exact Quote for Your Repair"
        description="Every job is different. Book a free diagnosis and we'll give you an exact, written estimate before any work begins."
      />
    </>
  );
}

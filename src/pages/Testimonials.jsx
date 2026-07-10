import { Star } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import CTASection from "../components/sections/CTASection";
import { testimonials } from "../data/testimonials";
import { siteConfig } from "../data/siteConfig";
import SEO from "../components/seo/SEO";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Customer Testimonials & Reviews"
        description={`Read what customers say about Bijaya Computer — rated ${siteConfig.rating.value}/5 on Google in Mohana, Gajapati, Odisha.`}
        keywords={["Bijaya Computer reviews", "computer shop Mohana reviews", "Bijay Computer Gajapati testimonials"]}
      />
      <PageHeader
        title="Customer Testimonials"
        description="Honest feedback from customers we've helped across Mohana and nearby areas."
        breadcrumbItems={[{ label: "Testimonials" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6" fill={i < Math.round(siteConfig.rating.value) ? "currentColor" : "none"} />
              ))}
            </div>
            <p className="text-3xl font-display font-bold text-navy-950">{siteConfig.rating.value} out of 5</p>
            <p className="text-slate-500 text-sm mt-1">
              Based on {siteConfig.rating.count} {siteConfig.rating.source} reviews
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Share Your Experience"
        title="Recently Visited Us?"
        description="We'd love to hear how your repair or service experience went — your feedback helps us improve."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  );
}

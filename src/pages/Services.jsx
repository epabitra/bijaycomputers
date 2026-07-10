import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/services/ServiceCard";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/seo/SEO";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore all 14 computer & IT services from Bijaya Computer — laptop repair, desktop repair, printer service, CCTV installation, networking, data recovery, AMC and more, in Mohana, Gajapati, Odisha."
        keywords={[
          "computer repair services Mohana",
          "laptop desktop repair Gajapati",
          "CCTV networking services Odisha",
          "AMC computer services Mohana",
        ]}
      />
      <PageHeader
        title="Our Services"
        description="Complete computer, laptop, printer, networking and CCTV services for homes and businesses in Mohana — with genuine parts and honest pricing."
        breadcrumbItems={[{ label: "Services" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            eyebrow="Browse by Category"
            title="14 Services, One Trusted Team"
            description="Click any service below to see what's included, common issues we fix, and typical turnaround times."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Tell us what's happening with your device and we'll point you in the right direction — free diagnosis, no obligation."
      />
    </>
  );
}

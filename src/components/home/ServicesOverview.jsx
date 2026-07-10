import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import ServiceCard from "../services/ServiceCard";
import { services } from "../../data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const featured = services.slice(0, 8);

  return (
    <section className="section-y bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Computer & IT Services"
          description="From a single laptop repair to full office IT setup, our technicians handle it all — with genuine parts and honest pricing."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/services" variant="outline" size="lg" icon={ArrowRight}>
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}

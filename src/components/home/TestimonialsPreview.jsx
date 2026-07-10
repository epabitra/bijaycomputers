import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import TestimonialCard from "../testimonials/TestimonialCard";
import { testimonials } from "../../data/testimonials";
import { ArrowRight } from "lucide-react";

export default function TestimonialsPreview() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          description="Real feedback from people we've helped across Mohana and nearby areas."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/testimonials" variant="outline" size="lg" icon={ArrowRight}>
            Read All Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}

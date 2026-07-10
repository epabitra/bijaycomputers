import { CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { whyChooseUs } from "../../data/process";
import repairImage from "../../assets/images/repairs/laptop-motherboard-repair-2.webp";

export default function WhyChooseUs() {
  return (
    <section className="section-y bg-white">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100">
            <img
              src={repairImage}
              alt="Technician performing a detailed laptop motherboard repair"
              className="w-full h-[380px] md:h-[440px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Repairs You Can Trust, Every Time"
            description="We've built our reputation in Mohana one honest repair at a time. Here's what sets us apart."
            className="mx-0"
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2 className="size-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-950 text-sm">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

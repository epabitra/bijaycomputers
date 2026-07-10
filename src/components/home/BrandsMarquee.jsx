import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { brands } from "../../data/brands";

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="section-y bg-slate-50 overflow-hidden">
      <Container>
        <SectionHeading eyebrow="Brands We Service" title="Trusted by the Brands You Already Know" />
      </Container>
      <div className="mt-12 relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex flex-col items-center justify-center gap-1 w-44 shrink-0 px-6"
            >
              <span className="font-display font-bold text-xl text-navy-900">{brand.name}</span>
              <span className="text-[11px] text-slate-500">{brand.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

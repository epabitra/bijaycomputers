import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { repairProcess } from "../../data/process";

export default function RepairProcess() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Our Simple, Transparent Repair Process"
          description="No jargon, no surprise bills — just a straightforward path from problem to fixed."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-slate-200" />
          {repairProcess.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center size-14 rounded-2xl bg-navy-950 text-amber-400 shadow-soft">
                  <Icon className="size-6" />
                </div>
                <span className="mt-4 text-xs font-bold text-amber-600 tracking-widest">STEP {step.step}</span>
                <h3 className="mt-1.5 font-display font-semibold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

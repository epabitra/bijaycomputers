import { Wrench, Users, Award, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import { useCountUp, useInView } from "../../hooks/useCountUp";
import { siteConfig } from "../../data/siteConfig";

const stats = [
  { icon: Award, value: siteConfig.stats.yearsExperience, suffix: "+", label: "Years of Experience" },
  { icon: Wrench, value: siteConfig.stats.repairsCompleted, suffix: "+", label: "Repairs Completed" },
  { icon: Users, value: siteConfig.stats.happyCustomers, suffix: "+", label: "Happy Customers" },
  { icon: ShieldCheck, value: siteConfig.stats.brandsServiced, suffix: "+", label: "Brands Serviced" },
];

function StatItem({ stat, inView }) {
  const value = useCountUp(stat.value, { start: inView, duration: 1600 });
  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center size-14 rounded-2xl bg-white/10 text-amber-400 mb-4">
        <Icon className="size-7" />
      </div>
      <p className="font-display text-3xl md:text-4xl font-bold text-white">
        {value.toLocaleString("en-IN")}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <section ref={ref} className="bg-navy-950 py-14 md:py-16">
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} inView={inView} />
        ))}
      </Container>
    </section>
  );
}

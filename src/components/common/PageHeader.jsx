import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbSchema from "../seo/BreadcrumbSchema";

export default function PageHeader({ title, description, breadcrumbItems = [] }) {
  return (
    <section className="relative bg-navy-950 pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-24 -right-24 size-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-navy-500/30 blur-3xl" />
      <Container className="relative">
        <Breadcrumb items={breadcrumbItems} light />
        <BreadcrumbSchema items={breadcrumbItems} />
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}

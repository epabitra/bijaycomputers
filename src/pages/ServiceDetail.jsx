import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, Clock3, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";
import ServiceCard from "../components/services/ServiceCard";
import CTASection from "../components/sections/CTASection";
import { services, getServiceBySlug } from "../data/services";
import { NAV_PHONE_LINK, siteConfig } from "../data/siteConfig";
import SEO from "../components/seo/SEO";
import ServiceSchema from "../components/seo/ServiceSchema";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.title} in Mohana, Gajapati`}
        description={`${service.summary} Serving Mohana, Gajapati and nearby areas in Odisha.`}
        keywords={[
          service.title,
          `${service.shortTitle} Mohana`,
          `${service.shortTitle} Gajapati`,
          `${service.shortTitle} Odisha`,
          `${service.shortTitle} near me`,
        ]}
      />
      <ServiceSchema service={service} />
      <PageHeader
        title={service.title}
        description={service.tagline}
        breadcrumbItems={[{ label: "Services", to: "/services" }, { label: service.shortTitle }]}
      />

      <section className="section-y bg-white">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 mb-8">
              <img src={service.image} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center size-11 rounded-xl bg-amber-50 text-amber-600">
                <Icon className="size-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-navy-950">Overview</h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="font-display font-bold text-xl text-navy-950 mt-10 mb-5">What's Included</h3>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-sm bg-slate-50 rounded-xl p-3.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{f}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display font-bold text-xl text-navy-950 mt-10 mb-5">
              Common Issues We Fix
            </h3>
            <div className="space-y-3">
              {service.commonIssues.map((issue) => (
                <div key={issue} className="flex items-start gap-2.5 text-sm">
                  <AlertCircle className="size-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-navy-950 rounded-2xl p-6 text-white shadow-card">
                <h3 className="font-display font-semibold text-lg">Quick Facts</h3>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock3 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-xs">Turnaround</p>
                      <p className="text-slate-100">{service.turnaround}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-xs">Warranty</p>
                      <p className="text-slate-100">{service.warranty}</p>
                    </div>
                  </div>
                </div>
                <Button to="/book-a-repair" className="w-full mt-6" icon={ArrowRight}>
                  Book This Service
                </Button>
                <Button
                  href={NAV_PHONE_LINK}
                  variant="outlineLight"
                  className="w-full mt-3"
                  icon={Phone}
                  iconPosition="left"
                >
                  {siteConfig.contact.phonePrimaryDisplay}
                </Button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
                <h3 className="font-display font-semibold text-navy-950 mb-4">Browse Other Services</h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="flex items-center justify-between text-sm text-slate-600 hover:text-amber-600 py-1.5 transition-colors"
                        >
                          {s.shortTitle}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="section-y bg-slate-50">
        <Container>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-950 text-center">
            You Might Also Need
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

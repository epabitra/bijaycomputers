import { useState } from "react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import CTASection from "../components/sections/CTASection";
import { productCategories } from "../data/products";
import { cn } from "../utils/cn";
import { NAV_PHONE_LINK } from "../data/siteConfig";
import { Phone } from "lucide-react";
import SEO from "../components/seo/SEO";

export default function Products() {
  const [active, setActive] = useState(productCategories[0].id);
  const activeCategory = productCategories.find((c) => c.id === active);

  return (
    <>
      <SEO
        title="Products — Laptops, Desktops, Printers & CCTV"
        description="Browse laptops, desktops, printers, networking and CCTV equipment sold by Bijaya Computer in Mohana, Gajapati, Odisha — HP, Dell, Lenovo, Canon, Epson, Dahua and more."
        keywords={["laptop sales Mohana", "computer products Gajapati", "printer sales Odisha", "CCTV camera sales Mohana"]}
      />
      <PageHeader
        title="Products We Sell"
        description="Genuine laptops, desktops, printers, networking equipment and accessories — in stock and ready to go."
        breadcrumbItems={[{ label: "Products" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Catalog"
            title="Browse by Category"
            description="Stock changes regularly — call or visit us for current availability and pricing."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors",
                  active === cat.id
                    ? "bg-navy-950 text-white border-navy-950"
                    : "bg-white text-slate-600 border-slate-200 hover:border-navy-300"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {activeCategory && (
            <div className="mt-12">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 rounded-3xl p-6 md:p-8 mb-8">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full md:w-64 h-48 object-cover rounded-2xl shrink-0"
                />
                <div>
                  <h3 className="font-display font-bold text-2xl text-navy-950">{activeCategory.name}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{activeCategory.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeCategory.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-sm text-navy-950 leading-snug">{item.name}</h4>
                      <p className="mt-1.5 text-xs text-slate-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button href={NAV_PHONE_LINK} icon={Phone} iconPosition="left" size="lg">
                  Check Availability &amp; Pricing
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTASection
        eyebrow="Business Buyers"
        title="Need Multiple Systems for Your Office?"
        description="We offer business pricing on bulk orders — computers, printers, networking and CCTV, all set up and ready to use."
        primaryLabel="Request a Quote"
        primaryTo="/contact"
      />
    </>
  );
}

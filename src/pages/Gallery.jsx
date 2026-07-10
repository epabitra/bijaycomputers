import { useState } from "react";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryImages, galleryCategories } from "../data/gallery";
import { cn } from "../utils/cn";
import SEO from "../components/seo/SEO";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <SEO
        title="Gallery"
        description="Photos of our shop, workshop and repair work at Bijaya Computer, Mohana, Gajapati, Odisha."
        keywords={["Bijaya Computer photos", "computer shop Mohana gallery"]}
      />
      <PageHeader
        title="Gallery"
        description="A look inside our shop, workshop and the day-to-day repair work at Bijaya Computer."
        breadcrumbItems={[{ label: "Gallery" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors",
                  filter === cat
                    ? "bg-navy-950 text-white border-navy-950"
                    : "bg-white text-slate-600 border-slate-200 hover:border-navy-300"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <GalleryGrid images={filtered} />
        </Container>
      </section>
    </>
  );
}

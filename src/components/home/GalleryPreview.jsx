import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { galleryImages } from "../../data/gallery";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="section-y bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Take a Look Inside"
          title="Our Shop & Workshop"
          description="A glimpse of our shop, stock and the repair work happening every day."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {preview.map((img, i) => (
            <Link
              key={i}
              to="/gallery"
              className={`group relative rounded-2xl overflow-hidden border border-slate-100 shadow-soft ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/gallery" variant="outline" size="lg" icon={ArrowRight}>
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}

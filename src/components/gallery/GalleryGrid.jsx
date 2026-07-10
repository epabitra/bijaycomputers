import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group relative block w-full rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-lift transition-shadow break-inside-avoid"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="absolute bottom-2 left-2 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-navy-900">
              {img.category}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-4 animate-fade-up"
          style={{ animationDuration: "0.2s" }}
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="size-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-10" />
          </button>
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="max-h-[85vh] max-w-[88vw] object-contain rounded-lg shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="size-10" />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center px-4">
            {images[activeIndex].alt}
          </p>
        </div>
      )}
    </>
  );
}

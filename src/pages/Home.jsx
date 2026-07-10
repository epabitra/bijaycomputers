import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesOverview from "../components/home/ServicesOverview";
import RepairProcess from "../components/home/RepairProcess";
import EmergencyBanner from "../components/home/EmergencyBanner";
import BrandsMarquee from "../components/home/BrandsMarquee";
import GalleryPreview from "../components/home/GalleryPreview";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import BlogPreview from "../components/home/BlogPreview";
import FAQPreview from "../components/home/FAQPreview";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <WhyChooseUs />
      <ServicesOverview />
      <RepairProcess />
      <EmergencyBanner />
      <BrandsMarquee />
      <GalleryPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}

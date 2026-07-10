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
import SEO from "../components/seo/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Computer, Laptop, Printer & CCTV Sales and Service in Mohana"
        description="Bijaya Computer is Mohana's trusted computer sales & service center — laptop and desktop repair, printer service, CCTV installation, networking, and genuine hardware in Mohana, Gajapati, Odisha. Free diagnosis, honest pricing, same-day turnaround."
        keywords={[
          "computer shop Mohana Gajapati",
          "laptop repair near me Mohana",
          "computer sales Odisha",
          "printer repair Mohana",
          "CCTV networking Mohana",
          "computer shop near High School Field Mohana",
        ]}
      />
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

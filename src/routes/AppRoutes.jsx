import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import BookRepair from "../pages/BookRepair";
import Pricing from "../pages/Pricing";
import Products from "../pages/Products";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import FAQs from "../pages/FAQs";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/book-a-repair" element={<BookRepair />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

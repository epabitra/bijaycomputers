import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingContact from "../components/layout/FloatingContact";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

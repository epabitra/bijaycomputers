import { Home, Wrench } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import SEO from "../components/seo/SEO";

export default function NotFound() {
  return (
    <>
    <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
    <section className="min-h-[80vh] flex items-center bg-navy-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 size-72 rounded-full bg-amber-500/15 blur-3xl" />
      <Container className="relative text-center py-24">
        <p className="text-8xl md:text-9xl font-display font-bold text-white/10">404</p>
        <h1 className="mt-[-2rem] md:mt-[-3rem] text-3xl md:text-4xl font-display font-bold text-white">
          Looks Like This Page Needs Repair
        </h1>
        <p className="mt-4 text-slate-300 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" icon={Home} iconPosition="left" size="lg">
            Back to Home
          </Button>
          <Button to="/book-a-repair" variant="outlineLight" icon={Wrench} iconPosition="left" size="lg">
            Book a Repair
          </Button>
        </div>
      </Container>
    </section>
    </>
  );
}

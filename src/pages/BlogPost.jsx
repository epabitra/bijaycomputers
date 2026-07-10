import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Container from "../components/common/Container";
import Breadcrumb from "../components/common/Breadcrumb";
import BlogCard from "../components/blog/BlogCard";
import CTASection from "../components/sections/CTASection";
import { blogPosts, getPostBySlug } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-4 md:pt-32">
        <Container>
          <Breadcrumb items={[{ label: "Blog", to: "/blog" }, { label: post.category }]} />
        </Container>
      </section>

      <article className="pb-10">
        <Container className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-amber-50 text-amber-700 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-navy-950 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 mt-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-8 rounded-3xl overflow-hidden shadow-card border border-slate-100">
            <img src={post.image} alt={post.title} className="w-full h-72 md:h-96 object-cover" />
          </div>

          <div className="mt-10 space-y-5 text-slate-700 leading-relaxed text-base">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-navy-800 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to All Articles
          </Link>
        </Container>
      </article>

      <section className="section-y bg-slate-50">
        <Container>
          <h2 className="font-display font-bold text-2xl text-navy-950 text-center mb-10">
            More From Our Blog
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a Tech Problem to Solve?"
        description="Our team is happy to help — book a free diagnosis and let's sort it out."
        primaryLabel="Book a Repair"
      />
    </>
  );
}

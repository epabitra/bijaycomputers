import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <>
      <PageHeader
        title="Blog & Tech Tips"
        description="Practical, no-nonsense advice from our technicians to help you get more out of your devices."
        breadcrumbItems={[{ label: "Blog" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

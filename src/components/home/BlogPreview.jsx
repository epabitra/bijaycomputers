import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import BlogCard from "../blog/BlogCard";
import { blogPosts } from "../../data/blogPosts";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow="Latest Tech Tips"
          title="From Our Blog"
          description="Practical advice from our technicians to help you get more out of your devices."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/blog" variant="outline" size="lg" icon={ArrowRight}>
            Read More Articles
          </Button>
        </div>
      </Container>
    </section>
  );
}

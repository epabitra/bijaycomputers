import JsonLd from "./JsonLd";
import { siteConfig, SITE_URL } from "../../data/siteConfig";

export default function BlogPostingSchema({ post }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: siteConfig.shortName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.shortName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return <JsonLd data={data} />;
}

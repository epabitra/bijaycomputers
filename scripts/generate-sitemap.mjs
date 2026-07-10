import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/book-a-repair", priority: "0.9", changefreq: "monthly" },
  { path: "/pricing", priority: "0.8", changefreq: "monthly" },
  { path: "/products", priority: "0.7", changefreq: "monthly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/testimonials", priority: "0.6", changefreq: "monthly" },
  { path: "/faqs", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/careers", priority: "0.4", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
];

async function main() {
  // Uses Vite's own module loader (not plain Node import) so the data
  // files' .webp asset imports resolve correctly, keeping this script's
  // route list generated from the same source of truth as the app.
  const server = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });

  const { SITE_URL } = await server.ssrLoadModule("/src/data/siteConfig.js");
  const { services } = await server.ssrLoadModule("/src/data/services.js");
  const { blogPosts } = await server.ssrLoadModule("/src/data/blogPosts.js");

  await server.close();

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const blogRoutes = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: "0.6",
    changefreq: "monthly",
    lastmod: p.date,
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...blogRoutes];
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = allRoutes
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
  console.log(`sitemap.xml generated with ${allRoutes.length} URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig, SITE_URL } from "../../data/siteConfig";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Renders nothing — imperatively syncs document.title and <head> meta tags
 * (description, keywords, canonical, Open Graph, Twitter Card) for the
 * current route. Note: crawlers that don't execute JS (most social-share
 * bots) only see the static defaults in index.html, not these updates —
 * only JS-rendering crawlers like Googlebot see per-page values here.
 */
export default function SEO({
  title,
  description,
  keywords,
  image,
  type = "website",
  noindex = false,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.shortName} — ${siteConfig.tagline}`;
    document.title = fullTitle;

    const desc = description || siteConfig.description;
    const url = `${SITE_URL}${pathname}`;
    const keywordList = [...new Set([...(keywords || []), ...siteConfig.coreKeywords])].join(", ");
    const shareImage = image || siteConfig.ogImage;

    upsertMeta("name", "description", desc);
    upsertMeta("name", "keywords", keywordList);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    upsertLink("canonical", url);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:image", shareImage);
    upsertMeta("property", "og:site_name", siteConfig.shortName);
    upsertMeta("property", "og:locale", "en_IN");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", shareImage);
  }, [title, description, keywords, image, type, noindex, pathname]);

  return null;
}

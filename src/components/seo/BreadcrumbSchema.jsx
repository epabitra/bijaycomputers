import { useLocation } from "react-router-dom";
import JsonLd from "./JsonLd";
import { SITE_URL } from "../../data/siteConfig";

export default function BreadcrumbSchema({ items = [] }) {
  const { pathname } = useLocation();
  const trail = [{ label: "Home", to: "/" }, ...items];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.to || pathname}`,
    })),
  };

  return <JsonLd data={data} />;
}

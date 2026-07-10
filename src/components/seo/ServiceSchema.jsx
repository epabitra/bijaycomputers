import JsonLd from "./JsonLd";
import { siteConfig, SITE_URL } from "../../data/siteConfig";

export default function ServiceSchema({ service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} — ${siteConfig.shortName}`,
    description: service.summary,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "ElectronicsStore",
      "@id": `${SITE_URL}/#business`,
      name: siteConfig.name,
    },
    areaServed: [
      { "@type": "City", name: "Mohana" },
      { "@type": "AdministrativeArea", name: "Gajapati District" },
      { "@type": "State", name: "Odisha" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f,
        },
      })),
    },
  };

  return <JsonLd data={data} />;
}

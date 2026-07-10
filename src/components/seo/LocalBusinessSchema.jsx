import JsonLd from "./JsonLd";
import { siteConfig, SITE_URL } from "../../data/siteConfig";

export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    "@id": `${SITE_URL}/#business`,
    name: siteConfig.name,
    alternateName: "Bijay Computer",
    description: siteConfig.description,
    image: siteConfig.ogImage,
    url: SITE_URL,
    telephone: `+91${siteConfig.contact.phonePrimary}`,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, PhonePe, Paytm",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pin,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Mohana" },
      { "@type": "AdministrativeArea", name: "Gajapati District" },
      { "@type": "State", name: "Odisha" },
    ],
    openingHoursSpecification: siteConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
  };

  return <JsonLd data={data} />;
}

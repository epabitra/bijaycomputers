export const pricingPlans = [
  {
    id: "essential",
    name: "Essential Care",
    tagline: "Pay-as-you-go diagnostics & repair",
    price: "Free",
    priceNote: "diagnosis, pay only for repair",
    highlight: false,
    features: [
      "Free hardware & software diagnosis",
      "Written estimate before any paid work",
      "Genuine / quality-tested replacement parts",
      "30-day warranty on repair work",
      "Walk-in or on-site visit (Mohana area)",
    ],
    cta: "Book a Repair",
    ctaLink: "/book-a-repair",
  },
  {
    id: "amc-home",
    name: "AMC — Home & Individual",
    tagline: "For 1–2 personal computers",
    price: "₹1,499",
    priceNote: "per system / year",
    highlight: true,
    badge: "Most Popular",
    features: [
      "2 scheduled maintenance visits/year",
      "Priority breakdown support",
      "15% off parts & labour during AMC term",
      "Free antivirus health check",
      "Dust cleaning & performance tune-up",
    ],
    cta: "Get This Plan",
    ctaLink: "/contact",
  },
  {
    id: "amc-business",
    name: "AMC — Shop & Business",
    tagline: "For offices, shops & multi-system setups",
    price: "Custom",
    priceNote: "based on system count",
    highlight: false,
    features: [
      "Quarterly scheduled maintenance",
      "Priority same-day breakdown response",
      "Discounted rates on parts & labour",
      "Covers PCs, printers, CCTV & network gear",
      "Single point of contact for all IT needs",
    ],
    cta: "Request a Quote",
    ctaLink: "/contact",
  },
];

export const priceList = [
  {
    category: "Laptop & Desktop Repair",
    items: [
      { name: "Diagnosis / inspection", price: "Free" },
      { name: "OS installation & driver setup", price: "₹500 – ₹800" },
      { name: "Virus & malware removal", price: "₹400 – ₹700" },
      { name: "Screen replacement (laptop)", price: "From ₹2,500" },
      { name: "Keyboard replacement (laptop)", price: "From ₹1,200" },
      { name: "Motherboard-level repair", price: "From ₹800 (+ parts)" },
      { name: "Dust cleaning & thermal paste", price: "₹300 – ₹500" },
    ],
  },
  {
    category: "Hardware Upgrades",
    items: [
      { name: "SSD upgrade (with data transfer)", price: "From ₹2,000 (incl. 480GB SSD)" },
      { name: "RAM upgrade (8GB)", price: "From ₹1,800" },
      { name: "New PC — Intel i3, 8GB RAM, 500GB HDD", price: "₹19,999" },
      { name: "New PC — special offer configuration", price: "₹9,999" },
    ],
  },
  {
    category: "Printer Services",
    items: [
      { name: "Cartridge refilling (per colour)", price: "₹250 – ₹400" },
      { name: "Print-head cleaning", price: "₹300 – ₹500" },
      { name: "Printer repair (inkjet/laser)", price: "From ₹500" },
    ],
  },
  {
    category: "Networking & CCTV",
    items: [
      { name: "Router/Wi-Fi setup", price: "₹500 – ₹1,000" },
      { name: "CCTV camera (per point, installed)", price: "From ₹2,500" },
      { name: "Biometric attendance device setup", price: "From ₹1,500" },
    ],
  },
];

export const pricingNote =
  "Prices are indicative starting rates for common jobs in and around Mohana and can vary based on brand, model, and parts availability. We always confirm final pricing with a free written estimate before any paid repair begins.";

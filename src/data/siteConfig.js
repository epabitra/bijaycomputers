export const SITE_URL = "https://www.bijayacomputers.in";

export const siteConfig = {
  name: "Bijaya Computer",
  legalName: "Bijaya Computer (Sales & Service)",
  shortName: "Bijaya Computer",
  tagline: "Your Trusted IT Partner in Mohana",
  description:
    "Bijaya Computer is Mohana's local computer sales & service center — laptop and desktop repair, printer service, CCTV installation, networking, and genuine hardware, backed by honest pricing and quick turnaround.",
  founded: "Locally established, family-run",
  // Core local-SEO keyword set — reused as the sitewide default and as the
  // base every page-level keyword list extends with its own terms.
  coreKeywords: [
    "Bijaya Computer",
    "Bijay Computer Mohana",
    "computer repair Mohana",
    "computer shop Mohana",
    "laptop service Mohana Odisha",
    "laptop repair Gajapati",
    "computer sales Mohana Gajapati",
    "CCTV installation Mohana",
    "networking services Gajapati",
    "computer service center Gajapati Odisha",
    "IT services Mohana",
  ],
  address: {
    line1: "Near JMFC Court, SBI Road",
    line2: "Mohana, Gajapati District",
    city: "Mohana",
    district: "Gajapati",
    state: "Odisha",
    pin: "761015",
    landmark: "Near JMFC Court, SBI Road (also known near High School Field, Main Road)",
    full: "Near JMFC Court, SBI Road, Mohana, Gajapati, Odisha – 761015",
    mapsQuery: "Bijaya Computer, SBI Road, Mohana, Gajapati, Odisha 761015",
  },
  contact: {
    phonePrimary: "6374163751",
    phonePrimaryDisplay: "+91 63741 63751",
    phoneSecondary: "9078234054",
    phoneSecondaryDisplay: "+91 90782 34054",
    phoneService: "8895357659",
    phoneServiceDisplay: "+91 88953 57659",
    whatsapp: "916374163751",
    email: "bijayacomputer.mohana@gmail.com",
  },
  hours: {
    weekday: "9:30 AM – 9:00 PM",
    weekend: "9:30 AM – 9:00 PM",
    note: "Open all days for walk-ins. Emergency & on-site support available on call.",
    schedule: [
      { day: "Monday – Saturday", time: "9:30 AM – 9:00 PM" },
      { day: "Sunday", time: "10:00 AM – 6:00 PM (Emergency support only)" },
    ],
    // 24-hour structured form of `schedule` above, for JSON-LD openingHoursSpecification.
    structured: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:30", closes: "21:00" },
      { days: ["Sunday"], opens: "10:00", closes: "18:00" },
    ],
  },
  rating: {
    value: 4.1,
    count: 12,
    source: "Google Reviews",
  },
  stats: {
    yearsExperience: 8,
    repairsCompleted: 3500,
    happyCustomers: 2800,
    brandsServiced: 15,
  },
  social: {
    whatsapp: "https://wa.me/916374163751",
  },
  ogImage: `${SITE_URL}/og-image.webp`,
};

export const NAV_PHONE_LINK = `tel:+91${siteConfig.contact.phonePrimary}`;
export const NAV_WHATSAPP_LINK = `https://wa.me/${siteConfig.contact.whatsapp}`;

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "All Services", to: "/services" },
      { label: "Computer Repair", to: "/services/computer-repair" },
      { label: "Laptop Repair", to: "/services/laptop-repair" },
      { label: "Desktop Repair", to: "/services/desktop-repair" },
      { label: "Printer Repair", to: "/services/printer-repair" },
      { label: "CCTV Installation", to: "/services/cctv-installation" },
      { label: "Networking Services", to: "/services/networking-services" },
      { label: "Data Recovery", to: "/services/data-recovery" },
      { label: "Virus & Malware Removal", to: "/services/virus-malware-removal" },
      { label: "Software Installation", to: "/services/software-installation" },
      { label: "Hardware Upgrades", to: "/services/hardware-upgrades" },
      { label: "AMC Plans", to: "/services/amc" },
      { label: "Business IT Solutions", to: "/services/business-it-solutions" },
      { label: "On-Site Services", to: "/services/on-site-services" },
      { label: "Remote Support", to: "/services/remote-support" },
    ],
  },
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const footerServiceLinks = [
  { label: "Laptop Repair", to: "/services/laptop-repair" },
  { label: "Desktop Repair", to: "/services/desktop-repair" },
  { label: "Printer Repair", to: "/services/printer-repair" },
  { label: "CCTV Installation", to: "/services/cctv-installation" },
  { label: "Networking Services", to: "/services/networking-services" },
  { label: "Data Recovery", to: "/services/data-recovery" },
  { label: "AMC Plans", to: "/services/amc" },
  { label: "Remote Support", to: "/services/remote-support" },
];

export const footerCompanyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

export const footerSupportLinks = [
  { label: "Book a Repair", to: "/book-a-repair" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

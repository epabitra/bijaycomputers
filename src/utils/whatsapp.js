import { siteConfig } from "../data/siteConfig";

export function buildWhatsAppLink(message) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

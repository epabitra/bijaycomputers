import { MessageCircle, Phone } from "lucide-react";
import { NAV_PHONE_LINK, NAV_WHATSAPP_LINK } from "../../data/siteConfig";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={NAV_WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center size-14 rounded-full bg-emerald-500 text-white shadow-lift hover:bg-emerald-600 hover:scale-105 transition-all duration-200"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={NAV_PHONE_LINK}
        aria-label="Call now"
        className="flex lg:hidden items-center justify-center size-14 rounded-full bg-amber-500 text-white shadow-lift hover:bg-amber-600 hover:scale-105 transition-all duration-200"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}

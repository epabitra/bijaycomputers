import hpLaptopClosed1 from "../assets/images/products/hp-laptop-closed-1.webp";
import lenovoThinkpad from "../assets/images/products/lenovo-thinkpad-t440p.webp";
import hpLaptopClosed2 from "../assets/images/products/hp-laptop-closed-2.webp";
import shelfLaptopsDesktops from "../assets/images/products/shelf-laptops-desktops.webp";
import zebronicsRgbCabinet from "../assets/images/products/zebronics-rgb-cabinet.webp";
import canonPrintersStacked from "../assets/images/products/canon-printers-stacked.webp";
import keyboardMouseCombos from "../assets/images/products/keyboard-mouse-combos.webp";
import laminatorInkTank from "../assets/images/products/laminator-ink-tank.webp";
import dellLaptopsStackOutdoor from "../assets/images/products/dell-laptops-stack-outdoor.webp";
import cctvCameraBoxes from "../assets/images/networking/cctv-camera-boxes.webp";
import mantraFingerprintSensor from "../assets/images/networking/mantra-fingerprint-sensor.webp";
import softwareAntivirusShelf from "../assets/images/services/software-antivirus-shelf.webp";
import intelI5ProcessorBox from "../assets/images/repairs/intel-i5-processor-box.webp";

export const productCategories = [
  {
    id: "laptops",
    name: "Laptops",
    image: lenovoThinkpad,
    description: "New and refurbished laptops from HP, Dell and Lenovo, tested and ready to use.",
    items: [
      { name: "HP Business & Consumer Laptops", image: hpLaptopClosed1, note: "Multiple configurations in stock" },
      { name: "Lenovo ThinkPad Series", image: lenovoThinkpad, note: "Durable, business-grade builds" },
      { name: "HP EliteBook Series", image: hpLaptopClosed2, note: "Refurbished, fully tested" },
      { name: "Dell Latitude / Inspiron", image: dellLaptopsStackOutdoor, note: "Popular for home & office use" },
    ],
  },
  {
    id: "desktops",
    name: "Desktops & Custom PCs",
    image: zebronicsRgbCabinet,
    description: "Assembled desktop PCs and custom builds — from office machines to gaming rigs.",
    items: [
      { name: "Custom Gaming/Workstation Builds", image: zebronicsRgbCabinet, note: "Zebronics cabinets with RGB cooling" },
      { name: "Office & Home PC Bundles", image: shelfLaptopsDesktops, note: "CPU, monitor, keyboard & mouse combos" },
      { name: "Entry PC Set — Special Offer", image: shelfLaptopsDesktops, note: "i3-3rd Gen, 8GB RAM, 128GB SSD + 500GB HDD" },
    ],
  },
  {
    id: "printers",
    name: "Printers & Cartridges",
    image: canonPrintersStacked,
    description: "Ink-tank, inkjet and laser printers from Canon, Epson, HP and Brother, plus genuine ink and toner.",
    items: [
      { name: "Canon PIXMA Ink Efficient Series", image: canonPrintersStacked, note: "G1010 / G2010 / G2770 / G3730" },
      { name: "Epson EcoTank Series", image: laminatorInkTank, note: "L3150 / L3250 low-cost printing" },
      { name: "HP Ink Tank 316", image: laminatorInkTank, note: "High-volume, low cost-per-page" },
      { name: "Brother Laser Printers", image: canonPrintersStacked, note: "DCP-L2520D & similar models" },
    ],
  },
  {
    id: "networking-cctv",
    name: "Networking & CCTV",
    image: cctvCameraBoxes,
    description: "Routers, CCTV cameras and biometric attendance devices for homes, shops and offices.",
    items: [
      { name: "Dahua CCTV Cameras & DVRs", image: cctvCameraBoxes, note: "Dome, bullet & IP camera options" },
      { name: "Mantra Biometric Fingerprint Sensors", image: mantraFingerprintSensor, note: "MFS100 optical sensors" },
      { name: "Wi-Fi Routers & Networking Gear", image: cctvCameraBoxes, note: "Setup and configuration included" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories & Peripherals",
    image: keyboardMouseCombos,
    description: "Keyboards, mice, speakers, UPS units and everyday computer accessories.",
    items: [
      { name: "Keyboard & Mouse Combos", image: keyboardMouseCombos, note: "Logitech, Zebronics & Lapcare" },
      { name: "UPS & Power Backup", image: keyboardMouseCombos, note: "Zebronics & Microtek UPS units" },
      { name: "Speakers & Multimedia", image: keyboardMouseCombos, note: "Zebronics multimedia speaker sets" },
      { name: "Monitors", image: shelfLaptopsDesktops, note: "LED monitors — Zebster, Consistent & more" },
    ],
  },
  {
    id: "software",
    name: "Software & Components",
    image: softwareAntivirusShelf,
    description: "Genuine antivirus licenses, processors, storage and upgrade components.",
    items: [
      { name: "Quick Heal Total Security", image: softwareAntivirusShelf, note: "Genuine licensed antivirus" },
      { name: "K7 Total Security", image: softwareAntivirusShelf, note: "Genuine licensed antivirus" },
      { name: "Intel Processors", image: intelI5ProcessorBox, note: "10th Gen Core i3 / i5 and more" },
      { name: "SSDs & Hard Drives", image: intelI5ProcessorBox, note: "For upgrades and new builds" },
    ],
  },
];

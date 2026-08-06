import { buildWhatsAppUrl } from "@/lib/contact";

/** Core landing/i18n strings for en (nav, hero, features list, pricing, etc.). */
export const coreEn = {
  nav: {
    resources: "Resources",
    pricing: "Pricing",
    industries: "Industries",
    freeBarcode: "Free Barcode",
    login: "Login",
    blog: "Blog",
    articles: "Articles",
    features: {
      title: "Features",
      inventoryControl: "Inventory Control",
      barcoding: "Barcoding",
      purchaseSales: "Purchase & Sales",
      analyticsReporting: "Analytics & Reporting",
      warehouseControl: "Warehouse Control",
      qrCodeManagement: "QR Code Management",
      clothingManufacturing: "Clothing Manufacturing",
      equipmentManagement: "Equipment Management System with QR Code",
      factoryManagement: "Clothing Factory Management",
      inventoryApp: "Inventory Control App",
    },
  },
  hero: {
    title: "Stop losing sales because stock records do not match",
    description:
      "Organize inbound, outbound and counts with QR Code on mobile. Fewer balance errors, item-level traceability and a workflow teams actually use.",
    cta: "Start 7-day free trial",
    subtitle: "Starts With",
    subtitleHighlight: "Purple Stock",
    description2:
      "Centralize inventory with a traceable flow: who moved it, when and where. Leave spreadsheets without a giant system project.",
  },
  industries: {
    title: "Inventory Software for Your Industry",
    description:
      "Purple Stock's inventory management solution helps small businesses across all sectors save valuable time and money when it comes to organizing inventory and physical assets.",
    industries: {
      retail: "Retail",
      manufacturing: "Manufacturing",
      logistics: "Logistics",
      food: "Food",
      pharmaceutical: "Pharmaceutical",
      automotive: "Auto & Motorcycle Parts",
      construction: "Construction",
      technology: "Technology",
      audiovisual: "Audiovisual Production",
      events: "Events",
      odontologico: "Dental Equipment",
      telecomunicacoes: "Telecommunications",
      restaurantes: "Restaurants",
      electrical: "Electrical",
      fashion: "Fashion",
      beauty: "Beauty",
      commerce: "Commerce",
      education: "Education",
    },
  },
  trustedBy: {
    title: "Trusted by Market Leaders",
    description:
      "From retailers to manufacturers, we help businesses optimize their inventory control and drive growth.",
  },
  footer: {
    purpleStock: "Purple Stock",
    blog: "Blog",
    glossary: "Glossary",
    industries: "Industries",
    resources: "Resources",
    status: "Status",
  },
  features: {
    orderManagement: {
      title: "Streamlined Order Management",
      subtitle: "Optimize Your Purchase and Sales Processes",
      description: [
        "Create purchase orders, sales orders, and invoices directly in the app",
        "Intelligent planning with real-time inventory information",
        "Update inventory status with just one click",
      ],
    },
    barcode: {
      title: "Barcode Scanning",
      subtitle: "Speed Up Your Operations",
      description: [
        "Stock in and out with just a beep!",
        "Generate and print custom barcodes in Purple Stock",
      ],
    },
    security: {
      title: "Advanced Security",
      subtitle: "Custom Access Control",
      description: [
        "Assign roles with tiered access to inventory data",
        "Protect sensitive information and prevent errors with access control",
      ],
    },
    realTime: {
      title: "Real-Time Visibility",
      subtitle: "Instant Collaboration",
      description: [
        "Access inventory information from any device",
        "Real-time updated data for accurate decision making",
        "Single source of truth for all your inventory data",
      ],
    },
    inventoryLink: {
      title: "Secure Sharing",
      subtitle: "Connect with Partners",
      description: [
        "Securely share selected inventory information",
        "Improve efficiency by sharing real-time data",
        "Access inventory status anywhere, anytime",
      ],
    },
  },
  testimonials: [
    {
      quote:
        "Purple Stock revolutionized our inventory management. We now have total control over our stock.",
      company: "Women's Fashion Store",
      companyName: "Purchase Store",
    },
    {
      quote:
        "With Purple Stock, our production became much more organized and efficient. A real game-changer!",
      company: "Premium Door Manufacturer",
      companyName: "Concrem Portas",
    },
  ],
  glossary: {
    title: "Glossary of Terms for Small Businesses",
    description:
      "Our glossary explains important inventory management and accounting terms and acronyms, providing small businesses with the knowledge needed to optimize inventory processes, control costs, and enhance their finances.",
    learnMore: {
      title:
        "Want to learn more about growth strategies and best practices in inventory management?",
      description: "Check out the Purple Stock Blog below:",
      link: "Purple Stock Blog",
    },
  },
  pricing: {
    title: "Plans and Pricing",
    subtitle: "Choose the perfect plan for your business",
    plans: [
      {
        name: "Free",
        price: "$0.00",
        description: "To get started",
        features: ["Up to 10 items", "Basic analytics", "Email support"],
        buttonText: "Get Started",
        buttonLink: "https://app.purplestock.com.br/",
      },
      {
        name: "Pro",
        price: "$25.00",
        description: "Popular",
        features: [
          "Up to 100 items",
          "Advanced analytics",
          "Priority support",
          "Custom reports",
          "Email support",
        ],
        buttonText: "Upgrade Now",
        buttonLink: "https://app.purplestock.com.br/",
      },
      {
        name: "Enterprise",
        price: "Custom Price",
        description: "For large operations",
        features: [
          "Everything in Pro",
          "Unlimited items",
          "Dedicated support",
          "Custom integration",
          "SLA guarantee",
          "API access",
        ],
        buttonText: "Talk to Sales",
        buttonLink: buildWhatsAppUrl(
          "Hello! I'd like to know more about the enterprise plan."
        ),
      },
    ],
  },
} as const;

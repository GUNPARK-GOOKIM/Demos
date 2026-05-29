export type LayoutType = "vibrant" | "minimalist" | "kinetic" | "dashboard";
export type ComplexityTier = "Simple" | "Booking" | "Dashboard";

export type Template = {
  id: string;
  category: string;
  title: string;
  layoutType: LayoutType;
  complexityTier: ComplexityTier;
  calculatedPrice: string;
  summary: string;
  image: string;
  imageAlt: string;
  accent: string;
  location: string;
  filters: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  dashboardData?: {
    kpis: {
      label: string;
      value: string;
      delta: string;
    }[];
    revenue: {
      month: string;
      leads: number;
      revenue: number;
    }[];
    sources: {
      name: string;
      value: number;
    }[];
  };
};

const imageBase = "?auto=format&fit=crop&w=1600&q=85";

function image(id: string) {
  return `https://images.unsplash.com/${id}${imageBase}`;
}

export const templates: Template[] = [
  {
    id: "goa-resort-booking-system",
    category: "Travel / Resorts",
    title: "Goa Resort Booking System",
    layoutType: "vibrant",
    complexityTier: "Booking",
    calculatedPrice: "₹25,000",
    summary:
      "A vivid booking experience for resorts, stay packages, activities, and direct enquiry capture.",
    image: image("photo-1512343879784-a960bf40e7f2"),
    imageAlt: "Palm trees on a tropical beach",
    accent: "#ff6b35",
    location: "Goa",
    filters: ["Beachfront", "Weekend Offers", "Rooms", "Activities"],
    features: [
      "Availability-ready package cards",
      "Location and experience filters",
      "Gallery-led trust sections",
      "WhatsApp booking bridge"
    ],
    metrics: [
      { label: "Booking intent", value: "High" },
      { label: "Pages", value: "6+" },
      { label: "Best for", value: "Resorts" }
    ]
  },
  {
    id: "kerala-tour-package-vault",
    category: "Travel / Resorts",
    title: "Kerala Tour Package Vault",
    layoutType: "vibrant",
    complexityTier: "Booking",
    calculatedPrice: "₹25,000",
    summary:
      "A route-led package site for backwaters, Ayurveda, hill stations, and custom itineraries.",
    image: image("photo-1602216056096-3b40cc0c9944"),
    imageAlt: "Kerala backwater boat surrounded by palms",
    accent: "#14b8a6",
    location: "Kerala",
    filters: ["Itinerary", "Houseboat", "Ayurveda", "Family"],
    features: [
      "Day-wise package cards",
      "Trip type filtering",
      "Upsell modules for wellness add-ons",
      "Lead form and WhatsApp routing"
    ],
    metrics: [
      { label: "Lead quality", value: "Premium" },
      { label: "Routes", value: "8" },
      { label: "Best for", value: "Tour operators" }
    ]
  },
  {
    id: "clinic-trust-architecture",
    category: "Healthcare",
    title: "Clinic Trust Architecture",
    layoutType: "minimalist",
    complexityTier: "Simple",
    calculatedPrice: "₹8,000",
    summary:
      "A sterile, high-trust clinic website for treatment education, doctor credibility, and appointments.",
    image: image("photo-1629909613654-28e377c37b09"),
    imageAlt: "Modern dental clinic chair",
    accent: "#2563eb",
    location: "India",
    filters: ["Doctors", "Treatments", "Appointments", "Trust"],
    features: [
      "Treatment navigation",
      "Doctor profile architecture",
      "Appointment-first CTA flow",
      "Patient FAQ and proof blocks"
    ],
    metrics: [
      { label: "Trust depth", value: "Clinical" },
      { label: "Sections", value: "9" },
      { label: "Best for", value: "Clinics" }
    ]
  },
  {
    id: "real-estate-launchpad",
    category: "Real Estate",
    title: "Real Estate Launchpad",
    layoutType: "minimalist",
    complexityTier: "Booking",
    calculatedPrice: "₹25,000",
    summary:
      "A project launch site for builders, floor plans, brochure capture, and site visit bookings.",
    image: image("photo-1600585154340-be6161a56a0c"),
    imageAlt: "Modern residential house exterior",
    accent: "#a16207",
    location: "Metro India",
    filters: ["Brochure", "Floor Plans", "Site Visit", "Inventory"],
    features: [
      "Floor plan and amenity blocks",
      "Brochure capture CTAs",
      "Location proof panels",
      "Site visit request system"
    ],
    metrics: [
      { label: "Buyer intent", value: "High" },
      { label: "Inventory", value: "Live-ready" },
      { label: "Best for", value: "Builders" }
    ]
  },
  {
    id: "fitness-kinetic-sales-page",
    category: "Fitness",
    title: "Fitness Kinetic Sales Page",
    layoutType: "kinetic",
    complexityTier: "Simple",
    calculatedPrice: "₹8,000",
    summary:
      "A high-energy website for gyms, transformations, trial classes, and membership conversion.",
    image: image("photo-1534438327276-14e5300c3a48"),
    imageAlt: "Modern gym equipment",
    accent: "#ef4444",
    location: "Urban India",
    filters: ["Trial Class", "Membership", "Trainers", "Results"],
    features: [
      "Hard-border conversion sections",
      "Transformation proof panels",
      "Batch and membership blocks",
      "Bold WhatsApp CTA stack"
    ],
    metrics: [
      { label: "Energy", value: "Extreme" },
      { label: "CTA density", value: "High" },
      { label: "Best for", value: "Gyms" }
    ]
  },
  {
    id: "restaurant-social-engine",
    category: "Restaurants",
    title: "Restaurant Social Engine",
    layoutType: "kinetic",
    complexityTier: "Simple",
    calculatedPrice: "₹8,000",
    summary:
      "A loud, social-first restaurant website for reservations, menus, events, and local discovery.",
    image: image("photo-1517248135467-4c7edcad34c4"),
    imageAlt: "Elegant restaurant dining room",
    accent: "#f97316",
    location: "India",
    filters: ["Menu", "Reservations", "Events", "Directions"],
    features: [
      "Animated menu lanes",
      "Reservation-first layout",
      "Event and catering inquiry blocks",
      "Map and WhatsApp CTAs"
    ],
    metrics: [
      { label: "Footfall focus", value: "Local" },
      { label: "Menu blocks", value: "12" },
      { label: "Best for", value: "Cafes" }
    ]
  },
  {
    id: "sales-analytics-command-center",
    category: "Dashboards",
    title: "Sales Analytics Command Center",
    layoutType: "dashboard",
    complexityTier: "Dashboard",
    calculatedPrice: "₹50,000+",
    summary:
      "A functional analytics cockpit with KPI cards, pipeline charts, lead sources, and performance tables.",
    image: image("photo-1551288049-bebda4e38f71"),
    imageAlt: "Analytics dashboard on a laptop screen",
    accent: "#6d5dfc",
    location: "Cloud",
    filters: ["KPIs", "Revenue", "Lead Sources", "Pipeline"],
    features: [
      "KPI cards and trend deltas",
      "Mock revenue and lead charts",
      "Acquisition source visualization",
      "Dashboard-ready component architecture"
    ],
    metrics: [
      { label: "Data views", value: "6" },
      { label: "Charts", value: "3" },
      { label: "Best for", value: "Sales teams" }
    ],
    dashboardData: {
      kpis: [
        { label: "Qualified Leads", value: "1,284", delta: "+18.4%" },
        { label: "Pipeline Value", value: "₹42.8L", delta: "+12.7%" },
        { label: "Close Rate", value: "31%", delta: "+4.2%" },
        { label: "Avg. Response", value: "7m", delta: "-21%" }
      ],
      revenue: [
        { month: "Jan", leads: 82, revenue: 7.4 },
        { month: "Feb", leads: 98, revenue: 8.2 },
        { month: "Mar", leads: 124, revenue: 11.8 },
        { month: "Apr", leads: 142, revenue: 13.1 },
        { month: "May", leads: 188, revenue: 17.6 },
        { month: "Jun", leads: 214, revenue: 21.4 }
      ],
      sources: [
        { name: "WhatsApp", value: 38 },
        { name: "Search", value: 27 },
        { name: "Referral", value: 19 },
        { name: "Ads", value: 16 }
      ]
    }
  },
  {
    id: "operations-dashboard-vault",
    category: "Dashboards",
    title: "Operations Dashboard Vault",
    layoutType: "dashboard",
    complexityTier: "Dashboard",
    calculatedPrice: "₹50,000+",
    summary:
      "A command center for bookings, tasks, service queues, revenue, and executive reporting.",
    image: image("photo-1460925895917-afdab827c52f"),
    imageAlt: "Laptop showing business charts",
    accent: "#14b8a6",
    location: "Cloud",
    filters: ["Bookings", "Teams", "Revenue", "Tasks"],
    features: [
      "Operational KPI cards",
      "Service queue charts",
      "Team activity table",
      "Executive reporting surfaces"
    ],
    metrics: [
      { label: "Teams", value: "Multi" },
      { label: "Views", value: "8+" },
      { label: "Best for", value: "Operations" }
    ],
    dashboardData: {
      kpis: [
        { label: "Open Tasks", value: "328", delta: "-8.1%" },
        { label: "Bookings", value: "742", delta: "+22.3%" },
        { label: "SLA Score", value: "96%", delta: "+5.1%" },
        { label: "Revenue", value: "₹18.9L", delta: "+14.6%" }
      ],
      revenue: [
        { month: "Jan", leads: 64, revenue: 5.6 },
        { month: "Feb", leads: 88, revenue: 7.1 },
        { month: "Mar", leads: 104, revenue: 9.9 },
        { month: "Apr", leads: 136, revenue: 12.7 },
        { month: "May", leads: 164, revenue: 14.8 },
        { month: "Jun", leads: 192, revenue: 18.9 }
      ],
      sources: [
        { name: "Bookings", value: 42 },
        { name: "Support", value: 24 },
        { name: "Sales", value: 22 },
        { name: "Ops", value: 12 }
      ]
    }
  },
  {
    id: "mp-safari-booking",
    category: "Wildlife / Safari",
    title: "MP Safari Booking",
    layoutType: "vibrant",
    complexityTier: "Booking",
    calculatedPrice: "₹25,000",
    summary:
      "Immersive safari booking for Bandhavgarh, Kanha, Pench & Satpura — tiger sighting stats, park selector, WhatsApp booking.",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Tiger in Bandhavgarh National Park",
    accent: "#f59e0b",
    location: "Madhya Pradesh",
    filters: ["Bandhavgarh", "Kanha", "Pench", "Satpura"],
    features: [
      "Park selector with sighting stats",
      "Package cards with naturalist details",
      "Wildlife probability guide",
      "Seasonal chart",
      "WhatsApp booking bridge"
    ],
    metrics: [
      { label: "Sighting Rate", value: "94%" },
      { label: "Parks", value: "4" },
      { label: "Best for", value: "Wildlife" }
    ]
  }
];

export const capabilities = [
  "End-to-End Frontend Development",
  "Complex UI & Animation Engineering",
  "Custom Sales & Analytics Dashboards",
  "Seamless API & Backend Integrations"
];

export function getTemplate(id: string) {
  return templates.find((template) => template.id === id);
}

export function getTemplateHref(template: Template) {
  return `/demo/${template.id}`;
}

export function getWhatsAppHref(template: Template) {
  const message = `Hi Akshat, I am interested in building a website. I like the ${template.category} template named ${template.title}. The estimated price is ${template.calculatedPrice}. Let's discuss!`;
  return `https://wa.me/919285328987?text=${encodeURIComponent(message)}`;
}

export function getTemplateInquiryWebsiteType(template: Template) {
  const category = template.category.toLowerCase();
  if (category.includes("travel") || category.includes("resort") || category.includes("wildlife")) {
    return "Hotel / Resort Booking";
  }
  if (category.includes("real estate")) {
    return "Real Estate";
  }
  if (category.includes("restaurant")) {
    return "Restaurant / Cafe";
  }
  if (category.includes("health")) {
    return "Healthcare / Clinic";
  }
  if (category.includes("dashboard")) {
    return "SaaS / Dashboard";
  }
  return "Business / Corporate";
}

export function getTemplateInquiryBudgetRange(template: Template) {
  const hasPlus = template.calculatedPrice.includes("+");
  const firstAmount = template.calculatedPrice.match(/[\d,]+/)?.[0] ?? "0";
  const amount = Number(firstAmount.replace(/,/g, ""));

  if (hasPlus || amount >= 50000) {
    return "INR 60,000 - INR 1,00,000";
  }
  if (amount >= 25000) {
    return "INR 15,000 - INR 30,000";
  }
  if (amount >= 5000) {
    return "INR 5,000 - INR 15,000";
  }
  return "Not sure yet";
}

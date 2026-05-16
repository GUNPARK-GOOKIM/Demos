import Image from "next/image";
import { 
  MapPin, Check, Phone, Star, 
  Tent, Binoculars, Camera, Sun, 
  Compass, Leaf, CarFront, Coffee 
} from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;

const LODGES = [
  {
    name: "Savannah Canvas Tent",
    price: "$450",
    sub: "per night · all inclusive",
    image: img("photo-1523805009056-0eb009214b9c"),
    badge: "Authentic",
    badgeColor: "#6b7280",
    perks: ["Queen Bed", "Outdoor Shower", "River View", "Firepit"],
  },
  {
    name: "Acacia Luxury Suite",
    price: "$850",
    sub: "per night · game drives included",
    image: img("photo-1498307833015-e7b400441eb8"),
    badge: "Guest Favorite",
    badgeColor: "#8B5A2B",
    featured: true,
    perks: ["King Bed", "Plunge Pool", "Waterhole View", "Private Guide"],
  },
  {
    name: "Baobab Treehouse",
    price: "$1,200",
    sub: "per night · ultimate privacy",
    image: img("photo-1542640244-7e672d6cef4e"),
    badge: "Exclusive",
    badgeColor: "#4A5D23",
    perks: ["Star Bed", "Elevated Deck", "Telescope", "Butler Service"],
  },
];

const EXPERIENCES = [
  {
    name: "The Great Migration",
    duration: "4N / 5D",
    price: "$3,200",
    includes: ["Luxury Tent", "Daily 4x4 Drives", "Hot Air Balloon", "Bush Dinners"],
  },
  {
    name: "Photographer's Trail",
    duration: "5N / 6D",
    price: "$4,500",
    includes: ["Custom Safari Rig", "Pro Guide", "Editing Suite", "All Meals"],
  },
  {
    name: "Honeymoon Safari",
    duration: "3N / 4D",
    price: "$2,800",
    includes: ["Acacia Suite", "Couples Spa", "Private Sundowners", "Helicopter Ride"],
  },
];

const WILDLIFE_HIGHLIGHTS = [
  { icon: "🦁", text: "Big 5 Territory" },
  { icon: "🐘", text: "Elephant Herds" },
  { icon: "🐆", text: "Night Safaris" },
  { icon: "🦒", text: "Walking Trails" },
  { icon: "🦅", text: "Bird Watching" },
  { icon: "🍷", text: "Sundowner Drinks" },
  { icon: "🔥", text: "Boma Dinners" },
  { icon: "🚁", text: "Heli-Tours" },
];

const REVIEWS = [
  {
    name: "James & Sarah T.",
    city: "London, UK",
    stars: 5,
    text: "An unforgettable experience. Waking up to elephants drinking from the pool in front of our suite was surreal. The guides are incredibly knowledgeable.",
  },
  {
    name: "Elena M.",
    city: "New York, USA",
    stars: 5,
    text: "The perfect blend of rugged adventure and absolute luxury. The hot air balloon ride over the Serengeti at dawn left me speechless.",
  },
  {
    name: "David K.",
    city: "Sydney, AU",
    stars: 5,
    text: "Booking via WhatsApp was seamless. The staff went above and beyond for our anniversary, organizing a surprise bush dinner under the stars.",
  },
];

const AMENITY_ICONS = [
  { Icon: CarFront, label: "Open 4x4 Vehicles" },
  { Icon: Binoculars, label: "Expert Trackers" },
  { Icon: Tent, label: "Luxury Canvas" },
  { Icon: Camera, label: "Photo Hides" },
  { Icon: Compass, label: "Guided Walks" },
  { Icon: Leaf, label: "Eco-Friendly" },
];

export function SafariResortDemo({ template }: { template: Template }) {
  const whatsapp = getWhatsAppHref(template);

  return (
    <div style={{ background: "#F4F1E1", color: "#2C2C2C", fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        .safari-nav { padding: 0 40px; }
        .safari-nav-links { display: flex; gap: 32px; font-size: 14px; font-weight: 500; align-items: center; text-transform: uppercase; letter-spacing: 0.05em; }
        .safari-section { padding: 96px 40px; }
        .safari-gallery { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 240px; gap: 16px; }
        .safari-stats { padding: 32px 40px; gap: 64px; }
        .safari-hero-text { padding: 0 60px; }
        
        /* Serif font for elegant lodge feel */
        .heading-serif { font-family: "Georgia", "Times New Roman", serif; }
        
        /* Earthy transitions */
        .hover-fade { transition: opacity 0.3s ease, border-color 0.3s ease; }
        .hover-fade:hover { opacity: 0.9; border-color: #8B5A2B !important; }
        .hover-zoom img { transition: transform 0.7s ease; }
        .hover-zoom:hover img { transform: scale(1.08); }
        .btn-earth { transition: background 0.3s ease, transform 0.2s ease; }
        .btn-earth:hover { background: #3a481c !important; transform: translateY(-2px); }
        
        @media (max-width: 768px) {
          .safari-nav { padding: 16px !important; height: auto !important; flex-direction: column; gap: 16px !important; }
          .safari-nav-links { flex-wrap: wrap; justify-content: center; gap: 16px !important; }
          .safari-section { padding: 56px 20px !important; }
          .safari-gallery { grid-template-columns: 1fr 1fr !important; grid-auto-rows: 180px !important; }
          .safari-stats { padding: 24px !important; gap: 32px !important; flex-direction: column; align-items: center; }
          .safari-hero-text { padding: 0 24px !important; }
        }
      `}</style>

      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="safari-nav" style={{
        background: "#2C2C2C",
        color: "#F4F1E1",
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 72,
      }}>
        <div>
          <div className="heading-serif" style={{ fontSize: 22, fontWeight: 400, letterSpacing: "0.02em", color: "#D4AF37" }}>
            Mara Heritage
          </div>
          <div style={{ fontSize: 10, color: "#A3A3A3", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>
            Private Game Reserve
          </div>
        </div>
        <div className="safari-nav-links">
          {["Lodges", "Safaris", "Conservation", "Gallery"].map(link => (
            <span key={link} style={{ color: "#D1D5DB", cursor: "pointer", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#D4AF37"} onMouseOut={e => e.currentTarget.style.color = "#D1D5DB"}>{link}</span>
          ))}
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-earth"
            style={{
              background: "#4A5D23",
              color: "#F4F1E1",
              border: "1px solid #627A2F",
              padding: "10px 24px",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            RESERVE
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{ position: "relative", height: "85vh", minHeight: 600 }}>
        <Image
          src={img("photo-1516426122078-c23e76319801")} // Elephant / Savannah background
          alt="African Safari Landscape"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.4) 60%, transparent 100%)",
        }} />

        <div className="safari-hero-text" style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 800,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <Compass size={16} color="#D4AF37" />
            <span style={{ fontSize: 12, color: "#E5E7EB", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" }}>
              Serengeti National Park
            </span>
          </div>
          <h1 className="heading-serif" style={{
            fontSize: "clamp(48px, 7vw, 84px)",
            fontWeight: 400,
            color: "#F4F1E1",
            lineHeight: 1.05,
            marginBottom: 24,
          }}>
            Answer the Call <br />
            <span style={{ color: "#D4AF37", fontStyle: "italic" }}>of the Wild.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#D1D5DB", lineHeight: 1.6, marginBottom: 40, maxWidth: 500, fontWeight: 300 }}>
            Immerse yourself in untamed luxury. Experience daily game drives, majestic wildlife encounters, and nights under the African sky.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-earth"
              style={{
                background: "#8B5A2B", // Ochre
                color: "#FFF",
                padding: "16px 36px",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Phone size={16} />
              Inquire Now
            </a>
            <a
              href="#lodges"
              className="hover-fade"
              style={{
                background: "transparent",
                color: "#F4F1E1",
                border: "1px solid rgba(244,241,225,0.4)",
                padding: "16px 36px",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                backdropFilter: "blur(4px)",
              }}
            >
              Explore Lodges
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="safari-stats" style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#1E1E1E",
          borderTop: "1px solid #333",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {[
            { val: "10,000", label: "Acres of Reserve" },
            { val: "Big 5", label: "Wildlife Sightings" },
            { val: "12", label: "Exclusive Tents" },
            { val: "Awarded", label: "Eco-Lodge 2025" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="heading-serif" style={{ fontSize: 26, color: "#D4AF37", marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Highlights ─────────────────────────────────── */}
      <div style={{ background: "#3A481C", padding: "20px 40px", borderBottom: "4px solid #8B5A2B" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
        }}>
          {WILDLIFE_HIGHLIGHTS.map(h => (
            <div
              key={h.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "#E5E7EB",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ fontSize: 18 }}>{h.icon}</span>
              <span>{h.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lodges Section ─────────────────────────────────────── */}
      <div id="lodges" className="safari-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B5A2B", marginBottom: 16 }}>
              Accommodations
            </p>
            <h2 className="heading-serif" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#2C2C2C", marginBottom: 16 }}>
              Where Luxury Meets the Bush
            </h2>
            <div style={{ width: 60, height: 2, background: "#D4AF37", margin: "0 auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            {LODGES.map(lodge => (
              <div
                key={lodge.name}
                style={{
                  background: "#FFF",
                  border: lodge.featured ? "2px solid #8B5A2B" : "1px solid #E5E7EB",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ position: "relative", height: 260, overflow: "hidden" }} className="hover-zoom">
                  <Image
                    src={lodge.image}
                    alt={lodge.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: lodge.badgeColor,
                    color: "#FFF",
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                    {lodge.badge}
                  </div>
                </div>
                <div style={{ padding: 32 }}>
                  <h3 className="heading-serif" style={{ fontSize: 24, color: "#1A1A1A", marginBottom: 8 }}>{lodge.name}</h3>
                  <div style={{ fontSize: 20, fontWeight: 600, color: "#4A5D23", marginBottom: 4 }}>
                    {lodge.price}
                  </div>
                  <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 24, fontStyle: "italic" }}>{lodge.sub}</div>
                  
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: 12 }}>
                    {lodge.perks.map(p => (
                      <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#4B5563" }}>
                        <Leaf size={14} color="#8B5A2B" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-earth"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: lodge.featured ? "#8B5A2B" : "#2C2C2C",
                      color: "#FFF",
                      padding: "14px",
                      fontSize: 13,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                    }}
                  >
                    Check Availability
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Safaris & Expeditions ─────────────────────────────────────────── */}
      <div className="safari-section" style={{ background: "#2C2C2C", color: "#F4F1E1" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 16 }}>
              Curated Itineraries
            </p>
            <h2 className="heading-serif" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#FFF" }}>
              Safaris & Expeditions
            </h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {EXPERIENCES.map(exp => (
              <div
                key={exp.name}
                style={{
                  background: "#1E1E1E",
                  border: "1px solid #3F3F3F",
                  padding: 40,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#D4AF37", letterSpacing: "0.1em" }}>
                    {exp.duration}
                  </div>
                  <div style={{ fontSize: 24, color: "#FFF", className: "heading-serif" }}>
                    {exp.price}
                  </div>
                </div>
                <h3 className="heading-serif" style={{ fontSize: 28, color: "#FFF", marginBottom: 24 }}>{exp.name}</h3>
                
                <div style={{ borderTop: "1px solid #3F3F3F", paddingTop: 24, marginBottom: 32 }}>
                  {exp.includes.map(item => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontSize: 15, color: "#A3A3A3" }}
                    >
                      <Check size={16} color="#4A5D23" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-fade"
                  style={{
                    display: "block",
                    textAlign: "center",
                    border: "1px solid #D4AF37",
                    color: "#D4AF37",
                    padding: "12px",
                    fontSize: 13,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                  }}
                >
                  Request Itinerary
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Amenities Grid ───────────────────────────────────── */}
      <div className="safari-section">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="heading-serif" style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#2C2C2C", marginBottom: 16 }}>
              Lodge Amenities & Services
            </h2>
            <p style={{ color: "#6B7280" }}>Designed for absolute comfort in the heart of the wild.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
            {AMENITY_ICONS.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#EBE7D9",
                  padding: "32px 16px",
                  textAlign: "center",
                  border: "1px solid #DFD9C1",
                }}
              >
                <Icon size={32} color="#4A5D23" strokeWidth={1.5} />
                <div style={{ fontSize: 13, fontWeight: 600, color: "#2C2C2C", marginTop: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Masonry/Grid Gallery ──────────────────────────────────────────── */}
      <div className="safari-section" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="safari-gallery">
            {[
              { id: "photo-1614027164847-1b28cfe1df60", colSpan: "span 2", rowSpan: "span 2" }, // Lion
              { id: "photo-1547471080-7cb2ac6470b8", colSpan: "span 1", rowSpan: "span 1" }, // Giraffe
              { id: "photo-1534996924765-b54c72836267", colSpan: "span 1", rowSpan: "span 1" }, // Jeep
              { id: "photo-1518182170546-076616fd43ca", colSpan: "span 2", rowSpan: "span 1" }, // Landscape
            ].map((item, i) => (
              <div
                key={i}
                className="hover-zoom"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  gridColumn: item.colSpan,
                  gridRow: item.rowSpan,
                  background: "#2C2C2C",
                }}
              >
                <Image
                  src={img(item.id)}
                  alt={`Safari Experience ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", opacity: 0.9 }}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <div className="safari-section" style={{ background: "#EBE7D9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 className="heading-serif" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#2C2C2C" }}>
              Tales from the Bush
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {REVIEWS.map(r => (
              <div
                key={r.name}
                style={{
                  background: "#FFF",
                  padding: 40,
                  borderTop: "4px solid #8B5A2B",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, marginBottom: 32, fontStyle: "italic" }}>
                  "{r.text}"
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A", textTransform: "uppercase", letterSpacing: "0.05em" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>{r.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <div style={{ position: "relative", minHeight: 500, overflow: "hidden" }}>
        <Image
          src={img("photo-1523805009056-0eb009214b9c")} // Tent/Night shot
          alt="Safari Tent Night"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20, 25, 15, 0.8)", // Dark green/black overlay
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 24px",
        }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20 }}>
            Start Your Adventure
          </p>
          <h2 className="heading-serif" style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            color: "#FFF",
            marginBottom: 24,
            lineHeight: 1.1,
          }}>
            The Journey of a <br /> Lifetime Awaits
          </h2>
          <p style={{ fontSize: 18, color: "#D1D5DB", marginBottom: 40, maxWidth: 500, lineHeight: 1.6, fontWeight: 300 }}>
            Connect with our safari specialists on WhatsApp to tailor your perfect African expedition.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-earth"
            style={{
              background: "#25D366", // Keep WhatsApp color but tone the UI slightly
              color: "#fff",
              padding: "18px 40px",
              fontSize: 15,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Phone size={18} />
            Chat with a Guide
          </a>
        </div>
      </div>

    </div>
  );
}
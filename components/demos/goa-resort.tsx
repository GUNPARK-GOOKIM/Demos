import Image from "next/image";
import { MapPin, Check, Phone, Star, Waves, Utensils, Car, Wifi, Wind, Coffee } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;

const ROOMS = [
  {
    name: "Beach Deluxe Room",
    price: "₹6,500",
    sub: "per night · breakfast included",
    image: img("photo-1631049307264-da0ec9d70304"),
    badge: "Most Popular",
    badgeColor: "#0891b2",
    perks: ["King Bed", "Garden View", "38 sqm", "Private Balcony"],
  },
  {
    name: "Sea View Suite",
    price: "₹12,000",
    sub: "per night · all inclusive",
    image: img("photo-1571896349842-33c89424de2d"),
    badge: "Best Value",
    badgeColor: "#d97706",
    featured: true,
    perks: ["King Bed", "Ocean View", "62 sqm", "Jacuzzi + Butler"],
  },
  {
    name: "Private Pool Villa",
    price: "₹22,000",
    sub: "per night · all inclusive",
    image: img("photo-1613490493576-7fde63acd811"),
    badge: "Premium",
    badgeColor: "#7c3aed",
    perks: ["2 Bedrooms", "Private Pool", "120 sqm", "Chef on Call"],
  },
];

const PACKAGES = [
  {
    name: "Honeymoon Escape",
    nights: "2N / 3D",
    price: "₹18,000",
    includes: ["Sea View Suite", "Candlelight dinner", "Couple spa", "Sunset cruise"],
  },
  {
    name: "Family Fun Pack",
    nights: "3N / 4D",
    price: "₹28,000",
    includes: ["Pool Villa", "Kids club access", "Water sports", "All meals"],
  },
  {
    name: "Weekend Getaway",
    nights: "1N / 2D",
    price: "₹9,500",
    includes: ["Deluxe Room", "Breakfast", "Pool access", "Beach bonfire"],
  },
];

const HIGHLIGHTS = [
  { icon: "🏊", text: "Infinity Pool" },
  { icon: "🏖️", text: "Private Beach" },
  { icon: "🍽️", text: "Beach Restaurant" },
  { icon: "💆", text: "Ayurveda Spa" },
  { icon: "🏄", text: "Water Sports" },
  { icon: "🌅", text: "Sunset Cruises" },
  { icon: "🎵", text: "Live Music" },
  { icon: "🚗", text: "Airport Transfer" },
];

const REVIEWS = [
  {
    name: "Priya S.",
    city: "Mumbai",
    stars: 5,
    text: "Absolutely magical stay. Waking up to the ocean from our sea-view suite every morning was unlike anything else. Staff is genuinely world-class.",
  },
  {
    name: "Rahul & Anita K.",
    city: "Bangalore",
    stars: 5,
    text: "Perfect anniversary trip. The pool villa was a dream — private pool, chef on call, 2 minutes from the beach. Will be back every year.",
  },
  {
    name: "Vikram M.",
    city: "Delhi",
    stars: 5,
    text: "Best resort in North Goa, no contest. Booked directly on WhatsApp in minutes — instant confirmation and super responsive team.",
  },
];

const AMENITY_ICONS = [
  { Icon: Wifi, label: "High-Speed Wi-Fi" },
  { Icon: Utensils, label: "Multi-Cuisine Restaurant" },
  { Icon: Waves, label: "Beachfront Access" },
  { Icon: Wind, label: "Air Conditioning" },
  { Icon: Car, label: "Airport Transfers" },
  { Icon: Coffee, label: "Room Service 24/7" },
];

export function GoaResortDemo({ template }: { template: Template }) {
  const whatsapp = getWhatsAppHref(template);

  return (
    <div style={{ background: "#faf9f6", color: "#1c1917", fontFamily: "inherit" }}>

      {/* ── Resort Nav ─────────────────────────────────────── */}
      <nav style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "sticky",
        top: "4rem",
        zIndex: 30,
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
        gap: 16,
      }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-0.02em", color: "#0c4a6e", lineHeight: 1.1 }}>
            Sunset Cove Resort
          </div>
          <div style={{ fontSize: 10, color: "#64748b", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 1 }}>
            Calangute Beach · Goa
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, fontWeight: 600, alignItems: "center" }}>
          {["Rooms", "Packages", "Experiences", "Gallery"].map(link => (
            <span key={link} style={{ color: "#475569", cursor: "pointer" }}>{link}</span>
          ))}
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#0891b2",
              color: "#fff",
              borderRadius: 99,
              padding: "9px 20px",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{ position: "relative", height: "88vh", minHeight: 540, maxHeight: 780 }}>
        <Image
          src={img("photo-1512343879784-a960bf40e7f2")}
          alt="Sunset Cove Resort Goa beach"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)",
        }} />

        {/* Hero text */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 48px",
          maxWidth: 680,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 18 }}>
            <MapPin size={13} color="#7dd3fc" />
            <span style={{ fontSize: 11, color: "#bae6fd", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Calangute Beach, North Goa
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            marginBottom: 20,
          }}>
            Where the Sea<br />Meets Luxury.
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 36, maxWidth: 460 }}>
            Beachfront rooms, a private infinity pool, and curated experiences for those who deserve the best.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#f97316",
                color: "#fff",
                borderRadius: 99,
                padding: "15px 30px",
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Phone size={16} />
              Book via WhatsApp
            </a>
            <a
              href="#rooms"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: 99,
                padding: "15px 30px",
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                backdropFilter: "blur(8px)",
              }}
            >
              View Rooms ↓
            </a>
          </div>
        </div>

        {/* Stats overlay at bottom */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(12,26,46,0.72)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          justifyContent: "center",
          gap: 56,
          padding: "22px 40px",
          flexWrap: "wrap",
        }}>
          {[
            { val: "4.9 ★", label: "Guest Rating" },
            { val: "2,400+", label: "Happy Guests" },
            { val: "14 yrs", label: "Est. Since 2011" },
            { val: "3 min", label: "Walk to Beach" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>{s.val}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Highlights Strip ─────────────────────────────────── */}
      <div style={{ background: "#0c4a6e", padding: "26px 40px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}>
          {HIGHLIGHTS.map(h => (
            <div
              key={h.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 99,
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#e0f2fe",
              }}
            >
              <span>{h.icon}</span>
              <span>{h.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Rooms Section ─────────────────────────────────────── */}
      <div id="rooms" style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0891b2", marginBottom: 12 }}>
              STAY WITH US
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.035em", color: "#0c1a2e", marginBottom: 14 }}>
              Rooms & Villas
            </h2>
            <p style={{ fontSize: 16, color: "#64748b", maxWidth: 420, margin: "0 auto" }}>
              Every room faces the sea. Every detail is intentional.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {ROOMS.map(room => (
              <div
                key={room.name}
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: room.featured
                    ? "0 12px 48px rgba(8,145,178,0.2)"
                    : "0 2px 20px rgba(0,0,0,0.07)",
                  border: room.featured ? "2px solid #0891b2" : "1px solid rgba(0,0,0,0.07)",
                  transform: room.featured ? "scale(1.025)" : "none",
                }}
              >
                <div style={{ position: "relative", height: 220 }}>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: room.badgeColor,
                    color: "#fff",
                    borderRadius: 99,
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                  }}>
                    {room.badge}
                  </div>
                </div>
                <div style={{ padding: 26 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0c1a2e", marginBottom: 6 }}>{room.name}</h3>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#0891b2", letterSpacing: "-0.02em", marginBottom: 4 }}>
                    {room.price}
                  </div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20 }}>{room.sub}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                    {room.perks.map(p => (
                      <span
                        key={p}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          background: "#f0f9ff",
                          color: "#0369a1",
                          borderRadius: 99,
                          padding: "4px 11px",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        <Check size={10} />
                        {p}
                      </span>
                    ))}
                  </div>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: room.featured ? "#0891b2" : "#0c4a6e",
                      color: "#fff",
                      borderRadius: 12,
                      padding: "13px",
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Book This Room
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Packages ─────────────────────────────────────────── */}
      <div style={{ background: "#f0f9ff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0891b2", marginBottom: 12 }}>
              CURATED FOR YOU
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.035em", color: "#0c1a2e" }}>
              Stay Packages
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PACKAGES.map(pkg => (
              <div
                key={pkg.name}
                style={{
                  background: "#fff",
                  borderRadius: 22,
                  padding: 30,
                  border: "1px solid rgba(8,145,178,0.15)",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0891b2", marginBottom: 8, letterSpacing: "0.05em" }}>
                  {pkg.nights}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0c1a2e", marginBottom: 10 }}>{pkg.name}</h3>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#0c4a6e", letterSpacing: "-0.03em", marginBottom: 22 }}>
                  {pkg.price}
                </div>
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 18, marginBottom: 22 }}>
                  {pkg.includes.map(item => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 10,
                        fontSize: 14,
                        color: "#475569",
                      }}
                    >
                      <Check size={14} color="#0891b2" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#0c4a6e",
                    color: "#fff",
                    borderRadius: 12,
                    padding: "12px",
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Amenities Grid ───────────────────────────────────── */}
      <div style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0891b2", marginBottom: 12 }}>
              WORLD-CLASS FACILITIES
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.035em", color: "#0c1a2e" }}>
              Everything You Need
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {AMENITY_ICONS.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 18,
                  padding: "28px 20px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <Icon size={28} color="#0891b2" strokeWidth={1.5} />
                <div style={{ fontSize: 14, fontWeight: 600, color: "#334155", marginTop: 14 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div style={{ padding: "0 40px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0891b2", marginBottom: 12 }}>
              THE RESORT
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.035em", color: "#0c1a2e" }}>
              See It for Yourself
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 200px)", gap: 12 }}>
            {[
              { id: "photo-1540202404-b2dcfed05450", colSpan: "span 2" },
              { id: "photo-1582719478250-c89cae4dc85b", colSpan: "span 1" },
              { id: "photo-1574643156929-51e7b0ed5e21", colSpan: "span 1" },
              { id: "photo-1563911302283-d2bc129e7570", colSpan: "span 1" },
              { id: "photo-1521138054413-5bf321873abd", colSpan: "span 1" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  gridColumn: item.colSpan,
                }}
              >
                <Image
                  src={img(item.id)}
                  alt={`Resort photo ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <div style={{ background: "#f8fafc", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0891b2", marginBottom: 12 }}>
              GUEST STORIES
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.035em", color: "#0c1a2e" }}>
              What Our Guests Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {REVIEWS.map(r => (
              <div
                key={r.name}
                style={{
                  background: "#fff",
                  borderRadius: 22,
                  padding: 30,
                  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.75, marginBottom: 22 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 18 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0c1a2e" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{r.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <div style={{ position: "relative", minHeight: 420, overflow: "hidden" }}>
        <Image
          src={img("photo-1545579133-99bb5ad189be")}
          alt="Goa beach sunset"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(7,26,46,0.72)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 24px",
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#7dd3fc", marginBottom: 16 }}>
            YOUR STAY AWAITS
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 60px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.04em",
            marginBottom: 18,
            lineHeight: 1,
          }}>
            Ready for Your<br />Goa Escape?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", marginBottom: 36, maxWidth: 480, lineHeight: 1.6 }}>
            Message us on WhatsApp for instant booking, custom packages, and real-time availability.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              borderRadius: 99,
              padding: "17px 38px",
              fontSize: 16,
              fontWeight: 800,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Phone size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}
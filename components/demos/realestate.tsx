import Image from "next/image";
import { 
  MapPin, Phone, ArrowUpRight, 
  BedDouble, Bath, Square, 
  Search, SlidersHorizontal, User,
  Shield, Key, Building, Check, Star, Quote
} from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;

const HIGHLIGHTS = [
  "Off-Market Access", "Global Network", "Discrete Transactions", 
  "Architectural Experts", "In-House Legal", "Concierge Service"
];

const PROPERTIES = [
  {
    id: "01",
    name: "The Glass Pavilion",
    price: "$4,250,000",
    address: "90210 Beverly Hills, CA",
    image: img("photo-1600596542815-ffad4c1539a9"),
    stats: { beds: 5, baths: 6.5, sqft: "7,200" },
    desc: "A masterclass in modern architecture. Floor-to-ceiling glass walls seamlessly blend the indoor living space with the panoramic canyon views.",
  },
  {
    id: "02",
    name: "Tribeca Loft",
    price: "$2,800,000",
    address: "10013 Lower Manhattan, NY",
    image: img("photo-1600607687920-4e2a09cf159d"),
    stats: { beds: 3, baths: 3, sqft: "3,400" },
    desc: "Exposed brick, soaring 15-foot ceilings, and original cast-iron columns define this meticulously restored pre-war loft.",
  },
];

const SERVICES = [
  {
    title: "Buyer Representation",
    fee: "Standard Commission",
    includes: ["Private property tours", "Off-market intelligence", "Negotiation strategy", "Escrow management"],
  },
  {
    title: "Listing & Marketing",
    fee: "Custom Retainer",
    includes: ["Cinematic video tours", "Global PR distribution", "Staging consultation", "Targeted ad campaigns"],
  },
  {
    title: "Investment Advisory",
    fee: "Performance Based",
    includes: ["Yield analysis", "Portfolio diversification", "Commercial acquisitions", "Tax strategy intro"],
  },
];

const AMENITIES = [
  { Icon: Key, label: "Turnkey Properties" },
  { Icon: Shield, label: "Secure Escrow" },
  { Icon: Building, label: "Urban & Suburban" },
  { Icon: Square, label: "Land Development" },
  { Icon: MapPin, label: "Relocation Services" },
  { Icon: User, label: "Private Showings" },
];

const TESTIMONIALS = [
  {
    name: "Eleanor & James V.",
    type: "Sellers",
    text: "They redefined the process. Sold our mid-century modern home in 4 days at 15% over asking. The marketing materials belonged in Architectural Digest.",
  },
  {
    name: "Marcus T.",
    type: "Investor",
    text: "I rely entirely on their off-market network. The last three properties I acquired through Aura never even hit the public MLS. Peerless execution.",
  },
];

export function RealEstateBoutiqueDemo({ template }: { template: Template }) {
  const whatsapp = getWhatsAppHref(template);

  return (
    <div style={{ background: "#FAFAFA", color: "#111111", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <style>{`
        .re-container { max-width: 1440px; margin: 0 auto; }
        .font-mono { font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; }
        .text-accent { color: #8C7A51; } 
        
        .border-b { border-bottom: 1px solid #E5E5E5; }
        .border-r { border-right: 1px solid #E5E5E5; }
        .border-l { border-left: 1px solid #E5E5E5; }
        .border-t { border-top: 1px solid #E5E5E5; }
        
        .btn-sharp {
          display: inline-flex; align-items: center; gap: 12px;
          background: #111; color: #FFF; padding: 16px 32px;
          font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;
          text-decoration: none; transition: background 0.3s;
        }
        .btn-sharp:hover { background: #8C7A51; }
        
        .btn-outline {
          display: inline-flex; align-items: center; gap: 12px;
          background: transparent; color: #111; border: 1px solid #111;
          padding: 16px 32px; font-size: 14px; text-transform: uppercase;
          letter-spacing: 0.05em; text-decoration: none; transition: background 0.3s, color 0.3s;
        }
        .btn-outline:hover { background: #111; color: #FFF; }

        .image-hover-zoom { overflow: hidden; }
        .image-hover-zoom img { transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .image-hover-zoom:hover img { transform: scale(1.05); }

        .marquee-container { display: flex; overflow: hidden; background: #111; color: #FFF; padding: 16px 0; border-top: 1px solid #333; border-bottom: 1px solid #333; }
        .marquee-content { display: flex; animation: marquee 20s linear infinite; white-space: nowrap; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .zero-gap-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .zero-gap-item { position: relative; aspect-ratio: 1/1; border-right: 1px solid #FFF; border-bottom: 1px solid #FFF; }

        @media (max-width: 1024px) {
          .hero-split { flex-direction: column; }
          .hero-text, .hero-image { width: 100% !important; border-right: none !important; }
          .hero-image { height: 50vh !important; border-top: 1px solid #E5E5E5; }
          .zigzag-row { flex-direction: column !important; }
          .zigzag-image, .zigzag-content { width: 100% !important; border-left: none !important; border-right: none !important; }
          .zigzag-content { padding: 40px 24px !important; }
          .hide-mobile { display: none !important; }
          .zero-gap-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Nav ───────────────────────────── */}
      <nav className="border-b" style={{ background: "#FFF", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="re-container" style={{ display: "flex", height: 80 }}>
          <div className="border-r" style={{ width: 300, display: "flex", alignItems: "center", padding: "0 40px" }}>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
              Aura <span className="text-accent">Estates</span>
            </span>
          </div>
          <div className="hide-mobile" style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 40px", gap: 40 }}>
            {["Properties", "Services", "Portfolio", "Journal"].map(link => (
              <a key={link} href="#" style={{ color: "#666", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}>{link}</a>
            ))}
          </div>
          <div className="border-l" style={{ display: "flex" }}>
            <a href={whatsapp} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 40px", background: "#111", color: "#FFF", textDecoration: "none", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <Phone size={16} /> Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero (Split Screen) ─────────────────── */}
      <div className="re-container border-b hero-split" style={{ display: "flex", background: "#FFF" }}>
        <div className="hero-text border-r" style={{ width: "45%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 40px", position: "relative" }}>
          <div className="font-mono text-accent" style={{ fontSize: 12, marginBottom: 24, letterSpacing: "0.1em" }}>
            [ EST. 2004 — LUXURY BROKERAGE ]
          </div>
          <h1 style={{ fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 32, color: "#111" }}>
            Curating <br />
            Architectural <br />
            Significance.
          </h1>
          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.5, maxWidth: 400, marginBottom: 48 }}>
            Representing the most exceptional properties across global markets. Real estate, elevated to an art form.
          </p>

          <div style={{ display: "flex", border: "1px solid #111", height: 60, maxWidth: 480 }}>
            <div style={{ display: "flex", alignItems: "center", padding: "0 20px", borderRight: "1px solid #111" }}>
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Location or Property ID..." 
              style={{ flex: 1, border: "none", outline: "none", padding: "0 20px", fontSize: 14, background: "transparent" }}
              disabled
            />
            <button style={{ background: "#111", color: "#FFF", border: "none", padding: "0 24px", cursor: "pointer", display: "flex", alignItems: "center" }}>
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>

        <div className="hero-image" style={{ width: "55%", position: "relative", minHeight: "80vh" }}>
          <Image
            src={img("photo-1512917774080-9991f1c4c750")}
            alt="Hero Architectural Property"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
          <div className="hide-mobile" style={{ position: "absolute", bottom: 40, right: 40, background: "#FFF", padding: 24, border: "1px solid #E5E5E5", width: 280 }}>
            <div className="font-mono text-accent" style={{ fontSize: 11, marginBottom: 8 }}>PORTFOLIO VALUE</div>
            <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: "-0.03em" }}>$2.4 Billion</div>
            <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>Active listings worldwide</div>
          </div>
        </div>
      </div>

      {/* ── Highlights Marquee (Replaces Goa Highlight Strip) ──────────────── */}
      <div className="marquee-container">
        <div className="marquee-content font-mono" style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {[...HIGHLIGHTS, ...HIGHLIGHTS, ...HIGHLIGHTS].map((text, i) => (
            <span key={i} style={{ margin: "0 40px", display: "flex", alignItems: "center", gap: 20 }}>
              {text} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Zig-Zag Properties (Replaces Goa Rooms) ──────────────────────── */}
      <div className="re-container" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ padding: "0 40px", marginBottom: 60, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.03em" }}>Selected Works</h2>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROPERTIES.map((prop, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={prop.id} className="zigzag-row border-t border-b" style={{ display: "flex", flexDirection: isEven ? "row" : "row-reverse", background: "#FFF", marginTop: -1 }}>
                
                <div className="zigzag-image image-hover-zoom border-r border-l" style={{ width: "60%", position: "relative", minHeight: 600 }}>
                  <Image src={prop.image} alt={prop.name} fill style={{ objectFit: "cover" }} sizes="(min-width: 1024px) 60vw, 100vw" />
                  <div style={{ position: "absolute", top: 24, left: 24, background: "#111", color: "#FFF", padding: "8px 16px", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Listing No. {prop.id}
                  </div>
                </div>

                <div className="zigzag-content" style={{ width: "40%", padding: "60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div className="font-mono text-accent" style={{ fontSize: 12, marginBottom: 16 }}>{prop.address}</div>
                  <h3 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
                    {prop.name}
                  </h3>
                  <div style={{ fontSize: 24, fontWeight: 300, color: "#666", marginBottom: 32 }}>
                    {prop.price}
                  </div>
                  
                  <p style={{ fontSize: 15, color: "#444", lineHeight: 1.6, marginBottom: 40 }}>
                    {prop.desc}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "24px 0", marginBottom: 40 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}><BedDouble size={16} className="text-accent" /><span style={{ fontSize: 14 }}>{prop.stats.beds} Beds</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Bath size={16} className="text-accent" /><span style={{ fontSize: 14 }}>{prop.stats.baths} Baths</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Square size={16} className="text-accent" /><span style={{ fontSize: 14 }}>{prop.stats.sqft} Sqft</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}><MapPin size={16} className="text-accent" /><span style={{ fontSize: 14 }}>Prime Loc.</span></div>
                  </div>

                  <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-outline" style={{ alignSelf: "flex-start" }}>
                    Request Details <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Services (Replaces Goa Packages) ──────────────────────── */}
      <div className="border-t border-b" style={{ background: "#111", color: "#FFF" }}>
        <div className="re-container" style={{ padding: "80px 40px" }}>
          <div className="font-mono text-accent" style={{ fontSize: 12, marginBottom: 16, letterSpacing: "0.1em" }}>OUR EXPERTISE</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: 60 }}>
            Comprehensive Advisory
          </h2>
          
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {SERVICES.map(srv => (
              <div key={srv.title} style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 32 }}>
                <div className="font-mono text-accent" style={{ fontSize: 12, marginBottom: 12 }}>{srv.fee}</div>
                <h3 style={{ fontSize: 24, fontWeight: 400, marginBottom: 24 }}>{srv.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {srv.includes.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "#999" }}>
                      <Check size={16} color="#8C7A51" style={{ marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Amenities Grid (Replaces Goa Amenities) ─────────────────── */}
      <div className="re-container" style={{ padding: "80px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "#E5E5E5", border: "1px solid #E5E5E5" }}>
          {AMENITIES.map(({ Icon, label }) => (
            <div key={label} style={{ background: "#FFF", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <Icon size={28} className="text-accent" strokeWidth={1.5} />
              <div className="font-mono" style={{ fontSize: 12, color: "#111", marginTop: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cinematic Zero-Gap Gallery (Replaces Goa Gallery) ────────────── */}
      <div className="border-t border-b">
        <div style={{ padding: "80px 40px 40px 40px", maxWidth: 1440, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.03em" }}>The Aesthetic</h2>
        </div>
        <div className="zero-gap-grid">
          {[
            "photo-1600210492486-724fe5c67fb0",
            "photo-1600566753190-17f0baa2a6c3",
            "photo-1600210491369-e753d80a41f3",
            "photo-1600585154340-be6161a56a0c"
          ].map((id, i) => (
            <div key={i} className="zero-gap-item image-hover-zoom">
              <Image src={img(id)} alt="Gallery Image" fill style={{ objectFit: "cover" }} sizes="25vw" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonials (Replaces Goa Reviews) ───────────────────────── */}
      <div className="re-container" style={{ padding: "80px 40px" }}>
        <div className="font-mono text-accent" style={{ fontSize: 12, marginBottom: 16, letterSpacing: "0.1em" }}>CLIENT PERSPECTIVES</div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: 60 }}>
          Reputation is Everything.
        </h2>
        
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {TESTIMONIALS.map(r => (
            <div key={r.name} style={{ border: "1px solid #E5E5E5", padding: 40, background: "#FFF" }}>
              <Quote size={32} color="#E5E5E5" style={{ marginBottom: 24 }} />
              <p style={{ fontSize: 18, color: "#111", lineHeight: 1.6, marginBottom: 32, fontStyle: "italic" }}>
                "{r.text}"
              </p>
              <div className="border-t" style={{ paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>{r.name}</div>
                  <div className="font-mono text-accent" style={{ fontSize: 11, marginTop: 4 }}>{r.type}</div>
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#8C7A51" color="#8C7A51" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Final CTA (Replaces Goa Final CTA) ────────────────────────── */}
      <div style={{ position: "relative", minHeight: 500, display: "flex", alignItems: "center" }}>
        <Image
          src={img("photo-1600607687644-aac4c3eac7f4")}
          alt="Nighttime Property"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(17, 17, 17, 0.85)" }} />
        
        <div className="re-container" style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 40px", textAlign: "center" }}>
          <div className="font-mono text-accent" style={{ fontSize: 12, marginBottom: 24, letterSpacing: "0.1em" }}>INITIATE CONTACT</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#FFF", letterSpacing: "-0.03em", marginBottom: 32 }}>
            Your Next Acquisition <br /> Begins Here.
          </h2>
          <p style={{ fontSize: 16, color: "#999", marginBottom: 48, maxWidth: 500, margin: "0 auto 48px auto", lineHeight: 1.6 }}>
            Our principals are available for private consultations. Reach out via WhatsApp for immediate, confidential correspondence.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "#FFF", color: "#111", padding: "18px 40px",
              fontSize: 14, fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "0.05em", textDecoration: "none", transition: "all 0.3s"
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#8C7A51"; e.currentTarget.style.color = "#FFF"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#FFF"; e.currentTarget.style.color = "#111"; }}
          >
            <Phone size={18} />
            Connect via WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}
"use client";
import { useState } from "react";
import { Phone, Star, ChevronDown, Clock, MapPin, UtensilsCrossed } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const MENU_CATS = [
  {
    cat: "Starters", emoji: "🥗",
    items: [
      { name: "Truffle Burrata", desc: "Fresh burrata, black truffle oil, heirloom tomatoes, basil oil", price: "₹520", tag: "Chef's Pick", img: "photo-1546069901-ba9599a7e63c" },
      { name: "Seared Scallops", desc: "Pan-seared diver scallops, cauliflower purée, micro herbs, citrus beurre blanc", price: "₹680", tag: null, img: "photo-1559410545-0bdcd187e0a6" },
      { name: "Crispy Chilli Paneer", desc: "Schezwan-glazed paneer, compressed cucumber, sesame, spring onion ash", price: "₹380", tag: "Bestseller", img: "photo-1565557623262-b51c2513a641" },
      { name: "Smoked Salmon Tartare", desc: "Cold-smoked salmon, crème fraîche, capers, dill, rye croutons", price: "₹560", tag: null, img: "photo-1519708227418-c8fd9a32b7a2" },
    ]
  },
  {
    cat: "Mains", emoji: "🍝",
    items: [
      { name: "Wagyu Short Rib", desc: "48-hr braised Wagyu, truffle mash, roasted bone marrow, red wine reduction", price: "₹1,800", tag: "Chef's Pick", img: "photo-1544025162-d76694265947" },
      { name: "Wild Mushroom Risotto", desc: "Arborio rice, porcini, aged parmesan, black truffle shavings, chive oil", price: "₹780", tag: null, img: "photo-1476124369491-e7addf5db371" },
      { name: "Herb-Crusted Sea Bass", desc: "Market-fresh sea bass, lemon butter sauce, sautéed asparagus, caper berry", price: "₹1,200", tag: "Seasonal", img: "photo-1519984388953-d2406bc725e1" },
      { name: "Slow-Braised Lamb Shank", desc: "8-hr braised lamb, pomme purée, gremolata, rosemary jus", price: "₹1,400", tag: null, img: "photo-1529692236671-f1f6cf9683ba" },
    ]
  },
  {
    cat: "Desserts", emoji: "🍰",
    items: [
      { name: "Burnt Basque Cheesecake", desc: "Classic Basque, seasonal berry coulis, vanilla crème fraîche", price: "₹380", tag: "Bestseller", img: "photo-1571115177098-24ec42ed204d" },
      { name: "Dark Chocolate Fondant", desc: "70% Valrhona, salted caramel ice cream, hazelnut praline", price: "₹420", tag: "Chef's Pick", img: "photo-1624353365286-3f8d62daad51" },
      { name: "Deconstructed Gulab Jamun", desc: "Rose reduction, cardamom cream, pistachio crumble, saffron gel", price: "₹340", tag: "Seasonal", img: "photo-1488477181946-6428a0291777" },
    ]
  },
];

const EVENTS = [
  { emoji: "🎷", name: "Jazz & Dinner Night", day: "Every Friday", time: "8 PM – 11 PM", desc: "Live jazz quartet, cocktail specials, and a curated 4-course menu designed around the music.", color: "#a78bfa" },
  { emoji: "🥂", name: "Sunday Champagne Brunch", day: "Every Sunday", time: "11 AM – 3 PM", desc: "Unlimited spread, free-flow mimosas and prosecco, live DJ from 12 PM. Walk-ins welcome.", color: "#f59e0b" },
  { emoji: "👨‍🍳", name: "Chef's Table Experience", day: "Last Saturday Monthly", time: "7:30 PM Sharp", desc: "10-course tasting menu, limited to 8 guests. Wine pairing optional. Book 2 weeks ahead.", color: "#f97316" },
];

const GALLERY = [
  u("photo-1414235077428-338989a2e8c0"),
  u("photo-1559339352-11d035aa65de"),
  u("photo-1565299585323-38d6b0865b47"),
  u("photo-1481931098730-318b6f776db0"),
  u("photo-1424847651672-bf20a4b0982b"),
  u("photo-1544148103-0773bf10d330"),
];

const REVIEWS = [
  { n: "Natasha G.", c: "Regular Guest", s: 5, t: "The wagyu short rib is the best thing I've eaten in Bangalore this year. Impeccable service, stunning ambience. Already booked for next month." },
  { n: "Farhan & Tanya", c: "Anniversary Dinner", s: 5, t: "Chef's table was an absolute dream — 10 courses, personal explanations, wine pairing. Nothing like it anywhere in the city." },
  { n: "Ananya R.", c: "Sunday Brunch Regular", s: 5, t: "Sunday brunch is worth every rupee. The free-flow mimosas, the DJ, the food — it's the best way to spend a Sunday in Bangalore." },
];

const FAQS = [
  { q: "Do I need a reservation?", a: "Walk-ins are welcome for bar seating and lunch. For dinner and weekends, we strongly recommend booking via WhatsApp — we fill up fast." },
  { q: "Is there a dress code?", a: "Smart casual. We ask guests to avoid beachwear, shorts, or sportswear for dinner service. No strict formal requirement." },
  { q: "Do you accommodate dietary restrictions?", a: "Absolutely — vegan, gluten-free, Jain, and nut-free menus available. Please mention when booking so our kitchen can prepare." },
  { q: "Is parking available?", a: "Yes — 3-level basement parking with 200+ spots. Valet service available for dinner from 7 PM onwards." },
];

export function RestaurantDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [activeCat, setActiveCat] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "inherit", background: "#0c0a06", color: "#f0ebe0" }}>
      <style>{`
        .rt *{box-sizing:border-box}
        .rt-link{color:#8a7660;cursor:pointer;transition:color .2s,transform .2s;display:inline-block}
        .rt-link:hover{color:#f97316;transform:translateY(-1px)}
        .rt-cta{transition:transform .22s,box-shadow .22s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800;cursor:pointer}
        .rt-cta:hover{transform:translateY(-3px) scale(1.03)}
        .rt-cat-btn{transition:all .2s;cursor:pointer;border:none}
        .rt-cat-btn:hover{border-color:rgba(249,115,22,.4)!important;color:#f0ebe0!important}
        .rt-cat-btn.active{background:rgba(249,115,22,.1)!important;border-color:#f97316!important;color:#f97316!important}
        .rt-item{transition:background .2s,transform .2s;cursor:default}
        .rt-item:hover{background:rgba(249,115,22,.04)!important;transform:translateX(5px)}
        .rt-event{transition:transform .3s cubic-bezier(.34,1.56,.64,1),border-color .2s;cursor:pointer}
        .rt-event:hover{transform:translateY(-8px) scale(1.015)}
        .rt-gal{overflow:hidden;border-radius:12px;cursor:pointer}
        .rt-gal img{transition:transform .5s cubic-bezier(.25,.46,.45,.94);display:block;width:100%;height:100%;object-fit:cover}
        .rt-gal:hover img{transform:scale(1.1)}
        .rt-rv{transition:transform .22s,box-shadow .22s}
        .rt-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.5)!important}
        .rt-faq{transition:background .2s,border-color .2s;cursor:pointer}
        .rt-faq:hover{background:rgba(249,115,22,.04)!important;border-color:rgba(249,115,22,.3)!important}
        .rt-wa{transition:transform .22s,box-shadow .22s!important}
        .rt-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        @media(max-width:768px){
          .rt-nav-links{display:none!important}
          .rt-hero-h1{font-size:40px!important;line-height:1!important}
          .rt-section{padding:52px 20px!important}
          .rt-hero-pad{padding:20px 20px 80px!important}
          .rt-stats{gap:16px!important;flex-wrap:wrap;padding:16px 20px!important}
          .rt-cat-tabs{flex-wrap:wrap!important}
          .rt-grid-3{grid-template-columns:1fr!important}
          .rt-gal-grid{grid-template-columns:1fr 1fr!important}
          .rt-about-inner{grid-template-columns:1fr!important}
          .rt-about-img{display:none!important}
          .rt-h2{font-size:28px!important}
          .rt-info-strip{flex-wrap:wrap!important;gap:12px!important}
        }
      `}</style>

      <div className="rt">
        <nav style={{ background: "rgba(12,10,6,.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(249,115,22,.12)", position: "sticky", top: "4rem", zIndex: 30, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#f0ebe0", fontStyle: "italic", letterSpacing: "-0.01em" }}>Ember &amp; Oak</div>
            <div style={{ fontSize: 10, color: "#f97316", letterSpacing: "0.15em", textTransform: "uppercase" }}>Fine Dining · Indiranagar, Bangalore</div>
          </div>
          <div className="rt-nav-links" style={{ display: "flex", gap: 28, fontSize: 13, fontWeight: 600, alignItems: "center" }}>
            {["Menu", "Events", "Gallery", "About"].map(l => <span key={l} className="rt-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="rt-cta" style={{ background: "#f97316", color: "#fff", borderRadius: 8, padding: "10px 22px", fontSize: 13 }}>Reserve a Table</a>
          </div>
        </nav>

        <div style={{ position: "relative", height: "92vh", minHeight: 540, maxHeight: 880 }}>
          <img src={u("photo-1517248135467-4c7edcad34c4")} alt="Ember & Oak" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(5,3,0,.95) 0%,rgba(5,3,0,.55) 40%,rgba(5,3,0,.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%,rgba(249,115,22,.06) 0%,transparent 60%)" }} />
          <div className="rt-hero-pad" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 60px 80px", maxWidth: 780 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,.1)", border: "1px solid rgba(249,115,22,.2)", borderRadius: 99, padding: "5px 16px", marginBottom: 20 }}>
              <Star size={12} fill="#f97316" color="#f97316" />
              <span style={{ fontSize: 11, color: "#fb923c", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>4.9 Rating · Opened 2018 · Zomato Gold</span>
            </div>
            <h1 className="rt-hero-h1" style={{ fontSize: "clamp(40px,6.5vw,82px)", fontWeight: 900, color: "#fff", lineHeight: .88, letterSpacing: "-0.05em", marginBottom: 22, fontStyle: "italic" }}>
              Where Every<br />Meal Becomes<br /><span style={{ color: "#f97316" }}>a Memory.</span>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", lineHeight: 1.72, marginBottom: 36, maxWidth: 500 }}>Modern European cuisine with an Indian soul. Craft cocktails, live jazz on Fridays, and a kitchen that never compromises on quality.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href={wa} target="_blank" rel="noreferrer" className="rt-cta" style={{ background: "#f97316", color: "#fff", borderRadius: 8, padding: "16px 32px", fontSize: 15, boxShadow: "0 4px 20px rgba(249,115,22,.4)" }}><Phone size={16} />Reserve a Table</a>
              <div style={{ display: "flex", gap: 20, color: "rgba(255,255,255,.65)", fontSize: 13, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Clock size={14} />Noon – 11 PM Daily</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><MapPin size={14} />12th Main, Indiranagar</span>
              </div>
            </div>
          </div>
          <div className="rt-stats" style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(5,3,0,.88)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(249,115,22,.12)", display: "flex", justifyContent: "center", gap: 52, padding: "22px 40px" }}>
            {[["4.9 ★", "Guest Rating"], ["6 yrs", "Est. 2018"], ["200+", "Covers Nightly"], ["40+", "Menu Items"]].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#f97316" }}>{v}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.45)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.12em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rt-info-strip" style={{ background: "#141008", borderBottom: "1px solid rgba(249,115,22,.1)", padding: "18px 40px", display: "flex", justifyContent: "center", gap: 40, fontSize: 13, fontWeight: 600, color: "#8a7660", flexWrap: "wrap" }}>
          {[["🕐", "Mon–Sun: 12 PM – 11 PM (Last Order 10:30)"], ["📍", "12th Main Rd, Indiranagar, Bengaluru 560038"], ["📞", "+91 98765 43210"], ["💳", "All Cards · UPI · Amex Accepted"]].map(([e, t]) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>{e} {t}</span>
          ))}
        </div>

        <div id="menu" className="rt-section" style={{ padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f97316", marginBottom: 14 }}>OUR MENU</p>
              <h2 className="rt-h2" style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 900, color: "#f0ebe0", letterSpacing: "-0.04em", fontStyle: "italic", marginBottom: 14 }}>What We Serve</h2>
              <p style={{ fontSize: 15, color: "#8a7660" }}>Seasonal menu — updated monthly. All dishes made to order.</p>
            </div>
            <div className="rt-cat-tabs" style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40 }}>
              {MENU_CATS.map((c, i) => (
                <button key={i} onClick={() => setActiveCat(i)} className={`rt-cat-btn${activeCat === i ? " active" : ""}`} style={{ background: "transparent", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 28px", color: "#8a7660", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                  {c.emoji} {c.cat}
                </button>
              ))}
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              {MENU_CATS.map((cat, ci) => ci === activeCat && (
                <div key={ci} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="rt-item" style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px", borderRadius: 14, borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                      <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", flexShrink: 0, background: "#1a1410" }}>
                        <img src={`https://images.unsplash.com/${item.img}?auto=format&fit=crop&w=200&q=75`} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .4s cubic-bezier(.25,.46,.45,.94)" }}
                          onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.12)"}
                          onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5, flexWrap: "wrap" }}>
                          <div style={{ fontWeight: 700, fontSize: 15, color: "#f0ebe0" }}>{item.name}</div>
                          {item.tag && <span style={{ background: "rgba(249,115,22,.12)", color: "#f97316", borderRadius: 6, padding: "2px 9px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{item.tag}</span>}
                        </div>
                        <div style={{ fontSize: 13, color: "#8a7660", lineHeight: 1.55 }}>{item.desc}</div>
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#f97316", whiteSpace: "nowrap", flexShrink: 0 }}>{item.price}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href={wa} target="_blank" rel="noreferrer" className="rt-cta" style={{ background: "transparent", color: "#f97316", border: "1px solid rgba(249,115,22,.3)", borderRadius: 8, padding: "13px 28px", fontSize: 14, fontWeight: 700 }}>View Full Menu on WhatsApp →</a>
            </div>
          </div>
        </div>

        <div id="events" className="rt-section" style={{ background: "#0f0c07", padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f97316", marginBottom: 14 }}>HAPPENINGS</p>
              <h2 className="rt-h2" style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 900, color: "#f0ebe0", letterSpacing: "-0.04em", fontStyle: "italic" }}>Events &amp; Experiences</h2>
            </div>
            <div className="rt-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
              {EVENTS.map((e, i) => (
                <div key={i} className="rt-event" style={{ background: "#141008", borderRadius: 20, padding: 30, border: `1px solid ${e.color}20` }}>
                  <div style={{ fontSize: 44, marginBottom: 18 }}>{e.emoji}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                    <span style={{ background: `${e.color}15`, color: e.color, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700 }}>{e.day}</span>
                    <span style={{ background: "rgba(255,255,255,.05)", color: "#8a7660", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600 }}>{e.time}</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#f0ebe0", marginBottom: 12 }}>{e.name}</h3>
                  <p style={{ fontSize: 14, color: "#8a7660", lineHeight: 1.7, marginBottom: 22 }}>{e.desc}</p>
                  <a href={wa} target="_blank" rel="noreferrer" className="rt-cta" style={{ display: "block", textAlign: "center", background: e.color, color: "#fff", borderRadius: 10, padding: "12px", fontSize: 14, justifyContent: "center" }}>Reserve a Spot</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="gallery" className="rt-section" style={{ padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f97316", marginBottom: 14 }}>THE SPACE</p>
              <h2 className="rt-h2" style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 900, color: "#f0ebe0", letterSpacing: "-0.04em", fontStyle: "italic" }}>Gallery</h2>
            </div>
            <div className="rt-gal-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
              {GALLERY.map((src, i) => (
                <div key={i} className="rt-gal" style={{ height: i === 0 || i === 3 ? 240 : 180 }}>
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="about" className="rt-section" style={{ background: "#0f0c07", padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rt-about-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f97316", marginBottom: 14 }}>OUR STORY</p>
                <h2 className="rt-h2" style={{ fontSize: "clamp(26px,4vw,50px)", fontWeight: 900, color: "#f0ebe0", letterSpacing: "-0.04em", fontStyle: "italic", lineHeight: .95, marginBottom: 22 }}>Born from a Passion<br />for Honest Food.</h2>
                <p style={{ fontSize: 16, color: "#8a7660", lineHeight: 1.85, marginBottom: 20 }}>Ember &amp; Oak was founded by Chef Aryan Kapoor in 2018 with one belief: great food doesn't need pretension. What it needs is obsessive sourcing, precise technique, and a dining room that makes people feel at home.</p>
                <p style={{ fontSize: 16, color: "#8a7660", lineHeight: 1.85, marginBottom: 36 }}>Every protein is sourced within 48 hours of service. Every sauce is made from scratch. The menu changes monthly to honour what's in season. That's our only rule.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[["🌿", "Farm-to-Table", "Sourced within 48 hrs"], ["👨‍🍳", "Head Chef Aryan", "Trained in Lyon, France"], ["🏆", "Best New Restaurant", "Bangalore Food Awards 2019"], ["🌱", "Plant-Forward", "40% vegan options"]].map(([e, t, d]) => (
                    <div key={t} style={{ background: "rgba(249,115,22,.05)", border: "1px solid rgba(249,115,22,.1)", borderRadius: 12, padding: "14px" }}>
                      <div style={{ fontSize: 20, marginBottom: 8 }}>{e}</div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#f0ebe0", marginBottom: 3 }}>{t}</div>
                      <div style={{ fontSize: 11, color: "#8a7660" }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rt-about-img" style={{ position: "relative", height: 520, borderRadius: 20, overflow: "hidden" }}>
                <img src={u("photo-1424847651672-bf20a4b0982b")} alt="Restaurant interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(5,3,0,.7) 0%,transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, background: "rgba(0,0,0,.75)", backdropFilter: "blur(12px)", borderRadius: 14, padding: "16px 20px", border: "1px solid rgba(249,115,22,.15)" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#f0ebe0", marginBottom: 4 }}>🏆 Best Fine Dining · Bangalore 2023 &amp; 2024</div>
                  <div style={{ fontSize: 12, color: "#8a7660" }}>Voted by Condé Nast Traveller India Readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rt-section" style={{ padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f97316", marginBottom: 14 }}>GUEST VOICES</p>
              <h2 className="rt-h2" style={{ fontSize: "clamp(28px,4vw,56px)", fontWeight: 900, color: "#f0ebe0", letterSpacing: "-0.04em", fontStyle: "italic" }}>What People Say</h2>
            </div>
            <div className="rt-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
              {REVIEWS.map(r => (
                <div key={r.n} className="rt-rv" style={{ background: "#141008", borderRadius: 20, padding: 28, border: "1px solid rgba(249,115,22,.08)" }}>
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>{[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#f97316" color="#f97316" />)}</div>
                  <p style={{ fontSize: 15, color: "#c4b89a", lineHeight: 1.75, marginBottom: 20 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#f0ebe0" }}>{r.n}</div>
                    <div style={{ fontSize: 12, color: "#8a7660", marginTop: 2 }}>{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rt-section" style={{ background: "#0f0c07", padding: "80px 40px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f97316", marginBottom: 14 }}>FAQ</p>
              <h2 className="rt-h2" style={{ fontSize: "clamp(24px,4vw,44px)", fontWeight: 900, color: "#f0ebe0", letterSpacing: "-0.04em", fontStyle: "italic" }}>Good to Know</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {FAQS.map((f, i) => (
                <div key={i} className="rt-faq" style={{ background: "rgba(255,255,255,.03)", borderRadius: 12, padding: "20px 22px", border: "1px solid rgba(255,255,255,.06)" }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#f0ebe0" }}>{f.q}</div>
                    <ChevronDown size={16} color="#f97316" style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }} />
                  </div>
                  {openFaq === i && <div style={{ marginTop: 12, fontSize: 14, color: "#8a7660", lineHeight: 1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 440, overflow: "hidden" }}>
          <img src={u("photo-1559339352-11d035aa65de")} alt="Restaurant night" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(5,3,0,.82)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 24px" }}>
            <UtensilsCrossed size={36} color="#f97316" style={{ marginBottom: 20 }} />
            <h2 style={{ fontSize: "clamp(28px,5vw,60px)", fontWeight: 900, color: "#fff", fontStyle: "italic", letterSpacing: "-0.045em", lineHeight: .92, marginBottom: 18 }}>Reserve Your Table Tonight.</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", marginBottom: 36, maxWidth: 420, lineHeight: 1.65 }}>Walk-ins welcome at the bar. For guaranteed seating — especially weekends — book via WhatsApp.</p>
            <a href={wa} target="_blank" rel="noreferrer" className="rt-cta rt-wa" style={{ background: "#25D366", color: "#fff", borderRadius: 10, padding: "16px 38px", fontSize: 16, boxShadow: "0 4px 20px rgba(37,211,102,.3)" }}><Phone size={18} />WhatsApp to Reserve</a>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { Phone, Check, Star, ChevronDown, MapPin, Shield, Building2, Maximize, Car, Leaf } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const UNITS = [
  { type: "2 BHK", area: "950 sq ft", price: "₹65 L", emi: "₹48,200/mo", floor: "3rd–8th Floor", status: "Available", sc: "#16a34a", features: ["Modular Kitchen","Vitrified Flooring","2 Bathrooms","1 Covered Parking","24/7 Security"] },
  { type: "3 BHK", area: "1,350 sq ft", price: "₹92 L", emi: "₹68,400/mo", floor: "5th–14th Floor", status: "Limited Units", sc: "#d97706", featured: true, features: ["Premium Fittings","Master En-suite","3 Bathrooms","2 Covered Parking","Private Balcony"] },
  { type: "3 BHK Duplex", area: "1,800 sq ft", price: "₹1.28 Cr", emi: "₹95,000/mo", floor: "Top Floors Only", status: "3 Left", sc: "#dc2626", features: ["Private Terrace","Home Theatre","4 Bathrooms","2 Parking + Store","Panoramic Views"] },
];

const AMENITIES = [
  { icon: "🏊", n: "Olympic Pool" },{ icon: "🏋️", n: "Clubhouse Gym" },{ icon: "🌳", n: "2-Acre Landscape" },
  { icon: "🏃", n: "Jogging Track" },{ icon: "🎮", n: "Kids Play Zone" },{ icon: "🔒", n: "3-Tier Security" },
  { icon: "⚡", n: "Power Backup" },{ icon: "🚗", n: "Visitor Parking" },{ icon: "🌿", n: "Yoga Deck" },
  { icon: "🏥", n: "Mini Clinic" },{ icon: "🛒", n: "Convenience Store" },{ icon: "🎭", n: "Amphitheatre" },
];

const GALLERY = [
  { id: "photo-1600585154340-be6161a56a0c", span: "span 2" },
  { id: "photo-1600607687939-ce8a6c25118c", span: "span 1" },
  { id: "photo-1560448204-e02f11c3d0e2", span: "span 1" },
  { id: "photo-1600566753190-17f0baa2a6c3", span: "span 1" },
  { id: "photo-1600573472592-401b489a3cdc", span: "span 1" },
];

const REVIEWS = [
  { n: "Vivek & Kavya N.", c: "Booked 3 BHK · Floor 12", s: 5, t: "The sunlight in every room was the first thing that struck us. Great ventilation, a fantastic community, and delivered on time — rare in this market." },
  { n: "Suresh M.", c: "Booked 2 BHK · Floor 6", s: 5, t: "Transparent pricing, zero hidden charges, and the team answered every query within minutes. The construction quality is exceptional." },
  { n: "Deepa R.", c: "Booked Duplex · Top Floor", s: 5, t: "10 minutes to the metro, 15 to the airport. Couldn't ask for a better location or a more professional builder." },
];

const FAQS = [
  { q: "Is this RERA registered?", a: "Yes — RERA Registration No: PRM/KA/RERA/2023/12345. All documents available on request." },
  { q: "What is the possession date?", a: "December 2025 for Towers A & B. Tower C handover by March 2026." },
  { q: "Are home loans available?", a: "Pre-approved loans from SBI, HDFC, ICICI, and Axis Bank. Our team assists with the entire loan process at no extra charge." },
  { q: "Can I book a site visit?", a: "Yes — WhatsApp us and we arrange a complimentary guided site visit with our project manager, Monday to Saturday." },
];

export function RealEstateDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredUnit, setHoveredUnit] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "inherit", background: "#fdfcf9", color: "#1c1408" }}>
      <style>{`
        .re *{box-sizing:border-box}
        .re-link{color:#78716c;cursor:pointer;transition:color .2s,transform .2s;display:inline-block}
        .re-link:hover{color:#92400e;transform:translateY(-1px)}
        .re-cta{transition:transform .22s,box-shadow .22s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800;cursor:pointer}
        .re-cta:hover{transform:translateY(-3px) scale(1.03)}
        .re-unit{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s;cursor:pointer}
        .re-unit:hover{transform:translateY(-10px) scale(1.015)}
        .re-amenity{transition:transform .2s,background .2s;cursor:default}
        .re-amenity:hover{transform:translateY(-5px) scale(1.05);background:#fef3c7!important}
        .re-gal{overflow:hidden;border-radius:14px;cursor:pointer}
        .re-gal img{transition:transform .5s cubic-bezier(.25,.46,.45,.94);display:block;width:100%;height:100%;object-fit:cover}
        .re-gal:hover img{transform:scale(1.1)}
        .re-rv{transition:transform .22s,box-shadow .22s}
        .re-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.1)!important}
        .re-faq{transition:background .2s,border-color .2s;cursor:pointer}
        .re-faq:hover{background:#fef3c7!important;border-color:#d97706!important}
        .re-hl{transition:transform .2s,box-shadow .2s}
        .re-hl:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.08)!important}
        .re-wa{transition:transform .22s,box-shadow .22s!important}
        .re-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        @media(max-width:768px){
          .re-nav-links{display:none!important}
          .re-hero-h1{font-size:36px!important;line-height:1!important}
          .re-section{padding:52px 20px!important}
          .re-hero-pad{padding:0 20px 80px!important}
          .re-stats{gap:14px!important;flex-wrap:wrap;padding:16px 20px!important}
          .re-units{grid-template-columns:1fr!important}
          .re-about-inner{grid-template-columns:1fr!important}
          .re-about-img{display:none!important}
          .re-hl-grid{grid-template-columns:1fr 1fr!important}
          .re-gal-grid{grid-template-columns:1fr 1fr!important}
          .re-reviews{grid-template-columns:1fr!important}
          .re-h2{font-size:26px!important}
          .re-hero-btns{flex-direction:column!important}
        }
      `}</style>

      <div className="re">
        <nav style={{ background:"rgba(253,252,249,.97)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(0,0,0,.07)",position:"sticky",top:"4rem",zIndex:30,padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60 }}>
          <div>
            <div style={{ fontSize:16,fontWeight:900,color:"#78350f",letterSpacing:"-0.02em" }}>Prestige Elara</div>
            <div style={{ fontSize:10,color:"#a16207",letterSpacing:"0.12em",textTransform:"uppercase" }}>by Skyline Developers · Whitefield, Bengaluru</div>
          </div>
          <div className="re-nav-links" style={{ display:"flex",gap:24,fontSize:13,fontWeight:600,alignItems:"center" }}>
            {["Floor Plans","Amenities","Gallery","Location"].map(l=><span key={l} className="re-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="re-cta" style={{ background:"#92400e",color:"#fff",borderRadius:8,padding:"9px 22px",fontSize:13 }}>Book Site Visit</a>
          </div>
        </nav>

        <div style={{ position:"relative",height:"88vh",minHeight:500,maxHeight:820 }}>
          <img src={u("photo-1600585154340-be6161a56a0c")} alt="Prestige Elara" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 60%" }}/>
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(105deg,rgba(10,5,0,.88) 0%,rgba(10,5,0,.5) 55%,rgba(10,5,0,.15) 100%)" }}/>
          <div className="re-hero-pad" style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 56px 80px",maxWidth:720 }}>
            <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(245,183,73,.12)",border:"1px solid rgba(245,183,73,.25)",borderRadius:6,padding:"5px 14px",marginBottom:20,width:"fit-content" }}>
              <Shield size={12} color="#fcd34d"/>
              <span style={{ fontSize:11,color:"#fcd34d",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase" }}>RERA Registered · Zero Hidden Charges</span>
            </div>
            <h1 className="re-hero-h1" style={{ fontSize:"clamp(36px,5.5vw,74px)",fontWeight:900,color:"#fff",lineHeight:.92,letterSpacing:"-0.045em",marginBottom:20 }}>
              Prestige Elara.<br/><span style={{ color:"#fcd34d" }}>Where Life Blooms.</span>
            </h1>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.78)",lineHeight:1.72,marginBottom:36,maxWidth:520 }}>Premium 2 &amp; 3 BHK apartments starting ₹65 Lakhs. G+22 floors, 3 towers, 12 world-class amenities. Whitefield's most anticipated address.</p>
            <div className="re-hero-btns" style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <a href={wa} target="_blank" rel="noreferrer" className="re-cta" style={{ background:"#f59e0b",color:"#1c1408",borderRadius:8,padding:"15px 32px",fontSize:15,boxShadow:"0 4px 20px rgba(245,158,11,.4)" }}><Phone size={16}/>Book Site Visit</a>
              <a href="#units" className="re-cta" style={{ background:"rgba(255,255,255,.1)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",borderRadius:8,padding:"15px 32px",fontSize:15,fontWeight:700 }}>View Floor Plans ↓</a>
            </div>
          </div>
          <div className="re-stats" style={{ position:"absolute",bottom:0,left:0,right:0,background:"rgba(20,10,0,.82)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(245,158,11,.15)",display:"flex",justifyContent:"center",gap:52,padding:"22px 40px" }}>
            {[["₹65 L","Starting Price"],["3 Towers","G + 22 Floors"],["Dec 2025","Possession"],["305","Total Units"]].map(([v,l])=>(
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:20,fontWeight:900,color:"#fcd34d" }}>{v}</div>
                <div style={{ fontSize:10,color:"rgba(255,255,255,.5)",marginTop:3,textTransform:"uppercase",letterSpacing:"0.12em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="re-section" style={{ padding:"64px 40px",background:"#fff" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="re-hl-grid" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16 }}>
              {[{ I:Building2,t:"G+22 Floors",d:"305 premium units across 3 towers" },{ I:Maximize,t:"2–3 BHK",d:"Vastu-compliant, sky-lit layouts" },{ I:Leaf,t:"IGBC Pre-Certified",d:"Green building, eco-friendly" },{ I:Car,t:"Basement Parking",d:"1,100+ covered parking spots" }].map(({ I,t,d })=>(
                <div key={t} className="re-hl" style={{ background:"#fefce8",borderRadius:18,padding:"22px 20px",border:"1px solid #fde68a",boxShadow:"0 2px 10px rgba(0,0,0,.04)" }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14 }}><I size={20} color="#fff"/></div>
                  <div style={{ fontWeight:800,fontSize:16,color:"#78350f",marginBottom:4 }}>{t}</div>
                  <div style={{ fontSize:13,color:"#a16207" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="units" className="re-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#b45309",marginBottom:14 }}>CHOOSE YOUR HOME</p>
              <h2 className="re-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#1c1408",letterSpacing:"-0.04em",marginBottom:14 }}>Floor Plans &amp; Pricing</h2>
              <p style={{ fontSize:16,color:"#78716c",maxWidth:440,margin:"0 auto" }}>All units Vastu-compliant with optimised cross-ventilation and natural light in every room.</p>
            </div>
            <div className="re-units" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:22 }}>
              {UNITS.map((unit,i)=>(
                <div key={i} className="re-unit" onMouseEnter={()=>setHoveredUnit(i)} onMouseLeave={()=>setHoveredUnit(null)}
                  style={{ background:"#fff",borderRadius:22,padding:30,border:unit.featured?"2px solid #f59e0b":`1px solid ${hoveredUnit===i?"#d97706":"rgba(0,0,0,.07)"}`,boxShadow:unit.featured?"0 8px 36px rgba(245,158,11,.15)":"0 2px 16px rgba(0,0,0,.05)",transform:unit.featured?"scale(1.03)":"none",position:"relative" }}>
                  {unit.featured && <div style={{ position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:"#f59e0b",color:"#fff",borderRadius:99,padding:"4px 18px",fontSize:11,fontWeight:800,letterSpacing:"0.1em",whiteSpace:"nowrap" }}>⭐ BEST SELLER</div>}
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18 }}>
                    <div style={{ fontSize:28,fontWeight:900,color:"#1c1408" }}>{unit.type}</div>
                    <span style={{ background:unit.sc,color:"#fff",borderRadius:99,padding:"4px 12px",fontSize:11,fontWeight:700 }}>{unit.status}</span>
                  </div>
                  <div style={{ fontSize:40,fontWeight:900,color:"#b45309",letterSpacing:"-0.04em",marginBottom:4 }}>{unit.price}</div>
                  <div style={{ fontSize:13,color:"#78716c",marginBottom:6 }}>EMI from {unit.emi}</div>
                  <div style={{ display:"flex",gap:16,marginBottom:22,fontSize:13,color:"#78716c" }}>
                    <span>📐 {unit.area}</span>
                    <span>🏢 {unit.floor}</span>
                  </div>
                  <div style={{ borderTop:"1px solid #f5f0e8",paddingTop:18,marginBottom:22 }}>
                    {unit.features.map(f=>(
                      <div key={f} style={{ display:"flex",alignItems:"center",gap:9,marginBottom:9,fontSize:14,color:"#374151" }}>
                        <div style={{ width:20,height:20,borderRadius:6,background:"#fef3c7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}><Check size={11} color="#b45309"/></div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <a href={wa} target="_blank" rel="noreferrer" className="re-cta" style={{ display:"block",textAlign:"center",background:unit.featured?"#f59e0b":"#92400e",color:unit.featured?"#1c1408":"#fff",borderRadius:10,padding:"13px",fontSize:14,justifyContent:"center" }}>Enquire Now</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="re-section" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#b45309",marginBottom:14 }}>RESORT-STYLE LIVING</p>
              <h2 className="re-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#1c1408",letterSpacing:"-0.04em" }}>World-Class Amenities</h2>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:14 }}>
              {AMENITIES.map(a=>(
                <div key={a.n} className="re-amenity" style={{ background:"#fefce8",borderRadius:16,padding:"22px 12px",textAlign:"center",border:"1px solid #fde68a" }}>
                  <div style={{ fontSize:28,marginBottom:10 }}>{a.icon}</div>
                  <div style={{ fontSize:13,fontWeight:600,color:"#78350f" }}>{a.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="gallery" className="re-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:40 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#b45309",marginBottom:14 }}>THE PROJECT</p>
              <h2 className="re-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#1c1408",letterSpacing:"-0.04em" }}>Gallery</h2>
            </div>
            <div className="re-gal-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"repeat(2,190px)",gap:12 }}>
              {GALLERY.map((item,i)=>(
                <div key={i} className="re-gal" style={{ gridColumn:item.span }}>
                  <img src={u(item.id)} alt={`Gallery ${i+1}`}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="about" className="re-section" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="re-about-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center" }}>
              <div>
                <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#b45309",marginBottom:14 }}>ABOUT THE PROJECT</p>
                <h2 className="re-h2" style={{ fontSize:"clamp(26px,4vw,48px)",fontWeight:900,color:"#1c1408",letterSpacing:"-0.04em",lineHeight:.95,marginBottom:22 }}>Built by Skyline.<br/>Trusted by Families.</h2>
                <p style={{ fontSize:16,color:"#78716c",lineHeight:1.85,marginBottom:20 }}>Skyline Developers has been crafting premium residential spaces in Bengaluru for over 18 years. Prestige Elara is their most ambitious project — a gated community built not just for today, but for the next generation.</p>
                <p style={{ fontSize:16,color:"#78716c",lineHeight:1.85,marginBottom:36 }}>Every unit is designed with 9-foot ceilings, large windows, and a layout that maximises natural light. The kind of home where every morning feels like a holiday.</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
                  {[["18 yrs","Builder Experience"],["305","Total Units"],["Dec 2025","Possession"],["RERA","Registered"]].map(([v,l])=>(
                    <div key={l} style={{ background:"#fefce8",border:"1px solid #fde68a",borderRadius:14,padding:"16px" }}>
                      <div style={{ fontSize:24,fontWeight:900,color:"#b45309",marginBottom:4 }}>{v}</div>
                      <div style={{ fontSize:13,color:"#78716c" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="re-about-img" style={{ position:"relative",height:520,borderRadius:20,overflow:"hidden" }}>
                <img src={u("photo-1600607687939-ce8a6c25118c")} alt="Project interior" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,.5) 0%,transparent 50%)" }}/>
                <div style={{ position:"absolute",bottom:24,left:24,right:24,background:"rgba(255,255,255,.95)",borderRadius:14,padding:"16px 20px",display:"flex",alignItems:"center",gap:14 }}>
                  <div style={{ width:42,height:42,borderRadius:12,background:"#fef3c7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}><Shield size={20} color="#b45309"/></div>
                  <div>
                    <div style={{ fontWeight:700,fontSize:14,color:"#1c1408" }}>RERA Registered · Bank Loan Approved</div>
                    <div style={{ fontSize:12,color:"#78716c",marginTop:2 }}>SBI · HDFC · ICICI · Axis pre-approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="re-section" style={{ background:"#fefce8",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#b45309",marginBottom:14 }}>HOMEOWNER STORIES</p>
              <h2 className="re-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#1c1408",letterSpacing:"-0.04em" }}>Trusted by Families</h2>
            </div>
            <div className="re-reviews" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18 }}>
              {REVIEWS.map(r=>(
                <div key={r.n} className="re-rv" style={{ background:"#fff",borderRadius:20,padding:28,border:"1px solid #fde68a",boxShadow:"0 2px 14px rgba(0,0,0,.05)" }}>
                  <div style={{ display:"flex",gap:3,marginBottom:16 }}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="#f59e0b" color="#f59e0b"/>)}</div>
                  <p style={{ fontSize:15,color:"#374151",lineHeight:1.75,marginBottom:18 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop:"1px solid #fde68a",paddingTop:14 }}>
                    <div style={{ fontWeight:700,fontSize:14,color:"#1c1408" }}>{r.n}</div>
                    <div style={{ fontSize:12,color:"#a16207",marginTop:2 }}>{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="re-section" style={{ padding:"80px 40px",background:"#fff" }}>
          <div style={{ maxWidth:760,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#b45309",marginBottom:14 }}>FAQ</p>
              <h2 className="re-h2" style={{ fontSize:"clamp(24px,4vw,44px)",fontWeight:900,color:"#1c1408",letterSpacing:"-0.04em" }}>Common Questions</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
              {FAQS.map((f,i)=>(
                <div key={i} className="re-faq" style={{ background:"#fefce8",borderRadius:14,padding:"20px 24px",border:"1px solid #fde68a" }} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                    <div style={{ fontWeight:700,fontSize:15,color:"#1c1408" }}>{f.q}</div>
                    <ChevronDown size={16} color="#b45309" style={{ transform:openFaq===i?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0 }}/>
                  </div>
                  {openFaq===i && <div style={{ marginTop:12,fontSize:14,color:"#78716c",lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position:"relative",minHeight:420,overflow:"hidden" }}>
          <img src={u("photo-1560184897-ae75f418493e")} alt="Project exterior" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%" }}/>
          <div style={{ position:"absolute",inset:0,background:"rgba(20,10,0,.78)" }}/>
          <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"60px 24px" }}>
            <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:"rgba(245,158,11,.15)",border:"1px solid rgba(245,158,11,.3)",borderRadius:99,padding:"6px 16px",marginBottom:20 }}>
              <MapPin size={13} color="#fcd34d"/>
              <span style={{ fontSize:12,color:"#fcd34d",fontWeight:600 }}>Whitefield, Bengaluru · Metro Accessible</span>
            </div>
            <h2 style={{ fontSize:"clamp(28px,5vw,60px)",fontWeight:900,color:"#fff",letterSpacing:"-0.045em",marginBottom:18,lineHeight:.95 }}>Book Your Site Visit Today.</h2>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.75)",marginBottom:36,maxWidth:480,lineHeight:1.65 }}>Walk the floors, feel the space. Complimentary transport from anywhere in the city. Mon–Sat, 10 AM – 6 PM.</p>
            <a href={wa} target="_blank" rel="noreferrer" className="re-cta re-wa" style={{ background:"#25D366",color:"#fff",borderRadius:10,padding:"17px 40px",fontSize:16,boxShadow:"0 4px 20px rgba(37,211,102,.3)" }}><Phone size={18}/>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

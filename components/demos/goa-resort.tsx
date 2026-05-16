"use client";
import Image from "next/image";
import { useState } from "react";
import { Phone, MapPin, Check, Star, Wifi, Utensils, Waves, Wind, Car, Coffee, ChevronDown } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const ROOMS = [
  { name: "Beach Deluxe", price: "₹6,500", sub: "per night · breakfast incl.", badge: "Popular", bc: "#0891b2", img: u("photo-1631049307264-da0ec9d70304"), perks: ["King Bed","Garden View","38 sqm","Balcony"] },
  { name: "Sea View Suite", price: "₹12,000", sub: "per night · all inclusive", badge: "Best Value", bc: "#d97706", featured: true, img: u("photo-1571896349842-33c89424de2d"), perks: ["King Bed","Ocean View","62 sqm","Jacuzzi"] },
  { name: "Pool Villa", price: "₹22,000", sub: "per night · all inclusive", badge: "Premium", bc: "#7c3aed", img: u("photo-1613490493576-7fde63acd811"), perks: ["2 Bed","Private Pool","120 sqm","Chef"] },
];
const PACKAGES = [
  { name: "Honeymoon Escape", nights: "2N/3D", price: "₹18,000", items: ["Sea View Suite","Candlelight dinner","Couple spa","Sunset cruise"] },
  { name: "Family Fun Pack", nights: "3N/4D", price: "₹28,000", items: ["Pool Villa","Kids club","Water sports","All meals"] },
  { name: "Weekend Getaway", nights: "1N/2D", price: "₹9,500", items: ["Deluxe Room","Breakfast","Pool access","Bonfire"] },
];
const GALLERY = ["photo-1520250497591-112f2f40a3f4","photo-1571003123894-1f0594d2b5d9","photo-1584132967334-10e028bd69f7","photo-1445019980597-93fa8acb246c","photo-1566073771259-6a8506099945","photo-1439130490301-25e322d88054"];const AMENITIES = [{ I: Wifi, l: "Hi-Speed Wi-Fi" },{ I: Utensils, l: "Beach Restaurant" },{ I: Waves, l: "Private Beach" },{ I: Wind, l: "AC in All Rooms" },{ I: Car, l: "Airport Transfer" },{ I: Coffee, l: "24/7 Room Service" }];
const REVIEWS = [
  { n: "Priya S.", c: "Mumbai", t: "Waking up to the ocean every morning was unlike anything. The staff is genuinely world-class." },
  { n: "Rahul & Anita", c: "Bangalore", t: "Pool villa with private chef on call — we'll be back every anniversary. Just perfect." },
  { n: "Vikram M.", c: "Delhi", t: "Booked via WhatsApp in 5 minutes. Instant confirmation, flawless check-in. Best in North Goa." },
];

export function GoaResortDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: "What's the check-in time?", a: "Check-in from 2 PM, check-out by 11 AM. Early check-in on request." },
    { q: "Is the beach private?", a: "Yes — our 200m stretch is exclusively for resort guests." },
    { q: "Do you allow day visits?", a: "Day pass available at ₹1,500 per person including pool access and breakfast." },
    { q: "How do I book?", a: "WhatsApp us — we confirm within 15 minutes with real-time availability." },
  ];
  return (
    <div style={{ fontFamily: "inherit", background: "#faf9f6", color: "#1c1917" }}>
      <style>{`
        .gr *{box-sizing:border-box}
        .gr-link{color:#475569;cursor:pointer;transition:color .2s,transform .2s;display:inline-block}
        .gr-link:hover{color:#0891b2;transform:translateY(-1px)}
        .gr-cta{transition:transform .22s,box-shadow .22s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800}
        .gr-cta:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 10px 28px rgba(8,145,178,.35)}
        .gr-card{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s;cursor:pointer}
        .gr-card:hover{transform:translateY(-10px) scale(1.015)}
        .gr-card:hover .gr-img{transform:scale(1.08)}
        .gr-img{transition:transform .6s cubic-bezier(.25,.46,.45,.94)}
        .gr-pkg{transition:transform .25s cubic-bezier(.34,1.56,.64,1),border-color .2s;cursor:pointer}
        .gr-pkg:hover{transform:translateY(-8px) scale(1.02);border-color:#0891b2!important}
        .gr-am{transition:transform .22s,background .2s}
        .gr-am:hover{transform:translateY(-6px) scale(1.05);background:#e0f2fe!important}
        .gr-rv{transition:transform .22s,box-shadow .22s}
        .gr-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.1)!important}
        .gr-gal{overflow:hidden;border-radius:14px;cursor:pointer}
        .gr-gal img{transition:transform .5s cubic-bezier(.25,.46,.45,.94);display:block}
        .gr-gal:hover img{transform:scale(1.12)}
        .gr-faq{transition:background .2s,border-color .2s;cursor:pointer}
        .gr-faq:hover{background:#f0f9ff!important;border-color:#0891b2!important}
        .gr-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        .gr-nav-cta{transition:transform .2s,background .2s}
        .gr-nav-cta:hover{transform:translateY(-2px) scale(1.04);background:#0779a0!important}
        @media(max-width:768px){
          .gr-nav-links{display:none!important}
          .gr-hero-h1{font-size:36px!important;line-height:1.05!important}
          .gr-section{padding:52px 20px!important}
          .gr-grid-3{grid-template-columns:1fr!important}
          .gr-gal-grid{grid-template-columns:1fr 1fr!important}
          .gr-h2{font-size:26px!important}
          .gr-hero-btns{flex-direction:column!important}
          .gr-stats{gap:16px!important;padding:16px 20px!important;flex-wrap:wrap}
          .gr-about-inner{grid-template-columns:1fr!important}
          .gr-about-img{display:none!important}
          .gr-hero-pad{padding:0 20px 80px!important}
        }
      `}</style>

      <div className="gr">
        <nav style={{ background:"rgba(255,255,255,.97)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(0,0,0,.08)",position:"sticky",top:"4rem",zIndex:30,padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60 }}>
          <div>
            <div style={{ fontSize:16,fontWeight:900,color:"#0c4a6e" }}>Sunset Cove Resort</div>
            <div style={{ fontSize:10,color:"#64748b",letterSpacing:"0.12em",textTransform:"uppercase" }}>Calangute Beach · North Goa</div>
          </div>
          <div className="gr-nav-links" style={{ display:"flex",gap:24,fontSize:13,fontWeight:600,alignItems:"center" }}>
            {["Rooms","Packages","Gallery","About"].map(l=><span key={l} className="gr-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="gr-nav-cta" style={{ background:"#0891b2",color:"#fff",borderRadius:99,padding:"9px 20px",fontSize:13,fontWeight:700,textDecoration:"none" }}>Book Now</a>
          </div>
        </nav>

        <div style={{ position:"relative",height:"88vh",minHeight:480,maxHeight:800 }}>
          <Image src={u("photo-1512343879784-a960bf40e7f2")} alt="Goa beach" fill priority style={{ objectFit:"cover" }} sizes="100vw"/>
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(105deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,.38) 55%,transparent 100%)" }}/>
          <div className="gr-hero-pad" style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 52px 80px",maxWidth:680 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:16 }}>
              <MapPin size={13} color="#7dd3fc"/>
              <span style={{ fontSize:11,color:"#bae6fd",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase" }}>Calangute Beach, North Goa</span>
            </div>
            <h1 className="gr-hero-h1" style={{ fontSize:"clamp(38px,6vw,76px)",fontWeight:900,color:"#fff",lineHeight:.92,letterSpacing:"-0.045em",marginBottom:20 }}>Where the Sea<br/>Meets Luxury.</h1>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.82)",lineHeight:1.7,marginBottom:36,maxWidth:460 }}>Beachfront rooms, private infinity pool, curated experiences for those who deserve the best.</p>
            <div className="gr-hero-btns" style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <a href={wa} target="_blank" rel="noreferrer" className="gr-cta gr-wa" style={{ background:"#f97316",color:"#fff",borderRadius:99,padding:"15px 30px",fontSize:15,transition:"transform .22s,box-shadow .22s" }}><Phone size={16}/>Book via WhatsApp</a>
              <a href="#rooms" className="gr-cta" style={{ background:"rgba(255,255,255,.15)",color:"#fff",border:"1px solid rgba(255,255,255,.4)",borderRadius:99,padding:"15px 30px",fontSize:15,backdropFilter:"blur(8px)",fontWeight:700 }}>View Rooms ↓</a>
            </div>
          </div>
          <div className="gr-stats" style={{ position:"absolute",bottom:0,left:0,right:0,background:"rgba(12,26,46,.75)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(255,255,255,.12)",display:"flex",justifyContent:"center",gap:52,padding:"22px 40px",flexWrap:"wrap" }}>
            {[["4.9 ★","Rating"],["2,400+","Guests"],["14 yrs","Est. 2011"],["3 min","To Beach"]].map(([v,l])=>(
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:22,fontWeight:900,color:"#fff" }}>{v}</div>
                <div style={{ fontSize:10,color:"rgba(255,255,255,.6)",marginTop:3,textTransform:"uppercase",letterSpacing:"0.12em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background:"#0c4a6e",padding:"22px 40px" }}>
          <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center" }}>
            {["🏊 Infinity Pool","🏖️ Private Beach","🍽️ Beach Restaurant","💆 Ayurveda Spa","🏄 Water Sports","🌅 Sunset Cruises","🎵 Live Music","🚗 Airport Transfer"].map(h=>(
              <div key={h} style={{ display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.1)",borderRadius:99,padding:"8px 18px",fontSize:13,fontWeight:600,color:"#e0f2fe",transition:"transform .2s,background .2s",cursor:"default" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.transform="scale(1.08)";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.22)" }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.transform="scale(1)";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.1)" }}>
                {h}
              </div>
            ))}
          </div>
        </div>

        <div id="about" className="gr-section" style={{ padding:"80px 40px",background:"#fff" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="gr-about-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center" }}>
              <div>
                <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:14 }}>ABOUT THE RESORT</p>
                <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,46px)",fontWeight:900,color:"#0c1a2e",letterSpacing:"-0.035em",marginBottom:20 }}>A Legacy of Warmth<br/>Since 2011.</h2>
                <p style={{ fontSize:16,color:"#475569",lineHeight:1.8,marginBottom:20 }}>Nestled on the pristine shores of Calangute Beach, Sunset Cove Resort was born from a simple belief — that every guest deserves to feel like royalty. Over 14 years and 2,400+ guests, that belief has never wavered.</p>
                <p style={{ fontSize:16,color:"#475569",lineHeight:1.8,marginBottom:32 }}>From our infinity pool that blurs into the Arabian Sea, to our Ayurvedic spa rooted in Kerala tradition — every corner of Sunset Cove is designed to transport you.</p>
                {[["2,400+","Guests Hosted"],["4.9/5","Avg. Rating"],["12","Luxury Amenities"]].map(([v,l])=>(
                  <div key={l} style={{ display:"inline-block",marginRight:32,marginBottom:16 }}>
                    <div style={{ fontSize:28,fontWeight:900,color:"#0891b2" }}>{v}</div>
                    <div style={{ fontSize:12,color:"#64748b",marginTop:2 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div className="gr-about-img" style={{ position:"relative",height:500,borderRadius:28,overflow:"hidden" }}>
<Image src={u("photo-1566073771259-6a8506099945")} alt="Resort pool" fill style={{ objectFit:"cover" }} sizes="50vw"/>                <div style={{ position:"absolute",bottom:20,left:20,right:20,background:"rgba(255,255,255,.95)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:14 }}>
                  <div style={{ width:42,height:42,borderRadius:12,background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:20 }}>✅</div>
                  <div>
                    <div style={{ fontWeight:700,fontSize:14,color:"#0f172a" }}>ISO 9001 Certified Property</div>
                    <div style={{ fontSize:12,color:"#64748b",marginTop:2 }}>Verified safe & hygienic · 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rooms" className="gr-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:12 }}>STAY WITH US</p>
              <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,48px)",fontWeight:900,color:"#0c1a2e",marginBottom:14 }}>Rooms &amp; Villas</h2>
              <p style={{ fontSize:16,color:"#64748b",maxWidth:420,margin:"0 auto" }}>Every room faces the sea. Every detail is intentional.</p>
            </div>
            <div className="gr-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24 }}>
              {ROOMS.map(r=>(
                <div key={r.name} className="gr-card" style={{ borderRadius:24,overflow:"hidden",background:"#fff",boxShadow:r.featured?"0 12px 48px rgba(8,145,178,.2)":"0 2px 20px rgba(0,0,0,.07)",border:r.featured?"2px solid #0891b2":"1px solid rgba(0,0,0,.07)",transform:r.featured?"scale(1.025)":"none" }}>
                  <div style={{ position:"relative",height:220,overflow:"hidden" }}>
                    <Image src={r.img} alt={r.name} fill className="gr-img" style={{ objectFit:"cover" }} sizes="(min-width:1024px) 33vw,100vw"/>
                    <div style={{ position:"absolute",top:14,left:14,background:r.bc,color:"#fff",borderRadius:99,padding:"4px 12px",fontSize:11,fontWeight:700,zIndex:1 }}>{r.badge}</div>
                  </div>
                  <div style={{ padding:26 }}>
                    <h3 style={{ fontSize:20,fontWeight:800,color:"#0c1a2e",marginBottom:6 }}>{r.name}</h3>
                    <div style={{ fontSize:28,fontWeight:900,color:"#0891b2",marginBottom:4 }}>{r.price}</div>
                    <div style={{ fontSize:12,color:"#94a3b8",marginBottom:20 }}>{r.sub}</div>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:22 }}>
                      {r.perks.map(p=><span key={p} style={{ display:"inline-flex",alignItems:"center",gap:5,background:"#f0f9ff",color:"#0369a1",borderRadius:99,padding:"4px 11px",fontSize:12,fontWeight:600 }}><Check size={10}/>{p}</span>)}
                    </div>
                    <a href={wa} target="_blank" rel="noreferrer" className="gr-cta" style={{ display:"block",textAlign:"center",background:r.featured?"#0891b2":"#0c4a6e",color:"#fff",borderRadius:12,padding:"13px",fontSize:14,justifyContent:"center" }}>Book This Room</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gr-section" style={{ background:"#f0f9ff",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:12 }}>CURATED FOR YOU</p>
              <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,48px)",fontWeight:900,color:"#0c1a2e" }}>Stay Packages</h2>
            </div>
            <div className="gr-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20 }}>
              {PACKAGES.map(pkg=>(
                <div key={pkg.name} className="gr-pkg" style={{ background:"#fff",borderRadius:22,padding:30,border:"1px solid rgba(8,145,178,.15)" }}>
                  <div style={{ fontSize:12,fontWeight:700,color:"#0891b2",marginBottom:8 }}>{pkg.nights}</div>
                  <h3 style={{ fontSize:22,fontWeight:800,color:"#0c1a2e",marginBottom:10 }}>{pkg.name}</h3>
                  <div style={{ fontSize:30,fontWeight:900,color:"#0c4a6e",marginBottom:22 }}>{pkg.price}</div>
                  <div style={{ borderTop:"1px solid #e2e8f0",paddingTop:18,marginBottom:22 }}>
                    {pkg.items.map(i=><div key={i} style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10,fontSize:14,color:"#475569" }}><Check size={14} color="#0891b2"/>{i}</div>)}
                  </div>
                  <a href={wa} target="_blank" rel="noreferrer" className="gr-cta" style={{ display:"block",textAlign:"center",background:"#0c4a6e",color:"#fff",borderRadius:12,padding:"12px",fontSize:14,justifyContent:"center" }}>Enquire Now</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gr-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:12 }}>FACILITIES</p>
              <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,48px)",fontWeight:900,color:"#0c1a2e" }}>Everything You Need</h2>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:16 }}>
              {AMENITIES.map(({ I, l })=>(
                <div key={l} className="gr-am" style={{ background:"#fff",border:"1px solid rgba(0,0,0,.07)",borderRadius:18,padding:"28px 20px",textAlign:"center",boxShadow:"0 2px 12px rgba(0,0,0,.05)" }}>
                  <I size={28} color="#0891b2" strokeWidth={1.5}/>
                  <div style={{ fontSize:14,fontWeight:600,color:"#334155",marginTop:14 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="gallery" className="gr-section" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:40 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:12 }}>THE RESORT</p>
              <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,48px)",fontWeight:900,color:"#0c1a2e" }}>Gallery</h2>
            </div>
            <div className="gr-gal-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12 }}>
              {GALLERY.map((id,i)=>(
                <div key={i} className="gr-gal" style={{ height:200 }}>
                  <img src={u(id)} alt={`Resort ${i+1}`} style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gr-section" style={{ background:"#f8fafc",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:12 }}>GUEST STORIES</p>
              <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,48px)",fontWeight:900,color:"#0c1a2e" }}>What Our Guests Say</h2>
            </div>
            <div className="gr-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20 }}>
              {REVIEWS.map(r=>(
                <div key={r.n} className="gr-rv" style={{ background:"#fff",borderRadius:22,padding:30,boxShadow:"0 2px 20px rgba(0,0,0,.06)",border:"1px solid rgba(0,0,0,.05)" }}>
                  <div style={{ display:"flex",gap:3,marginBottom:18 }}>{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="#f59e0b" color="#f59e0b"/>)}</div>
                  <p style={{ fontSize:15,color:"#334155",lineHeight:1.75,marginBottom:22 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop:"1px solid #f1f5f9",paddingTop:18 }}>
                    <div style={{ fontWeight:700,fontSize:14,color:"#0c1a2e" }}>{r.n}</div>
                    <div style={{ fontSize:12,color:"#94a3b8",marginTop:2 }}>{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gr-section" style={{ padding:"80px 40px",background:"#fff" }}>
          <div style={{ maxWidth:860,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#0891b2",marginBottom:12 }}>FAQ</p>
              <h2 className="gr-h2" style={{ fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#0c1a2e" }}>Common Questions</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
              {faqs.map((f,i)=>(
                <div key={i} className="gr-faq" style={{ background:"#f8fafc",borderRadius:16,padding:"20px 24px",border:"1px solid rgba(0,0,0,.07)" }} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                    <div style={{ fontWeight:700,fontSize:16,color:"#0c1a2e" }}>{f.q}</div>
                    <ChevronDown size={18} color="#0891b2" style={{ transform:openFaq===i?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0 }}/>
                  </div>
                  {openFaq===i && <div style={{ marginTop:12,fontSize:14,color:"#64748b",lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position:"relative",minHeight:420,overflow:"hidden" }}>
          <img src={u("photo-1544550285-f813152fb2fd")} alt="Goa sunset" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover" }}/>
          <div style={{ position:"absolute",inset:0,background:"rgba(7,26,46,.75)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"60px 24px" }}>
            <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#7dd3fc",marginBottom:16 }}>YOUR STAY AWAITS</p>
            <h2 style={{ fontSize:"clamp(28px,5vw,60px)",fontWeight:900,color:"#fff",letterSpacing:"-0.04em",marginBottom:18,lineHeight:1 }}>Ready for Your Goa Escape?</h2>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.78)",marginBottom:36,maxWidth:480,lineHeight:1.6 }}>Message us on WhatsApp — instant booking, custom packages, real-time availability.</p>
            <a href={wa} target="_blank" rel="noreferrer" className="gr-cta gr-wa" style={{ background:"#25D366",color:"#fff",borderRadius:99,padding:"17px 38px",fontSize:16,transition:"transform .22s,box-shadow .22s" }}><Phone size={18}/>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
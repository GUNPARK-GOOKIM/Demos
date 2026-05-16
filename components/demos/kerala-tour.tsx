"use client";
import Image from "next/image";
import { useState } from "react";
import { Phone, Check, Star, MapPin, ChevronRight, ChevronDown, Calendar, Users, Shield, Clock } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const PACKAGES = [
  { id: 1, tag: "BEST SELLER", name: "Classic Kerala", sub: "The essential Kerala circuit", nights: "4N · 5D", price: "₹18,500", per: "per person", color: "#0d9488", img: u("photo-1602216056096-3b40cc0c9944"), stops: ["Cochin","Munnar","Alleppey","Kovalam"], inc: ["AC Transport","3★ Hotels","Daily Breakfast","Guided Tours","Airport Pickup"] },
  { id: 2, tag: "ROMANTIC", name: "Honeymoon Special", sub: "Curated for couples", nights: "6N · 7D", price: "₹32,000", per: "per couple", color: "#be185d", img: u("photo-1593693411515-c20261bcad6e"), stops: ["Cochin","Munnar","Private Houseboat","Kovalam"], inc: ["Private Vehicle","4★ Resorts","All Meals","Ayurveda Spa","Candlelight Dinner"] },
  { id: 3, tag: "ADVENTURE", name: "Wayanad Wild", sub: "Into the forest heart", nights: "3N · 4D", price: "₹12,000", per: "per person", color: "#15803d", img: u("photo-1545569341-9eb8b30979d9"), stops: ["Calicut","Wayanad","Wildlife Zone","Banasura Dam"], inc: ["Jeep Safari","Eco Cottages","All Meals","Trek Guide","Waterfall Visit"] },
];

const ITINERARY = [
  { day: "01", city: "Cochin", title: "Arrive & Explore", detail: "Airport pickup, Fort Kochi heritage walk, Chinese fishing nets at golden hour, Kerala seafood dinner by the harbour." },
  { day: "02", city: "Munnar", title: "Into the Hills", detail: "Drive through endless tea estates, Eravikulam National Park, Mattupetty Dam, and Echo Point at sunset." },
  { day: "03", city: "Alleppey", title: "Backwater Day", detail: "Board your private houseboat. Drift through tranquil canals, watch village life unfold, sleep under a canopy of stars." },
  { day: "04", city: "Kovalam", title: "Beach & Spa", detail: "Drive south to Kovalam's crescent beach. Afternoon Ayurveda session, sunset seafood, and an evening stroll." },
  { day: "05", city: "Trivandrum", title: "Depart", detail: "Morning at leisure, last-minute spice shopping, and a comfortable drop to Trivandrum airport." },
];

const REVIEWS = [
  { n: "Sneha & Arjun", c: "Pune", s: 5, t: "Sleeping on the houseboat under Kerala stars was the most romantic thing we've ever done. Every detail was perfect." },
  { n: "Mohan R.", c: "Chennai", s: 5, t: "Family trip went flawlessly. The kids still talk about the jeep safari. Logistics were seamless — highly recommend." },
  { n: "Preeti K.", c: "Hyderabad", s: 5, t: "Every hotel, cab, and guide was top-notch. Kerala is magical and this team made it even more so." },
];

const STATS = [["5,000+","Travellers"],["50+","Routes"],["4.9 ★","Rating"],["8 yrs","Experience"]];

export function KeralaDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [active, setActive] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <div style={{ fontFamily: "inherit", background: "#0b1a12", color: "#f0ede6" }}>
      <style>{`
        .kt *{box-sizing:border-box}
        .kt-link{color:#86a892;cursor:pointer;transition:color .2s,transform .2s;display:inline-block}
        .kt-link:hover{color:#4ade80;transform:translateY(-1px)}
        .kt-cta{transition:transform .22s,box-shadow .22s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800;cursor:pointer}
        .kt-cta:hover{transform:translateY(-3px) scale(1.03)}
        .kt-pkg-tab{transition:background .2s,color .2s,border-color .2s;cursor:pointer;border:none}
        .kt-pkg-tab:hover{background:rgba(74,222,128,.08)!important}
        .kt-pkg-tab.active{background:rgba(74,222,128,.12)!important;border-color:#4ade80!important;color:#4ade80!important}
        .kt-day{transition:background .2s,border-color .2s;cursor:pointer}
        .kt-day:hover{background:rgba(74,222,128,.06)!important;border-color:#4ade80!important}
        .kt-rv{transition:transform .22s,box-shadow .22s}
        .kt-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.4)!important}
        .kt-stop{transition:background .2s,transform .2s}
        .kt-stop:hover{background:rgba(74,222,128,.15)!important;transform:scale(1.05)}
        .kt-inc{transition:background .2s}
        .kt-inc:hover{background:rgba(74,222,128,.08)!important}
        .kt-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        .kt-about-img{transition:transform .5s cubic-bezier(.25,.46,.45,.94)}
        .kt-about-wrap:hover .kt-about-img{transform:scale(1.04)}
        @media(max-width:768px){
          .kt-nav-links{display:none!important}
          .kt-hero-h1{font-size:38px!important;line-height:1.05!important}
          .kt-section{padding:52px 20px!important}
          .kt-hero-pad{padding:0 20px 80px!important}
          .kt-stats{gap:16px!important;flex-wrap:wrap;padding:16px 20px!important}
          .kt-pkg-tabs{flex-direction:column!important}
          .kt-pkg-inner{grid-template-columns:1fr!important}
          .kt-pkg-img{display:none!important}
          .kt-about-inner{grid-template-columns:1fr!important}
          .kt-rv-grid{grid-template-columns:1fr!important}
          .kt-h2{font-size:28px!important}
          .kt-stops{flex-wrap:wrap!important}
        }
      `}</style>

      <div className="kt">
        <nav style={{ background:"rgba(11,26,18,.96)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(74,222,128,.12)",position:"sticky",top:"4rem",zIndex:30,padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60 }}>
          <div>
            <div style={{ fontSize:16,fontWeight:900,color:"#f0ede6",letterSpacing:"-0.02em" }}>Kerala Routes</div>
            <div style={{ fontSize:10,color:"#4ade80",letterSpacing:"0.14em",textTransform:"uppercase" }}>God's Own Country · Est. 2016</div>
          </div>
          <div className="kt-nav-links" style={{ display:"flex",gap:28,fontSize:13,fontWeight:600,alignItems:"center" }}>
            {["Packages","Itinerary","About","Reviews"].map(l=><span key={l} className="kt-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="kt-cta" style={{ background:"#15803d",color:"#fff",borderRadius:8,padding:"9px 22px",fontSize:13 }}>Plan My Trip</a>
          </div>
        </nav>

        <div style={{ position:"relative",height:"90vh",minHeight:520,maxHeight:820 }}>
          <Image src={u("photo-1602216056096-3b40cc0c9944")} alt="Kerala backwaters" fill priority style={{ objectFit:"cover" }} sizes="100vw"/>
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,rgba(5,20,10,.9) 0%,rgba(5,20,10,.55) 55%,rgba(5,20,10,.15) 100%)" }}/>
          <div style={{ position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 20% 80%,rgba(74,222,128,.06) 0%,transparent 50%)" }}/>
          <div className="kt-hero-pad" style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 60px 80px",maxWidth:720 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:18 }}>
              <div style={{ width:28,height:2,background:"#4ade80",borderRadius:2 }}/>
              <span style={{ fontSize:11,color:"#4ade80",fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase" }}>Kerala, South India</span>
            </div>
            <h1 className="kt-hero-h1" style={{ fontSize:"clamp(38px,6.5vw,82px)",fontWeight:900,color:"#fff",lineHeight:.9,letterSpacing:"-0.05em",marginBottom:24 }}>Discover<br/>the Soul<br/><em style={{ fontStyle:"italic",color:"#4ade80" }}>of Kerala.</em></h1>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.72)",lineHeight:1.75,marginBottom:40,maxWidth:500 }}>Backwaters, hill stations, spice gardens, pristine beaches — every itinerary is handcrafted, not templated.</p>
            <div style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <a href={wa} target="_blank" rel="noreferrer" className="kt-cta" style={{ background:"#15803d",color:"#fff",borderRadius:8,padding:"16px 32px",fontSize:15,boxShadow:"0 4px 20px rgba(21,128,61,.4)" }}><Phone size={16}/>Plan My Trip</a>
              <a href="#packages" className="kt-cta" style={{ background:"rgba(255,255,255,.08)",color:"#f0ede6",border:"1px solid rgba(255,255,255,.2)",borderRadius:8,padding:"16px 32px",fontSize:15,fontWeight:700 }}>View Packages ↓</a>
            </div>
          </div>
          <div className="kt-stats" style={{ position:"absolute",bottom:0,left:0,right:0,background:"rgba(5,15,8,.85)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(74,222,128,.12)",display:"flex",justifyContent:"center",gap:56,padding:"22px 40px" }}>
            {STATS.map(([v,l])=>(
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:22,fontWeight:900,color:"#4ade80" }}>{v}</div>
                <div style={{ fontSize:10,color:"rgba(255,255,255,.5)",marginTop:3,textTransform:"uppercase",letterSpacing:"0.12em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="packages" className="kt-section" style={{ padding:"80px 40px",background:"#0f2318" }}>
          <div style={{ maxWidth:1300,margin:"0 auto" }}>
            <div style={{ marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#4ade80",marginBottom:14 }}>CHOOSE YOUR JOURNEY</p>
              <h2 className="kt-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f0ede6",letterSpacing:"-0.04em" }}>Handcrafted Packages</h2>
            </div>
            <div className="kt-pkg-tabs" style={{ display:"flex",gap:12,marginBottom:36,flexWrap:"wrap" }}>
              {PACKAGES.map((p,i)=>(
                <button key={p.id} onClick={()=>setActive(i)} className={`kt-pkg-tab${active===i?" active":""}`} style={{ background:"transparent",border:`1px solid rgba(255,255,255,.12)`,borderRadius:10,padding:"12px 22px",color:active===i?"#4ade80":"#86a892",fontSize:13,fontWeight:700,letterSpacing:"0.04em" }}>
                  <span style={{ fontSize:10,display:"block",marginBottom:2,letterSpacing:"0.14em" }}>{p.tag}</span>
                  {p.name}
                </button>
              ))}
            </div>
            {PACKAGES.map((p,i)=> i===active && (
              <div key={p.id} className="kt-pkg-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,borderRadius:20,overflow:"hidden",border:"1px solid rgba(74,222,128,.15)",background:"#0b1a12" }}>
                <div className="kt-pkg-img" style={{ position:"relative",minHeight:460 }}>
                  <Image src={p.img} alt={p.name} fill style={{ objectFit:"cover" }} sizes="50vw"/>
                  <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,transparent 60%,rgba(11,26,18,.9) 100%)" }}/>
                  <div style={{ position:"absolute",top:20,left:20,background:p.color,color:"#fff",borderRadius:6,padding:"5px 14px",fontSize:11,fontWeight:700,letterSpacing:"0.1em" }}>{p.tag}</div>
                </div>
                <div style={{ padding:40,display:"flex",flexDirection:"column",justifyContent:"center" }}>
                  <div style={{ fontSize:12,fontWeight:700,color:p.color,letterSpacing:"0.1em",marginBottom:8 }}>{p.nights}</div>
                  <h3 style={{ fontSize:32,fontWeight:900,color:"#f0ede6",letterSpacing:"-0.03em",marginBottom:6 }}>{p.name}</h3>
                  <p style={{ fontSize:15,color:"#86a892",marginBottom:24 }}>{p.sub}</p>
                  <div className="kt-stops" style={{ display:"flex",gap:8,marginBottom:28,flexWrap:"wrap" }}>
                    {p.stops.map((s,si)=>(
                      <div key={s} className="kt-stop" style={{ display:"flex",alignItems:"center",gap:6 }}>
                        <span style={{ background:"rgba(74,222,128,.1)",color:"#4ade80",borderRadius:6,padding:"4px 10px",fontSize:12,fontWeight:600 }}>{s}</span>
                        {si<p.stops.length-1 && <ChevronRight size={12} color="#4ade80"/>}
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:24,marginBottom:28 }}>
                    {p.inc.map(item=>(
                      <div key={item} className="kt-inc" style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10,fontSize:14,color:"#c8d5cc",padding:"4px 8px",borderRadius:6 }}>
                        <Check size={14} color="#4ade80"/>{item}
                      </div>
                    ))}
                  </div>
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16 }}>
                    <div>
                      <div style={{ fontSize:36,fontWeight:900,color:"#f0ede6",letterSpacing:"-0.03em" }}>{p.price}</div>
                      <div style={{ fontSize:12,color:"#86a892",marginTop:2 }}>{p.per} · all inclusive</div>
                    </div>
                    <a href={wa} target="_blank" rel="noreferrer" className="kt-cta" style={{ background:p.color,color:"#fff",borderRadius:10,padding:"14px 28px",fontSize:15 }}><Phone size={16}/>Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="itinerary" className="kt-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:900,margin:"0 auto" }}>
            <div style={{ marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#4ade80",marginBottom:14 }}>SAMPLE JOURNEY</p>
              <h2 className="kt-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f0ede6",letterSpacing:"-0.04em" }}>Day by Day</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:10,position:"relative" }}>
              <div style={{ position:"absolute",left:28,top:0,bottom:0,width:1,background:"rgba(74,222,128,.2)" }}/>
              {ITINERARY.map((item,i)=>(
                <div key={i} className="kt-day" style={{ display:"flex",gap:20,background:"rgba(255,255,255,.03)",borderRadius:16,padding:"20px 24px",border:"1px solid rgba(255,255,255,.06)",cursor:"pointer" }} onClick={()=>setOpenDay(openDay===i?null:i)}>
                  <div style={{ minWidth:56,height:56,borderRadius:14,background:openDay===i?"#15803d":"rgba(74,222,128,.1)",border:"1px solid rgba(74,222,128,.3)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background .2s" }}>
                    <div style={{ fontSize:10,color:"#4ade80",fontWeight:700 }}>DAY</div>
                    <div style={{ fontSize:18,fontWeight:900,color:"#4ade80" }}>{item.day}</div>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                      <div>
                        <div style={{ fontSize:11,color:"#4ade80",fontWeight:700,letterSpacing:"0.1em",marginBottom:4 }}>{item.city}</div>
                        <div style={{ fontWeight:800,fontSize:18,color:"#f0ede6" }}>{item.title}</div>
                      </div>
                      <ChevronDown size={16} color="#4ade80" style={{ transform:openDay===i?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0 }}/>
                    </div>
                    {openDay===i && <div style={{ marginTop:12,fontSize:14,color:"#86a892",lineHeight:1.7 }}>{item.detail}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="about" className="kt-section" style={{ padding:"80px 40px",background:"#0f2318" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="kt-about-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center" }}>
              <div>
                <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#4ade80",marginBottom:14 }}>WHO WE ARE</p>
                <h2 className="kt-h2" style={{ fontSize:"clamp(28px,4vw,50px)",fontWeight:900,color:"#f0ede6",letterSpacing:"-0.04em",marginBottom:20 }}>Born in Kerala.<br/>Built for Travellers.</h2>
                <p style={{ fontSize:16,color:"#86a892",lineHeight:1.85,marginBottom:20 }}>We're not a booking portal. We're a small team of Keralites who know every backwater, every spice trail, and every hidden beach — and we share that knowledge to craft experiences that no algorithm can.</p>
                <p style={{ fontSize:16,color:"#86a892",lineHeight:1.85,marginBottom:36 }}>Since 2016, we've personally escorted over 5,000 travellers through God's Own Country. Every trip is managed by a human, not a chatbot.</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                  {[{ I: Shield, t:"100% Safe Stays", d:"Verified hotels & boats only" },{ I: Users, t:"Private Groups", d:"No shared transport" },{ I: Clock, t:"24/7 Support", d:"Human — not automated" },{ I: Calendar, t:"Flexible Dates", d:"Any package, any date" }].map(({ I, t, d })=>(
                    <div key={t} style={{ background:"rgba(74,222,128,.05)",borderRadius:14,padding:"18px 16px",border:"1px solid rgba(74,222,128,.1)" }}>
                      <I size={20} color="#4ade80" style={{ marginBottom:10 }}/>
                      <div style={{ fontWeight:700,fontSize:14,color:"#f0ede6",marginBottom:4 }}>{t}</div>
                      <div style={{ fontSize:12,color:"#86a892" }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="kt-about-wrap" style={{ position:"relative",height:520,borderRadius:20,overflow:"hidden",cursor:"pointer" }}>
<img className="kt-about-img" src={u("photo-1582510003544-4d00b7f74220")} alt="Kerala" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>                 <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,20,10,.7) 0%,transparent 50%)" }}/>
                <div style={{ position:"absolute",bottom:24,left:24,right:24 }}>
                  <div style={{ background:"rgba(255,255,255,.1)",backdropFilter:"blur(12px)",borderRadius:14,padding:"16px 20px",border:"1px solid rgba(255,255,255,.15)" }}>
                    <div style={{ fontWeight:700,fontSize:14,color:"#fff",marginBottom:4 }}>📍 Kerala-based, not outsourced</div>
                    <div style={{ fontSize:13,color:"rgba(255,255,255,.7)" }}>Every guide, every hotel, every boat — personally vetted by our team.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="reviews" className="kt-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#4ade80",marginBottom:14 }}>TRAVELLER STORIES</p>
              <h2 className="kt-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f0ede6",letterSpacing:"-0.04em" }}>Real Reviews</h2>
            </div>
            <div className="kt-rv-grid" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20 }}>
              {REVIEWS.map(r=>(
                <div key={r.n} className="kt-rv" style={{ background:"#0f2318",borderRadius:20,padding:28,border:"1px solid rgba(74,222,128,.1)" }}>
                  <div style={{ display:"flex",gap:3,marginBottom:16 }}>{[1,2,3,4,5].map(i=><Star key={i} size={15} fill="#f59e0b" color="#f59e0b"/>)}</div>
                  <p style={{ fontSize:15,color:"#c8d5cc",lineHeight:1.75,marginBottom:20 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:16 }}>
                    <div style={{ fontWeight:700,fontSize:14,color:"#f0ede6" }}>{r.n}</div>
                    <div style={{ fontSize:12,color:"#86a892",marginTop:2 }}>{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background:"#0f2318",borderTop:"1px solid rgba(74,222,128,.12)",padding:"72px 40px",textAlign:"center" }}>
          <div style={{ maxWidth:600,margin:"0 auto" }}>
            <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:"rgba(74,222,128,.1)",borderRadius:99,padding:"6px 16px",marginBottom:20 }}>
              <MapPin size={13} color="#4ade80"/>
              <span style={{ fontSize:12,color:"#4ade80",fontWeight:600 }}>Kerala-based team · Always reachable</span>
            </div>
            <h2 style={{ fontSize:"clamp(28px,5vw,56px)",fontWeight:900,color:"#f0ede6",letterSpacing:"-0.04em",marginBottom:18,lineHeight:1.1 }}>Your Kerala Story Starts Here.</h2>
            <p style={{ fontSize:17,color:"#86a892",marginBottom:36,lineHeight:1.65 }}>Tell us your dates, group size, and budget — we'll craft the perfect itinerary in under 2 hours.</p>
            <a href={wa} target="_blank" rel="noreferrer" className="kt-cta kt-wa" style={{ background:"#25D366",color:"#fff",borderRadius:10,padding:"17px 38px",fontSize:16,boxShadow:"0 4px 20px rgba(37,211,102,.3)",transition:"transform .22s,box-shadow .22s" }}><Phone size={18}/>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

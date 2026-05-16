"use client";
import { useState } from "react";
import { Phone, Check, Star, ChevronDown, MapPin, Camera, AlertCircle } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const PARKS = [
  { name: "Bandhavgarh", tag: "Highest Tiger Density", img: u("photo-1561731216-c3a4d99437d5"), desc: "India's most famous tiger reserve. Highest density of Bengal tigers in the world.", tigers: "150+", area: "1,536 km²", best: "Oct – Jun", sightings: "94%" },
  { name: "Kanha", tag: "Tiger & Barasingha", img: u("photo-1598091383021-15ddea10925d"), desc: "Inspiration for The Jungle Book. Dense sal forests and vast meadows teeming with wildlife.", tigers: "130+", area: "1,945 km²", best: "Nov – Jun", sightings: "87%" },
  { name: "Pench", tag: "Leopard & Wild Dog", img: u("photo-1504173010664-32509aeebb62"), desc: "Riverine habitats, diverse birdlife, and some of the best leopard sightings in Central India.", tigers: "70+", area: "758 km²", best: "Dec – May", sightings: "78%" },
  { name: "Satpura", tag: "Walking Safaris", tag2: "Unique", img: u("photo-1516426122078-c23e76319801"), desc: "India's only national park offering walking safaris and boat rides through pristine jungle.", tigers: "50+", area: "1,427 km²", best: "Nov – May", sightings: "65%" },
];

const PACKAGES = [
  { name: "Tiger Trail", nights: "3N · 4D", price: "₹24,000", per: "per person · twin sharing", park: "Bandhavgarh", highlight: false, inc: ["6 Jeep Safaris","Jungle Lodge","All Meals","Naturalist Guide","Park Permit","Airport Transfer"] },
  { name: "Central India Circuit", nights: "6N · 7D", price: "₹48,000", per: "per person · twin sharing", park: "Bandhavgarh + Kanha", highlight: true, tag: "BEST VALUE", inc: ["12 Jeep Safaris","Premium Lodges","All Meals","Expert Naturalist","All Permits","All Transfers","Wildlife Photography Tips"] },
  { name: "Luxury Wilderness", nights: "4N · 5D", price: "₹72,000", per: "per person · twin sharing", park: "Kanha or Pench", highlight: false, inc: ["8 Private Safaris","Luxury Tented Camp","All Meals + Bar","Senior Naturalist","Night Drive (Satpura)","Spa Access"] },
];

const WILDLIFE = [
  { name: "Bengal Tiger", icon: "🐯", chance: 90, parks: "Bandhavgarh, Kanha" },
  { name: "Leopard", icon: "🐆", chance: 75, parks: "Pench, Satpura" },
  { name: "Wild Dog (Dhole)", icon: "🐕", chance: 60, parks: "Pench, Kanha" },
  { name: "Sloth Bear", icon: "🐻", chance: 65, parks: "Bandhavgarh, Satpura" },
  { name: "Barasingha", icon: "🦌", chance: 95, parks: "Kanha (exclusive)" },
  { name: "Indian Bison", icon: "🐃", chance: 80, parks: "Kanha, Pench" },
];

const BEST_MONTHS = [
  { m: "Oct", g: 3 }, { m: "Nov", g: 4 }, { m: "Dec", g: 4 }, { m: "Jan", g: 5 },
  { m: "Feb", g: 5 }, { m: "Mar", g: 5 }, { m: "Apr", g: 4 }, { m: "May", g: 4 },
  { m: "Jun", g: 2 }, { m: "Jul", g: 0 }, { m: "Aug", g: 0 }, { m: "Sep", g: 0 },
];

const REVIEWS = [
  { n: "Vikram & Reena", c: "Delhi", s: 5, t: "We spotted a tigress with three cubs on our very first safari in Bandhavgarh. Our naturalist Ramesh was extraordinary. A trip of a lifetime." },
  { n: "James P.", c: "London, UK", s: 5, t: "Came specifically for tigers and wasn't disappointed. The lodge was stunning, food incredible, and sightings every single day. Will be back." },
  { n: "Priya S.", c: "Bangalore", s: 5, t: "The Central India Circuit covered both parks perfectly. Seamless logistics, no stress — just pure wildlife magic. Book with these guys, period." },
];

const FAQS = [
  { q: "When is the best time to visit MP for safaris?", a: "October to June is ideal. Feb–May offers peak sightings as tigers visit waterholes frequently. Parks are closed July–September for monsoon." },
  { q: "How many safaris happen per day?", a: "Two safaris per day — morning (6–10 AM) and afternoon (3–6:30 PM). Morning safaris have higher tiger sighting probability." },
  { q: "Are sightings guaranteed?", a: "No responsible operator guarantees sightings. However, Bandhavgarh has the highest density in India with 90%+ sighting rate across our trips." },
  { q: "What should I pack?", a: "Neutral-coloured clothes (khaki/olive), sun hat, good binoculars, sunscreen, and a camera with zoom lens. Avoid white, bright red, or blue." },
];

export function SafariMPDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [activePark, setActivePark] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "inherit", background: "#1a0f00", color: "#f5ede0" }}>
      <style>{`
        .sf *{box-sizing:border-box}
        .sf-link{color:#a0876a;cursor:pointer;transition:color .2s,transform .2s;display:inline-block}
        .sf-link:hover{color:#f59e0b;transform:translateY(-1px)}
        .sf-cta{transition:transform .22s,box-shadow .22s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800;cursor:pointer}
        .sf-cta:hover{transform:translateY(-3px) scale(1.03)}
        .sf-park-btn{transition:all .2s;cursor:pointer;border:none;text-align:left}
        .sf-park-btn:hover{background:rgba(245,158,11,.08)!important;border-color:rgba(245,158,11,.3)!important}
        .sf-park-btn.active{background:rgba(245,158,11,.12)!important;border-color:#f59e0b!important}
        .sf-pkg{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s;cursor:pointer}
        .sf-pkg:hover{transform:translateY(-8px) scale(1.015)}
        .sf-wildlife{transition:background .2s,transform .2s;cursor:default}
        .sf-wildlife:hover{background:rgba(245,158,11,.08)!important;transform:translateX(4px)}
        .sf-rv{transition:transform .22s,box-shadow .22s}
        .sf-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.5)!important}
        .sf-faq{transition:background .2s,border-color .2s;cursor:pointer}
        .sf-faq:hover{background:rgba(245,158,11,.05)!important;border-color:rgba(245,158,11,.2)!important}
        .sf-month{transition:transform .15s}
        .sf-month:hover{transform:scaleY(1.2)}
        .sf-wa{transition:transform .22s,box-shadow .22s!important}
        .sf-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        @media(max-width:768px){
          .sf-nav-links{display:none!important}
          .sf-hero-h1{font-size:38px!important;line-height:1!important}
          .sf-section{padding:52px 20px!important}
          .sf-hero-pad{padding:0 20px 80px!important}
          .sf-stats{gap:14px!important;flex-wrap:wrap;padding:16px 20px!important}
          .sf-park-inner{grid-template-columns:1fr!important}
          .sf-park-img{height:220px!important}
          .sf-pkgs{grid-template-columns:1fr!important}
          .sf-wildlife-grid{grid-template-columns:1fr!important}
          .sf-reviews{grid-template-columns:1fr!important}
          .sf-h2{font-size:28px!important}
          .sf-hero-btns{flex-direction:column!important}
          .sf-months{gap:6px!important}
          .sf-about-inner{grid-template-columns:1fr!important}
          .sf-about-img{display:none!important}
        }
      `}</style>

      <div className="sf">
        <nav style={{ background:"rgba(26,15,0,.97)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(245,158,11,.15)",position:"sticky",top:"4rem",zIndex:30,padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ fontSize:22 }}>🐯</div>
            <div>
              <div style={{ fontSize:16,fontWeight:900,color:"#f5ede0",letterSpacing:"-0.02em" }}>WildMP Safaris</div>
              <div style={{ fontSize:9,color:"#f59e0b",letterSpacing:"0.18em",textTransform:"uppercase" }}>Madhya Pradesh · Est. 2012</div>
            </div>
          </div>
          <div className="sf-nav-links" style={{ display:"flex",gap:28,fontSize:13,fontWeight:600,alignItems:"center" }}>
            {["Parks","Packages","Wildlife","About"].map(l=><span key={l} className="sf-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="sf-cta" style={{ background:"#f59e0b",color:"#1a0f00",borderRadius:8,padding:"9px 22px",fontSize:13 }}>Book Safari</a>
          </div>
        </nav>

        <div style={{ position:"relative",height:"90vh",minHeight:540,maxHeight:860 }}>
          <img src={u("photo-1561731216-c3a4d99437d5")} alt="MP Safari" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%" }}/>
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,rgba(10,5,0,.92) 0%,rgba(10,5,0,.6) 50%,rgba(10,5,0,.25) 100%)" }}/>
          <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at bottom left,rgba(245,158,11,.08) 0%,transparent 60%)" }}/>
          <div className="sf-hero-pad" style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 60px 80px",maxWidth:760 }}>
            <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:20 }}>
              <MapPin size={13} color="#f59e0b"/>
              <span style={{ fontSize:11,color:"#fbbf24",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase" }}>Madhya Pradesh · Heart of India</span>
            </div>
            <h1 className="sf-hero-h1" style={{ fontSize:"clamp(38px,6.5vw,80px)",fontWeight:900,color:"#fff",lineHeight:.9,letterSpacing:"-0.045em",marginBottom:24 }}>
              Where the<br/>Tiger Roams<br/><span style={{ color:"#f59e0b" }}>Free.</span>
            </h1>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.72)",lineHeight:1.75,marginBottom:40,maxWidth:500 }}>Bandhavgarh. Kanha. Pench. Satpura. Curated safari experiences across MP's legendary tiger reserves — with expert naturalists who know every trail.</p>
            <div className="sf-hero-btns" style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <a href={wa} target="_blank" rel="noreferrer" className="sf-cta" style={{ background:"#f59e0b",color:"#1a0f00",borderRadius:8,padding:"16px 34px",fontSize:15,boxShadow:"0 4px 24px rgba(245,158,11,.4)" }}><Phone size={16}/>Book Your Safari</a>
              <a href="#parks" className="sf-cta" style={{ background:"rgba(255,255,255,.08)",color:"#f5ede0",border:"1px solid rgba(255,255,255,.15)",borderRadius:8,padding:"16px 34px",fontSize:15,fontWeight:700 }}>Explore Parks ↓</a>
            </div>
          </div>
          <div className="sf-stats" style={{ position:"absolute",bottom:0,left:0,right:0,background:"rgba(10,5,0,.88)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(245,158,11,.15)",display:"flex",justifyContent:"center",gap:52,padding:"22px 40px" }}>
            {[["94%","Tiger Sighting Rate"],["4 Parks","Covered"],["12 yrs","Experience"],["8,000+","Happy Guests"]].map(([v,l])=>(
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:22,fontWeight:900,color:"#f59e0b" }}>{v}</div>
                <div style={{ fontSize:10,color:"rgba(255,255,255,.45)",marginTop:3,textTransform:"uppercase",letterSpacing:"0.12em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="parks" className="sf-section" style={{ padding:"80px 40px",background:"#120900" }}>
          <div style={{ maxWidth:1300,margin:"0 auto" }}>
            <div style={{ marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>CHOOSE YOUR RESERVE</p>
              <h2 className="sf-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em" }}>The Reserves</h2>
            </div>
            <div style={{ display:"flex",gap:10,flexWrap:"wrap",marginBottom:28 }}>
              {PARKS.map((p,i)=>(
                <button key={p.name} onClick={()=>setActivePark(i)} className={`sf-park-btn${activePark===i?" active":""}`} style={{ background:"transparent",border:`1px solid ${activePark===i?"#f59e0b":"rgba(255,255,255,.1)"}`,borderRadius:10,padding:"10px 20px",color:activePark===i?"#f59e0b":"#a0876a",fontSize:13,fontWeight:700 }}>
                  {p.name}
                  {p.tag2 && <span style={{ marginLeft:8,fontSize:10,background:"rgba(245,158,11,.15)",color:"#f59e0b",borderRadius:4,padding:"2px 6px" }}>{p.tag2}</span>}
                </button>
              ))}
            </div>
            {PARKS.map((p,i)=> i===activePark && (
              <div key={p.name} className="sf-park-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",borderRadius:20,overflow:"hidden",border:"1px solid rgba(245,158,11,.15)",background:"#1a0f00" }}>
                <div className="sf-park-img" style={{ position:"relative",height:420 }}>
                  <img src={p.img} alt={p.name} style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                  <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,transparent 60%,rgba(26,15,0,.95) 100%)" }}/>
                  <div style={{ position:"absolute",top:20,left:20,background:"#f59e0b",color:"#1a0f00",borderRadius:6,padding:"5px 14px",fontSize:11,fontWeight:800,letterSpacing:"0.06em" }}>{p.tag}</div>
                </div>
                <div style={{ padding:40,display:"flex",flexDirection:"column",justifyContent:"center" }}>
                  <h3 style={{ fontSize:36,fontWeight:900,color:"#f5ede0",letterSpacing:"-0.035em",marginBottom:12 }}>{p.name}</h3>
                  <p style={{ fontSize:15,color:"#a0876a",lineHeight:1.75,marginBottom:28 }}>{p.desc}</p>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:28 }}>
                    {[["🐯",`${p.tigers} Tigers`],["📐",p.area],["📅",`Best: ${p.best}`],["✅",`${p.sightings} Sighting Rate`]].map(([e,t])=>(
                      <div key={t} style={{ background:"rgba(245,158,11,.07)",border:"1px solid rgba(245,158,11,.12)",borderRadius:10,padding:"12px 14px" }}>
                        <div style={{ fontSize:16,marginBottom:4 }}>{e}</div>
                        <div style={{ fontSize:13,color:"#f5ede0",fontWeight:600 }}>{t}</div>
                      </div>
                    ))}
                  </div>
                  <a href={wa} target="_blank" rel="noreferrer" className="sf-cta" style={{ background:"#f59e0b",color:"#1a0f00",borderRadius:10,padding:"14px 28px",fontSize:15 }}><Camera size={16}/>Book {p.name} Safari</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sf-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>PICK YOUR EXPERIENCE</p>
              <h2 className="sf-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em" }}>Safari Packages</h2>
            </div>
            <div className="sf-pkgs" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20 }}>
              {PACKAGES.map((p,i)=>(
                <div key={i} className="sf-pkg" style={{ borderRadius:18,padding:30,background:"#120900",border:p.highlight?"2px solid #f59e0b":"1px solid rgba(255,255,255,.07)",position:"relative",transform:p.highlight?"scale(1.03)":"none" }}>
                  {p.tag && <div style={{ position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:"#f59e0b",color:"#1a0f00",borderRadius:99,padding:"4px 18px",fontSize:11,fontWeight:800,letterSpacing:"0.1em",whiteSpace:"nowrap" }}>{p.tag}</div>}
                  <div style={{ fontSize:11,color:"#f59e0b",fontWeight:700,letterSpacing:"0.1em",marginBottom:8 }}>{p.nights}</div>
                  <h3 style={{ fontSize:24,fontWeight:900,color:"#f5ede0",marginBottom:6 }}>{p.name}</h3>
                  <div style={{ fontSize:12,color:"#a0876a",marginBottom:20 }}>📍 {p.park}</div>
                  <div style={{ fontSize:34,fontWeight:900,color:"#f59e0b",letterSpacing:"-0.03em",marginBottom:4 }}>{p.price}</div>
                  <div style={{ fontSize:12,color:"#a0876a",marginBottom:24 }}>{p.per}</div>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:20,marginBottom:24 }}>
                    {p.inc.map(item=>(
                      <div key={item} style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10,fontSize:14,color:"#c8b49a" }}>
                        <Check size={13} color="#f59e0b"/>{item}
                      </div>
                    ))}
                  </div>
                  <a href={wa} target="_blank" rel="noreferrer" className="sf-cta" style={{ display:"block",textAlign:"center",background:p.highlight?"#f59e0b":"rgba(245,158,11,.12)",color:p.highlight?"#1a0f00":"#f59e0b",borderRadius:10,padding:"13px",fontSize:14,justifyContent:"center",border:p.highlight?"none":"1px solid rgba(245,158,11,.3)" }}>Book This Package</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sf-section" style={{ padding:"80px 40px",background:"#120900" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>WHAT YOU MIGHT SEE</p>
              <h2 className="sf-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em" }}>Wildlife Guide</h2>
            </div>
            <div className="sf-wildlife-grid" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:12 }}>
              {WILDLIFE.map(w=>(
                <div key={w.name} className="sf-wildlife" style={{ background:"#1a0f00",borderRadius:14,padding:"18px 20px",border:"1px solid rgba(255,255,255,.06)",display:"flex",alignItems:"center",gap:16 }}>
                  <div style={{ fontSize:32,flexShrink:0 }}>{w.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8 }}>
                      <div style={{ fontWeight:700,fontSize:16,color:"#f5ede0" }}>{w.name}</div>
                      <div style={{ fontSize:13,fontWeight:700,color:"#f59e0b" }}>{w.chance}%</div>
                    </div>
                    <div style={{ height:4,background:"rgba(255,255,255,.08)",borderRadius:99,overflow:"hidden",marginBottom:6 }}>
                      <div style={{ width:`${w.chance}%`,height:"100%",background:"linear-gradient(to right,#d97706,#f59e0b)",borderRadius:99 }}/>
                    </div>
                    <div style={{ fontSize:11,color:"#a0876a" }}>Best in {w.parks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sf-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>PLAN AHEAD</p>
              <h2 className="sf-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em" }}>Best Time to Visit</h2>
            </div>
            <div className="sf-months" style={{ display:"flex",gap:10,alignItems:"flex-end",height:120,flexWrap:"nowrap",overflowX:"auto",paddingBottom:8 }}>
              {BEST_MONTHS.map(({ m, g })=>(
                <div key={m} className="sf-month" style={{ flex:1,minWidth:52,display:"flex",flexDirection:"column",alignItems:"center",gap:6 }}>
                  <div style={{ width:"100%",borderRadius:"6px 6px 0 0",background:g===0?"rgba(255,255,255,.05)":g>=5?"#f59e0b":g>=4?"#d97706":g>=3?"#b45309":"#92400e",height:`${Math.max(g*16,6)}px`,transition:"height .3s",position:"relative" }}>
                    {g>=5 && <div style={{ position:"absolute",top:-20,left:"50%",transform:"translateX(-50%)",fontSize:9,color:"#f59e0b",fontWeight:700,whiteSpace:"nowrap" }}>PEAK</div>}
                  </div>
                  <div style={{ fontSize:11,fontWeight:600,color:g===0?"#3d2e1a":"#c8b49a" }}>{m}</div>
                  {g===0 && <div style={{ fontSize:9,color:"#3d2e1a",fontWeight:600 }}>CLOSED</div>}
                </div>
              ))}
            </div>
            <div style={{ display:"flex",gap:20,marginTop:20,flexWrap:"wrap" }}>
              {[["#f59e0b","Peak Season (Feb–Mar)"],["#d97706","Good Season"],["#92400e","Shoulder Season"],["rgba(255,255,255,.05)","Parks Closed"]].map(([c,l])=>(
                <div key={l} style={{ display:"flex",alignItems:"center",gap:8 }}>
                  <div style={{ width:12,height:12,borderRadius:3,background:c }}/>
                  <span style={{ fontSize:12,color:"#a0876a" }}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop:24,background:"rgba(245,158,11,.06)",border:"1px solid rgba(245,158,11,.15)",borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"flex-start",gap:12 }}>
              <AlertCircle size={16} color="#f59e0b" style={{ flexShrink:0,marginTop:2 }}/>
              <div style={{ fontSize:13,color:"#a0876a",lineHeight:1.65 }}>All MP national parks are closed from <strong style={{ color:"#f5ede0" }}>July 1 to September 30</strong> for monsoon season. Book early for peak months — February and March slots fill up fast.</div>
            </div>
          </div>
        </div>

        <div id="about" className="sf-section" style={{ padding:"80px 40px",background:"#120900" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="sf-about-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center" }}>
              <div>
                <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>WHO WE ARE</p>
                <h2 className="sf-h2" style={{ fontSize:"clamp(28px,4vw,50px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em",lineHeight:.95,marginBottom:24 }}>12 Years in<br/>the Jungle.</h2>
                <p style={{ fontSize:16,color:"#a0876a",lineHeight:1.85,marginBottom:20 }}>WildMP Safaris was founded by naturalist Ramesh Patel — a Bandhavgarh local who has tracked tigers since 1998. We're not a travel agency that resells jungle packages. We are the jungle.</p>
                <p style={{ fontSize:16,color:"#a0876a",lineHeight:1.85,marginBottom:36 }}>Our naturalists have logged over 40,000 safari hours across MP's reserves. When you're with us, you're with people who know which waterhole the tigress prefers on a May morning.</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  {[["🐯","150+ Tiger Sightings/yr","Documented & logged"],["📸","Wildlife Photography","Expert guidance"],["🌿","Eco-Certified","Responsible tourism"],["🏕️","Curated Lodges","Personally vetted stays"]].map(([e,t,d])=>(
                    <div key={t} style={{ background:"rgba(245,158,11,.06)",border:"1px solid rgba(245,158,11,.1)",borderRadius:12,padding:"14px" }}>
                      <div style={{ fontSize:20,marginBottom:8 }}>{e}</div>
                      <div style={{ fontWeight:700,fontSize:13,color:"#f5ede0",marginBottom:3 }}>{t}</div>
                      <div style={{ fontSize:11,color:"#a0876a" }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sf-about-img" style={{ position:"relative",height:520,borderRadius:18,overflow:"hidden" }}>
                <img src={u("photo-1504173010664-32509aeebb62")} alt="Jungle safari" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(10,5,0,.75) 0%,transparent 50%)" }}/>
                <div style={{ position:"absolute",bottom:24,left:24,right:24,background:"rgba(0,0,0,.75)",backdropFilter:"blur(12px)",borderRadius:14,padding:"16px 20px",border:"1px solid rgba(245,158,11,.2)" }}>
                  <div style={{ fontWeight:700,fontSize:14,color:"#f5ede0",marginBottom:4 }}>🌿 Eco-Certified · Forest Dept. Approved</div>
                  <div style={{ fontSize:12,color:"#a0876a" }}>All safaris follow MoEF guidelines. We give back 5% of revenue to local wildlife conservation.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sf-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>GUEST EXPERIENCES</p>
              <h2 className="sf-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em" }}>Stories from the Wild</h2>
            </div>
            <div className="sf-reviews" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16 }}>
              {REVIEWS.map(r=>(
                <div key={r.n} className="sf-rv" style={{ background:"#120900",borderRadius:16,padding:26,border:"1px solid rgba(245,158,11,.1)" }}>
                  <div style={{ display:"flex",gap:3,marginBottom:16 }}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="#f59e0b" color="#f59e0b"/>)}</div>
                  <p style={{ fontSize:15,color:"#c8b49a",lineHeight:1.75,marginBottom:20 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:16 }}>
                    <div style={{ fontWeight:700,fontSize:14,color:"#f5ede0" }}>{r.n}</div>
                    <div style={{ fontSize:12,color:"#a0876a",marginTop:2 }}>{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sf-section" style={{ padding:"80px 40px",background:"#120900" }}>
          <div style={{ maxWidth:760,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#f59e0b",marginBottom:14 }}>FAQ</p>
              <h2 className="sf-h2" style={{ fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:"#f5ede0",letterSpacing:"-0.04em" }}>Before You Go</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {FAQS.map((f,i)=>(
                <div key={i} className="sf-faq" style={{ background:"rgba(255,255,255,.03)",borderRadius:12,padding:"20px 22px",border:"1px solid rgba(255,255,255,.06)" }} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                    <div style={{ fontWeight:700,fontSize:15,color:"#f5ede0" }}>{f.q}</div>
                    <ChevronDown size={16} color="#f59e0b" style={{ transform:openFaq===i?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0 }}/>
                  </div>
                  {openFaq===i && <div style={{ marginTop:12,fontSize:14,color:"#a0876a",lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position:"relative",minHeight:440,overflow:"hidden" }}>
          <img src={u("photo-1516426122078-c23e76319801")} alt="Tiger in jungle" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%" }}/>
          <div style={{ position:"absolute",inset:0,background:"rgba(10,5,0,.8)" }}/>
          <div style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"60px 24px" }}>
            <div style={{ fontSize:40,marginBottom:20 }}>🐯</div>
            <h2 style={{ fontSize:"clamp(30px,5vw,64px)",fontWeight:900,color:"#fff",letterSpacing:"-0.045em",lineHeight:.92,marginBottom:18 }}>The Tiger is Waiting.<br/><span style={{ color:"#f59e0b" }}>Are You Ready?</span></h2>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.72)",marginBottom:36,maxWidth:480,lineHeight:1.65 }}>Tell us your dates and preferred park — we'll handle everything from permits to lodge to naturalist in under 24 hours.</p>
            <a href={wa} target="_blank" rel="noreferrer" className="sf-cta sf-wa" style={{ background:"#25D366",color:"#fff",borderRadius:10,padding:"17px 40px",fontSize:16,boxShadow:"0 4px 20px rgba(37,211,102,.3)" }}><Phone size={18}/>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

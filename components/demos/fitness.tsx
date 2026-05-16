"use client";
import { useState } from "react";
import { Phone, Check, Star, Zap, Trophy, Users, Clock, ChevronDown } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const PLANS = [
  { name: "STARTER", price: "₹1,499", period: "/month", highlight: false, tag: null, features: ["Full Gym Access","Locker Room","Steam Room","1 Free PT Session","Cardio Zone"] },
  { name: "PRO", price: "₹2,499", period: "/month", highlight: true, tag: "MOST POPULAR", features: ["Everything in Starter","8 PT Sessions","Diet Consultation","All Group Classes","Body Composition Analysis","Supplement Discount"] },
  { name: "ELITE", price: "₹3,999", period: "/month", highlight: false, tag: null, features: ["Everything in Pro","Unlimited PT Sessions","Custom Meal Plan","Priority Class Booking","Starter Supplement Pack","Recovery Room Access"] },
];

const TRAINERS = [
  { name: "Arjun Reddy", role: "Strength & Powerlifting", exp: "8 yrs", cert: "NSCA-CSCS · ACE", img: u("photo-1571019614242-c5c5dee9f50b"), spec: "Hypertrophy, Olympic Lifting" },
  { name: "Pooja Menon", role: "Yoga & Mobility", exp: "6 yrs", cert: "RYT-500 · Pilates", img: u("photo-1518611012118-696072aa579a"), spec: "Flexibility, Mindful Movement" },
  { name: "Ravi Shah", role: "Boxing & Conditioning", exp: "10 yrs", cert: "AIBA · NSAM", img: u("photo-1567013127542-490d757e51fc"), spec: "HIIT, Fat Loss, Combat" },
];

const SCHEDULE = [
  { time: "05:30 AM", name: "Early Bird HIIT", trainer: "Arjun", spots: 6, total: 12 },
  { time: "07:00 AM", name: "Yoga Flow", trainer: "Pooja", spots: 2, total: 10 },
  { time: "09:00 AM", name: "Strength & Power", trainer: "Arjun", spots: 0, total: 8 },
  { time: "06:00 PM", name: "Boxing Fundamentals", trainer: "Ravi", spots: 8, total: 15 },
  { time: "07:30 PM", name: "Power Yoga", trainer: "Pooja", spots: 5, total: 10 },
  { time: "08:30 PM", name: "Night HIIT Blast", trainer: "Ravi", spots: 4, total: 12 },
];

const TRANSFORMS = [
  { name: "Rohit M.", result: "−22 kg", time: "4 months", tag: "Fat Loss", before: "94 kg", after: "72 kg" },
  { name: "Divya S.", result: "+8 kg muscle", time: "3 months", tag: "Muscle Gain", before: "48 kg", after: "56 kg" },
  { name: "Amrith K.", result: "−30 kg", time: "6 months", tag: "Transformation", before: "110 kg", after: "80 kg" },
  { name: "Sneha R.", result: "Marathon ready", time: "5 months", tag: "Endurance", before: "Couldn't run 1km", after: "Completed 42km" },
];

const REVIEWS = [
  { n: "Karan T.", s: 5, t: "Arjun's programming is elite. I gained more muscle in 3 months here than 2 years at my previous gym. This place is serious." },
  { n: "Meera P.", s: 5, t: "The women's section is well-equipped and the female trainers are incredibly knowledgeable. I finally feel confident in the gym." },
  { n: "Aakash V.", s: 5, t: "Boxing classes with Ravi changed my life — I lost 18kg and gained confidence I never had. Best investment I've made." },
];

const FAQS = [
  { q: "What's included in the free trial?", a: "Full access to the gym, one group class of your choice, and a complimentary assessment with a trainer. No credit card needed." },
  { q: "Can I freeze my membership?", a: "Yes — you can freeze up to 30 days per year with 3 days notice. Medical freezes are unlimited with documentation." },
  { q: "Do you have parking?", a: "Yes — dedicated parking for 50+ vehicles available at no extra charge." },
  { q: "What are your timings?", a: "Weekdays 5:30 AM – 10:30 PM · Weekends 6 AM – 9 PM · Public holidays 7 AM – 7 PM." },
];

export function FitnessDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "inherit", background: "#080808", color: "#f5f5f5" }}>
      <style>{`
        .ft *{box-sizing:border-box}
        .ft-link{color:#737373;cursor:pointer;transition:color .2s,letter-spacing .2s;display:inline-block;letter-spacing:.05em;text-transform:uppercase;font-size:12px;font-weight:700}
        .ft-link:hover{color:#ef4444;letter-spacing:.1em}
        .ft-cta{transition:transform .2s,box-shadow .2s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800;cursor:pointer}
        .ft-cta:hover{transform:translateY(-3px) scale(1.03)}
        .ft-plan{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s;cursor:pointer}
        .ft-plan:hover{transform:translateY(-8px) scale(1.02)}
        .ft-trainer{transition:transform .3s cubic-bezier(.34,1.56,.64,1);cursor:pointer;overflow:hidden}
        .ft-trainer:hover{transform:translateY(-8px)}
        .ft-trainer:hover .ft-tr-img{transform:scale(1.07)}
        .ft-tr-img{transition:transform .6s cubic-bezier(.25,.46,.45,.94)}
        .ft-sched-row{transition:background .2s,padding-left .25s,border-color .2s;cursor:pointer}
        .ft-sched-row:hover{background:rgba(239,68,68,.07)!important;padding-left:28px!important;border-color:rgba(239,68,68,.3)!important}
        .ft-transform{transition:transform .25s cubic-bezier(.34,1.56,.64,1),border-color .2s}
        .ft-transform:hover{transform:translateY(-6px) scale(1.03);border-color:#ef4444!important}
        .ft-rv{transition:transform .22s,box-shadow .22s}
        .ft-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.5)!important}
        .ft-faq{transition:background .2s,border-color .2s;cursor:pointer}
        .ft-faq:hover{background:rgba(239,68,68,.05)!important;border-color:rgba(239,68,68,.3)!important}
        .ft-stat{transition:transform .2s}
        .ft-stat:hover{transform:scale(1.08)}
        .ft-wa{transition:transform .22s,box-shadow .22s!important}
        .ft-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        @media(max-width:768px){
          .ft-nav-links{display:none!important}
          .ft-hero-h1{font-size:44px!important;line-height:.95!important}
          .ft-section{padding:52px 20px!important}
          .ft-hero-pad{padding:0 20px 80px!important}
          .ft-stats{gap:14px!important;flex-wrap:wrap;padding:16px 20px!important}
          .ft-plans{grid-template-columns:1fr!important}
          .ft-trainers{grid-template-columns:1fr!important}
          .ft-transforms{grid-template-columns:1fr 1fr!important}
          .ft-reviews{grid-template-columns:1fr!important}
          .ft-h2{font-size:30px!important}
          .ft-hero-btns{flex-direction:column!important}
          .ft-about-inner{grid-template-columns:1fr!important}
          .ft-about-img{display:none!important}
        }
      `}</style>

      <div className="ft">
        <nav style={{ background:"rgba(8,8,8,.96)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(239,68,68,.15)",position:"sticky",top:"4rem",zIndex:30,padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:32,height:32,background:"#ef4444",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center" }}><Zap size={18} color="#fff" fill="#fff"/></div>
            <div>
              <div style={{ fontSize:16,fontWeight:900,color:"#fff",letterSpacing:"-0.02em",textTransform:"uppercase" }}>IronCore Gym</div>
              <div style={{ fontSize:9,color:"#ef4444",letterSpacing:"0.2em",textTransform:"uppercase" }}>Elite Performance Center</div>
            </div>
          </div>
          <div className="ft-nav-links" style={{ display:"flex",gap:28,alignItems:"center" }}>
            {["Classes","Trainers","Plans","Results"].map(l=><span key={l} className="ft-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="ft-cta" style={{ background:"#ef4444",color:"#fff",borderRadius:6,padding:"9px 22px",fontSize:12,letterSpacing:"0.1em",textTransform:"uppercase" }}>Free Trial</a>
          </div>
        </nav>

        <div style={{ position:"relative",height:"92vh",minHeight:540,maxHeight:860 }}>
          <img src={u("photo-1534438327276-14e5300c3a48")} alt="IronCore Gym" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center" }}/>
          <div style={{ position:"absolute",inset:0,background:"linear-gradient(to right,rgba(0,0,0,.92) 0%,rgba(0,0,0,.65) 45%,rgba(0,0,0,.2) 100%)" }}/>
          <div style={{ position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg,rgba(239,68,68,.03) 0px,rgba(239,68,68,.03) 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,rgba(239,68,68,.03) 0px,rgba(239,68,68,.03) 1px,transparent 1px,transparent 80px)" }}/>
          <div className="ft-hero-pad" style={{ position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 60px 80px",maxWidth:780 }}>
            <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(239,68,68,.12)",border:"1px solid rgba(239,68,68,.25)",borderRadius:6,padding:"6px 14px",marginBottom:24,width:"fit-content" }}>
              <Zap size={12} color="#ef4444" fill="#ef4444"/>
              <span style={{ fontSize:11,color:"#ef4444",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase" }}>7-Day Free Trial · No Credit Card</span>
            </div>
            <h1 className="ft-hero-h1" style={{ fontSize:"clamp(44px,8vw,96px)",fontWeight:900,color:"#fff",lineHeight:.88,letterSpacing:"-0.055em",marginBottom:24,textTransform:"uppercase" }}>
              Build The<br/><span style={{ WebkitTextStroke:"2px #ef4444",color:"transparent" }}>Body</span><br/>You Want.
            </h1>
            <p style={{ fontSize:17,color:"rgba(255,255,255,.7)",lineHeight:1.7,marginBottom:40,maxWidth:460 }}>State-of-the-art equipment, elite certified coaches, and a no-excuse community that pushes you past every limit.</p>
            <div className="ft-hero-btns" style={{ display:"flex",gap:14,flexWrap:"wrap" }}>
              <a href={wa} target="_blank" rel="noreferrer" className="ft-cta" style={{ background:"#ef4444",color:"#fff",borderRadius:6,padding:"16px 34px",fontSize:15,textTransform:"uppercase",letterSpacing:"0.08em",boxShadow:"0 4px 20px rgba(239,68,68,.45)" }}><Phone size={16}/>Claim Free Trial</a>
              <a href="#plans" className="ft-cta" style={{ background:"rgba(255,255,255,.07)",color:"#fff",border:"1px solid rgba(255,255,255,.15)",borderRadius:6,padding:"16px 34px",fontSize:15,fontWeight:700 }}>View Plans ↓</a>
            </div>
          </div>
          <div className="ft-stats" style={{ position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,.88)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(239,68,68,.15)",display:"flex",justifyContent:"center",gap:56,padding:"22px 40px" }}>
            {[["3,000+","Members"],["20+","Trainers"],["50+","Classes/Week"],["5 AM","Opens Early"]].map(([v,l])=>(
              <div key={l} className="ft-stat" style={{ textAlign:"center" }}>
                <div style={{ fontSize:22,fontWeight:900,color:"#ef4444" }}>{v}</div>
                <div style={{ fontSize:10,color:"rgba(255,255,255,.45)",marginTop:3,textTransform:"uppercase",letterSpacing:"0.12em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ft-section" style={{ padding:"80px 40px",background:"#0f0f0f" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>TODAY'S CLASSES</p>
              <h2 className="ft-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em" }}>Live Schedule</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {SCHEDULE.map((s,i)=>{
                const pct = s.spots===0?100:Math.round(((s.total-s.spots)/s.total)*100);
                return (
                  <div key={i} className="ft-sched-row" style={{ display:"flex",alignItems:"center",gap:20,background:"rgba(255,255,255,.03)",borderRadius:10,padding:"18px 22px",border:"1px solid rgba(255,255,255,.06)",transition:"all .2s" }}>
                    <div style={{ minWidth:80,fontSize:13,fontWeight:700,color:"#ef4444",fontVariantNumeric:"tabular-nums" }}>{s.time}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:800,fontSize:16,color:"#fff",marginBottom:2 }}>{s.name}</div>
                      <div style={{ fontSize:12,color:"#525252" }}>with {s.trainer}</div>
                    </div>
                    <div style={{ width:80,height:4,background:"rgba(255,255,255,.08)",borderRadius:99,overflow:"hidden",flexShrink:0 }}>
                      <div style={{ width:`${pct}%`,height:"100%",background:s.spots===0?"#ef4444":"#22c55e",borderRadius:99,transition:"width .3s" }}/>
                    </div>
                    <div style={{ fontSize:12,fontWeight:600,color:s.spots===0?"#ef4444":"#22c55e",minWidth:70,textAlign:"right" }}>{s.spots===0?"Full":`${s.spots} left`}</div>
                    {s.spots>0
                      ? <a href={wa} target="_blank" rel="noreferrer" className="ft-cta" style={{ background:"#ef4444",color:"#fff",borderRadius:6,padding:"8px 16px",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",flexShrink:0 }}>Book</a>
                      : <div style={{ width:74,height:34,background:"rgba(239,68,68,.1)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#ef4444",fontWeight:700,flexShrink:0 }}>FULL</div>
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="ft-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>THE COACHES</p>
              <h2 className="ft-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em" }}>Elite Trainers</h2>
            </div>
            <div className="ft-trainers" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20 }}>
              {TRAINERS.map(t=>(
                <div key={t.name} className="ft-trainer" style={{ borderRadius:16,background:"#0f0f0f",border:"1px solid rgba(239,68,68,.1)" }}>
                  <div style={{ position:"relative",height:280,overflow:"hidden",borderRadius:"16px 16px 0 0" }}>
                    <img src={t.img} alt={t.name} className="ft-tr-img" style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"top" }}/>
                    <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,.85) 0%,transparent 55%)" }}/>
                    <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"16px 20px" }}>
                      <div style={{ fontSize:11,color:"#ef4444",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4 }}>{t.role}</div>
                      <div style={{ fontSize:20,fontWeight:900,color:"#fff" }}>{t.name}</div>
                    </div>
                  </div>
                  <div style={{ padding:20 }}>
                    <div style={{ display:"flex",gap:8,flexWrap:"wrap",marginBottom:14 }}>
                      <span style={{ background:"rgba(239,68,68,.1)",color:"#ef4444",borderRadius:6,padding:"4px 10px",fontSize:11,fontWeight:600 }}>{t.exp}</span>
                      <span style={{ background:"rgba(255,255,255,.05)",color:"#737373",borderRadius:6,padding:"4px 10px",fontSize:11,fontWeight:600 }}>{t.cert}</span>
                    </div>
                    <div style={{ fontSize:13,color:"#525252",marginBottom:16 }}>Specialises in {t.spec}</div>
                    <a href={wa} target="_blank" rel="noreferrer" className="ft-cta" style={{ display:"block",textAlign:"center",background:"#ef4444",color:"#fff",borderRadius:8,padding:"12px",fontSize:13,textTransform:"uppercase",letterSpacing:"0.08em",justifyContent:"center" }}>Train with {t.name.split(" ")[0]}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ft-section" style={{ padding:"80px 40px",background:"#0f0f0f" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>REAL RESULTS</p>
              <h2 className="ft-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em" }}>Transformations</h2>
            </div>
            <div className="ft-transforms" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16 }}>
              {TRANSFORMS.map((t,i)=>(
                <div key={i} className="ft-transform" style={{ background:"#080808",border:"1px solid rgba(255,255,255,.07)",borderRadius:14,padding:24,position:"relative",overflow:"hidden" }}>
                  <div style={{ position:"absolute",top:0,right:0,width:80,height:80,background:"rgba(239,68,68,.04)",borderRadius:"0 14px 0 80px" }}/>
                  <div style={{ display:"inline-block",background:"rgba(239,68,68,.1)",color:"#ef4444",borderRadius:6,padding:"3px 10px",fontSize:11,fontWeight:700,marginBottom:16,letterSpacing:"0.06em" }}>{t.tag}</div>
                  <div style={{ fontSize:34,fontWeight:900,color:"#ef4444",letterSpacing:"-0.04em",marginBottom:6 }}>{t.result}</div>
                  <div style={{ fontSize:14,color:"#fff",fontWeight:700,marginBottom:4 }}>{t.name}</div>
                  <div style={{ fontSize:12,color:"#525252",marginBottom:18 }}>In {t.time}</div>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:16,display:"flex",justifyContent:"space-between" }}>
                    <div style={{ textAlign:"center" }}>
                      <div style={{ fontSize:11,color:"#525252",marginBottom:4 }}>BEFORE</div>
                      <div style={{ fontSize:14,color:"#737373",fontWeight:600 }}>{t.before}</div>
                    </div>
                    <div style={{ fontSize:18,color:"#ef4444" }}>→</div>
                    <div style={{ textAlign:"center" }}>
                      <div style={{ fontSize:11,color:"#525252",marginBottom:4 }}>AFTER</div>
                      <div style={{ fontSize:14,color:"#22c55e",fontWeight:600 }}>{t.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="plans" className="ft-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>MEMBERSHIP</p>
              <h2 className="ft-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em" }}>Choose Your Plan</h2>
            </div>
            <div className="ft-plans" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20 }}>
              {PLANS.map((p,i)=>(
                <div key={i} className="ft-plan" onMouseEnter={()=>setHoveredPlan(i)} onMouseLeave={()=>setHoveredPlan(null)}
                  style={{ borderRadius:16,padding:30,background:p.highlight?"#ef4444":"#0f0f0f",border:p.highlight?"2px solid #ef4444":`1px solid ${hoveredPlan===i?"rgba(239,68,68,.4)":"rgba(255,255,255,.07)"}`,position:"relative",transform:p.highlight?"scale(1.04)":"none" }}>
                  {p.tag && <div style={{ position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:"#fff",color:"#ef4444",borderRadius:99,padding:"4px 16px",fontSize:11,fontWeight:800,letterSpacing:"0.1em",whiteSpace:"nowrap" }}>{p.tag}</div>}
                  <div style={{ fontSize:13,fontWeight:700,color:p.highlight?"rgba(255,255,255,.7)":"#525252",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:10 }}>{p.name}</div>
                  <div style={{ fontSize:40,fontWeight:900,color:"#fff",letterSpacing:"-0.04em",marginBottom:2 }}>{p.price}</div>
                  <div style={{ fontSize:13,color:p.highlight?"rgba(255,255,255,.6)":"#525252",marginBottom:28 }}>{p.period}</div>
                  <div style={{ borderTop:`1px solid ${p.highlight?"rgba(255,255,255,.2)":"rgba(255,255,255,.07)"}`,paddingTop:22,marginBottom:28 }}>
                    {p.features.map(f=>(
                      <div key={f} style={{ display:"flex",alignItems:"center",gap:10,marginBottom:12,fontSize:14,color:p.highlight?"rgba(255,255,255,.9)":"#a3a3a3" }}>
                        <div style={{ width:20,height:20,borderRadius:6,background:p.highlight?"rgba(255,255,255,.2)":"rgba(239,68,68,.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}><Check size={12} color={p.highlight?"#fff":"#ef4444"}/></div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <a href={wa} target="_blank" rel="noreferrer" className="ft-cta" style={{ display:"block",textAlign:"center",background:p.highlight?"#fff":"#ef4444",color:p.highlight?"#ef4444":"#fff",borderRadius:10,padding:"14px",fontSize:14,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",justifyContent:"center" }}>Get Started</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="about" className="ft-section" style={{ padding:"80px 40px",background:"#0f0f0f" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="ft-about-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center" }}>
              <div>
                <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>ABOUT IRONCORE</p>
                <h2 className="ft-h2" style={{ fontSize:"clamp(28px,4vw,50px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em",lineHeight:.95,marginBottom:24 }}>Built for<br/>Serious Athletes.</h2>
                <p style={{ fontSize:16,color:"#737373",lineHeight:1.85,marginBottom:20 }}>IronCore wasn't built for casual gym-goers. It was built for people who mean it. Since 2018, we've been the training ground for state-level athletes, first-timers who needed a push, and everyone in between.</p>
                <p style={{ fontSize:16,color:"#737373",lineHeight:1.85,marginBottom:36 }}>10,000 sq ft of equipment, zero shortcuts. Every piece of kit is commercial-grade. Every coach is certified. Every plan is personalised.</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  {[{ I: Trophy, t:"State Champions", d:"12 athletes trained" },{ I: Users, t:"3,000+ Members", d:"Active right now" },{ I: Clock, t:"Open 365 Days", d:"No excuses allowed" },{ I: Zap, t:"10,000 sq ft", d:"Premium equipment" }].map(({ I, t, d })=>(
                    <div key={t} style={{ background:"rgba(239,68,68,.05)",border:"1px solid rgba(239,68,68,.1)",borderRadius:12,padding:"16px 14px" }}>
                      <I size={18} color="#ef4444" style={{ marginBottom:10 }}/>
                      <div style={{ fontWeight:700,fontSize:14,color:"#fff",marginBottom:3 }}>{t}</div>
                      <div style={{ fontSize:12,color:"#525252" }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ft-about-img" style={{ position:"relative",height:520,borderRadius:16,overflow:"hidden" }}>
                <img src={u("photo-1571902943202-507ec2618e8f")} alt="Gym interior" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 50%)" }}/>
                <div style={{ position:"absolute",bottom:20,left:20,right:20,background:"rgba(0,0,0,.8)",backdropFilter:"blur(12px)",borderRadius:12,padding:"16px 20px",border:"1px solid rgba(239,68,68,.2)" }}>
                  <div style={{ fontWeight:700,fontSize:14,color:"#fff",marginBottom:4 }}>🏆 Best Gym in the City · 2023 & 2024</div>
                  <div style={{ fontSize:12,color:"#737373" }}>Voted by FitIndia Community · 3,000+ votes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>REVIEWS</p>
              <h2 className="ft-h2" style={{ fontSize:"clamp(28px,4vw,52px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em" }}>Members Speak</h2>
            </div>
            <div className="ft-reviews" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16 }}>
              {REVIEWS.map(r=>(
                <div key={r.n} className="ft-rv" style={{ background:"#0f0f0f",borderRadius:14,padding:26,border:"1px solid rgba(255,255,255,.07)" }}>
                  <div style={{ display:"flex",gap:3,marginBottom:16 }}>{[1,2,3,4,5].map(i=><Star key={i} size={14} fill="#f59e0b" color="#f59e0b"/>)}</div>
                  <p style={{ fontSize:15,color:"#a3a3a3",lineHeight:1.75,marginBottom:18 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:14,fontWeight:700,fontSize:14,color:"#fff" }}>{r.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ft-section" style={{ padding:"80px 40px",background:"#0f0f0f" }}>
          <div style={{ maxWidth:760,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#ef4444",marginBottom:14 }}>FAQ</p>
              <h2 className="ft-h2" style={{ fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.04em" }}>Quick Answers</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {FAQS.map((f,i)=>(
                <div key={i} className="ft-faq" style={{ background:"rgba(255,255,255,.03)",borderRadius:12,padding:"20px 22px",border:"1px solid rgba(255,255,255,.07)" }} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                    <div style={{ fontWeight:700,fontSize:15,color:"#fff" }}>{f.q}</div>
                    <ChevronDown size={16} color="#ef4444" style={{ transform:openFaq===i?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0 }}/>
                  </div>
                  {openFaq===i && <div style={{ marginTop:12,fontSize:14,color:"#737373",lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background:"#ef4444",padding:"72px 40px",textAlign:"center" }}>
          <h2 style={{ fontSize:"clamp(32px,6vw,72px)",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"-0.055em",lineHeight:.88,marginBottom:20 }}>No More<br/>Excuses.</h2>
          <p style={{ fontSize:17,color:"rgba(255,255,255,.85)",marginBottom:36,maxWidth:440,margin:"0 auto 36px",lineHeight:1.6 }}>7-day free trial. No credit card. No contracts. Just show up.</p>
          <a href={wa} target="_blank" rel="noreferrer" className="ft-cta ft-wa" style={{ background:"#25D366",color:"#fff",borderRadius:8,padding:"17px 40px",fontSize:16,textTransform:"uppercase",letterSpacing:"0.08em",boxShadow:"0 4px 20px rgba(37,211,102,.3)" }}><Phone size={18}/>WhatsApp Us Now</a>
        </div>
      </div>
    </div>
  );
}

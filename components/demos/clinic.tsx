"use client";
import { useState } from "react";
import { Phone, Check, Star, ChevronDown, Shield, Clock, Award, UserCheck, Calendar } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

const TREATMENTS = [
  { icon:"🦷", name:"Root Canal Therapy", desc:"Painless single-sitting RCT with rotary equipment and digital X-rays.", time:"60–90 mins", price:"From ₹3,500" },
  { icon:"⚙️", name:"Dental Implants", desc:"Permanent titanium implants — natural look, lifetime durability.", time:"2–3 sessions", price:"From ₹28,000" },
  { icon:"✨", name:"Teeth Whitening", desc:"Zoom in-chair whitening — up to 8 shades brighter in one session.", time:"45 mins", price:"From ₹8,000" },
  { icon:"😁", name:"Orthodontics", desc:"Metal, ceramic braces and clear aligners for all ages.", time:"12–18 months", price:"From ₹35,000" },
  { icon:"🩺", name:"Gum Treatment", desc:"Scaling, root planing and laser gum therapy.", time:"30–60 mins", price:"From ₹1,200" },
  { icon:"💎", name:"Smile Makeover", desc:"Veneers, bonding and full cosmetic redesign for total confidence.", time:"2–4 sessions", price:"From ₹45,000" },
];

const DOCTORS = [
  { name:"Dr. Meera Iyer", role:"Senior Dentist & Implantologist", exp:"14 years", qual:"MDS – Oral Surgery, AIIMS Delhi", img:u("photo-1559839734-2b71ea197ec2"), tag:"Implants Specialist" },
  { name:"Dr. Karthik Nair", role:"Orthodontist & Cosmetic Dentist", exp:"9 years", qual:"MDS – Orthodontics, Manipal University", img:u("photo-1612349317150-e413f6a5b16d"), tag:"Braces & Aligners" },
];

const STEPS = [
  { n:"01", t:"WhatsApp Us", d:"Send us a message — we confirm your slot in under 15 minutes, any day of the week." },
  { n:"02", t:"Consultation", d:"Meet your doctor, discuss your concern, get a clear treatment plan with transparent pricing." },
  { n:"03", t:"Treatment", d:"State-of-the-art equipment, painless procedures, sterile environment — your comfort is our priority." },
  { n:"04", t:"Aftercare", d:"Post-treatment guidance, follow-up reminders, and direct doctor access via WhatsApp." },
];

const TRUST = [
  { I:Shield, t:"NABH-Grade Sterilisation", d:"Every instrument autoclaved before every patient." },
  { I:Award, t:"ISO 9001:2015 Certified", d:"Independently audited for quality and safety." },
  { I:UserCheck, t:"1,200+ Patients", d:"Trusted by families across the city since 2010." },
  { I:Clock, t:"Same-Day Appointments", d:"No waiting weeks — slots available Mon–Sat." },
];

const REVIEWS = [
  { n:"Anjali T.", c:"Patient since 2021", s:5, t:"Dr. Meera's root canal was completely painless — I was shocked. Excellent clinic, super hygienic, incredibly kind staff. Won't go anywhere else." },
  { n:"Rajan P.", c:"Patient since 2020", s:5, t:"My son's braces journey with Dr. Karthik was smooth from day one. Clear communication, great results, and always on time." },
  { n:"Sujata M.", c:"Patient since 2022", s:5, t:"The smile makeover changed my confidence completely. Professional, clean, genuinely caring — I've sent 6 family members here already." },
];

const FAQS = [
  { q:"Do you accept walk-ins?", a:"Yes — walk-ins are welcome subject to availability. We recommend booking via WhatsApp to avoid any waiting time." },
  { q:"Is RCT painful?", a:"Modern root canal therapy with our rotary equipment is virtually painless. Most patients feel nothing during the procedure." },
  { q:"Do you offer EMI?", a:"Yes — 0% EMI on all treatments above ₹5,000 through major credit and debit cards." },
  { q:"What are your clinic timings?", a:"Monday to Saturday, 9 AM – 7 PM. Sunday by appointment only. We're available on WhatsApp 7 days a week." },
];

export function ClinicDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDoc, setActiveDoc] = useState(0);

  return (
    <div style={{ fontFamily:"inherit", background:"#f8faff", color:"#0f172a" }}>
      <style>{`
        .cl *{box-sizing:border-box}
        .cl-link{color:#64748b;cursor:pointer;transition:color .2s,transform .2s;display:inline-block}
        .cl-link:hover{color:#2563eb;transform:translateY(-1px)}
        .cl-cta{transition:transform .22s,box-shadow .22s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:800;cursor:pointer}
        .cl-cta:hover{transform:translateY(-3px) scale(1.03)}
        .cl-tx-card{transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s,border-color .25s}
        .cl-tx-card:hover{transform:translateY(-7px) scale(1.015);border-color:#2563eb!important;box-shadow:0 20px 48px rgba(37,99,235,.1)!important}
        .cl-doc-tab{transition:all .2s;cursor:pointer;border:none}
        .cl-step{transition:background .2s,border-color .2s}
        .cl-step:hover{background:#eff6ff!important;border-color:#2563eb!important}
        .cl-trust{transition:transform .2s,background .2s}
        .cl-trust:hover{transform:translateY(-4px);background:#eff6ff!important}
        .cl-rv{transition:transform .22s,box-shadow .22s}
        .cl-rv:hover{transform:translateY(-5px);box-shadow:0 14px 36px rgba(0,0,0,.09)!important}
        .cl-faq{transition:background .2s,border-color .2s;cursor:pointer}
        .cl-faq:hover{background:#eff6ff!important;border-color:#2563eb!important}
        .cl-wa{transition:transform .22s,box-shadow .22s!important}
        .cl-wa:hover{transform:translateY(-3px) scale(1.04)!important;box-shadow:0 10px 30px rgba(37,211,102,.45)!important}
        @media(max-width:768px){
          .cl-nav-links{display:none!important}
          .cl-hero-inner{grid-template-columns:1fr!important}
          .cl-hero-img{display:none!important}
          .cl-hero-h1{font-size:32px!important}
          .cl-section{padding:52px 20px!important}
          .cl-grid-3{grid-template-columns:1fr!important}
          .cl-grid-2{grid-template-columns:1fr!important}
          .cl-steps{grid-template-columns:1fr 1fr!important}
          .cl-h2{font-size:26px!important}
          .cl-stats{flex-wrap:wrap;gap:14px!important}
        }
      `}</style>

      <div className="cl">
        <nav style={{ background:"rgba(255,255,255,.98)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(0,0,0,.06)",position:"sticky",top:"4rem",zIndex:30,padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ width:34,height:34,borderRadius:10,background:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17 }}>🦷</div>
            <div>
              <div style={{ fontSize:15,fontWeight:900,color:"#0f172a" }}>SmileCare Dental Clinic</div>
              <div style={{ fontSize:10,color:"#64748b",letterSpacing:"0.1em",textTransform:"uppercase" }}>Mon–Sat · 9 AM – 7 PM</div>
            </div>
          </div>
          <div className="cl-nav-links" style={{ display:"flex",gap:22,fontSize:13,fontWeight:600,alignItems:"center" }}>
            {["Treatments","Doctors","Process","Reviews"].map(l=><span key={l} className="cl-link">{l}</span>)}
            <a href={wa} target="_blank" rel="noreferrer" className="cl-cta" style={{ background:"#2563eb",color:"#fff",borderRadius:99,padding:"9px 22px",fontSize:13 }}>Book Appointment</a>
          </div>
        </nav>

        <div style={{ background:"linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 55%,#3b82f6 100%)",padding:"72px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div className="cl-hero-inner" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center" }}>
              <div>
                <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.12)",borderRadius:99,padding:"6px 16px",marginBottom:22 }}>
                  <Shield size={13} color="#93c5fd"/>
                  <span style={{ fontSize:11,color:"#bfdbfe",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase" }}>NABH Certified · ISO 9001:2015</span>
                </div>
                <h1 className="cl-hero-h1" style={{ fontSize:"clamp(32px,5vw,62px)",fontWeight:900,color:"#fff",lineHeight:.95,letterSpacing:"-0.04em",marginBottom:20 }}>Your Smile,<br/>Our Priority.</h1>
                <p style={{ fontSize:17,color:"rgba(255,255,255,.8)",lineHeight:1.72,marginBottom:36,maxWidth:480 }}>Advanced dental care with a gentle touch. From routine checkups to complex implants — painless, transparent, and affordable.</p>
                <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:44 }}>
                  <a href={wa} target="_blank" rel="noreferrer" className="cl-cta" style={{ background:"#fff",color:"#1d4ed8",borderRadius:99,padding:"15px 28px",fontSize:15,boxShadow:"0 4px 20px rgba(0,0,0,.2)" }}><Phone size={16}/>Book Appointment</a>
                  <a href="#treatments" className="cl-cta" style={{ background:"rgba(255,255,255,.12)",color:"#fff",border:"1px solid rgba(255,255,255,.25)",borderRadius:99,padding:"15px 28px",fontSize:15,fontWeight:700 }}>Our Treatments ↓</a>
                </div>
                <div className="cl-stats" style={{ display:"flex",gap:36 }}>
                  {[["1,200+","Patients"],["14 yrs","Experience"],["4.9 ★","Rating"],["2","Expert Doctors"]].map(([v,l])=>(
                    <div key={l}>
                      <div style={{ fontSize:24,fontWeight:900,color:"#fff" }}>{v}</div>
                      <div style={{ fontSize:11,color:"rgba(255,255,255,.6)",marginTop:3 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cl-hero-img" style={{ position:"relative",height:420,borderRadius:24,overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,.3)" }}>
                <img src={u("photo-1629909613654-28e377c37b09")} alt="Dental clinic" style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
                <div style={{ position:"absolute",bottom:20,left:20,right:20,background:"rgba(255,255,255,.96)",borderRadius:14,padding:"14px 18px",display:"flex",alignItems:"center",gap:12 }}>
                  <div style={{ width:40,height:40,borderRadius:11,background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18 }}>✅</div>
                  <div>
                    <div style={{ fontWeight:700,fontSize:13,color:"#0f172a" }}>Same-Day Appointments Available</div>
                    <div style={{ fontSize:11,color:"#64748b",marginTop:1 }}>WhatsApp us — confirmed in 15 mins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="treatments" className="cl-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#2563eb",marginBottom:14 }}>WHAT WE TREAT</p>
              <h2 className="cl-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#0f172a",letterSpacing:"-0.04em",marginBottom:14 }}>Our Treatments</h2>
              <p style={{ fontSize:16,color:"#64748b",maxWidth:440,margin:"0 auto" }}>Comprehensive dental care under one roof — for every age, every need, every budget.</p>
            </div>
            <div className="cl-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18 }}>
              {TREATMENTS.map(t=>(
                <div key={t.name} className="cl-tx-card" style={{ background:"#fff",borderRadius:20,padding:26,border:"1px solid rgba(0,0,0,.06)",boxShadow:"0 2px 14px rgba(0,0,0,.04)" }}>
                  <div style={{ fontSize:32,marginBottom:14 }}>{t.icon}</div>
                  <h3 style={{ fontSize:18,fontWeight:800,color:"#0f172a",marginBottom:8 }}>{t.name}</h3>
                  <p style={{ fontSize:14,color:"#64748b",lineHeight:1.65,marginBottom:16 }}>{t.desc}</p>
                  <div style={{ display:"flex",gap:8,flexWrap:"wrap" }}>
                    <span style={{ display:"inline-flex",alignItems:"center",gap:5,background:"#eff6ff",color:"#2563eb",borderRadius:99,padding:"4px 11px",fontSize:12,fontWeight:600 }}><Clock size={10}/>{t.time}</span>
                    <span style={{ background:"#f0fdf4",color:"#16a34a",borderRadius:99,padding:"4px 11px",fontSize:12,fontWeight:600 }}>{t.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cl-section" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#2563eb",marginBottom:14 }}>MEET THE TEAM</p>
              <h2 className="cl-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#0f172a",letterSpacing:"-0.04em" }}>Our Doctors</h2>
            </div>
            <div style={{ maxWidth:860,margin:"0 auto" }}>
              <div style={{ display:"flex",gap:10,justifyContent:"center",marginBottom:32 }}>
                {DOCTORS.map((d,i)=>(
                  <button key={i} className="cl-doc-tab" onClick={()=>setActiveDoc(i)} style={{ background:activeDoc===i?"#2563eb":"transparent",border:`1px solid ${activeDoc===i?"#2563eb":"rgba(0,0,0,.1)"}`,borderRadius:10,padding:"10px 24px",color:activeDoc===i?"#fff":"#64748b",fontSize:13,fontWeight:700 }}>
                    {d.name.split(" ")[1]} {d.name.split(" ")[2]}
                  </button>
                ))}
              </div>
              {DOCTORS.map((d,i)=> i===activeDoc && (
                <div key={i} style={{ display:"grid",gridTemplateColumns:"280px 1fr",gap:40,background:"#f8faff",borderRadius:24,overflow:"hidden",border:"1px solid rgba(37,99,235,.1)" }}>
                  <div style={{ position:"relative",height:340 }}>
                    <img src={d.img} alt={d.name} style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"top" }}/>
                    <div style={{ position:"absolute",bottom:14,left:14,background:"#2563eb",color:"#fff",borderRadius:8,padding:"4px 12px",fontSize:11,fontWeight:700 }}>{d.tag}</div>
                  </div>
                  <div style={{ padding:"36px 36px 36px 0",display:"flex",flexDirection:"column",justifyContent:"center" }}>
                    <h3 style={{ fontSize:28,fontWeight:900,color:"#0f172a",letterSpacing:"-0.03em",marginBottom:8 }}>{d.name}</h3>
                    <div style={{ fontSize:15,color:"#2563eb",fontWeight:700,marginBottom:8 }}>{d.role}</div>
                    <div style={{ fontSize:14,color:"#64748b",marginBottom:6 }}>{d.qual}</div>
                    <div style={{ fontSize:14,color:"#16a34a",fontWeight:600,marginBottom:28 }}>{d.exp} of experience</div>
                    <div style={{ display:"flex",gap:10,marginBottom:28,flexWrap:"wrap" }}>
                      {["Painless Procedures","Transparent Pricing","Personalised Care"].map(tag=>(
                        <span key={tag} style={{ display:"inline-flex",alignItems:"center",gap:6,background:"#eff6ff",color:"#2563eb",borderRadius:8,padding:"6px 12px",fontSize:12,fontWeight:600 }}><Check size={11}/>{tag}</span>
                      ))}
                    </div>
                    <a href={wa} target="_blank" rel="noreferrer" className="cl-cta" style={{ background:"#2563eb",color:"#fff",borderRadius:12,padding:"13px 28px",fontSize:14,width:"fit-content" }}>Book with {d.name.split(" ")[1]}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cl-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#2563eb",marginBottom:14 }}>HOW IT WORKS</p>
              <h2 className="cl-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#0f172a",letterSpacing:"-0.04em" }}>Your Journey</h2>
            </div>
            <div className="cl-steps" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16 }}>
              {STEPS.map((s,i)=>(
                <div key={i} className="cl-step" style={{ background:"#fff",borderRadius:18,padding:24,border:"1px solid rgba(0,0,0,.06)",position:"relative" }}>
                  <div style={{ fontSize:11,fontWeight:900,color:"#bfdbfe",letterSpacing:"0.08em",marginBottom:14 }}>STEP {s.n}</div>
                  <div style={{ width:40,height:40,borderRadius:12,background:"#2563eb",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16 }}>
                    {[<Calendar size={18} color="#fff"/>,<UserCheck size={18} color="#fff"/>,<Shield size={18} color="#fff"/>,<Check size={18} color="#fff"/>][i]}
                  </div>
                  <h3 style={{ fontSize:17,fontWeight:800,color:"#0f172a",marginBottom:8 }}>{s.t}</h3>
                  <p style={{ fontSize:13,color:"#64748b",lineHeight:1.65 }}>{s.d}</p>
                  {i<3 && <div style={{ position:"absolute",top:"50%",right:-10,width:20,height:2,background:"#bfdbfe",display:"none" }}/>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cl-section" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#2563eb",marginBottom:14 }}>WHY PATIENTS CHOOSE US</p>
              <h2 className="cl-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#0f172a",letterSpacing:"-0.04em" }}>Our Commitment</h2>
            </div>
            <div className="cl-grid-2" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16 }}>
              {TRUST.map(({ I,t,d })=>(
                <div key={t} className="cl-trust" style={{ background:"#f8faff",borderRadius:18,padding:26,border:"1px solid rgba(0,0,0,.05)" }}>
                  <div style={{ width:48,height:48,borderRadius:14,background:"#eff6ff",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16 }}><I size={22} color="#2563eb"/></div>
                  <div style={{ fontWeight:800,fontSize:17,color:"#0f172a",marginBottom:6 }}>{t}</div>
                  <div style={{ fontSize:14,color:"#64748b",lineHeight:1.6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cl-section" style={{ padding:"80px 40px" }}>
          <div style={{ maxWidth:1280,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:52 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#2563eb",marginBottom:14 }}>PATIENT REVIEWS</p>
              <h2 className="cl-h2" style={{ fontSize:"clamp(26px,4vw,50px)",fontWeight:900,color:"#0f172a",letterSpacing:"-0.04em" }}>What Our Patients Say</h2>
            </div>
            <div className="cl-grid-3" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18 }}>
              {REVIEWS.map(r=>(
                <div key={r.n} className="cl-rv" style={{ background:"#fff",borderRadius:20,padding:28,border:"1px solid rgba(0,0,0,.05)",boxShadow:"0 2px 14px rgba(0,0,0,.04)" }}>
                  <div style={{ display:"flex",gap:3,marginBottom:16 }}>{[1,2,3,4,5].map(i=><Star key={i} size={15} fill="#f59e0b" color="#f59e0b"/>)}</div>
                  <p style={{ fontSize:15,color:"#334155",lineHeight:1.75,marginBottom:20 }}>&ldquo;{r.t}&rdquo;</p>
                  <div style={{ borderTop:"1px solid #f1f5f9",paddingTop:16 }}>
                    <div style={{ fontWeight:700,fontSize:14,color:"#0f172a" }}>{r.n}</div>
                    <div style={{ fontSize:12,color:"#94a3b8",marginTop:2 }}>{r.c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cl-section" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ maxWidth:760,margin:"0 auto" }}>
            <div style={{ textAlign:"center",marginBottom:48 }}>
              <p style={{ fontSize:11,fontWeight:700,letterSpacing:"0.3em",textTransform:"uppercase",color:"#2563eb",marginBottom:14 }}>FAQ</p>
              <h2 className="cl-h2" style={{ fontSize:"clamp(24px,4vw,44px)",fontWeight:900,color:"#0f172a",letterSpacing:"-0.04em" }}>Common Questions</h2>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
              {FAQS.map((f,i)=>(
                <div key={i} className="cl-faq" style={{ background:"#f8faff",borderRadius:14,padding:"20px 24px",border:"1px solid rgba(0,0,0,.06)" }} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:16 }}>
                    <div style={{ fontWeight:700,fontSize:15,color:"#0f172a" }}>{f.q}</div>
                    <ChevronDown size={16} color="#2563eb" style={{ transform:openFaq===i?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0 }}/>
                  </div>
                  {openFaq===i && <div style={{ marginTop:12,fontSize:14,color:"#64748b",lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background:"linear-gradient(135deg,#1e3a8a,#2563eb)",padding:"72px 40px",textAlign:"center" }}>
          <h2 style={{ fontSize:"clamp(28px,5vw,56px)",fontWeight:900,color:"#fff",letterSpacing:"-0.04em",marginBottom:16 }}>Ready for a Healthier Smile?</h2>
          <p style={{ fontSize:17,color:"rgba(255,255,255,.8)",marginBottom:36,maxWidth:440,margin:"0 auto 36px",lineHeight:1.65 }}>Book your appointment today — same-day slots available, Mon–Sat 9 AM to 7 PM.</p>
          <a href={wa} target="_blank" rel="noreferrer" className="cl-cta cl-wa" style={{ background:"#25D366",color:"#fff",borderRadius:99,padding:"16px 38px",fontSize:16,boxShadow:"0 4px 20px rgba(37,211,102,.3)" }}><Phone size={18}/>Book on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { TrendingUp, TrendingDown, Users, DollarSign, Target, ArrowUpRight, MoreHorizontal, Search, Bell, Settings, Phone } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const REVENUE = [42,58,51,67,73,89,78,94,88,102,97,118];
const LEADS = [120,145,132,167,189,201,178,224,198,241,229,267];

const DEALS = [
  { name:"Infosys Enterprise", value:"₹8.4L", stage:"Proposal", prob:75, rep:"Arjun K.", days:12 },
  { name:"TCS SaaS Contract", value:"₹12.2L", stage:"Negotiation", prob:88, rep:"Priya M.", days:5 },
  { name:"Wipro Cloud Deal", value:"₹5.8L", stage:"Demo Done", prob:55, rep:"Ravi S.", days:21 },
  { name:"HCL Annual License", value:"₹18.5L", stage:"Closing", prob:94, rep:"Sneha R.", days:3 },
  { name:"Tech Mahindra Pilot", value:"₹3.2L", stage:"Discovery", prob:30, rep:"Karan T.", days:34 },
];

const SOURCES = [
  { name:"LinkedIn Ads", value:38, color:"#6366f1" },
  { name:"Cold Outreach", value:27, color:"#8b5cf6" },
  { name:"Referrals", value:19, color:"#a78bfa" },
  { name:"Organic Search", value:16, color:"#c4b5fd" },
];

const TEAM = [
  { name:"Arjun Kumar", role:"Sr. AE", deals:12, revenue:"₹42L", quota:87, avatar:"AK" },
  { name:"Priya Menon", role:"AE", deals:9, revenue:"₹31L", quota:94, avatar:"PM" },
  { name:"Ravi Shah", role:"AE", deals:7, revenue:"₹24L", quota:71, avatar:"RS" },
  { name:"Sneha Reddy", role:"Sr. AE", deals:14, revenue:"₹58L", quota:102, avatar:"SR" },
];

const STAGECOLORS: Record<string, string> = { "Proposal":"#6366f1","Negotiation":"#f59e0b","Demo Done":"#3b82f6","Closing":"#22c55e","Discovery":"#64748b" };

export function SalesDashboardDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [activeMonth, setActiveMonth] = useState(11);
  const [activeTab, setActiveTab] = useState<"revenue"|"leads">("revenue");
  const data = activeTab === "revenue" ? REVENUE : LEADS;
  const max = Math.max(...data);

  return (
    <div style={{ background:"#0a0c11",color:"#e2e8f0",fontFamily:"inherit",minHeight:"100vh" }}>
      <style>{`
        .sd *{box-sizing:border-box}
        .sd-nav-link{color:#64748b;cursor:pointer;transition:color .15s;font-size:13px;font-weight:500}
        .sd-nav-link:hover{color:#e2e8f0}
        .sd-card{background:#111827;border:1px solid rgba(255,255,255,.06);border-radius:16px;transition:border-color .2s,transform .2s}
        .sd-card:hover{border-color:rgba(99,102,241,.3);transform:translateY(-2px)}
        .sd-deal-row{transition:background .15s;cursor:pointer}
        .sd-deal-row:hover{background:rgba(255,255,255,.04)!important}
        .sd-tab{transition:all .15s;cursor:pointer;border:none}
        .sd-team-row{transition:background .15s}
        .sd-team-row:hover{background:rgba(255,255,255,.03)!important}
        .sd-bar{transition:height .3s cubic-bezier(.34,1.56,.64,1),background .2s;cursor:pointer;border-radius:4px 4px 0 0}
        .sd-bar:hover{background:#818cf8!important}
        .sd-source:hover{background:rgba(255,255,255,.04)!important;transform:translateX(3px)}
        .sd-source{transition:background .15s,transform .15s}
        @media(max-width:768px){
          .sd-header-right{display:none!important}
          .sd-grid-4{grid-template-columns:1fr 1fr!important}
          .sd-main{grid-template-columns:1fr!important}
          .sd-team-cols{display:none!important}
          .sd-h1{font-size:20px!important}
        }
      `}</style>

      <div className="sd">
        <nav style={{ background:"#0d1117",borderBottom:"1px solid rgba(255,255,255,.06)",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:58,position:"sticky",top:"4rem",zIndex:30 }}>
          <div style={{ display:"flex",alignItems:"center",gap:28 }}>
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <div style={{ width:28,height:28,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900 }}>S</div>
              <span style={{ fontSize:14,fontWeight:700,color:"#e2e8f0" }}>SalesOS</span>
            </div>
            <div style={{ display:"flex",gap:4 }}>
              {["Dashboard","Pipeline","Contacts","Reports","Settings"].map(l=>(
                <span key={l} className="sd-nav-link" style={{ padding:"6px 12px",borderRadius:8,background:l==="Dashboard"?"rgba(99,102,241,.12)":"transparent",color:l==="Dashboard"?"#818cf8":"#64748b" }}>{l}</span>
              ))}
            </div>
          </div>
          <div className="sd-header-right" style={{ display:"flex",alignItems:"center",gap:12 }}>
            <div style={{ display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:8,padding:"7px 12px" }}>
              <Search size={13} color="#64748b"/>
              <span style={{ fontSize:12,color:"#64748b" }}>Search...</span>
            </div>
            <div style={{ width:34,height:34,borderRadius:8,background:"rgba(255,255,255,.05)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}><Bell size={15} color="#64748b"/></div>
            <div style={{ width:34,height:34,borderRadius:8,background:"rgba(255,255,255,.05)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}><Settings size={15} color="#64748b"/></div>
            <div style={{ width:32,height:32,borderRadius:99,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700 }}>AK</div>
          </div>
        </nav>

        <div style={{ padding:"28px 28px 48px" }}>
          <div style={{ marginBottom:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
            <div>
              <h1 className="sd-h1" style={{ fontSize:24,fontWeight:800,color:"#f1f5f9",letterSpacing:"-0.03em",marginBottom:4 }}>Sales Command Center</h1>
              <p style={{ fontSize:13,color:"#64748b" }}>FY 2025–26 · Q4 Performance · Live Mock Data</p>
            </div>
            <div style={{ display:"flex",gap:8 }}>
              {["This Month","This Quarter","This Year"].map((p,i)=>(
                <button key={p} onClick={()=>{}} style={{ background:i===0?"rgba(99,102,241,.15)":"transparent",border:`1px solid ${i===0?"rgba(99,102,241,.4)":"rgba(255,255,255,.08)"}`,borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:600,color:i===0?"#818cf8":"#64748b",cursor:"pointer" }}>{p}</button>
              ))}
            </div>
          </div>

          <div className="sd-grid-4" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:20 }}>
            {[
              { label:"Total Revenue", value:"₹2.48 Cr", delta:"+18.4%", up:true, Icon:DollarSign, color:"#6366f1" },
              { label:"Qualified Leads", value:"1,284", delta:"+12.7%", up:true, Icon:Users, color:"#8b5cf6" },
              { label:"Close Rate", value:"31%", delta:"+4.2%", up:true, Icon:Target, color:"#22c55e" },
              { label:"Avg. Deal Size", value:"₹4.8L", delta:"-2.1%", up:false, Icon:TrendingUp, color:"#f59e0b" },
            ].map(({ label,value,delta,up,Icon,color })=>(
              <div key={label} className="sd-card" style={{ padding:"20px 22px" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16 }}>
                  <div style={{ fontSize:12,color:"#64748b",fontWeight:500 }}>{label}</div>
                  <div style={{ width:34,height:34,borderRadius:10,background:`${color}18`,display:"flex",alignItems:"center",justifyContent:"center" }}><Icon size={16} color={color}/></div>
                </div>
                <div style={{ fontSize:28,fontWeight:900,color:"#f1f5f9",letterSpacing:"-0.03em",marginBottom:8 }}>{value}</div>
                <div style={{ display:"flex",alignItems:"center",gap:5 }}>
                  {up ? <TrendingUp size={13} color="#22c55e"/> : <TrendingDown size={13} color="#ef4444"/>}
                  <span style={{ fontSize:12,fontWeight:700,color:up?"#22c55e":"#ef4444" }}>{delta}</span>
                  <span style={{ fontSize:12,color:"#475569" }}>vs last month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sd-main" style={{ display:"grid",gridTemplateColumns:"1.4fr 0.6fr",gap:14,marginBottom:14 }}>
            <div className="sd-card" style={{ padding:22 }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:10 }}>
                <div>
                  <div style={{ fontSize:15,fontWeight:700,color:"#f1f5f9",marginBottom:2 }}>Performance Chart</div>
                  <div style={{ fontSize:12,color:"#64748b" }}>Monthly trend · FY 2025–26</div>
                </div>
                <div style={{ display:"flex",gap:6 }}>
                  {(["revenue","leads"] as const).map(t=>(
                    <button key={t} className="sd-tab" onClick={()=>setActiveTab(t)} style={{ padding:"6px 14px",borderRadius:8,fontSize:12,fontWeight:600,background:activeTab===t?"rgba(99,102,241,.15)":"transparent",border:`1px solid ${activeTab===t?"rgba(99,102,241,.4)":"rgba(255,255,255,.08)"}`,color:activeTab===t?"#818cf8":"#64748b",textTransform:"capitalize" }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ display:"flex",alignItems:"flex-end",gap:6,height:160,paddingBottom:4 }}>
                {data.map((v,i)=>(
                  <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4 }}>
                    <div className="sd-bar" onClick={()=>setActiveMonth(i)} style={{ width:"100%",height:`${(v/max)*148}px`,background:i===activeMonth?"#6366f1":"rgba(99,102,241,.25)" }}/>
                    <div style={{ fontSize:9,color:i===activeMonth?"#818cf8":"#475569",fontWeight:i===activeMonth?700:400 }}>{MONTHS[i]}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:16,padding:"12px 16px",background:"rgba(99,102,241,.08)",borderRadius:10,border:"1px solid rgba(99,102,241,.15)",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                <span style={{ fontSize:12,color:"#64748b" }}>{MONTHS[activeMonth]} 2025</span>
                <span style={{ fontSize:16,fontWeight:800,color:"#818cf8" }}>{activeTab==="revenue"?`₹${data[activeMonth]}L`:`${data[activeMonth]} leads`}</span>
              </div>
            </div>

            <div className="sd-card" style={{ padding:22 }}>
              <div style={{ fontSize:15,fontWeight:700,color:"#f1f5f9",marginBottom:4 }}>Lead Sources</div>
              <div style={{ fontSize:12,color:"#64748b",marginBottom:20 }}>Acquisition breakdown</div>
              <div style={{ display:"flex",flexDirection:"column",gap:14,marginBottom:20 }}>
                {SOURCES.map(s=>(
                  <div key={s.name} className="sd-source" style={{ padding:"4px 8px",borderRadius:8 }}>
                    <div style={{ display:"flex",justifyContent:"space-between",marginBottom:6 }}>
                      <span style={{ fontSize:13,color:"#cbd5e1",fontWeight:500 }}>{s.name}</span>
                      <span style={{ fontSize:13,fontWeight:700,color:"#f1f5f9" }}>{s.value}%</span>
                    </div>
                    <div style={{ height:6,background:"rgba(255,255,255,.06)",borderRadius:99,overflow:"hidden" }}>
                      <div style={{ width:`${s.value}%`,height:"100%",background:s.color,borderRadius:99,transition:"width .6s cubic-bezier(.34,1.56,.64,1)" }}/>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:16 }}>
                <div style={{ fontSize:12,color:"#64748b",marginBottom:10 }}>Total leads this month</div>
                <div style={{ fontSize:28,fontWeight:900,color:"#f1f5f9" }}>267</div>
                <div style={{ display:"flex",alignItems:"center",gap:4,marginTop:4 }}><TrendingUp size={12} color="#22c55e"/><span style={{ fontSize:12,color:"#22c55e",fontWeight:600 }}>+16.6% vs last month</span></div>
              </div>
            </div>
          </div>

          <div className="sd-card" style={{ padding:22,marginBottom:14 }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18 }}>
              <div>
                <div style={{ fontSize:15,fontWeight:700,color:"#f1f5f9",marginBottom:2 }}>Active Pipeline</div>
                <div style={{ fontSize:12,color:"#64748b" }}>5 deals · ₹48.1L total value</div>
              </div>
              <button style={{ display:"flex",alignItems:"center",gap:6,background:"rgba(99,102,241,.1)",border:"1px solid rgba(99,102,241,.2)",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:600,color:"#818cf8",cursor:"pointer" }}>
                <ArrowUpRight size={13}/>View All
              </button>
            </div>
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%",borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ borderBottom:"1px solid rgba(255,255,255,.06)" }}>
                    {["Company","Deal Value","Stage","Probability","Rep","Days Open",""].map(h=>(
                      <th key={h} className="sd-team-cols" style={{ textAlign:"left",padding:"8px 12px",fontSize:11,color:"#475569",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",whiteSpace:"nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DEALS.map((d,i)=>(
                    <tr key={i} className="sd-deal-row" style={{ borderBottom:"1px solid rgba(255,255,255,.04)" }}>
                      <td style={{ padding:"14px 12px" }}>
                        <div style={{ fontWeight:600,fontSize:14,color:"#e2e8f0" }}>{d.name}</div>
                      </td>
                      <td style={{ padding:"14px 12px" }}>
                        <div style={{ fontSize:14,fontWeight:700,color:"#f1f5f9" }}>{d.value}</div>
                      </td>
                      <td className="sd-team-cols" style={{ padding:"14px 12px" }}>
                        <span style={{ background:`${STAGECOLORS[d.stage]}18`,color:STAGECOLORS[d.stage],borderRadius:6,padding:"3px 10px",fontSize:12,fontWeight:600 }}>{d.stage}</span>
                      </td>
                      <td className="sd-team-cols" style={{ padding:"14px 12px" }}>
                        <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                          <div style={{ flex:1,height:5,background:"rgba(255,255,255,.06)",borderRadius:99,overflow:"hidden",minWidth:60 }}>
                            <div style={{ width:`${d.prob}%`,height:"100%",background:d.prob>80?"#22c55e":d.prob>50?"#f59e0b":"#64748b",borderRadius:99 }}/>
                          </div>
                          <span style={{ fontSize:12,color:"#94a3b8",fontWeight:600,minWidth:30 }}>{d.prob}%</span>
                        </div>
                      </td>
                      <td className="sd-team-cols" style={{ padding:"14px 12px",fontSize:13,color:"#94a3b8" }}>{d.rep}</td>
                      <td className="sd-team-cols" style={{ padding:"14px 12px" }}>
                        <span style={{ fontSize:12,color:d.days<10?"#ef4444":d.days<20?"#f59e0b":"#64748b",fontWeight:600 }}>{d.days}d</span>
                      </td>
                      <td style={{ padding:"14px 12px" }}>
                        <div style={{ width:28,height:28,borderRadius:8,background:"rgba(255,255,255,.05)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}><MoreHorizontal size={14} color="#64748b"/></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="sd-card" style={{ padding:22 }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18 }}>
              <div>
                <div style={{ fontSize:15,fontWeight:700,color:"#f1f5f9",marginBottom:2 }}>Team Leaderboard</div>
                <div style={{ fontSize:12,color:"#64748b" }}>Q4 quota attainment</div>
              </div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {TEAM.sort((a,b)=>b.quota-a.quota).map((m,i)=>(
                <div key={m.name} className="sd-team-row" style={{ display:"flex",alignItems:"center",gap:16,padding:"12px 14px",borderRadius:12,background:"rgba(255,255,255,.02)" }}>
                  <div style={{ fontSize:13,fontWeight:700,color:"#475569",minWidth:16 }}>#{i+1}</div>
                  <div style={{ width:36,height:36,borderRadius:10,background:`hsl(${i*60+220},70%,55%)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#fff",flexShrink:0 }}>{m.avatar}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:14,fontWeight:600,color:"#e2e8f0",marginBottom:2 }}>{m.name} <span style={{ fontSize:11,color:"#475569" }}>· {m.role}</span></div>
                    <div style={{ height:5,background:"rgba(255,255,255,.06)",borderRadius:99,overflow:"hidden" }}>
                      <div style={{ width:`${Math.min(m.quota,100)}%`,height:"100%",background:m.quota>=100?"#22c55e":m.quota>=80?"#6366f1":"#f59e0b",borderRadius:99,transition:"width .6s" }}/>
                    </div>
                  </div>
                  <div className="sd-team-cols" style={{ fontSize:13,fontWeight:600,color:"#94a3b8",minWidth:60,textAlign:"right" }}>{m.deals} deals</div>
                  <div className="sd-team-cols" style={{ fontSize:14,fontWeight:700,color:"#f1f5f9",minWidth:60,textAlign:"right" }}>{m.revenue}</div>
                  <div style={{ fontSize:13,fontWeight:800,color:m.quota>=100?"#22c55e":m.quota>=80?"#818cf8":"#f59e0b",minWidth:44,textAlign:"right" }}>{m.quota}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",padding:"32px 28px",display:"flex",justifyContent:"center" }}>
        <a href={wa} target="_blank" rel="noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:10,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"#fff",borderRadius:12,padding:"14px 32px",fontSize:15,fontWeight:800,textDecoration:"none",boxShadow:"0 4px 20px rgba(99,102,241,.4)" }}><Phone size={16}/>Want this dashboard? Chat on WhatsApp</a>
      </div>
    </div>
  );
}

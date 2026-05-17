"use client";
import { useState } from "react";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Clock, Users, Package, Truck, BarChart3, Bell, Search, Settings, ChevronDown, MoreHorizontal, RefreshCw } from "lucide-react";
import type { Template } from "@/data/templates";
import { getWhatsAppHref } from "@/data/templates";

const TASKS = [
  { id:"T-1042", title:"Fix payment gateway timeout on checkout", team:"Engineering", priority:"Critical", status:"In Progress", due:"Today", assignee:"RK" },
  { id:"T-1041", title:"Update vendor contract — Q1 renewal", team:"Procurement", priority:"High", status:"Pending Review", due:"Tomorrow", assignee:"SM" },
  { id:"T-1040", title:"Deploy new warehouse management module", team:"Engineering", priority:"High", status:"In Progress", due:"May 20", assignee:"AV" },
  { id:"T-1039", title:"Q4 operations report for leadership", team:"Ops", priority:"Medium", status:"Done", due:"May 15", assignee:"PR" },
  { id:"T-1038", title:"Onboard 3 new delivery partners — Pune zone", team:"Logistics", priority:"Medium", status:"In Progress", due:"May 22", assignee:"KT" },
  { id:"T-1037", title:"Audit inventory variance — Mumbai warehouse", team:"Warehouse", priority:"High", status:"Blocked", due:"May 18", assignee:"NJ" },
];

const BOOKINGS = [
  { id:"BK-8821", client:"Reliance Retail", type:"Warehouse", qty:"2,400 sqft", date:"May 17", status:"Confirmed", val:"₹1.8L" },
  { id:"BK-8820", client:"Flipkart Logistics", type:"Transport", qty:"12 vehicles", date:"May 17", status:"In Transit", val:"₹3.2L" },
  { id:"BK-8819", client:"Tata Consumer", type:"Cold Storage", qty:"800 sqft", date:"May 16", status:"Confirmed", val:"₹96K" },
  { id:"BK-8818", client:"Amazon India", type:"Last Mile", qty:"340 orders", date:"May 16", status:"Delivered", val:"₹2.1L" },
  { id:"BK-8817", client:"Zomato B2B", type:"Transport", qty:"6 vehicles", date:"May 15", status:"Cancelled", val:"₹1.4L" },
];

const TEAMS = [
  { name:"Engineering", head:"Rohan Kumar", members:14, open:8, resolved:42, sla:96 },
  { name:"Logistics", head:"Kavya Nair", members:22, open:15, resolved:67, sla:89 },
  { name:"Warehouse", head:"Nikhil Joshi", members:18, open:11, resolved:53, sla:91 },
  { name:"Procurement", head:"Sunita Mehta", members:7, open:4, resolved:28, sla:98 },
];

const ALERTS = [
  { type:"critical", msg:"Mumbai warehouse capacity at 94% — reallocation needed", time:"8 mins ago" },
  { type:"warning", msg:"Delivery SLA breach risk — Pune zone 3 routes delayed", time:"23 mins ago" },
  { type:"info", msg:"Q4 vendor payments processed — ₹18.4L cleared", time:"1 hr ago" },
  { type:"success", msg:"New WMS module UAT passed — deployment approved", time:"2 hrs ago" },
];

const WEEKS = ["W1","W2","W3","W4","W5","W6","W7","W8"];
const BOOKINGS_DATA = [64,88,104,136,164,192,178,214];
const REVENUE_DATA = [5.6,7.1,9.9,12.7,14.8,18.9,16.2,21.4];

const PCOLOR: Record<string,string> = { Critical:"#ef4444", High:"#f59e0b", Medium:"#6366f1", Low:"#64748b" };
const SCOLOR: Record<string,string> = { "In Progress":"#6366f1","Pending Review":"#f59e0b","Done":"#22c55e","Blocked":"#ef4444","Confirmed":"#22c55e","In Transit":"#6366f1","Delivered":"#22c55e","Cancelled":"#ef4444" };

export function OpsDashboardDemo({ template }: { template: Template }) {
  const wa = getWhatsAppHref(template);
  const [activeChart, setActiveChart] = useState<"bookings"|"revenue">("bookings");
  const [activeTeam, setActiveTeam] = useState(0);
  const [filterStatus, setFilterStatus] = useState("All");
  const data = activeChart === "bookings" ? BOOKINGS_DATA : REVENUE_DATA;
  const max = Math.max(...data);

  const filteredTasks = filterStatus === "All" ? TASKS : TASKS.filter(t => t.status === filterStatus);

  return (
    <div style={{ background:"#080d14",color:"#cbd5e1",fontFamily:"inherit",minHeight:"100vh" }}>
      <style>{`
        .od *{box-sizing:border-box}
        .od-nav-link{color:#475569;cursor:pointer;transition:color .15s,background .15s;font-size:12px;font-weight:600;padding:6px 12px;border-radius:8px;letter-spacing:.02em}
        .od-nav-link:hover{color:#e2e8f0;background:rgba(255,255,255,.05)}
        .od-nav-link.active{color:#818cf8;background:rgba(99,102,241,.1)}
        .od-card{background:#0f1621;border:1px solid rgba(255,255,255,.06);border-radius:14px;transition:border-color .2s}
        .od-card:hover{border-color:rgba(99,102,241,.25)}
        .od-task-row{transition:background .15s;cursor:pointer}
        .od-task-row:hover{background:rgba(255,255,255,.03)!important}
        .od-booking-row{transition:background .15s;cursor:pointer}
        .od-booking-row:hover{background:rgba(255,255,255,.03)!important}
        .od-bar{transition:height .35s cubic-bezier(.34,1.56,.64,1),background .2s;cursor:pointer;border-radius:4px 4px 0 0}
        .od-bar:hover{filter:brightness(1.3)}
        .od-team-btn{transition:all .2s;cursor:pointer;border:none}
        .od-team-btn:hover{background:rgba(99,102,241,.08)!important;border-color:rgba(99,102,241,.25)!important}
        .od-team-btn.active{background:rgba(99,102,241,.12)!important;border-color:#6366f1!important;color:#818cf8!important}
        .od-filter{transition:all .15s;cursor:pointer;border:none}
        .od-filter:hover{border-color:rgba(99,102,241,.4)!important;color:#e2e8f0!important}
        .od-filter.active{background:rgba(99,102,241,.12)!important;border-color:#6366f1!important;color:#818cf8!important}
        .od-alert{transition:transform .2s,background .2s}
        .od-alert:hover{transform:translateX(4px)}
        .od-kpi{transition:transform .2s,border-color .2s}
        .od-kpi:hover{transform:translateY(-3px);border-color:rgba(99,102,241,.3)!important}
        @media(max-width:768px){
          .od-sidebar{display:none!important}
          .od-grid-4{grid-template-columns:1fr 1fr!important}
          .od-main-grid{grid-template-columns:1fr!important}
          .od-task-cols{display:none!important}
          .od-h2{font-size:16px!important}
          .od-header-right{display:none!important}
        }
      `}</style>

      <div className="od" style={{ display:"flex",minHeight:"100vh" }}>
        <aside className="od-sidebar" style={{ width:220,background:"#080d14",borderRight:"1px solid rgba(255,255,255,.05)",padding:"20px 12px",display:"flex",flexDirection:"column",gap:4,position:"sticky",top:"4rem",height:"calc(100vh - 4rem)",overflowY:"auto",flexShrink:0 }}>
          <div style={{ padding:"8px 12px",marginBottom:12 }}>
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <div style={{ width:28,height:28,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:900 }}>O</div>
              <div>
                <div style={{ fontSize:13,fontWeight:700,color:"#e2e8f0" }}>OpsOS</div>
                <div style={{ fontSize:10,color:"#475569" }}>Command Center</div>
              </div>
            </div>
          </div>
          {[
            { icon:"📊", label:"Overview", active:true },
            { icon:"📦", label:"Bookings", active:false },
            { icon:"✅", label:"Tasks", active:false },
            { icon:"🚚", label:"Logistics", active:false },
            { icon:"🏭", label:"Warehouse", active:false },
            { icon:"👥", label:"Teams", active:false },
            { icon:"📈", label:"Reports", active:false },
            { icon:"⚙️", label:"Settings", active:false },
          ].map(item=>(
            <div key={item.label} className={`od-nav-link${item.active?" active":""}`} style={{ display:"flex",alignItems:"center",gap:10 }}>
              <span style={{ fontSize:14 }}>{item.icon}</span>{item.label}
            </div>
          ))}
          <div style={{ marginTop:"auto",paddingTop:20,borderTop:"1px solid rgba(255,255,255,.06)" }}>
            <div style={{ display:"flex",alignItems:"center",gap:10,padding:"8px 12px" }}>
              <div style={{ width:32,height:32,borderRadius:99,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0 }}>AD</div>
              <div>
                <div style={{ fontSize:12,fontWeight:600,color:"#e2e8f0" }}>Amit Desai</div>
                <div style={{ fontSize:10,color:"#475569" }}>Head of Operations</div>
              </div>
            </div>
          </div>
        </aside>

        <div style={{ flex:1,overflowX:"hidden" }}>
          <nav style={{ background:"rgba(8,13,20,.97)",borderBottom:"1px solid rgba(255,255,255,.05)",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56,position:"relative",zIndex:10,backdropFilter:"blur(14px)" }}>
            <div>
              <div style={{ fontSize:15,fontWeight:700,color:"#e2e8f0" }}>Operations Overview</div>
              <div style={{ fontSize:11,color:"#475569" }}>Last updated: just now · FY 2025–26 · Q4</div>
            </div>
            <div className="od-header-right" style={{ display:"flex",alignItems:"center",gap:10 }}>
              <div style={{ display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:"6px 12px" }}>
                <Search size={12} color="#475569"/>
                <span style={{ fontSize:12,color:"#475569" }}>Search tasks, bookings...</span>
              </div>
              <button style={{ display:"flex",alignItems:"center",gap:6,background:"rgba(99,102,241,.1)",border:"1px solid rgba(99,102,241,.2)",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:600,color:"#818cf8",cursor:"pointer" }}>
                <RefreshCw size={12}/>Refresh
              </button>
              <div style={{ position:"relative" }}>
                <div style={{ width:34,height:34,borderRadius:8,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.07)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}><Bell size={14} color="#475569"/></div>
                <div style={{ position:"absolute",top:6,right:6,width:8,height:8,borderRadius:99,background:"#ef4444",border:"2px solid #080d14" }}/>
              </div>
            </div>
          </nav>

          <div style={{ padding:"24px" }}>
            <div className="od-grid-4" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:16 }}>
              {[
                { label:"Open Tasks", value:"328", delta:"-8.1%", up:false, Icon:CheckCircle2, color:"#6366f1", sub:"vs last month" },
                { label:"Active Bookings", value:"742", delta:"+22.3%", up:true, Icon:Package, color:"#22c55e", sub:"vs last month" },
                { label:"SLA Score", value:"94.2%", delta:"+3.1%", up:true, Icon:BarChart3, color:"#f59e0b", sub:"across all teams" },
                { label:"Revenue MTD", value:"₹21.4L", delta:"+18.6%", up:true, Icon:TrendingUp, color:"#8b5cf6", sub:"vs last month" },
              ].map(({ label,value,delta,up,Icon,color,sub })=>(
                <div key={label} className="od-card od-kpi" style={{ padding:"18px 20px" }}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14 }}>
                    <div style={{ fontSize:11,color:"#475569",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase" }}>{label}</div>
                    <div style={{ width:32,height:32,borderRadius:9,background:`${color}15`,display:"flex",alignItems:"center",justifyContent:"center" }}><Icon size={15} color={color}/></div>
                  </div>
                  <div style={{ fontSize:26,fontWeight:900,color:"#f1f5f9",letterSpacing:"-0.03em",marginBottom:8 }}>{value}</div>
                  <div style={{ display:"flex",alignItems:"center",gap:5 }}>
                    {up?<TrendingUp size={11} color="#22c55e"/>:<TrendingDown size={11} color="#ef4444"/>}
                    <span style={{ fontSize:11,fontWeight:700,color:up?"#22c55e":"#ef4444" }}>{delta}</span>
                    <span style={{ fontSize:11,color:"#475569" }}>{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="od-main-grid" style={{ display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:14,marginBottom:14 }}>
              <div className="od-card" style={{ padding:20 }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:10 }}>
                  <div>
                    <div style={{ fontSize:14,fontWeight:700,color:"#e2e8f0",marginBottom:2 }}>Weekly Performance</div>
                    <div style={{ fontSize:11,color:"#475569" }}>8-week rolling · {activeChart === "bookings" ? "Bookings volume" : "Revenue ₹L"}</div>
                  </div>
                  <div style={{ display:"flex",gap:6 }}>
                    {(["bookings","revenue"] as const).map(t=>(
                      <button key={t} className={`od-filter${activeChart===t?" active":""}`} onClick={()=>setActiveChart(t)} style={{ background:"transparent",border:"1px solid rgba(255,255,255,.08)",borderRadius:8,padding:"5px 14px",fontSize:11,fontWeight:600,color:"#475569",textTransform:"capitalize" }}>{t}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display:"flex",alignItems:"flex-end",gap:8,height:140 }}>
                  {data.map((v,i)=>(
                    <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:5 }}>
                      <div className="od-bar" style={{ width:"100%",height:`${(v/max)*128}px`,background:i===data.length-1?"#6366f1":"rgba(99,102,241,.25)" }}/>
                      <div style={{ fontSize:9,color:i===data.length-1?"#818cf8":"#334155",fontWeight:i===data.length-1?700:400 }}>{WEEKS[i]}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:14,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10 }}>
                  {[["Total","21.4L","bookings: 742"],["vs Prev Wk","+11.5%","trend up"],["Forecast","24.1L","next week"]].map(([l,v,s])=>(
                    <div key={l} style={{ background:"rgba(255,255,255,.02)",borderRadius:10,padding:"10px 12px",border:"1px solid rgba(255,255,255,.05)" }}>
                      <div style={{ fontSize:10,color:"#475569",marginBottom:4 }}>{l}</div>
                      <div style={{ fontSize:16,fontWeight:800,color:"#f1f5f9" }}>{v}</div>
                      <div style={{ fontSize:10,color:"#334155",marginTop:2 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="od-card" style={{ padding:20 }}>
                <div style={{ fontSize:14,fontWeight:700,color:"#e2e8f0",marginBottom:4 }}>Live Alerts</div>
                <div style={{ fontSize:11,color:"#475569",marginBottom:16 }}>Requires attention</div>
                <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
                  {ALERTS.map((a,i)=>(
                    <div key={i} className="od-alert" style={{ display:"flex",gap:10,background:"rgba(255,255,255,.02)",borderRadius:10,padding:"10px 12px",border:`1px solid ${a.type==="critical"?"rgba(239,68,68,.2)":a.type==="warning"?"rgba(245,158,11,.15)":a.type==="success"?"rgba(34,197,94,.15)":"rgba(255,255,255,.06)"}` }}>
                      <div style={{ flexShrink:0,marginTop:1 }}>
                        {a.type==="critical"?<AlertCircle size={14} color="#ef4444"/>:a.type==="warning"?<AlertCircle size={14} color="#f59e0b"/>:a.type==="success"?<CheckCircle2 size={14} color="#22c55e"/>:<Bell size={14} color="#6366f1"/>}
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:12,color:"#cbd5e1",lineHeight:1.5,marginBottom:3 }}>{a.msg}</div>
                        <div style={{ fontSize:10,color:"#475569" }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="od-card" style={{ padding:20,marginBottom:14 }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:12 }}>
                <div>
                  <div style={{ fontSize:14,fontWeight:700,color:"#e2e8f0",marginBottom:2 }}>Task Queue</div>
                  <div style={{ fontSize:11,color:"#475569" }}>{filteredTasks.length} tasks · sorted by priority</div>
                </div>
                <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>
                  {["All","In Progress","Blocked","Done"].map(f=>(
                    <button key={f} className={`od-filter${filterStatus===f?" active":""}`} onClick={()=>setFilterStatus(f)} style={{ background:"transparent",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:"5px 12px",fontSize:11,fontWeight:600,color:"#475569" }}>{f}</button>
                  ))}
                </div>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%",borderCollapse:"collapse" }}>
                  <thead>
                    <tr style={{ borderBottom:"1px solid rgba(255,255,255,.05)" }}>
                      {["ID","Task","Team","Priority","Status","Due","Assignee",""].map(h=>(
                        <th key={h} className={h==="Team"||h==="Due"||h==="Assignee"?"od-task-cols":""} style={{ textAlign:"left",padding:"8px 10px",fontSize:10,color:"#334155",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",whiteSpace:"nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTasks.map((t,i)=>(
                      <tr key={i} className="od-task-row" style={{ borderBottom:"1px solid rgba(255,255,255,.03)" }}>
                        <td style={{ padding:"12px 10px",fontSize:11,color:"#475569",fontWeight:600,whiteSpace:"nowrap" }}>{t.id}</td>
                        <td style={{ padding:"12px 10px",fontSize:13,color:"#e2e8f0",fontWeight:500,maxWidth:280 }}>{t.title}</td>
                        <td className="od-task-cols" style={{ padding:"12px 10px",fontSize:12,color:"#64748b" }}>{t.team}</td>
                        <td style={{ padding:"12px 10px" }}>
                          <span style={{ background:`${PCOLOR[t.priority]}15`,color:PCOLOR[t.priority],borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,whiteSpace:"nowrap" }}>{t.priority}</span>
                        </td>
                        <td style={{ padding:"12px 10px" }}>
                          <span style={{ background:`${SCOLOR[t.status]}15`,color:SCOLOR[t.status],borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:600,whiteSpace:"nowrap" }}>{t.status}</span>
                        </td>
                        <td className="od-task-cols" style={{ padding:"12px 10px",fontSize:12,color:t.due==="Today"?"#ef4444":t.due==="Tomorrow"?"#f59e0b":"#64748b",fontWeight:t.due==="Today"?700:500 }}>{t.due}</td>
                        <td className="od-task-cols" style={{ padding:"12px 10px" }}>
                          <div style={{ width:28,height:28,borderRadius:99,background:"rgba(99,102,241,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#818cf8" }}>{t.assignee}</div>
                        </td>
                        <td style={{ padding:"12px 10px" }}>
                          <div style={{ width:26,height:26,borderRadius:7,background:"rgba(255,255,255,.04)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}><MoreHorizontal size={13} color="#475569"/></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="od-main-grid" style={{ display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:14 }}>
              <div className="od-card" style={{ padding:20 }}>
                <div style={{ fontSize:14,fontWeight:700,color:"#e2e8f0",marginBottom:4 }}>Recent Bookings</div>
                <div style={{ fontSize:11,color:"#475569",marginBottom:16 }}>Last 5 transactions</div>
                <div style={{ overflowX:"auto" }}>
                  <table style={{ width:"100%",borderCollapse:"collapse" }}>
                    <thead>
                      <tr style={{ borderBottom:"1px solid rgba(255,255,255,.05)" }}>
                        {["ID","Client","Type","Value","Status"].map(h=>(
                          <th key={h} style={{ textAlign:"left",padding:"6px 10px",fontSize:10,color:"#334155",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {BOOKINGS.map((b,i)=>(
                        <tr key={i} className="od-booking-row" style={{ borderBottom:"1px solid rgba(255,255,255,.03)" }}>
                          <td style={{ padding:"10px 10px",fontSize:11,color:"#475569",fontWeight:600 }}>{b.id}</td>
                          <td style={{ padding:"10px 10px",fontSize:13,color:"#e2e8f0" }}>{b.client}</td>
                          <td style={{ padding:"10px 10px",fontSize:12,color:"#64748b" }}>{b.type}</td>
                          <td style={{ padding:"10px 10px",fontSize:13,fontWeight:700,color:"#f1f5f9" }}>{b.val}</td>
                          <td style={{ padding:"10px 10px" }}>
                            <span style={{ background:`${SCOLOR[b.status]}15`,color:SCOLOR[b.status],borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:600 }}>{b.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="od-card" style={{ padding:20 }}>
                <div style={{ fontSize:14,fontWeight:700,color:"#e2e8f0",marginBottom:4 }}>Team Performance</div>
                <div style={{ fontSize:11,color:"#475569",marginBottom:16 }}>SLA attainment this month</div>
                <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:16 }}>
                  {TEAMS.map((t,i)=>(
                    <button key={i} className={`od-team-btn${activeTeam===i?" active":""}`} onClick={()=>setActiveTeam(i)} style={{ background:"transparent",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:"5px 12px",fontSize:11,fontWeight:600,color:"#475569" }}>{t.name}</button>
                  ))}
                </div>
                {TEAMS.map((t,i)=> i===activeTeam && (
                  <div key={i}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16 }}>
                      <div>
                        <div style={{ fontSize:13,fontWeight:700,color:"#e2e8f0" }}>{t.name} Team</div>
                        <div style={{ fontSize:11,color:"#475569",marginTop:2 }}>Head: {t.head} · {t.members} members</div>
                      </div>
                      <div style={{ fontSize:28,fontWeight:900,color:t.sla>=95?"#22c55e":t.sla>=85?"#f59e0b":"#ef4444" }}>{t.sla}%</div>
                    </div>
                    <div style={{ height:6,background:"rgba(255,255,255,.06)",borderRadius:99,overflow:"hidden",marginBottom:20 }}>
                      <div style={{ width:`${t.sla}%`,height:"100%",background:t.sla>=95?"#22c55e":t.sla>=85?"#6366f1":"#ef4444",borderRadius:99,transition:"width .6s cubic-bezier(.34,1.56,.64,1)" }}/>
                    </div>
                    <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
                      {[["Open Tasks",t.open,"#f59e0b"],["Resolved",t.resolved,"#22c55e"],["Members",t.members,"#6366f1"],["SLA Score",`${t.sla}%`,t.sla>=95?"#22c55e":"#f59e0b"]].map(([l,v,c])=>(
                        <div key={String(l)} style={{ background:"rgba(255,255,255,.02)",borderRadius:10,padding:"12px",border:"1px solid rgba(255,255,255,.05)" }}>
                          <div style={{ fontSize:10,color:"#475569",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.06em" }}>{l}</div>
                          <div style={{ fontSize:20,fontWeight:900,color:String(c) }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

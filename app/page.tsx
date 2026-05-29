import { ArrowDown, Code2, Cpu, PanelsTopLeft, DatabaseZap } from "lucide-react";
import { DemoVault } from "@/components/demo-vault";
import { QueryForm } from "@/components/query-form";
import { Reveal } from "@/components/reveal";
import { capabilities, templates } from "@/data/templates";

const capabilityIcons = [Code2, Cpu, PanelsTopLeft, DatabaseZap];

export default function Home() {
  return (
    <main>
      <div className="hero-stage">
      <section className="hero relative min-h-[100svh] overflow-hidden px-5 sm:px-8 flex flex-col justify-center">
        <div className="absolute inset-0 -z-10 theme-grid opacity-50" />

        <div className="mx-auto w-full max-w-7xl pt-24 pb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-[0.28em] mb-8"
              style={{ borderColor:"var(--border)", color:"var(--accent)", background:"color-mix(in srgb, var(--accent) 8%, transparent)" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background:"var(--accent)" }} />
              White-Label Digital Systems
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="max-w-5xl text-5xl font-black leading-[1] tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
              We Build Sites<br />
              <span style={{ color:"var(--accent)" }}>Clients Love.</span><br />
              <span style={{ opacity:0.4 }}>Businesses Need.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color:"var(--muted)" }}>
              High-performance web systems engineered for conversion — not just aesthetics.
              From booking platforms to analytics dashboards, we deliver the full stack.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#demo-vault"
                className="inline-flex h-13 items-center gap-2 rounded-full px-7 text-sm font-black transition-all hover:-translate-y-1"
                style={{ background:"var(--foreground)", color:"var(--background)" }}>
                See the Work <ArrowDown className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919285328987" target="_blank" rel="noreferrer"
                className="inline-flex h-13 items-center gap-2 rounded-full border px-7 text-sm font-black transition-all hover:-translate-y-1"
                style={{ borderColor:"var(--border)", color:"var(--foreground)" }}>
                Let&apos;s Talk
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-14 flex items-center gap-3" style={{ color:"var(--muted)" }}>
              <div className="h-px w-10" style={{ background:"var(--border)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">Scroll to explore</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t py-3" style={{ borderColor:"var(--border)" }}>
          <div className="marquee flex w-max gap-8 text-xs font-black uppercase tracking-[0.2em]" style={{ color:"var(--muted)" }}>
            {["Booking Systems","Analytics Dashboards","Resort Websites","Clinic Platforms","Real Estate Launches","Restaurant Sites","Gym Pages","Safari Bookings",
              "Booking Systems","Analytics Dashboards","Resort Websites","Clinic Platforms","Real Estate Launches","Restaurant Sites","Gym Pages","Safari Bookings"].map((item,i)=>(
              <span key={i} className="flex items-center gap-8">{item}<span style={{ color:"var(--accent)" }}>✦</span></span>
            ))}
          </div>
        </div>
      </section>
      </div>

      <Reveal>
        <DemoVault templates={templates} />
      </Reveal>

      <section id="capabilities" className="border-t px-5 py-24 sm:px-8" style={{ borderColor:"var(--border)" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.28em] mb-5" style={{ color:"var(--accent-2)" }}>What We Do</p>
            <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Technical services for businesses that need{" "}
              <span style={{ color:"var(--accent)" }}>systems</span>, not pages.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? Code2;
              return (
                <Reveal key={capability} delay={index * 0.07}>
                  <div className="min-h-56 rounded-[2rem] border p-6 transition-all hover:-translate-y-2"
                    style={{ background:"var(--surface)", borderColor:"var(--border)" }}>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background:"color-mix(in srgb, var(--accent) 12%, transparent)" }}>
                      <Icon className="h-5 w-5" style={{ color:"var(--accent)" }} />
                    </div>
                    <h3 className="mt-8 text-xl font-black tracking-tight leading-tight">{capability}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t px-5 py-24 sm:px-8" style={{ borderColor:"var(--border)" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[2.5rem] border p-10 sm:p-16 text-center relative overflow-hidden"
              style={{ background:"var(--surface)", borderColor:"var(--border)" }}>
              <div className="pointer-events-none absolute inset-0 -z-10 theme-grid opacity-30" />
              <p className="text-xs font-black uppercase tracking-[0.3em] mb-4" style={{ color:"var(--accent)" }}>Ready to build?</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl max-w-3xl mx-auto leading-tight">
                Got a project? Let&apos;s make it real.
              </h2>
              <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color:"var(--muted)" }}>
                WhatsApp Akshat directly. No forms, no waiting — just a real conversation about what you need.
              </p>
              <a href="https://wa.me/919285328987" target="_blank" rel="noreferrer"
                className="mt-10 inline-flex h-14 items-center gap-2.5 rounded-full px-10 text-sm font-black transition-all hover:-translate-y-1"
                style={{ background:"var(--accent)", color:"var(--ink)" }}>
                Start on WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <QueryForm />
    </main>
  );
}

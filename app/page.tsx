import { ArrowDown, Code2, Cpu, PanelsTopLeft, DatabaseZap } from "lucide-react";
import { AboutSection } from "@/components/about-section";
import { DemoVault } from "@/components/demo-vault";
import { QueryForm } from "@/components/query-form";
import { Reveal } from "@/components/reveal";
import { capabilities, templates } from "@/data/templates";

const capabilityIcons = [Code2, Cpu, PanelsTopLeft, DatabaseZap];

export default function Home() {
  return (
    <main>
      <div className="hero-stage">
        <section className="hero relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 sm:px-8">
          <div className="absolute inset-0 -z-10 theme-grid opacity-50" />

          <div className="mx-auto w-full max-w-7xl pb-20 pt-20 sm:pt-24">
            <Reveal>
              <div
                className="mb-8 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] sm:px-4 sm:text-xs sm:tracking-[0.28em]"
                style={{ borderColor: "var(--border)", color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                White-Label Digital Systems
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="max-w-5xl text-[2.35rem] font-black leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
                We Build Sites
                <br />
                <span style={{ color: "var(--accent)" }}>Clients Love.</span>
                <br />
                <span style={{ opacity: 0.4 }}>Businesses Need.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: "var(--muted)" }}>
                High-performance web systems engineered for conversion - not just aesthetics.
                From booking platforms to analytics dashboards, we deliver the full stack.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#demo-vault"
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full px-7 text-sm font-black transition-all hover:-translate-y-1 sm:w-auto"
                  style={{ background: "var(--foreground)", color: "var(--background)" }}
                >
                  See the Work <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919285328987"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border px-7 text-sm font-black transition-all hover:-translate-y-1 sm:w-auto"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                >
                  Let&apos;s Talk
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-14 hidden items-center gap-3 sm:flex" style={{ color: "var(--muted)" }}>
                <div className="h-px w-10" style={{ background: "var(--border)" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">Scroll to explore</span>
              </div>
            </Reveal>
          </div>

          <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t py-3" style={{ borderColor: "var(--border)" }}>
            <div className="marquee flex w-max gap-8 text-xs font-black uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
              {[
                "Booking Systems",
                "Analytics Dashboards",
                "Resort Websites",
                "Clinic Platforms",
                "Real Estate Launches",
                "Restaurant Sites",
                "Gym Pages",
                "Safari Bookings",
                "Booking Systems",
                "Analytics Dashboards",
                "Resort Websites",
                "Clinic Platforms",
                "Real Estate Launches",
                "Restaurant Sites",
                "Gym Pages",
                "Safari Bookings"
              ].map((item, index) => (
                <span key={index} className="flex items-center gap-8">
                  {item}
                  <span style={{ color: "var(--accent)" }}>+</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Reveal>
        <DemoVault templates={templates} />
      </Reveal>

      <section id="capabilities" className="border-t px-5 py-24 sm:px-8" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em]" style={{ color: "var(--accent-2)" }}>
              What We Do
            </p>
            <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Technical services for businesses that need <span style={{ color: "var(--accent)" }}>systems</span>, not pages.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? Code2;
              return (
                <Reveal key={capability} delay={index * 0.07}>
                  <div
                    className="min-h-56 rounded-[2rem] border p-6 transition-all hover:-translate-y-2"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="mt-8 text-xl font-black leading-tight tracking-tight">{capability}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t px-5 py-20 sm:px-8 sm:py-24" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[2.5rem] border p-8 text-center sm:p-16"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="pointer-events-none absolute inset-0 -z-10 theme-grid opacity-30" />
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em]" style={{ color: "var(--accent)" }}>
                Ready to build?
              </p>
              <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-6xl">
                Got a project? Let&apos;s make it real.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                WhatsApp Akshat directly. No forms, no waiting - just a real conversation about what you need.
              </p>
              <a
                href="https://wa.me/919285328987"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full px-8 text-sm font-black transition-all hover:-translate-y-1 sm:w-auto sm:px-10"
                style={{ background: "var(--accent)", color: "var(--ink)" }}
              >
                Start on WhatsApp -&gt;
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutSection />

      <QueryForm />
    </main>
  );
}

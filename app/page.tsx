import { ArrowDown, Code2, Cpu, DatabaseZap, PanelsTopLeft } from "lucide-react";
import { DemoVault } from "@/components/demo-vault";
import { Reveal } from "@/components/reveal";
import { AboutSection } from "@/components/about-section";
import { QueryForm } from "@/components/query-form";
import { capabilities, templates } from "@/data/templates";

const capabilityIcons = [Code2, Cpu, PanelsTopLeft, DatabaseZap];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 py-14 sm:px-8 lg:py-16">
        <div className="absolute inset-0 -z-10 theme-grid opacity-50" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[var(--accent)]">
              White-Label Digital Systems
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-6xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[5.55rem]">
              Premium Web Architecture & Digital Experiences.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--muted)] sm:text-2xl">
              We engineer high-performance, end-to-end web applications that
              convert.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#demo-vault"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-sm font-black transition hover:-translate-y-1"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)"
                }}
              >
                Check out our options
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <DemoVault templates={templates} />

      <section id="capabilities" className="border-t px-5 py-24 sm:px-8" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--accent)]">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Technical services for businesses that need systems, not pages.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? Code2;

              return (
                <Reveal key={capability} delay={index * 0.06}>
                  <div className="min-h-56 rounded-[2rem] border bg-[var(--surface)] p-6" style={{ borderColor: "var(--border)" }}>
                    <Icon className="h-8 w-8 text-[var(--accent)]" />
                    <h3 className="mt-8 text-2xl font-black tracking-tight">
                      {capability}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <QueryForm />
      <AboutSection />
    </main>
  );
}

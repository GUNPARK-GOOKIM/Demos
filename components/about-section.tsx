import { Reveal } from "./reveal";
import { Mail, Layers, Zap, Shield, Globe, ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    Icon: Layers,
    title: "Polymorphic Architecture",
    desc: "Every demo is a standalone, production-grade web application — not a wireframe. Different DNA, same engine.",
  },
  {
    Icon: Zap,
    title: "Performance-First",
    desc: "Built on Next.js with server-side rendering, image optimization, and sub-second load times out of the box.",
  },
  {
    Icon: Shield,
    title: "White-Label Ready",
    desc: "Swap brands, colors, and content. Deploy under any domain. Your client sees only their brand — never ours.",
  },
  {
    Icon: Globe,
    title: "Instant Deployment",
    desc: "One click to Vercel, Netlify, or any Node host. No config nightmares. Ship the same day you decide.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t px-5 py-24 sm:px-8 lg:py-32"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 -z-10 theme-grid opacity-30" />

      <div className="mx-auto max-w-7xl">
        {/* ── Header Row ─────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--accent)]">
                About Forge Layer
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
                We build the systems that power your client&apos;s business.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-9 text-[var(--muted)]">
              Forge Layer is a digital architecture studio. We design and ship
              high-performance, conversion-optimized web applications — from
              resort booking engines and clinic portals, to real-time sales
              dashboards and SaaS landing pages.
            </p>
          </Reveal>
        </div>

        {/* ── Divider ─────────────────────────────── */}
        <div
          className="my-16 h-px w-full"
          style={{ background: "var(--border)" }}
        />

        {/* ── 4 Pillars Grid ──────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div
                className="group relative flex h-full flex-col rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                {/* Icon circle */}
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                  style={{ background: "var(--accent)", color: "var(--background)" }}
                >
                  <pillar.Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-black tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--muted)]">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Bottom CTA Strip ────────────────────── */}
        <Reveal delay={0.3}>
          <div
            className="mt-16 flex flex-col items-center justify-between gap-8 rounded-[2rem] border p-8 sm:flex-row sm:p-10"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <div>
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                Reach out — we respond within 24 hours.
              </p>
            </div>
            <a
              href="mailto:akshatlakhera031@gmail.com"
              className="group inline-flex h-14 shrink-0 items-center gap-3 rounded-full px-8 text-sm font-black transition hover:-translate-y-1"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              <Mail className="h-4 w-4" />
              akshatlakhera031@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

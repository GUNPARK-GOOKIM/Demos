import { Reveal } from "./reveal";
import { Mail, Layers, Zap, Shield, Globe, ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    Icon: Layers,
    title: "Polymorphic Architecture",
    desc: "Every demo is a standalone, production-grade web app, not a wireframe. Different DNA, same engine."
  },
  {
    Icon: Zap,
    title: "Performance-First",
    desc: "Built on Next.js with server rendering, image optimization, and fast load times out of the box."
  },
  {
    Icon: Shield,
    title: "White-Label Ready",
    desc: "Swap brands, colors, and content. Deploy under any domain. Your client sees only their brand."
  },
  {
    Icon: Globe,
    title: "Instant Deployment",
    desc: "Deploy to Vercel, Netlify, or any Node host without complex setup."
  }
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t px-4 py-20 sm:px-8 sm:py-24 lg:py-32"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="absolute inset-0 -z-10 theme-grid opacity-30" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm sm:tracking-[0.28em]">
                About Forge Layer
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-6xl">
                We build systems that power your client&apos;s business.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-7 text-[var(--muted)] sm:text-xl sm:leading-9">
              Forge Layer is a digital architecture studio. We design and ship high-performance,
              conversion-focused web applications across travel, healthcare, retail, and dashboards.
            </p>
          </Reveal>
        </div>

        <div className="my-12 h-px w-full" style={{ background: "var(--border)" }} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <div
                className="group relative flex h-full flex-col rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
                  style={{ background: "var(--accent)", color: "var(--background)" }}
                >
                  <pillar.Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-black tracking-tight">{pillar.title}</h3>
                <p className="text-sm leading-6 text-[var(--muted)]">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div
            className="mt-14 flex flex-col items-start justify-between gap-5 rounded-[2rem] border p-6 sm:mt-16 sm:flex-row sm:items-center sm:gap-8 sm:p-10"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div>
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">Have a project in mind?</h3>
              <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">Reach out and we respond within 24 hours.</p>
            </div>
            <a
              href="mailto:akshatlakhera031@gmail.com"
              className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full px-6 text-sm font-black transition hover:-translate-y-1 sm:h-14 sm:w-auto sm:px-8"
              style={{ background: "var(--foreground)", color: "var(--background)" }}
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

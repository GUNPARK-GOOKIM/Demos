import Image from "next/image";
import { ArrowUpRight, Check, Filter, ShieldCheck, Sparkles } from "lucide-react";
import { DashboardCharts } from "@/components/dashboard-charts";
import { GoaResortDemo } from "@/components/demos/goa-resort";
import { KeralaDemo } from "@/components/demos/kerala-tour";
import { FitnessDemo } from "@/components/demos/fitness";
import { SafariMPDemo } from "@/components/demos/safari-mp";
import type { Template } from "@/data/templates";
import { RealEstateDemo } from "@/components/demos/real-estate";
import { SalesDashboardDemo } from "@/components/demos/sales-dashboard";
import { ClinicDemo } from "@/components/demos/clinic";
import { RestaurantDemo } from "@/components/demos/restaurant";
import { OpsDashboardDemo } from "@/components/demos/ops-dashboard";

export function DemoLayoutRenderer({ template }: { template: Template }) {
  switch (template.id) {
    case "goa-resort-booking-system":
      return <GoaResortDemo template={template} />;
    case "kerala-tour-package-vault":
      return <KeralaDemo template={template} />;
    case "fitness-kinetic-sales-page":
      return <FitnessDemo template={template} />;
    case "mp-safari-booking":
      return <SafariMPDemo template={template} />;
    case "real-estate-launchpad":
      return <RealEstateDemo template={template} />;
    case "sales-analytics-command-center":
      return <SalesDashboardDemo template={template} />;
    case "clinic-trust-architecture":
      return <ClinicDemo template={template} />;
    case "restaurant-social-engine":
      return <RestaurantDemo template={template} />;
    case "operations-dashboard-vault":
      return <OpsDashboardDemo template={template} />;

  }

  switch (template.layoutType) {
    case "vibrant":
      return <VibrantLayout template={template} />;
    case "minimalist":
      return <MinimalistLayout template={template} />;
    case "kinetic":
      return <KineticLayout template={template} />;
    case "dashboard":
      return <DashboardLayout template={template} />;

    default:
      return null;
  }
}

function VibrantLayout({ template }: { template: Template }) {
  return (
    <section className="px-4 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_1fr]">
        <aside className="h-fit rounded-[2rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-[var(--accent)]">
            <Filter className="h-4 w-4" />
            Filters
          </div>
          <div className="mt-5 grid gap-3">
            {template.filters.map((filter) => (
              <button key={filter} type="button" className="rounded-full border px-4 py-3 text-left text-sm font-bold transition hover:translate-x-1" style={{ borderColor: "var(--border)" }}>
                {filter}
              </button>
            ))}
          </div>
        </aside>
        <div className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]" style={{ color: template.accent }}>{template.category}</p>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-7xl">{template.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">{template.summary}</p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <Image src={template.image} alt={template.imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {template.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm text-[var(--muted)]">{metric.label}</p>
                <p className="mt-2 text-2xl font-black">{metric.value}</p>
              </div>
            ))}
          </div>
          <FeatureGrid template={template} />
        </div>
      </div>
    </section>
  );
}

function MinimalistLayout({ template }: { template: Template }) {
  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--muted)]">{template.category}</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.06em] sm:text-8xl">{template.title}</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <p className="text-lg leading-8 text-[var(--muted)] sm:text-2xl sm:leading-10">{template.summary}</p>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border" style={{ borderColor: "var(--border)" }}>
            <Image src={template.image} alt={template.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale" />
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {template.metrics.map((metric) => (
            <div key={metric.label} className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">{metric.label}</p>
              <p className="mt-3 text-3xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-[2rem] border bg-[var(--surface)] p-6 sm:p-8" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em]" style={{ color: template.accent }}>
            <ShieldCheck className="h-4 w-4" />
            Trust Architecture
          </div>
          <FeatureGrid template={template} />
        </div>
      </div>
    </section>
  );
}

function KineticLayout({ template }: { template: Template }) {
  const marqueeItems = [template.category, template.title, "Book", "Launch", "Convert"];
  return (
    <section className="overflow-hidden px-4 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl border-2 bg-[var(--surface)]" style={{ borderColor: "var(--foreground)" }}>
        <div className="overflow-hidden border-b-2 py-3" style={{ borderColor: "var(--foreground)" }}>
          <div className="marquee flex w-max gap-8 text-2xl font-black uppercase tracking-[-0.03em]">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
          <div className="border-b-2 p-6 sm:p-10 lg:border-b-0 lg:border-r-2" style={{ borderColor: "var(--foreground)" }}>
            <p className="text-sm font-black uppercase tracking-[0.3em]" style={{ color: template.accent }}>{template.category}</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">{template.title}</h1>
            <p className="mt-8 max-w-2xl text-lg font-bold leading-7 text-[var(--muted)] sm:text-xl sm:leading-8">{template.summary}</p>
          </div>
          <div className="relative min-h-[28rem]">
            <Image src={template.image} alt={template.imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="grid border-t-2 md:grid-cols-3" style={{ borderColor: "var(--foreground)" }}>
          {template.metrics.map((metric) => (
            <div key={metric.label} className="border-b-2 p-5 md:border-b-0 md:border-r-2 last:border-r-0" style={{ borderColor: "var(--foreground)" }}>
              <p className="text-sm font-black uppercase">{metric.label}</p>
              <p className="mt-2 text-3xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl">
        <FeatureGrid template={template} />
      </div>
    </section>
  );
}

function DashboardLayout({ template }: { template: Template }) {
  if (!template.dashboardData) return null;
  return (
    <section className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em]" style={{ color: template.accent }}>Dashboard Vault</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-7xl">{template.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">{template.summary}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {template.dashboardData.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-[1.5rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm text-[var(--muted)]">{kpi.label}</p>
                <p className="mt-2 text-3xl font-black">{kpi.value}</p>
                <p className="mt-3 text-sm font-black text-[var(--accent-2)]">{kpi.delta}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <DashboardCharts data={template.dashboardData} />
        </div>
        <div className="mt-8">
          <FeatureGrid template={template} />
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ template }: { template: Template }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {template.features.map((feature) => (
        <div key={feature} className="rounded-[1.25rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
              <Check className="h-4 w-4" />
            </span>
            <p className="font-bold leading-7">{feature}</p>
          </div>
        </div>
      ))}
      <div className="rounded-[1.25rem] border bg-[var(--surface)] p-5" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--ink)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <p className="font-bold leading-7">Built as a reusable architecture, not a static mockup.</p>
        </div>
      </div>
      <a href="#conversion-footer" className="rounded-[1.25rem] border bg-[var(--foreground)] p-5 font-black text-[var(--background)] transition hover:-translate-y-1" style={{ borderColor: "var(--border)" }}>
        Jump to conversion details
        <ArrowUpRight className="mt-4 h-5 w-5" />
      </a>
    </div>
  );
}

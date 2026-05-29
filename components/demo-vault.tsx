"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Layers3, Search } from "lucide-react";
import type { LayoutType, Template } from "@/data/templates";
import { getTemplateHref } from "@/data/templates";

const layoutFilters: Array<LayoutType | "all"> = [
  "all",
  "vibrant",
  "minimalist",
  "kinetic",
  "dashboard"
];

export function DemoVault({ templates }: { templates: Template[] }) {
  const [activeLayout, setActiveLayout] = useState<LayoutType | "all">("all");
  const [query, setQuery] = useState("");

  const filteredTemplates = useMemo(
    () =>
      templates.filter((template) => {
        const matchesLayout =
          activeLayout === "all" || template.layoutType === activeLayout;
        const content = `${template.title} ${template.category} ${template.summary}`;
        return matchesLayout && content.toLowerCase().includes(query.toLowerCase());
      }),
    [activeLayout, query, templates]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24" id="demo-vault">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm sm:tracking-[0.28em]">
            Demo Vault
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-6xl">
            Choose the architecture. The engine adapts.
          </h2>
        </div>
        <div className="grid gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 opacity-55" />
            <input
              suppressHydrationWarning
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search templates, industries, dashboards"
              className="h-12 w-full rounded-full border bg-[var(--surface)] pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-[var(--accent)] sm:h-13"
              style={{ borderColor: "var(--border)" }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {layoutFilters.map((layout) => (
              <button
                key={layout}
                type="button"
                onClick={() => setActiveLayout(layout)}
                className="rounded-full border px-3 py-2 text-xs font-bold capitalize transition hover:-translate-y-0.5 sm:px-4 sm:text-sm"
                style={{
                  background:
                    activeLayout === layout
                      ? "var(--foreground)"
                      : "var(--surface)",
                  borderColor: "var(--border)",
                  color:
                    activeLayout === layout
                      ? "var(--background)"
                      : "var(--foreground)"
                }}
              >
                {layout}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredTemplates.map((template, index) => (
          <motion.article
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.015 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: Math.min(index * 0.035, 0.2) }}
            className="group overflow-hidden rounded-[2rem] border theme-surface"
          >
            <Link href={getTemplateHref(template)} className="block h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={template.image}
                  alt={template.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                  {template.layoutType}
                </div>
              </div>
              <div className="grid gap-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--accent)] sm:text-xs sm:tracking-[0.2em]">
                    {template.category}
                  </p>
                  <Layers3 className="h-4 w-4 opacity-60" />
                </div>
                <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                  {template.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--muted)]">
                  {template.summary}
                </p>
                <div className="flex items-center justify-between border-t pt-4 text-sm font-black" style={{ borderColor: "var(--border)" }}>
                  <span>{template.complexityTier}</span>
                  <span className="inline-flex items-center gap-1">
                    Open
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

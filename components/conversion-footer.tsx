import { MessageCircle, Phone } from "lucide-react";
import type { Template } from "@/data/templates";

export function ConversionFooter({ template }: { template: Template }) {
  return (
    <section className="sticky bottom-0 z-40 border-t theme-surface">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-3 sm:px-8 sm:py-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-black sm:text-sm">
          <span className="opacity-90">Built by Akshat Lakhera</span>
          <span className="hidden h-1 w-1 rounded-full bg-[var(--accent)] sm:inline-block" />
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            +91 9285328987
          </span>
          <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--background)] sm:text-xs">
            {template.calculatedPrice}
          </span>
        </div>
        <a
          href="#inquiry"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 sm:h-12 sm:w-auto"
        >
          Discuss This Build
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

import { MessageCircle, Phone } from "lucide-react";
import type { Template } from "@/data/templates";

export function ConversionFooter({ template }: { template: Template }) {
  return (
    <section className="sticky bottom-0 z-40 border-t theme-surface">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex flex-wrap items-center gap-3 text-sm font-black">
          <span>Built by Akshat Lakhera</span>
          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +91 9285328987
          </span>
          <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-[var(--background)]">
            {template.calculatedPrice}
          </span>
        </div>
        <a
          href="#inquiry"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5"
        >
          Discuss This Build
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

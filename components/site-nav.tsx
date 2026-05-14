import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl theme-surface">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-black uppercase tracking-[0.22em]">
          AL Studio
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/#demo-vault"
            className="hidden rounded-full px-3 py-2 text-sm font-semibold opacity-75 transition hover:opacity-100 sm:inline-flex"
          >
            Demo Vault
          </Link>
          <Link
            href="/#capabilities"
            className="hidden rounded-full px-3 py-2 text-sm font-semibold opacity-75 transition hover:opacity-100 sm:inline-flex"
          >
            Capabilities
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

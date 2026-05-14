import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center px-5">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--accent)]">
          404
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Demo not found.
        </h1>
        <p className="mt-4 text-[var(--muted)]">
          Return to the vault and choose an available agency system.
        </p>
        <Link
          href="/#demo-vault"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-black text-[var(--background)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Demo Vault
        </Link>
      </div>
    </main>
  );
}

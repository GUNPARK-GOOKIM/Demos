"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button 
    suppressHydrationWarning 
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="inline-flex h-11 items-center gap-2 rounded-full border px-3 text-sm font-semibold transition hover:-translate-y-0.5"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--foreground)"
      }}
    > {/* <-- Moved the '>' to here, closing the opening tag */}
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
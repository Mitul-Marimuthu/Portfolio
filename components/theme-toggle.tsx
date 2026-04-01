"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-surface/70 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:border-foreground/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="text-gold">{theme === "light" ? "Dark" : "Light"}</span>
      <span className="text-foreground/70">mode</span>
    </button>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (next: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function applyDomTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (value === "light" || value === "dark") return value;
  return null;
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getBrowserThemeSnapshot(): Theme {
  return readStoredTheme() ?? getSystemTheme();
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  const onCustom = () => onStoreChange();
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) onStoreChange();
  };

  window.addEventListener(THEME_EVENT, onCustom);
  window.addEventListener("storage", onStorage);

  const media =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;

  media?.addEventListener("change", onCustom);

  return () => {
    window.removeEventListener(THEME_EVENT, onCustom);
    window.removeEventListener("storage", onStorage);
    media?.removeEventListener("change", onCustom);
  };
}

function emitThemeChange() {
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(
    subscribeToThemeChanges,
    getBrowserThemeSnapshot,
    () => "light",
  );

  const setTheme = useCallback((next: Theme) => {
    applyDomTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    emitThemeChange();
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
  }, [setTheme, theme]);

  const value = useMemo<ThemeContextValue>(() => {
    return { theme, setTheme, toggleTheme };
  }, [setTheme, theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-foreground/10 bg-surface/70 transition hover:border-foreground/20"
      >
        <span
          className={`h-px w-4 rounded-full bg-foreground transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-4 rounded-full bg-foreground transition-all duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-px w-4 rounded-full bg-foreground transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 min-w-[180px] overflow-hidden rounded-2xl border border-foreground/10 bg-surface/95 p-2 shadow-xl backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground/75 transition hover:bg-foreground/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

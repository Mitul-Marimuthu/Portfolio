"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" },
  { id: "ai", label: "AI / ML" },
];

const skills = [
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "React", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  { name: "MongoDB", category: "tools" },
  { name: "Supabase", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "LangChain", category: "ai" },
  { name: "LangGraph", category: "ai" },
  { name: "PyTorch", category: "ai" },
  { name: "Hugging Face", category: "ai" },
];

export function SkillsSection() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="section-card rounded-3xl p-7 md:p-8">
      <h3 className="text-lg font-black text-foreground">Skills</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
              active === cat.id
                ? "bg-gold text-on-gold shadow-[0_4px_14px_rgba(255,184,28,0.35)]"
                : "border border-foreground/10 bg-background/40 text-foreground/60 hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {visible.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/40 px-3 py-2 text-xs font-bold text-foreground transition hover:border-gold/40 hover:bg-gold/5"
          >
            {/* Logo slot — swap this span with <Image src={logoSrc} /> once you have the asset */}
            <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-foreground/8 text-[0.55rem] font-black text-foreground/40">
              {skill.name[0]}
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

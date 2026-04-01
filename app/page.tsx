import Image from "next/image";

import { PlaceholderBox } from "@/components/placeholder-box";
import { ProjectCard } from "@/components/project-card";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--gold)55%,transparent),transparent_60%),radial-gradient(circle_at_70%_20%,color-mix(in_srgb,var(--navy)45%,transparent),transparent_55%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_srgb,var(--background)92%,transparent))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-surface/70 px-3 py-2 shadow-sm transition hover:border-foreground/20"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-black text-white">
              YOU
            </span>
            <span className="pr-2 text-sm font-black tracking-tight text-foreground">
              Your Name
              <span className="mt-0.5 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Portfolio
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/75 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              className="hidden rounded-full bg-gold px-4 py-2 text-sm font-black text-navy-deep shadow-[0_16px_40px_rgba(255,184,28,0.25)] transition hover:brightness-110 sm:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl space-y-24 px-6 pb-24 pt-10 md:space-y-28 md:pb-32 md:pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/70 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-gold shadow-sm">
              Bold · Navy · Gold
              <span className="text-foreground/50">|</span>
              UCSB-inspired palette
            </p>

            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Build products that feel{" "}
                <span className="relative">
                  inevitable
                  <span className="absolute -inset-x-1 -bottom-2 h-3 rounded-full bg-gold/35" />
                </span>
                .
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl">
                Replace this sentence with your positioning statement: what you
                do, who you help, and the outcomes you deliver. Keep it sharp—2
                lines max.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-navy-deep px-6 py-3 text-sm font-black text-white shadow-[0_22px_60px_rgba(0,24,69,0.35)] transition hover:brightness-110"
              >
                See selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
              >
                Let&apos;s collaborate
              </a>
            </div>

            <PlaceholderBox title="Where to edit headline + intro copy">
              <p>
                Update the hero headline and paragraph in{" "}
                <span className="font-semibold text-foreground">app/page.tsx</span>{" "}
                (search for “Replace this sentence”).
              </p>
            </PlaceholderBox>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,color-mix(in_srgb,var(--gold)35%,transparent),transparent_40%,color-mix(in_srgb,var(--navy)28%,transparent),transparent_75%)] blur-2xl" />

            <div className="section-card relative overflow-hidden rounded-[2.5rem] p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                    Portrait
                  </p>
                  <p className="mt-2 text-sm font-semibold text-muted">
                    Put a professional photo here (or a bold illustration).
                  </p>
                </div>
                <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-black text-gold">
                  public/images/
                </div>
              </div>

              <div className="relative mt-6 aspect-square w-full overflow-hidden rounded-[2rem] border border-foreground/10 bg-navy-deep/5">
                <Image
                  src="/images/avatar-placeholder.svg"
                  alt="Portrait placeholder"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Role", v: "Your title" },
                  { k: "Location", v: "City, ST" },
                  { k: "Focus", v: "Your niche" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-foreground/10 bg-background/40 p-4"
                  >
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-gold">
                      {item.k}
                    </p>
                    <p className="mt-2 text-sm font-bold text-foreground">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                About
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Tell your story with confidence.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted md:text-base">
              This section is for your background: education, principles, what
              you build, and what makes your taste distinctive.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="section-card space-y-5 rounded-3xl p-7 md:p-8">
              <h3 className="text-lg font-black text-foreground">
                Replace with 2–3 short paragraphs
              </h3>
              <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
                <p>
                  Paragraph 1: who you are + what you&apos;re great at (systems,
                  UX, ML, infra—whatever is true).
                </p>
                <p>
                  Paragraph 2: a proof point (scope/scale), and what you enjoy
                  most about building.
                </p>
                <p>
                  Paragraph 3 (optional): values, collaboration style, and what
                  you&apos;re looking for next.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <PlaceholderBox title="Optional supporting image">
                <p>
                  Add something visual: a candid, workspace photo, diagram, or
                  campus shot. Put the file in{" "}
                  <span className="font-semibold text-foreground">
                    public/images/
                  </span>{" "}
                  and embed it with{" "}
                  <span className="font-semibold text-foreground">
                    next/image
                  </span>
                  .
                </p>
              </PlaceholderBox>

              <div className="section-card rounded-3xl p-7 md:p-8">
                <h3 className="text-lg font-black text-foreground">Skills</h3>
                <p className="mt-2 text-sm text-muted">
                  Swap these chips for your real stack (keep it honest).
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "React / Next.js",
                    "Node",
                    "PostgreSQL",
                    "Tailwind",
                    "AWS",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-foreground/10 bg-background/40 px-3 py-2 text-xs font-bold text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                Projects
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Proof beats promises.
              </h2>
            </div>
            <PlaceholderBox title="How to swap screenshots">
              <p>
                Replace each card&apos;s{" "}
                <span className="font-semibold text-foreground">imageSrc</span>{" "}
                in{" "}
                <span className="font-semibold text-foreground">app/page.tsx</span>
                . Use crisp 16:9 images for best results.
              </p>
            </PlaceholderBox>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ProjectCard
              title="Project Alpha"
              description="One sentence on the problem. One sentence on what you shipped and the measurable outcome."
              tech="Next.js · Postgres · Tailwind"
              imageSrc="/images/project-placeholder.svg"
              imageAlt="Project Alpha screenshot placeholder"
              href="https://github.com/"
            />
            <ProjectCard
              title="Project Beta"
              description="Focus on scope: users impacted, latency improved, revenue influenced, time saved—whatever is credible."
              tech="Python · FastAPI · Redis"
              imageSrc="/images/project-placeholder.svg"
              imageAlt="Project Beta screenshot placeholder"
              href="https://github.com/"
            />
            <ProjectCard
              title="Project Gamma"
              description="If it’s private, link to a case study PDF or describe architecture without exposing secrets."
              tech="AWS · Terraform · Observability"
              imageSrc="/images/project-placeholder.svg"
              imageAlt="Project Gamma screenshot placeholder"
              href="https://github.com/"
            />
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 space-y-8">
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
              Experience
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl">
              A timeline you can defend in interviews.
            </h2>
          </div>

          <div className="grid gap-5">
            {[
              {
                title: "Your Role @ Company",
                meta: "2023 — Present · City, ST",
                bullets: [
                  "Outcome-first bullet (metric + what you changed).",
                  "Technical depth bullet (systems/tools).",
                  "Leadership/collab bullet (how you worked).",
                ],
              },
              {
                title: "Previous Role @ Company",
                meta: "2020 — 2023 · Remote",
                bullets: [
                  "Replace with real achievements (avoid vague responsibilities).",
                  "If you can’t share numbers, use ranges or qualitative impact.",
                  "Keep each bullet one line when possible.",
                ],
              },
            ].map((job) => (
              <div key={job.title} className="section-card rounded-3xl p-7 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-foreground">
                      {job.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-muted">
                      {job.meta}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-black text-gold">
                    Edit in page.tsx
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted md:text-base">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">
                Contact
              </p>
              <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl">
                Let&apos;s build something sharp.
              </h2>
              <p className="text-sm leading-7 text-muted md:text-base">
                Replace the links with your real profiles. For the form: easiest
                v1 is{" "}
                <a
                  className="font-semibold text-foreground underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                  href="https://formspree.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Formspree
                </a>{" "}
                or a serverless endpoint later.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-navy-deep px-6 py-3 text-sm font-black text-white shadow-[0_22px_60px_rgba(0,24,69,0.35)] transition hover:brightness-110"
                  href="mailto:you@email.com"
                >
                  Email you@email.com
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <form className="section-card space-y-4 rounded-3xl p-7 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-foreground">
                  Name
                  <input
                    className="mt-2 w-full rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none ring-gold/0 transition focus:ring-4"
                    placeholder="Ada Lovelace"
                    name="name"
                    autoComplete="name"
                  />
                </label>
                <label className="space-y-2 text-sm font-semibold text-foreground">
                  Email
                  <input
                    className="mt-2 w-full rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none ring-gold/0 transition focus:ring-4"
                    placeholder="you@email.com"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                </label>
              </div>
              <label className="block space-y-2 text-sm font-semibold text-foreground">
                Message
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none ring-gold/0 transition focus:ring-4"
                  placeholder="What are we building?"
                  name="message"
                />
              </label>
              <button
                type="button"
                className="w-full rounded-full bg-gold px-6 py-3 text-sm font-black text-navy-deep shadow-[0_16px_40px_rgba(255,184,28,0.25)] transition hover:brightness-110"
              >
                Wire this button up (Formspree/API route)
              </button>
              <p className="text-xs leading-6 text-muted">
                This form is intentionally non-submitting so you don’t deploy a
                broken endpoint by accident.
              </p>
            </form>
          </div>
        </section>

        <footer className="border-t border-foreground/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted">
              Built with Next.js + Tailwind. Ready for{" "}
              <span className="font-semibold text-foreground">Vercel</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-foreground/5 px-3 py-2 text-xs font-bold text-foreground/70">
                Tip: set your real metadata in{" "}
                <span className="text-foreground">app/layout.tsx</span>
              </span>
              <span className="rounded-full bg-foreground/5 px-3 py-2 text-xs font-bold text-foreground/70">
                Tip: add{" "}
                <span className="text-foreground">public/resume.pdf</span> for
                the resume button
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

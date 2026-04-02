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
              M
            </span>
            <span className="pr-2 text-sm font-black tracking-tight text-foreground">
              Mitul Marimuthu
              <span className="mt-0.5 block text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
                AI · Software Engineering
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
                Build agentic AI systems that feel{" "}
                <span className="relative">
                  inevitable
                  <span className="absolute -inset-x-1 -bottom-2 h-3 rounded-full bg-gold/35" />
                </span>
                .
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl">
                Software engineer focused on agentic AI and product reliability. I
                ship web apps and data-driven features with Next.js, Python, SQL,
                and LangChain/LangGraph—measured by real user impact.
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

            <PlaceholderBox title="Images: where to add yours">
              <p>
                Replace <span className="font-semibold text-foreground">avatar-placeholder.svg</span>{" "}
                with your photo in <span className="font-semibold text-foreground">public/images/</span>.
                Then update project screenshots in the <span className="font-semibold text-foreground">Projects</span> section.
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
                  { k: "Role", v: "AI + Software Engineer" },
                  { k: "Location", v: "Santa Barbara, CA" },
                  { k: "Focus", v: "Agentic AI · Web Systems" },
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
                UCSB CS student, shipping measurable impact
              </h3>
              <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
                <p>
                  University of California, Santa Barbara — B.S. in Computer
                  Science (Grad: June 2027, GPA: 3.95/4.0). Relevant coursework:
                  Data Structures & Algorithms, Computer Architecture, Operating
                  Systems, Artificial Intelligence, Cryptography, and more.
                </p>
                <p>
                  I focus on building agentic AI and data-driven web features end
                  to end—turning prototypes into shipped product work. My
                  approach is always outcome-first: faster onboarding, cheaper
                  retrieval, and fewer user friction points backed by real data.
                </p>
                <p>
                  In leadership roles, I build teams and learning paths: organizing
                  PokerBots with 250 participants (and a Next.js + Supabase
                  realtime competition interface), and directing agentic dashboard
                  development to accelerate the product lifecycle by 50%.
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
                  Core technical stack (swap/add as you grow).
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TypeScript",
                    "JavaScript",
                    "React / Next.js",
                    "SQL",
                    "Flask",
                    "MongoDB",
                    "Supabase",
                    "Docker",
                    "LangChain",
                    "LangGraph",
                    "PyTorch",
                    "Hugging Face",
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
                Projects with real tradeoffs
              </h2>
            </div>
            <PlaceholderBox title="Images: screenshot placeholders">
              <p>
                Upload your screenshots in <span className="font-semibold text-foreground">public/images/</span> and update
                each project card&apos;s <span className="font-semibold text-foreground">imageSrc</span>. The current images use a generic placeholder.
              </p>
            </PlaceholderBox>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ProjectCard
              title="SpotiGraph"
              description="Built a SQL-backed system for 1,000+ Spotify listening records. Optimized queries to reduce retrieval time by 30%, improving user satisfaction by 20%, and added instant timeframe toggles with instant UI updates."
              tech="Python · React · Next.js · SQL · Flask"
              imageSrc="/images/project-placeholder.svg"
              imageAlt="SpotiGraph screenshot placeholder"
            />
            <ProjectCard
              title="BangEditor"
              description="Engineered an image transformation web app using Cloudinary to support 15+ cloud-based transformations. Created 10+ reusable UI components in TypeScript and designed a MongoDB schema for 500+ transformations to enable near-instant retrieval and state reverts."
              tech="JavaScript · TypeScript · Next.js · Cloudinary · MongoDB"
              imageSrc="/images/project-placeholder.svg"
              imageAlt="BangEditor screenshot placeholder"
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
                title: "Software Engineering Intern · Yope",
                meta: "Dec 2025 — March 2026 · Remote",
                bullets: [
                  "Ideated, prototyped, and delivered 3 core app features, driving a 30% increase in US download rates.",
                  "Owned milestone planning across a 5-person engineering team; compiled technical documentation and wrote OKRs, improving sprint velocity by 15%.",
                  "Presented insights from 100+ user interviews, identifying and resolving 4 critical friction points, resulting in a $15k increase in monthly recurring revenue.",
                ],
              },
              {
                title: "Software Engineering Intern · smartQED",
                meta: "Jun 2025 — Sept 2025 · Remote",
                bullets: [
                  "Automated client onboarding and 2 core services via an AI agent, cutting average service time by 30%.",
                  "Implemented Retrieval-Augmented Generation (RAG) to search through 200+ client cases, reducing servicing costs for 30 new clients by 40%.",
                  "Researched 10 agentic AI architectures, implemented proof-of-concepts with 95% accuracy, and compiled results into a detailed 20-page design document.",
                ],
              },
              {
                title: "Technical Director · ACM (UCSB)",
                meta: "Jan 2025 — Present · Santa Barbara, CA",
                bullets: [
                  "Organized PokerBots, a school-wide poker AI agent competition with 250 participants and 7 industry guest speakers.",
                  "Developed a Next.js + Supabase realtime interface for contestants, supporting 80+ bots and 300+ spectators over 4 hours.",
                  "Led sponsorship outreach by automating cold email campaigns with Python, reaching 120+ companies and securing 3 partnerships (+$9k funding).",
                ],
              },
              {
                title: "Software Engineering Director · AgentsSB",
                meta: "Sept 2025 — Present · Santa Barbara, CA",
                bullets: [
                  "Directed a 6-person team to develop 4 AI-powered dashboards, leveraging agentic development environments to accelerate the product lifecycle by 50%.",
                  "Established a curriculum centralized on Claude Code and Codex subagents, enabling 60+ members to start deploying industry-level code.",
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
                For collaborations, reach me at{" "}
                <a
                  className="font-semibold text-foreground underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                  href="mailto:mitul6m16apply@gmail.com"
                >
                  mitul6m16apply@gmail.com
                </a>{" "}
                or connect via LinkedIn/GitHub below.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-navy-deep px-6 py-3 text-sm font-black text-white shadow-[0_22px_60px_rgba(0,24,69,0.35)] transition hover:brightness-110"
                  href="mailto:mitul6m16apply@gmail.com"
                >
                  Email mitul6m16apply@gmail.com
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
                  href="https://linkedin.com/in/mitul-marimuthu"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-surface/70 px-6 py-3 text-sm font-black text-foreground transition hover:border-foreground/25"
                  href="https://github.com/Mitul-Marimuthu"
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

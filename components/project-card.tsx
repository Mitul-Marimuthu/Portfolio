import Image from "next/image";

export function ProjectCard({
  title,
  description,
  tech,
  imageSrc,
  imageAlt,
  href,
}: {
  title: string;
  description: string;
  tech: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}) {
  const body = (
    <article className="section-card group overflow-hidden rounded-3xl transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(0,26,69,0.28)]">
      <div className="relative h-44 w-full overflow-hidden bg-fill-navy/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--gold)35%,transparent),transparent_55%),radial-gradient(circle_at_80%_10%,color-mix(in_srgb,var(--navy)35%,transparent),transparent_55%)]" />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-95 transition group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-black tracking-tight text-foreground md:text-xl">
            {title}
          </h3>
          <span className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
            Project
          </span>
        </div>
        <p className="text-sm leading-6 text-muted">{description}</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
          {tech}
        </p>
      </div>
    </article>
  );

  if (!href) return body;

  return (
    <a href={href} className="block">
      {body}
    </a>
  );
}

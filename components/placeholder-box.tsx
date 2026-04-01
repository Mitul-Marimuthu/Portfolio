import type { ReactNode } from "react";

export function PlaceholderBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-foreground/25 bg-surface/60 p-5">
      <p className="text-[0.7rem] font-black uppercase tracking-[0.32em] text-gold">
        {title}
      </p>
      <div className="mt-3 space-y-2 text-sm text-muted">{children}</div>
    </div>
  );
}

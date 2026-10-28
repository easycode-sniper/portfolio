import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, intro, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        {title ? (
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        ) : null}
        {intro ? <p className="mt-3 max-w-2xl text-muted">{intro}</p> : null}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

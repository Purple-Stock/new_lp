import type { ReactNode } from "react";

type BlogPageHeaderProps = {
  badge: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  before?: ReactNode;
};

export function BlogPageHeader({
  badge,
  title,
  description,
  before,
}: BlogPageHeaderProps) {
  return (
    <header className="ps-panel mx-auto mb-12 max-w-5xl p-8 text-center md:p-12">
      {before ? <div className="mb-6">{before}</div> : null}
      <div className="ps-badge-violet mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm normal-case tracking-normal">
        {badge}
      </div>
      <h1 className="ps-display text-4xl md:text-5xl lg:text-6xl">{title}</h1>
      {description ? (
        <p className="ps-lead mx-auto mt-6 max-w-3xl text-lg md:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}

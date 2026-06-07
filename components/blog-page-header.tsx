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
    <header className="ps-panel mx-auto mb-8 max-w-5xl p-5 text-center sm:mb-12 sm:p-8 md:p-12">
      {before ? <div className="mb-4 sm:mb-6">{before}</div> : null}
      <div className="ps-badge-violet mb-4 inline-flex items-center gap-2 px-4 py-2 text-sm normal-case tracking-normal sm:mb-6">
        {badge}
      </div>
      <h1 className="ps-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="ps-lead mx-auto mt-4 max-w-3xl text-base sm:mt-6 sm:text-lg md:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}

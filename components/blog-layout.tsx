import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogReadingProgress } from "@/components/blog-reading-progress";

type BlogLayoutProps = {
  children: ReactNode;
  showReadingProgress?: boolean;
};

export function BlogLayout({
  children,
  showReadingProgress = false,
}: BlogLayoutProps) {
  return (
    <div className="ps-landing-canvas relative min-h-screen overflow-x-hidden">
      <div className="ps-landing-bg" aria-hidden="true">
        <div className="ps-landing-bg-glow" />
        <div className="ps-landing-bg-lines" />
      </div>
      {showReadingProgress && <BlogReadingProgress />}
      <Navbar />

      <main className="relative z-[1] pt-24 pb-20">{children}</main>

      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}

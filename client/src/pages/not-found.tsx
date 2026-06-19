import { Link } from "wouter";
import { useSEO } from "@/lib/useSEO";

export default function NotFound() {
  useSEO({
    title: "404 — Fyreworks",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
  });

  return (
    <section className="min-h-[70vh] flex items-center px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-6">404</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
          This page isn't here.
        </h1>
        <p className="mt-6 text-white/60 text-lg max-w-prose">
          Could be moved, could be gone, could have never existed. Head home and try again.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm tracking-[0.08em] uppercase border-b border-white/30 pb-1 hover:border-white transition-colors"
          >
            Back to home
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

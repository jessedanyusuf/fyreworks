import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./motion/PageTransition";

/**
 * Collapse URL variants that render the same page into one key so
 * the page-transition fade doesn't fire on modal-only state changes
 * (e.g. /journal -> /journal/:slug opens the post modal in place).
 */
function pageKeyFor(location: string): string {
  if (location.startsWith("/journal")) return "/journal";
  return location;
}

/** Where should the page scroll when the URL changes? */
function shouldScrollToTop(from: string, to: string): boolean {
  // Don't bounce scroll when opening/closing the journal modal.
  const inJournal = (p: string) => p.startsWith("/journal");
  if (inJournal(from) && inJournal(to)) return false;
  return true;
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    const previous = (window as any).__prevLocation ?? location;
    if (shouldScrollToTop(previous, location)) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    (window as any).__prevLocation = location;
  }, [location]);

  return (
    // NB: no `overflow-x-hidden` here. Setting overflow-x on a wrapper forces
    // overflow-y to compute to `auto`, which makes this div a scroll container
    // and breaks scroll-linked animation (useScroll would track this element
    // instead of the viewport). Horizontal clipping lives on `html` in index.css.
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <PageTransition pageKey={pageKeyFor(location)}>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}

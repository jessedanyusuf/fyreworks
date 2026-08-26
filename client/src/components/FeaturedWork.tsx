import { useCallback, useEffect, useState } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { FEATURED_WORK } from "@/data/work";

/**
 * Featured work as a draggable rail. Category and title sit above each image,
 * and slides are sized so the next one is always partly visible — the rail
 * should read as continuing rather than ending at the viewport edge.
 */
export default function FeaturedWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-6 lg:-ml-8">
          {FEATURED_WORK.map((project) => (
            <div
              key={project.slug}
              className="pl-6 lg:pl-8 flex-[0_0_78%] sm:flex-[0_0_46%] lg:flex-[0_0_31%]"
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img
                    src={project.cover}
                    alt={project.name}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] select-none"
                  />

                  {/* The blur alone is not enough on a light or busy cover —
                      it softens what is behind the panel but does not darken
                      it. This gradient is what actually buys the contrast. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                  />

                  <div className="absolute inset-x-3 bottom-3 flex justify-end">
                    <div className="max-w-full rounded-lg bg-black/25 backdrop-blur-md ring-1 ring-white/15 px-3.5 py-2.5 text-right shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                      <h3 className="font-display text-base lg:text-lg font-semibold tracking-[-0.015em] leading-tight">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] leading-relaxed text-white/70">
                        {project.roles.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Drag &rarr;</span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous projects"
            className="w-10 h-10 border border-white/20 flex items-center justify-center transition-colors enabled:hover:border-white disabled:opacity-30 disabled:cursor-default"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next projects"
            className="w-10 h-10 border border-white/20 flex items-center justify-center transition-colors enabled:hover:border-white disabled:opacity-30 disabled:cursor-default"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

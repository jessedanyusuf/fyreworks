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
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {project.roles[0]}
                </p>

                <h3 className="mt-2 font-display text-xl lg:text-2xl tracking-[-0.015em] font-semibold transition-colors group-hover:text-white/70">
                  {project.name}
                </h3>

                <div className="mt-5 aspect-[4/5] overflow-hidden bg-white/5">
                  <img
                    src={project.cover}
                    alt={project.name}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] select-none"
                  />
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

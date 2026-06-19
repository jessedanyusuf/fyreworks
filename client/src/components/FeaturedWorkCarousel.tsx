import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FEATURED_WORK, type WorkProject } from "@/data/work";

interface CardProps {
  project: WorkProject;
}

function Card({ project }: CardProps) {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    if (e.pointerType !== "mouse") return;
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 … 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: relY * 10, y: -relX * 10 });
  };

  const handleLeave = () => setRot({ x: 0, y: 0 });

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={frameRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        animate={{ rotateX: rot.x, rotateY: rot.y }}
        transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative aspect-[4/5] overflow-hidden bg-white/5 will-change-transform"
      >
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] pointer-events-none select-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 w-9 h-9 border border-white/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 ease-out backdrop-blur-sm bg-black/30"
        >
          &rarr;
        </span>
      </motion.div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-base md:text-lg tracking-[-0.005em]">
          {project.name}
        </h3>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/40 whitespace-nowrap">
          {project.roles[0]}
        </span>
      </div>
      <p className="mt-1.5 text-white/55 text-xs md:text-sm leading-snug max-w-[42ch]">
        {project.descriptor}
      </p>
    </Link>
  );
}

export default function FeaturedWorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const total = FEATURED_WORK.length;

  return (
    <div>
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-5 md:-ml-6">
          {FEATURED_WORK.map((project) => (
            <div
              key={project.slug}
              className="pl-5 md:pl-6 flex-[0_0_72%] sm:flex-[0_0_44%] md:flex-[0_0_34%] lg:flex-[0_0_28%]"
            >
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/50">
          <span className="text-white">
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>
          <span className="w-24 md:w-40 h-px bg-white/15 relative">
            <span
              className="absolute left-0 top-0 h-px bg-white transition-[width] duration-500 ease-out"
              style={{ width: `${((selectedIndex + 1) / total) * 100}%` }}
            />
          </span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            aria-label="Previous project"
            className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center transition-colors"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next project"
            className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center transition-colors"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/30 md:text-right">
        Drag &rarr;
      </p>
    </div>
  );
}

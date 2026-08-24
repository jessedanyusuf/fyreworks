import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed hero backdrop: the astronaut clip, scrubbed by scroll.
 *
 * The clip is never played. Scroll position through the hero's runway maps
 * straight onto currentTime, so scrolling down carries the astronaut closer and
 * scrolling back up carries him away again.
 *
 * That only works because the file is encoded with every frame a keyframe — the
 * source had a single keyframe across all 193 frames, which makes every seek
 * decode from the start and scrubbing unusable. Intra-only costs bitrate but is
 * the whole trick here.
 *
 * The poster carries the frame on its own, so the hero is never empty: it ships
 * as the first frame, and under prefers-reduced-motion it is the finished state
 * and the video is never fetched at all.
 */
export default function HeroBackdrop({
  progressRef,
}: {
  /** 0 → 1 through the hero runway, written by the parent on scroll. */
  progressRef: React.MutableRefObject<number>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The clip is 920KB against a 6KB poster, so it must never compete with the
    // page's critical path — it is the single heaviest asset on the site. Wait
    // for load, then for idle, and only then attach the source. The poster is
    // frame 0, so until it arrives the hero looks finished rather than pending.
    // Save-Data is an explicit request not to spend the user's bytes, and 2G
    // genuinely cannot carry this. 3G is deliberately NOT excluded: Chrome
    // derives effectiveType from rolling RTT estimates and reports "3g" on
    // ordinary broadband, office wifi and VPNs constantly, so gating on it hid
    // the hero from most people.
    const conn = (navigator as any).connection;
    if (conn?.saveData) return;
    if (/^(2g|slow-2g)$/.test(conn?.effectiveType ?? "")) return;

    const start = () => {
      // The timeout matters: the page animates continuously (the hero word
      // cycles, the outro rolls), so it may never actually go idle and a bare
      // requestIdleCallback can wait forever.
      const ric = (window as any).requestIdleCallback;
      if (ric) ric(() => setUseVideo(true), { timeout: 1500 });
      else setTimeout(() => setUseVideo(true), 300);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    if (!useVideo) return;
    const v = videoRef.current;
    if (!v) return;

    // iOS Safari will not seek a video that has never been started, so nudge it
    // through one muted frame first. Muted + playsInline is allowed to autoplay,
    // and pausing immediately means nothing is ever actually watched.
    v.play().then(() => v.pause()).catch(() => {});

    let raf = 0;
    let last = -1;

    const tick = () => {
      const d = v.duration;
      if (d && Number.isFinite(d)) {
        const t = Math.min(d - 0.001, Math.max(0, progressRef.current * d));
        // Only seek on a real change: redundant seeks stall the decoder and
        // make the scrub stutter rather than smooth it.
        if (Math.abs(t - last) > 1 / 48) {
          v.currentTime = t;
          last = t;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [useVideo, progressRef]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-black">
      {useVideo ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-[70%_50%] md:object-center"
          poster="/assets/hero-astronaut-poster.webp"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          <source src="/assets/hero-astronaut.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/assets/hero-astronaut-poster.webp"
          alt=""
          // The hero's real LCP asset: it is what shows until the clip arrives,
          // and all that ever shows on reduced-motion or a metered connection.
          {...{ fetchpriority: "high" }}
          decoding="async"
          className="w-full h-full object-cover object-[70%_50%] md:object-center"
        />
      )}

      {/* The light shaft runs from the top-right down to centre, so the two
          places text sits are the two places that need protecting: the navbar
          crosses the brightest part of the frame, and the headline block sits
          over the mid-tones at the foot. Both scrims are directional so the
          shaft itself stays intact. */}
      <div className="absolute inset-x-0 top-0 h-28 md:h-32 bg-gradient-to-b from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/45 to-transparent" />
    </div>
  );
}

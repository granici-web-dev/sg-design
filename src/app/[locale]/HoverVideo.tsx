"use client";

import { useRef } from "react";

// Project-card cover that shows a static screenshot and plays a muted screencast
// only while hovered (or keyboard-focused). On leave it pauses and rewinds, so
// the still image is what remains. Visibility is CSS-driven (.hovervid:hover .hv)
// and play/pause is JS-driven on the SAME element, so they stay in sync.
export default function HoverVideo({
  poster,
  mp4,
  webm,
  alt,
}: {
  poster: string;
  mp4: string;
  webm: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    void v.play().catch(() => {});
  };
  const stop = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div className="hovervid" onMouseEnter={play} onMouseLeave={stop} onFocus={play} onBlur={stop}>
      <img className="slotimg" src={poster} width={1920} height={1366} alt={alt} decoding="async" loading="lazy" />
      <video
        ref={ref}
        className="slotimg hv"
        muted
        loop
        playsInline
        preload="metadata"
        width={1920}
        height={1366}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" />
      </video>
    </div>
  );
}

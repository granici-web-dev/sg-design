"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

function playHover(e: MouseEvent<HTMLAnchorElement>) {
  const v = e.currentTarget.querySelector("video");
  if (v) { v.currentTime = 0; v.play().catch(() => {}); }
}
function stopHover(e: MouseEvent<HTMLAnchorElement>) {
  const v = e.currentTarget.querySelector("video");
  if (v) { v.pause(); v.load(); }
}

type LeadCardProps = {
  href: string;
  tag: string;
  title: string;
  desc: string;
  more: string;
};

export default function LeadCard({ href, tag, title, desc, more }: LeadCardProps) {
  return (
    <Link className="projlead" href={href} onMouseEnter={playHover} onMouseLeave={stopHover}>
      <div className="pcover">
        <video className="pvid" muted loop playsInline preload="metadata" width={3840} height={2400} poster="/screens/sp-hero-poster.jpg" aria-label="SmartPlaces Screencast">
          <source src="/screens/sp-screencast.mp4" type="video/mp4" />
          <source src="/screens/sp-screencast.webm" type="video/webm" />
        </video>
      </div>
      <div className="lbody">
        <span className="ptag">{tag}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="pmore">{more} <span className="arw">→</span></span>
      </div>
    </Link>
  );
}

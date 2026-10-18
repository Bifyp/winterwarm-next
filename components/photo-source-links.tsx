"use client";

import { useEffect, useState } from "react";
import { photoSources } from "@/lib/photo-sources";

type Credit = {
  key: string;
  src: string;
  href: string;
  label: string;
  alt: string;
  top: number;
  left: number;
  width: number;
};

export default function PhotoSourceLinks() {
  const [credits, setCredits] = useState<Credit[]>([]);

  useEffect(() => {
    let frame = 0;
    let active = true;
    // Keep original image markup/layout intact, including linked product photos.
    // Independent overlays avoid invalid nested anchors and clipping by galleries.
    const update = () => {
      frame = 0;
      if (!active) return;
      const next: Credit[] = [];
      if (!document.querySelector("dialog[open], .nav.open")) {
        document
          .querySelectorAll<HTMLImageElement>("main img")
          .forEach((image, index) => {
            const src = image.getAttribute("src") || "";
            const source = photoSources[src];
            if (!source || !image.getClientRects().length) return;
            const rect = image.getBoundingClientRect();
            let top = Math.max(0, rect.top);
            let bottom = Math.min(window.innerHeight, rect.bottom);
            let left = Math.max(0, rect.left);
            let right = Math.min(window.innerWidth, rect.right);
            if (bottom <= top || right <= left) return;
            // Account for images cropped by overflow-hidden image containers.
            for (
              let parent = image.parentElement;
              parent && parent !== document.body;
              parent = parent.parentElement
            ) {
              const style = getComputedStyle(parent);
              const box = parent.getBoundingClientRect();
              if (/hidden|clip|auto|scroll/.test(style.overflowX)) {
                left = Math.max(left, box.left);
                right = Math.min(right, box.right);
              }
              if (/hidden|clip|auto|scroll/.test(style.overflowY)) {
                top = Math.max(top, box.top);
                bottom = Math.min(bottom, box.bottom);
              }
            }
            if (image.closest(".hero-media")) {
              const header = document
                .querySelector(".site-header")
                ?.getBoundingClientRect();
              if (header) top = Math.max(top, header.bottom);
            }
            if (right - left < 96 || bottom - top < 60) return;
            const width = Math.min(132, right - left - 16);
            next.push({
              key: `${index}:${src}`,
              src,
              href: source.href,
              label: width < 128 ? "AI ↗" : source.label,
              alt: image.alt,
              top: Math.round(top + 8),
              left: Math.round(right - width - 8),
              width: Math.round(width),
            });
          });
      }
      setCredits((previous) =>
        JSON.stringify(previous) === JSON.stringify(next) ? previous : next,
      );
    };
    const schedule = () => {
      if (active && !frame) frame = requestAnimationFrame(update);
    };
    const observer = new MutationObserver((records) => {
      if (
        records.some(
          (record) =>
            !(
              record.target instanceof Element &&
              record.target.closest(".photo-source-layer")
            ),
        )
      )
        schedule();
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["src", "class", "style", "hidden", "open"],
    });
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    document.addEventListener("load", schedule, true);
    document.fonts.ready.then(schedule);
    schedule();
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("load", schedule, true);
    };
  }, []);

  return (
    <div className="photo-source-layer" aria-label="Ilustracje koncepcyjne AI">
      {credits.map((credit) => (
        <a
          key={credit.key}
          className="photo-source-link"
          data-photo-src={credit.src}
          href={credit.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Otwórz ilustrację AI: ${credit.alt} (nowa karta)`}
          title="Ilustracja AI — nie przedstawia rzeczywistego produktu, zespołu ani realizacji firmy"
          style={{ top: credit.top, left: credit.left, width: credit.width }}
        >
          {credit.label}
        </a>
      ))}
    </div>
  );
}

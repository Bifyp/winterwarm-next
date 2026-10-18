import type { Metadata } from "next";
import pages from "@/content/pages.json";
export const siteUrl = new URL(
  process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);
export const indexable =
  process.env.SITE_INDEXABLE === "true" && process.env.VERCEL_ENV !== "preview";
export function metadataFor(slug: keyof typeof pages): Metadata {
  const page = pages[slug];
  const path = slug === "index" ? "/" : "/" + slug;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    robots: { index: indexable, follow: indexable },
    openGraph: {
      title: page.title + " | Winterwarm",
      description: page.description,
      url: path,
      type: "website",
      locale: "pl_PL",
      images: [
        {
          url: "/assets/ai-hero-v1.webp",
          alt: "Koncepcyjna hala przemysłowa — ilustracja AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

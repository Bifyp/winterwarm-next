import type { MetadataRoute } from "next";
import pages from "@/content/pages.json";
import { siteUrl, indexable } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return indexable
    ? Object.keys(pages)
        .filter((p) => p !== "404")
        .concat("prywatnosc")
        .map((p) => ({
          url: new URL(p === "index" ? "/" : "/" + p, siteUrl).href,
        }))
    : [];
}

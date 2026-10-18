export type PhotoSource = { href: string; label: string };

// Exact original files recorded in docs/SOURCES.md, checked against local copies.
export const photoSources: Readonly<Record<string, PhotoSource>> = {
  "/assets/e5130665016f.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2026/10/xr30-bez-tla.png",
    label: "Źródło ↗",
  },
  "/assets/eb9a5f530336.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2026/03/DSC4229-Edytuj-1536x929.jpg",
    label: "Źródło ↗",
  },
  "/assets/68f44533affc.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2024/11/image-1.png",
    label: "Źródło ↗",
  },
  "/assets/afdcf0067ec7.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2024/11/image-15-1.png",
    label: "Źródło ↗",
  },
  "/assets/e80927706bd0.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2024/11/image-22.png",
    label: "Źródło ↗",
  },
  "/assets/7df5b3d3ea99.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2025/09/2.png",
    label: "Źródło ↗",
  },
  "/assets/c4fd4094fa3d.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2025/09/1.png",
    label: "Źródło ↗",
  },
  "/assets/a6473e4b1a7f.webp": {
    href: "https://winterwarm.pl/wp-content/uploads/2024/11/render.jpg",
    label: "Źródło ↗",
  },
  // Concept artwork has no Winterwarm original. Link to the displayed file instead.
  "/assets/35db6f541289.webp": {
    href: "/assets/35db6f541289.webp",
    label: "Ilustracja ↗",
  },
};

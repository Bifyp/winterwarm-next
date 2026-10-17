import type { Prisma } from "@prisma/client";
import data from "../content/site-data.json";

export const categories: Prisma.CategoryCreateManyInput[] = [
  { slug: "hvac", name: "HVAC", sortOrder: 0 },
  { slug: "access", name: "Dostęp", sortOrder: 1 },
  { slug: "led", name: "LED", sortOrder: 2 },
];
const categorySlugs: Record<string, string> = {
  HVAC: "hvac",
  Dostęp: "access",
  LED: "led",
};
export const products: Prisma.ProductCreateManyInput[] = data.catalog.map(
  (item, sortOrder) => {
    const categorySlug = categorySlugs[item.area];
    if (!categorySlug) throw new Error("Unknown seed category.");
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      groupName: item.group,
      imagePath: item.image,
      destinationUrl: item.url,
      categorySlug,
      sortOrder,
      active: true,
    };
  },
);

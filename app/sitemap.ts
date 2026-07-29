import type { MetadataRoute } from "next";
import { essays } from "@/content/insights";

const base = "https://morrisconsultinggroup.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/advisory", "/team", "/insights", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const essayRoutes = essays.map((essay) => ({
    url: `${base}/insights/${essay.slug}`,
    lastModified: essay.datetime,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...essayRoutes];
}

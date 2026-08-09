import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://royaltechit.com";

  const staticRoutes = [
    "",
    "/about",
    "/about/mission-vision",
    "/about/why-royal-tech",
    "/about/leadership",
    "/services",
    "/services/erp",
    "/services/accounting",
    "/services/tax",
    "/services/software-development",
    "/services/web-development",
    "/services/mobile-development",
    "/services/cloud",
    "/services/cyber-security",
    "/services/digital-marketing",
    "/services/managed-it-services",
    "/industries",
    "/industries/manufacturing",
    "/industries/retail",
    "/industries/trading",
    "/industries/construction",
    "/industries/healthcare",
    "/industries/education",
    "/industries/hospitality",
    "/projects",
    "/blog",
    "/career",
    "/contact",
    "/locations/lahore",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/about" ? 0.9 : 0.7,
  })) as MetadataRoute.Sitemap;
}

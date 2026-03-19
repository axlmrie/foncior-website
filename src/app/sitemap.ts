import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://foncior.com";

  const routes = [
    "",
    "/about",
    "/beta",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/solution",
    "/tarifs",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === "" ? 1 : 0.8,
  }));
}
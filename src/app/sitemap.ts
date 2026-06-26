import type { MetadataRoute } from "next";

const siteUrl = "https://centro-ser-pop-saude.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/fachada.jpg`, `${siteUrl}/images/logo-centro-ser.png`],
    },
  ];
}

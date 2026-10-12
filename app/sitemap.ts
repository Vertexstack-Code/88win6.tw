import type { MetadataRoute } from "next";
import { getAllArticles, getAllPages } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

/** /sitemap.xml — homepage, every information page, the news index and every article. */
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const newest = articles[0]?.updatedDate ?? articles[0]?.publishDate;

  const pages: MetadataRoute.Sitemap = getAllPages().map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.updated,
    changeFrequency: page.path === "/official-links" ? "weekly" : "monthly",
    priority: page.path === "/privacy-policy" ? 0.2 : page.path === "/official-links" ? 0.95 : 0.8,
  }));

  return [
    { url: absoluteUrl("/"), lastModified: newest, changeFrequency: "weekly", priority: 1 },
    ...pages,
    { url: absoluteUrl("/news"), lastModified: newest, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((article) => ({
      url: absoluteUrl(`/news/${article.slug}`),
      lastModified: article.updatedDate ?? article.publishDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

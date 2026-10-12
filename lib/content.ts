import { ARTICLES } from "@/lib/data/articles";
import { PAGES } from "@/lib/data/pages";
import type { Article, InfoPage } from "@/lib/types";

// Content access layer. Everything is local data today; swapping in a CMS
// only means changing these functions.

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("zh-TW", { year: "numeric", month: "long", day: "numeric" });
}

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort(
    (a, b) =>
      new Date(b.updatedDate ?? b.publishDate).getTime() - new Date(a.updatedDate ?? a.publishDate).getTime(),
  );
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesByPillar(pillar: string): Article[] {
  return getAllArticles().filter((article) => article.pillar === pillar);
}

/** Same-pillar articles first, then the newest of the rest. */
export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return [];
  const pool = getAllArticles().filter((article) => article.slug !== slug);
  const same = pool.filter((article) => article.pillar === current.pillar);
  const rest = pool.filter((article) => article.pillar !== current.pillar);
  return [...same, ...rest].slice(0, limit);
}

export function getPage(path: string): InfoPage {
  const page = PAGES.find((item) => item.path === path);
  if (!page) throw new Error(`No info page defined for ${path}`);
  return page;
}

export function getAllPages(): InfoPage[] {
  return PAGES;
}

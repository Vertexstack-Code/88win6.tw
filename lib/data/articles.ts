import type { Article } from "@/lib/types";
import { ACCESS_ARTICLES } from "@/lib/data/articles-access";
import { TRUST_ARTICLES } from "@/lib/data/articles-trust";

/**
 * Cover art per article: the illustration half of an official 88WIN
 * platform banner (promo text cropped off), matched to the article's tone.
 */
const COVERS: Record<string, string> = {
  "88win-latest-url": "calendar",
  "88win-misspellings": "dragon",
  "88win-register-guide": "welcome",
  "88win-account-security": "vault",
  "88win-fake-site-signs": "villain",
  "88win-phishing-links": "phones",
  "88win-fake-support-scam": "tech",
  "88win-scam-check": "secure",
  "88win-ptt-dcard-reviews": "crowd",
  "88win-withdrawal-rejected": "atm",
  "88win-first-withdrawal": "expay",
};

// Every article on the site. Topics deliberately avoid the deposit / payment /
// VIP / game how-tos that 88win5.tw owns; where a reader needs those, the
// article links across to 88win5.tw instead of repeating it.
export const ARTICLES: Article[] = [...ACCESS_ARTICLES, ...TRUST_ARTICLES].map((article) => ({
  ...article,
  image: COVERS[article.slug] ? `/images/covers/${COVERS[article.slug]}.webp` : undefined,
}));

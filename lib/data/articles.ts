import type { Article } from "@/lib/types";
import { ACCESS_ARTICLES } from "@/lib/data/articles-access";
import { TRUST_ARTICLES } from "@/lib/data/articles-trust";

// Every article on the site. Topics deliberately avoid the deposit / payment /
// VIP / game how-tos that 88win5.tw owns; where a reader needs those, the
// article links across to 88win5.tw instead of repeating it.
export const ARTICLES: Article[] = [...ACCESS_ARTICLES, ...TRUST_ARTICLES];

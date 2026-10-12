export type IconName =
  | "cards"
  | "dice"
  | "slot"
  | "sports"
  | "ticket"
  | "fish"
  | "crown"
  | "gift"
  | "headset"
  | "lock"
  | "wallet"
  | "bolt"
  | "shield"
  | "chart"
  | "clock"
  | "users"
  | "star"
  | "check"
  | "trophy"
  | "bank"
  | "card"
  | "arrowRight"
  | "menu"
  | "close"
  | "sparkles"
  | "globe"
  | "chat"
  | "download"
  | "upload"
  | "help"
  | "bulb"
  | "settings"
  | "dots"
  | "mail"
  | "line"
  | "user"
  | "alertTriangle";

export interface Author {
  name: string;
  role: string;
}

/**
 * Content blocks shared by articles and the information pages. Inline text
 * supports **bold** and [anchor](/path) internal links (see ContentBody).
 * External links are written as [anchor](https://…) and open in a new tab.
 */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  /** Highlighted takeaway. `tone` picks the colour: info (blue), ok (green), warn (amber). */
  | { type: "callout"; text: string; tone?: "info" | "ok" | "warn" };

export interface FAQItem {
  question: string;
  /** Plain text — goes into FAQPage JSON-LD verbatim. */
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  /** Pillar page this article supports; the pillar lists it back. */
  pillar: string;
  /** Two hex colours for the generated cover. */
  cover: [string, string];
  content: ContentBlock[];
  faq?: FAQItem[];
}

/** One of the site's information (pillar) pages. */
export interface InfoPage {
  path: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  intro: string;
  updated: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  content: ContentBlock[];
  faqHeading?: string;
  faq?: FAQItem[];
  /** Short line used on the homepage / related-page cards. */
  summary: string;
  icon: IconName;
}

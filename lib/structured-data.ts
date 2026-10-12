import { LINKS, SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import type { Article, ContentBlock, FAQItem } from "@/lib/types";

// schema.org JSON-LD builders, rendered through <JsonLd>.

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.title,
    url: SITE.url,
    logo: `${SITE.url}/images/brand/logo-full.png`,
    sameAs: [LINKS.line],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["zh-TW"],
      url: LINKS.line,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.title,
    url: SITE.url,
    inLanguage: SITE.locale,
    description: SITE.description,
  };
}

function blockText(block: ContentBlock): string {
  switch (block.type) {
    case "list":
      return block.items.join(" ");
    case "steps":
      return block.items.map((item) => `${item.title} ${item.text}`).join(" ");
    case "table":
      return [...block.headers, ...block.rows.flat()].join(" ");
    default:
      return block.text;
  }
}

/** Drops inline markup so only visible characters are counted. */
export function stripInline(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
}

export function articleSchema(article: Article) {
  const plain = stripInline(article.content.map(blockText).join(""));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    inLanguage: SITE.locale,
    // CJK has no spaces, so count characters rather than words.
    wordCount: Array.from(plain.replace(/\s/g, "")).length,
    ...(article.image && { image: `${SITE.url}${article.image}` }),
    datePublished: article.publishDate,
    dateModified: article.updatedDate ?? article.publishDate,
    author: { "@type": "Organization", name: SITE.editor.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/brand/logo-full.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/news/${article.slug}`) },
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: SITE.locale,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

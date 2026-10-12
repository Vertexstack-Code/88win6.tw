import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/news/my-post". */
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE.url : `${SITE.url}${path}`;
}

/**
 * Every route builds its Metadata through here so canonical, robots and Open
 * Graph tags can't drift page to page. The site is zh-TW only, so there are
 * no hreflang alternates — a single language needs none.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.title,
      locale: "zh_TW",
      type,
      ...(type === "article" && { publishedTime, modifiedTime, authors: [SITE.editor.name] }),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

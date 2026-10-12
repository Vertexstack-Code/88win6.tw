import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

/** Metadata for an information page, built from its entry in lib/data/pages.ts. */
export function infoPageMetadata(path: string): Metadata {
  const page = getPage(path);
  return buildMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: page.path,
    keywords: page.keywords,
  });
}

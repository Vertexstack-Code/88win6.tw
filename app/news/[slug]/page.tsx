import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllArticles, getArticle, getPage, getRelatedArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { articleSchema, faqSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard, ArticleCover } from "@/components/shared/ArticleCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { ContentBody } from "@/components/shared/ContentBody";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

// Only the slugs above exist; anything else 404s instead of rendering on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/news/${article.slug}`,
    keywords: article.keywords,
    type: "article",
    publishedTime: article.publishDate,
    modifiedTime: article.updatedDate ?? article.publishDate,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const pillar = getPage(article.pillar);
  const related = getRelatedArticles(slug, 3);
  const updated = article.updatedDate ?? article.publishDate;

  return (
    <>
      <article className="py-10 sm:py-14">
        <Container className="flex max-w-prose flex-col gap-7">
          <Breadcrumbs
            items={[
              { name: "資訊專欄", path: "/news" },
              { name: article.title, path: `/news/${article.slug}` },
            ]}
          />

          <header className="flex flex-col gap-4">
            <Link href={article.pillar} className="w-fit text-sm font-bold text-brand-600 hover:underline">
              {article.category}
            </Link>
            <h1 className="text-3xl leading-tight sm:text-4xl">{article.title}</h1>
            <p className="text-lg leading-8 text-ink-600">{article.description}</p>
            <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-500">
              <span>{SITE.editor.name}</span>
              <span aria-hidden="true">·</span>
              <span>
                更新於 <time dateTime={updated}>{formatDate(updated)}</time>
              </span>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </p>
          </header>

          <ArticleCover article={article} className="rounded-2xl" />

          <ContentBody blocks={article.content} faq={article.faq} />

          <aside className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
            <p className="text-sm font-bold text-brand-800">完整說明</p>
            <Link href={pillar.path} className="mt-1 block text-lg font-bold text-ink-900 hover:text-brand-700">
              {pillar.h1} →
            </Link>
          </aside>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-ink-200 bg-white py-12">
          <Container className="flex flex-col gap-6">
            <h2 className="text-2xl">相關文章</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <JsonLd data={articleSchema(article)} />
      {article.faq && <JsonLd data={faqSchema(article.faq)} />}
    </>
  );
}

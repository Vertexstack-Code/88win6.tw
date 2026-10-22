import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllArticles, getAllPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PAGE_TONES } from "@/lib/tones";
import { ArticleCard, ArticleCover } from "@/components/shared/ArticleCard";
import { Icon } from "@/components/shared/Icon";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { LiveCasinoBackground } from "@/components/home/LiveCasinoBackground";

export const metadata: Metadata = buildMetadata({
  title: "88WIN資訊專欄｜官網查證、帳號安全與出金說明",
  description:
    "88WIN 資訊專欄：最新網址查證、假網站與詐騙辨識、登入與帳號安全、出金問題處理，以及 PTT／Dcard 評價判讀。每篇都標示更新日期。",
  path: "/news",
  keywords: ["88WIN資訊", "88WIN文章", "88WIN新聞", "88WIN教學"],
});

const anchor = (path: string) => `cat-${path.slice(1)}`;
const tone = (path: string) => PAGE_TONES[path] ?? "from-sky-400 to-brand-600";

export default function NewsIndexPage() {
  const articles = getAllArticles();
  const featured = articles[0];
  // Group by pillar page, in navigation order, so each band links to its topic page.
  const groups = getAllPages()
    .map((page) => ({ page, items: articles.filter((article) => article.pillar === page.path) }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#050912] text-white">
        <LiveCasinoBackground />
        <Container className="relative flex flex-col gap-4 py-10 sm:py-14">
          <Breadcrumbs items={[{ name: "資訊專欄", path: "/news" }]} tone="dark" />
          <p className="text-sm font-bold text-pink-300">88WIN資訊・{articles.length} 篇文章</p>
          <h1 className="text-3xl text-white sm:text-4xl">88WIN 資訊專欄</h1>
          <p className="max-w-3xl leading-8 text-ink-200">
            官網查證、假網站與詐騙辨識、帳號安全與出金問題處理。首存、存提款與 VIP 的操作教學，請見{" "}
            <a href="https://www.88win5.tw/zh-tw/blog" rel="noopener" className="font-semibold text-pink-300 underline decoration-pink-300/50 underline-offset-4 hover:text-pink-200">
              88WIN 教學站
            </a>
            。
          </p>
        </Container>
      </section>
      <section className="related-bg py-10 sm:py-14">
        <Container className="relative flex flex-col gap-10">
          {/* Category chips — jump links to each group below. */}
          <nav aria-label="文章分類" className="flex flex-wrap gap-2">
            {groups.map(({ page, items }) => (
              <a
                key={page.path}
                href={`#${anchor(page.path)}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white bg-white/90 py-1.5 pl-1.5 pr-3.5 text-sm font-semibold text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:text-brand-700"
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${tone(page.path)} text-white`}>
                  <Icon name={page.icon} className="h-3.5 w-3.5" />
                </span>
                {page.navLabel}
                <span className="rounded-full bg-ink-100 px-2 text-xs font-bold text-ink-500 group-hover:bg-brand-50 group-hover:text-brand-700">
                  {items.length}
                </span>
              </a>
            ))}
          </nav>

          {/* Featured: the newest article, large. */}
          {featured && (
            <Link
              href={`/news/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-white bg-white shadow-card transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(13,26,56,0.55)] md:grid-cols-[1.1fr_1fr]"
            >
              <ArticleCover article={featured} priority sizes="(min-width: 768px) 600px, 100vw" />
              <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600 ring-1 ring-pink-200">
                  <Icon name="sparkles" className="h-3.5 w-3.5" />
                  最新文章
                </p>
                <h2 className="text-2xl leading-snug group-hover:text-brand-700 sm:text-[28px]">{featured.title}</h2>
                <p className="line-clamp-3 leading-7 text-ink-600">{featured.description}</p>
                <p className="mt-2 flex items-center justify-between gap-3 border-t border-ink-100 pt-4 text-sm">
                  <span className="text-ink-500">
                    {formatDate(featured.updatedDate ?? featured.publishDate)} · {featured.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-brand-600">
                    閱讀全文
                    <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </p>
              </div>
            </Link>
          )}

          {/* One band per category. */}
          {groups.map(({ page, items }) => (
            <section key={page.path} id={anchor(page.path)} className="flex scroll-mt-32 flex-col gap-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tone(page.path)} text-white shadow-lg`}>
                    <Icon name={page.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-ink-400">{items.length} 篇文章</p>
                    <h2 className="text-xl sm:text-2xl">{page.navLabel}</h2>
                  </div>
                </div>
                <Link
                  href={page.path}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800 transition hover:border-brand-300 hover:text-brand-700"
                >
                  {page.navLabel}完整說明
                  <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          ))}
        </Container>
      </section>
    </>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate, getAllPages, getArticlesByPillar } from "@/lib/content";
import { faqSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/site";
import type { InfoPage } from "@/lib/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { ContentBody } from "@/components/shared/ContentBody";
import { Icon } from "@/components/shared/Icon";
import { LiveCasinoBackground } from "@/components/home/LiveCasinoBackground";
import { MediaBanners } from "@/components/shared/Media";
import { PageSidebar } from "@/components/shared/PageSidebar";
import { VisualContent } from "@/components/shared/VisualContent";

/** Icon-tile gradient per page, matching the homepage topic cards. */
const PAGE_TONES: Record<string, string> = {
  "/official-links": "from-emerald-400 to-emerald-600",
  "/login": "from-sky-400 to-brand-600",
  "/fake-sites": "from-rose-400 to-red-600",
  "/review": "from-amber-300 to-orange-500",
  "/withdrawal": "from-emerald-400 to-teal-600",
  "/app": "from-violet-400 to-indigo-600",
  "/support": "from-teal-300 to-cyan-600",
  "/faq": "from-blue-400 to-indigo-600",
  "/responsible-gaming": "from-slate-400 to-slate-600",
};

/**
 * Layout shared by every information page: a page header with the H1 and
 * review date, the body with a sticky sidebar, then supporting articles
 * (linking back from this pillar) and the sibling pages.
 *
 * `animatedHeader` swaps the plain white page header for the dark
 * live-casino backdrop used on the homepage. `visualBody` renders the body
 * as icon cards on a static gradient backdrop instead of document-style
 * prose; the FAQ stays below it as usual.
 */
export function InfoPageView({
  page,
  lead,
  animatedHeader = false,
  visualBody = false,
}: {
  page: InfoPage;
  lead?: ReactNode;
  animatedHeader?: boolean;
  visualBody?: boolean;
}) {
  const articles = getArticlesByPillar(page.path);
  const siblings = getAllPages().filter((item) => item.path !== page.path && item.path !== "/privacy-policy");

  return (
    <>
      <section
        className={
          animatedHeader ? "relative isolate overflow-hidden bg-[#050912] text-white" : "border-b border-ink-200 bg-white"
        }
      >
        {animatedHeader && <LiveCasinoBackground />}
        <Container className="relative flex flex-col gap-4 py-10 sm:py-14">
          <Breadcrumbs items={[{ name: page.navLabel, path: page.path }]} tone={animatedHeader ? "dark" : "light"} />
          <p className={`text-sm font-bold ${animatedHeader ? "text-pink-300" : "text-brand-600"}`}>{page.eyebrow}</p>
          <h1 className={`max-w-3xl text-3xl leading-tight sm:text-4xl ${animatedHeader ? "text-white" : ""}`}>{page.h1}</h1>
          <p className={`max-w-3xl text-base leading-8 sm:text-lg ${animatedHeader ? "text-ink-200" : "text-ink-600"}`}>{page.intro}</p>
          <p className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${animatedHeader ? "text-ink-400" : "text-ink-500"}`}>
            <span>
              最後更新：<time dateTime={page.updated}>{formatDate(page.updated)}</time>
            </span>
            <span>整理：{SITE.editor.name}</span>
          </p>
        </Container>
      </section>

      <Container className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-14">
        <div className="flex min-w-0 flex-col gap-8">
          {page.media && <MediaBanners items={page.media} caption="圖片為 88WIN 官方活動素材，實際條件以平台公告為準。" />}
          {lead}
          {visualBody ? (
            <>
              <div className="visual-bg p-3 sm:p-5">
                <VisualContent blocks={page.content} />
              </div>
              <ContentBody blocks={[]} faq={page.faq} faqHeading={page.faqHeading} />
            </>
          ) : (
            <ContentBody blocks={page.content} faq={page.faq} faqHeading={page.faqHeading} />
          )}
        </div>

        <PageSidebar />
      </Container>

      {articles.length > 0 && (
        <section className="relative isolate overflow-hidden bg-[#050912] py-14 sm:py-16">
          <LiveCasinoBackground orb="side" />
          <Container className="relative flex flex-col gap-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold tracking-[0.25em] text-pink-300">RELATED ARTICLES</p>
                <h2 className="text-2xl text-white sm:text-3xl">延伸閱讀：{page.navLabel}</h2>
                <p className="text-ink-300">
                  {articles.length} 篇文章，進一步說明「{page.navLabel}」的細節與常見問題。
                </p>
              </div>
              <Link
                href="/news"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                全部文章
                <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
              {/* Fill the row's last slot instead of leaving a gap. */}
              {articles.length % 3 !== 0 && (
                <Link
                  href="/news"
                  className="group relative hidden flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] lg:flex"
                >
                  <span aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500 to-brand-500 opacity-25 blur-2xl transition group-hover:opacity-40" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-brand-600 text-white shadow-lg ring-1 ring-white/20">
                    <Icon name="sparkles" className="h-5 w-5" />
                  </span>
                  <span className="relative">
                    <span className="block text-xl font-bold text-white">看全部文章</span>
                    <span className="mt-2 block text-sm leading-6 text-ink-300">
                      官網查證、假網站與詐騙辨識、帳號安全、出金問題處理，一次看完。
                    </span>
                  </span>
                  <span className="relative inline-flex items-center gap-1.5 text-sm font-bold text-pink-300">
                    前往資訊專欄
                    <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              )}
            </div>
          </Container>
        </section>
      )}

      <section className="related-bg border-t border-ink-200 py-14 sm:py-16">
        <Container className="relative flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 shadow-sm ring-1 ring-brand-200">
              <Icon name="sparkles" className="h-3.5 w-3.5" />
              MORE GUIDES
            </p>
            <h2 className="text-2xl sm:text-3xl">其他官方資訊</h2>
            <p className="text-ink-600">登入、出金、客服與安全相關的說明，都整理在這裡。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((item) => {
              const tone = PAGE_TONES[item.path] ?? "from-sky-400 to-brand-600";
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white bg-white/90 p-5 shadow-card backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(13,26,56,0.5)]"
                >
                  <span aria-hidden="true" className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${tone} opacity-10 blur-2xl transition group-hover:opacity-30`} />
                  <span className="relative flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-lg`}>
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-400 transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="relative">
                    <span className="block font-bold text-ink-900 group-hover:text-brand-700">{item.navLabel}</span>
                    <span className="mt-1.5 block text-sm leading-6 text-ink-600">{item.summary}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {page.faq && page.faq.length > 0 && <JsonLd data={faqSchema(page.faq)} />}
    </>
  );
}

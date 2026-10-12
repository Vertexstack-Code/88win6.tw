import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate, getAllPages, getArticlesByPillar } from "@/lib/content";
import { faqSchema } from "@/lib/structured-data";
import { DOMAINS_VERIFIED, LINKS, OFFICIAL_DOMAINS, SITE } from "@/lib/site";
import type { InfoPage } from "@/lib/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { ContentBody } from "@/components/shared/ContentBody";
import { Icon } from "@/components/shared/Icon";

/**
 * Layout shared by every information page: a page header with the H1 and
 * review date, the body with a sticky sidebar, then supporting articles
 * (linking back from this pillar) and the sibling pages.
 */
export function InfoPageView({ page, lead }: { page: InfoPage; lead?: ReactNode }) {
  const articles = getArticlesByPillar(page.path);
  const siblings = getAllPages().filter((item) => item.path !== page.path && item.path !== "/privacy-policy");

  return (
    <>
      <section className="border-b border-ink-200 bg-white">
        <Container className="flex flex-col gap-4 py-10 sm:py-14">
          <Breadcrumbs items={[{ name: page.navLabel, path: page.path }]} />
          <p className="text-sm font-bold text-brand-600">{page.eyebrow}</p>
          <h1 className="max-w-3xl text-3xl leading-tight sm:text-4xl">{page.h1}</h1>
          <p className="max-w-3xl text-base leading-8 text-ink-600 sm:text-lg">{page.intro}</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
            <span>
              最後更新：<time dateTime={page.updated}>{formatDate(page.updated)}</time>
            </span>
            <span>整理：{SITE.editor.name}</span>
          </p>
        </Container>
      </section>

      <Container className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-14">
        <div className="flex min-w-0 flex-col gap-8">
          {lead}
          <ContentBody blocks={page.content} faq={page.faq} faqHeading={page.faqHeading} />
        </div>

        <aside className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
          <div className="card p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <Icon name="shield" className="h-4 w-4" />
              官方網域
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {OFFICIAL_DOMAINS.map((item) => (
                <li key={item.domain} className="font-mono text-[15px] font-bold text-ink-900">
                  {item.domain}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink-500">核對日期 {formatDate(DOMAINS_VERIFIED)}</p>
            <Link href="/official-links" className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
              完整官方管道 →
            </Link>
          </div>
          <div className="card flex flex-col gap-3 p-5">
            <p className="text-sm font-bold text-ink-900">需要協助？</p>
            <a
              href={LINKS.line}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-emerald-600 py-2.5 text-center text-sm font-bold text-white hover:bg-emerald-500"
            >
              官方 LINE 客服
            </a>
            <a
              href={LINKS.login}
              rel="noopener"
              className="rounded-full border border-ink-300 py-2.5 text-center text-sm font-semibold text-ink-800 hover:bg-ink-100"
            >
              前往官方登入
            </a>
          </div>
        </aside>
      </Container>

      {articles.length > 0 && (
        <section className="border-t border-ink-200 bg-white py-12">
          <Container className="flex flex-col gap-6">
            <h2 className="text-2xl">延伸閱讀：{page.navLabel}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-ink-200 py-12">
        <Container className="flex flex-col gap-6">
          <h2 className="text-xl">其他官方資訊</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((item) => (
              <Link key={item.path} href={item.path} className="card flex items-start gap-3 p-4 transition hover:border-brand-300">
                <Icon name={item.icon} className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  <span className="block text-sm font-bold text-ink-900">{item.navLabel}</span>
                  <span className="mt-1 block text-xs leading-5 text-ink-500">{item.summary}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {page.faq && page.faq.length > 0 && <JsonLd data={faqSchema(page.faq)} />}
    </>
  );
}

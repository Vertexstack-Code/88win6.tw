import type { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = buildMetadata({
  title: "88WIN資訊專欄｜官網查證、帳號安全與出金說明",
  description:
    "88WIN 資訊專欄：最新網址查證、假網站與詐騙辨識、登入與帳號安全、出金問題處理，以及 PTT／Dcard 評價判讀。每篇都標示更新日期。",
  path: "/news",
  keywords: ["88WIN資訊", "88WIN文章", "88WIN新聞", "88WIN教學"],
});

export default function NewsIndexPage() {
  const articles = getAllArticles();

  return (
    <>
      <section className="border-b border-ink-200 bg-white">
        <Container className="flex flex-col gap-4 py-10 sm:py-14">
          <Breadcrumbs items={[{ name: "資訊專欄", path: "/news" }]} />
          <h1 className="text-3xl sm:text-4xl">88WIN 資訊專欄</h1>
          <p className="max-w-3xl leading-8 text-ink-600">
            官網查證、假網站與詐騙辨識、帳號安全與出金問題處理。首存、存提款與 VIP 的操作教學，請見{" "}
            <a href="https://www.88win5.tw/zh-tw/blog" rel="noopener" className="font-semibold text-brand-700 hover:underline">
              88WIN 教學站
            </a>
            。
          </p>
        </Container>
      </section>
      <Container className="py-10 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
}

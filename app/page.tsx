import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { LINKS, SITE } from "@/lib/site";
import { faqSchema } from "@/lib/structured-data";
import type { FAQItem, IconName } from "@/lib/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { OfficialDomains } from "@/components/shared/OfficialDomains";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `88WIN官網入口｜${SITE.tagline}`,
    description: SITE.description,
    path: "/",
    keywords: ["88WIN", "88win", "88WIN官網", "88WIN娛樂城", "88WIN網址", "88WIN登入", "88WIN評價"],
  }),
  // The homepage title is complete on its own — skip the "%s | site" template.
  title: { absolute: `88WIN官網入口｜${SITE.tagline}` },
};

const CHECKS = [
  { title: "看網址列，不看 Logo", text: "Logo、標題、版面都能被複製，只有網域無法偽造。" },
  { title: "逐字比對官方清單", text: "數字、字母、連字號、結尾，差一個字元就不是官方。" },
  { title: "驗證碼不給任何人", text: "官方客服不會索取密碼、簡訊驗證碼，也不收解凍費。" },
];

const TOPICS: { path: string; icon: IconName; title: string; text: string }[] = [
  { path: "/login", icon: "user", title: "88WIN 登入教學", text: "正確登入步驟、忘記密碼與無法登入的排除方法" },
  { path: "/fake-sites", icon: "alertTriangle", title: "假網站辨識", text: "仿冒站的 6 個特徵與已確認的非官方網域" },
  { path: "/review", icon: "star", title: "88WIN 評價", text: "優點、限制與 PTT／Dcard 常見疑問" },
  { path: "/withdrawal", icon: "wallet", title: "88WIN 出金說明", text: "出金條件、到帳時間與被退回的原因" },
  { path: "/app", icon: "download", title: "88WIN APP", text: "iOS／Android 加到主畫面，不必安裝 APK" },
  { path: "/support", icon: "headset", title: "官方客服", text: "官方 LINE 與辨識冒充客服的方法" },
];

const HOME_FAQ: FAQItem[] = [
  {
    question: "88WIN官網是哪一個？",
    answer: "目前官方經營的網域列在本頁的官方網域清單中，並標示最後核對日期。請逐字核對網址列後再登入。",
  },
  {
    question: "88WIN是詐騙嗎？",
    answer: "88WIN 公開官方網域、優惠條件、出金規則與客服管道，可以逐項核對。網路上的詐騙案例多與仿冒網站或冒充客服有關。",
  },
  {
    question: "88WIN出金要多久？",
    answer: "出金申請審核通過後最快數分鐘入帳，依銀行轉帳或 EXpay 錢包，以及銀行作業時段而定。",
  },
  {
    question: "88WIN客服怎麼聯繫？",
    answer: "官方 LINE ID 為 @850npyfk，或登入官方平台後使用 24 小時線上客服。",
  },
  {
    question: "88WIN有APP嗎？",
    answer: "88WIN 使用 H5 網頁版，手機瀏覽器打開官方網址即可使用，也可以加到手機主畫面。",
  },
];

export default function HomePage() {
  const latest = getAllArticles().slice(0, 6);

  return (
    <>
      <section className="bg-ink-900 text-white">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-16">
          <div className="flex flex-col gap-5">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
              <Icon name="shield" className="h-4 w-4" />
              官方網址查證中心
            </p>
            <h1 className="text-3xl leading-tight text-white sm:text-[42px]">
              88WIN 官網入口
              <span className="mt-2 block text-xl font-semibold text-ink-200 sm:text-2xl">
                最新網址、登入教學與假網站辨識
              </span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-ink-200">
              搜尋 88WIN 時常會看到名稱很像、標題也寫著「官網」的網站。這裡列出目前由 88WIN
              官方經營的網域與客服管道，登入前先核對一次，就能避開大部分仿冒站與詐騙。
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={LINKS.login} rel="noopener" className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold hover:bg-brand-400">
                前往官方登入
              </a>
              <a
                href={LINKS.line}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                官方 LINE 客服
              </a>
            </div>
          </div>
          <div className="text-ink-700">
            <OfficialDomains />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-200 bg-white py-12">
        <Container className="flex flex-col gap-6">
          <h2 className="text-2xl">登入前的 3 秒檢查</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {CHECKS.map((item, index) => (
              <li key={item.title} className="flex gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-bold text-ink-900">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-ink-600">{item.text}</span>
                </span>
              </li>
            ))}
          </ol>
          <Link href="/fake-sites" className="text-sm font-semibold text-brand-700 hover:underline">
            看仿冒站的完整特徵與非官方網域名單 →
          </Link>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl">你想確認什麼？</h2>
            <p className="text-ink-600">每一頁都標示更新日期，條件以官方公告為準。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <Link key={topic.path} href={topic.path} className="card group flex gap-4 p-5 transition hover:border-brand-300">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={topic.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-ink-900 group-hover:text-brand-700">{topic.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-ink-600">{topic.text}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-200 bg-white py-12 sm:py-16">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl">最新資訊</h2>
            <Link href="/news" className="text-sm font-semibold text-brand-700 hover:underline">
              全部文章 →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl">88WIN 常見問題</h2>
            <p className="leading-7 text-ink-600">更多問答請見 <Link href="/faq" className="font-semibold text-brand-700 hover:underline">常見問題總整理</Link>。</p>
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              未滿 {SITE.minimumAge} 歲請勿參與任何博弈活動。台灣目前未核發線上娛樂城執照，使用前請先確認所在地區法規。
              <Link href="/responsible-gaming" className="ml-1 font-semibold underline">理性娛樂</Link>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {HOME_FAQ.map((item) => (
              <details key={item.question} className="group rounded-xl border border-ink-200 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 marker:content-none">
                  <h3 className="text-base">{item.question}</h3>
                  <span aria-hidden="true" className="text-brand-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-[15px] leading-7 text-ink-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <JsonLd data={faqSchema(HOME_FAQ)} />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { BANNERS } from "@/lib/media";
import { buildMetadata } from "@/lib/seo";
import { LINKS, SITE } from "@/lib/site";
import { faqSchema } from "@/lib/structured-data";
import type { FAQItem, IconName } from "@/lib/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { OfficialDomains } from "@/components/shared/OfficialDomains";
import { LiveCasinoBackground } from "@/components/home/LiveCasinoBackground";

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

const CHECKS: { title: string; text: string; icon: IconName }[] = [
  { title: "看網址列，不看 Logo", text: "Logo、標題、版面都能被複製，只有網域無法偽造。", icon: "globe" },
  { title: "逐字比對官方清單", text: "數字、字母、連字號、結尾，差一個字元就不是官方。", icon: "check" },
  { title: "驗證碼不給任何人", text: "官方客服不會索取密碼、簡訊驗證碼，也不收解凍費。", icon: "lock" },
];

// `tone` is the icon tile gradient — one colour per topic so the grid scans quickly.
const TOPICS: { path: string; icon: IconName; title: string; text: string; tone: string }[] = [
  { path: "/login", icon: "user", title: "88WIN 登入教學", text: "正確登入步驟、忘記密碼與無法登入的排除方法", tone: "from-sky-400 to-brand-600" },
  { path: "/fake-sites", icon: "alertTriangle", title: "假網站辨識", text: "仿冒站的 6 個特徵與已確認的非官方網域", tone: "from-rose-400 to-red-600" },
  { path: "/review", icon: "star", title: "88WIN 評價", text: "優點、限制與 PTT／Dcard 常見疑問", tone: "from-amber-300 to-orange-500" },
  { path: "/withdrawal", icon: "wallet", title: "88WIN 出金說明", text: "出金條件、到帳時間與被退回的原因", tone: "from-emerald-400 to-emerald-600" },
  { path: "/app", icon: "download", title: "88WIN APP", text: "iOS／Android 加到主畫面，不必安裝 APK", tone: "from-violet-400 to-indigo-600" },
  { path: "/support", icon: "headset", title: "官方客服", text: "官方 LINE 與辨識冒充客服的方法", tone: "from-teal-300 to-cyan-600" },
];

const PROMOS = [BANNERS.welcome, BANNERS.firstDeposit, BANNERS.rebate, BANNERS.vip];

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
      <section className="relative isolate overflow-hidden bg-[#050912] text-white">
        <LiveCasinoBackground />
        <Container className="relative grid gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-16">
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

      <section className="border-b border-ink-200 bg-white py-14 sm:py-16">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                <Icon name="shield" className="h-3.5 w-3.5" />
                防詐安全檢查
              </p>
              <h2 className="text-2xl sm:text-3xl">登入前的 3 秒檢查</h2>
              <p className="text-ink-600">每次登入前花 3 秒做完這三步，就能避開大部分仿冒站。</p>
            </div>
            <Link
              href="/fake-sites"
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-800 transition hover:border-brand-300 hover:text-brand-700"
            >
              仿冒站特徵與非官方網域名單
              <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ol className="relative grid gap-5 md:grid-cols-3">
            {/* Dashed connector behind the cards — reads the three as one sequence. */}
            <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-[52px] hidden border-t-2 border-dashed border-brand-200 md:block" />
            {CHECKS.map((item, index) => (
              <li
                key={item.title}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-300"
              >
                <span aria-hidden="true" className="pointer-events-none absolute right-4 top-3 select-none text-[72px] font-black leading-none text-ink-100 transition group-hover:text-brand-50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-[0_10px_24px_-10px_rgba(47,127,237,0.8)]">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div className="relative">
                  <p className="text-xs font-bold tracking-widest text-brand-600">STEP {index + 1}</p>
                  <h3 className="mt-1 text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink-600">{item.text}</p>
                </div>
                <div className="relative mt-auto">
                  <CheckExample step={index} />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#050912] py-12 sm:py-16">
        <LiveCasinoBackground orb="side" />
        <Container className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold tracking-[0.25em] text-pink-300">OFFICIAL GUIDES</p>
            <h2 className="text-2xl text-white sm:text-3xl">你想確認什麼？</h2>
            <p className="text-ink-300">每一頁都標示更新日期，條件以官方公告為準。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic) => (
              <Link
                key={topic.path}
                href={topic.path}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span aria-hidden="true" className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${topic.tone} opacity-0 blur-2xl transition group-hover:opacity-40`} />
                <span className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${topic.tone} text-white shadow-lg ring-1 ring-white/20`}>
                  <Icon name={topic.icon} className="h-5 w-5" />
                </span>
                <span className="relative min-w-0 flex-1">
                  <span className="block font-bold text-white">{topic.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-ink-300">{topic.text}</span>
                </span>
                <Icon name="arrowRight" className="relative mt-1 h-4 w-4 shrink-0 text-ink-400 transition group-hover:translate-x-1 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-200 bg-white py-12 sm:py-16">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl">88WIN 官方最新優惠</h2>
              <p className="text-sm text-ink-600">圖片為官方活動素材，條件以平台公告為準；優惠規則整理在 <Link href="/review" className="font-semibold text-brand-700 hover:underline">88WIN 評價</Link>。</p>
            </div>
            <a href={LINKS.register} rel="noopener" className="text-sm font-semibold text-brand-700 hover:underline">
              免費註冊領取 →
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROMOS.map((banner) => (
              <a key={banner.src} href={LINKS.register} rel="noopener" className="group overflow-hidden rounded-2xl border border-ink-200 bg-brand-50">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={banner.width}
                  height={banner.height}
                  sizes="(min-width: 1160px) 570px, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                />
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#050912] py-12 sm:py-16">
        <LiveCasinoBackground orb="side" />
        <Container className="relative flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl text-white sm:text-3xl">最新資訊</h2>
            <Link href="/news" className="text-sm font-semibold text-brand-300 hover:underline">
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

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.45fr]">
          <div className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
            <div className="flex flex-col gap-2">
              <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
                <Icon name="help" className="h-3.5 w-3.5" />
                FAQ
              </p>
              <h2 className="text-2xl sm:text-3xl">88WIN 常見問題</h2>
              <p className="leading-7 text-ink-600">玩家最常問的 {HOME_FAQ.length} 個問題，答案都可以在官方頁面核對。</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-6 text-white">
              <span aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#06c755]/30 blur-2xl" />
              <p className="relative text-lg font-bold">找不到答案？</p>
              <p className="relative mt-1 text-sm leading-6 text-ink-300">直接問官方客服，24 小時都有人回覆。官方客服不會索取密碼或驗證碼。</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                <a href={LINKS.line} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#06c755] px-4 py-2 text-sm font-bold text-white hover:bg-[#05b14c]">
                  <Icon name="line" className="h-4 w-4" />
                  官方 LINE {LINKS.lineId}
                </a>
                <Link href="/faq" className="inline-flex items-center gap-1 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10">
                  全部問答
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <p className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-black text-white">
                {SITE.minimumAge}+
              </span>
              <span>
                未滿 {SITE.minimumAge} 歲請勿參與任何博弈活動。台灣目前未核發線上娛樂城執照，使用前請先確認所在地區法規。
                <Link href="/responsible-gaming" className="ml-1 font-semibold underline">理性娛樂</Link>
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {HOME_FAQ.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-ink-200 bg-white shadow-card transition open:border-brand-300 open:shadow-[0_16px_40px_-24px_rgba(47,127,237,0.6)] hover:border-brand-200"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5 marker:content-none">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-black text-brand-600 transition group-open:bg-brand-500 group-open:text-white">
                    Q{index + 1}
                  </span>
                  <h3 className="flex-1 text-base text-ink-900">{item.question}</h3>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-lg leading-none text-brand-600 transition group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500 group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 pl-[4.5rem]">
                  <p className="border-l-2 border-brand-200 pl-4 text-[15px] leading-7 text-ink-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <JsonLd data={faqSchema(HOME_FAQ)} />
    </>
  );
}

/**
 * A tiny illustration of each check, so the step reads at a glance. The
 * domains in step 2 are a made-up misspelling, labelled as an example.
 */
function CheckExample({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-ink-200 bg-ink-50 px-3 py-2.5 font-mono text-[13px]">
        <Icon name="lock" className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
        <span className="text-ink-400">https://</span>
        <span className="rounded bg-emerald-100 px-1 font-bold text-emerald-800">88win5.com</span>
        <span aria-hidden="true" className="ml-auto h-4 w-px animate-pulse bg-ink-500 motion-reduce:animate-none" />
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="flex flex-col gap-1.5 font-mono text-[13px]">
        <p className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-800 ring-1 ring-emerald-200">
          88win5.com <span className="font-sans text-xs font-bold">✓ 官方</span>
        </p>
        <p className="flex items-center justify-between rounded-lg bg-red-50 px-3 py-1.5 text-red-700 ring-1 ring-red-200">
          <span>
            88wi<span className="rounded bg-red-200 px-0.5 font-bold">m</span>5.com
          </span>
          <span className="font-sans text-xs font-bold">✗ 示意</span>
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-ink-200 bg-ink-50 px-3 py-2.5">
      <span className="flex gap-1" role="img" aria-label="驗證碼">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-ink-700" />
        ))}
      </span>
      <span className="rounded-full bg-ink-900 px-2.5 py-1 text-xs font-bold text-white">只輸入在官方頁面</span>
    </div>
  );
}

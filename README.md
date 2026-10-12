# 88win6.tw — 88WIN 官方資訊中心

Brand-trust satellite site. Its job: win the "88win" brand searches
(88win官網 / 登入 / 評價 / 出金 / 詐騙 / 假網站 / APP / 客服) with
verifiable official information. Deposit, payment and VIP how-tos belong
to 88win5.tw — this site links there instead of repeating them.

Next.js 16 (App Router, all static), TypeScript, Tailwind. zh-TW only, no
locale prefix.

## Commands

    npm install
    npm run dev      # http://localhost:3000
    npm run build
    npm run lint

## Where things live

| What | File |
|---|---|
| Domain, official domains, non-official list, LINE, register/login links | `lib/site.ts` |
| Information pages (copy, FAQ, SEO) | `lib/data/pages.ts` |
| Articles | `lib/data/articles-access.ts`, `lib/data/articles-trust.ts` |
| Page layout for info pages | `components/shared/InfoPageView.tsx` |

Inline content markup: `**bold**`, `[text](/path)` internal link,
`[text](https://…)` external link (new tab).

## Routes

`/` · `/official-links` · `/login` · `/fake-sites` · `/review` ·
`/withdrawal` · `/app` · `/support` · `/faq` · `/responsible-gaming` ·
`/privacy-policy` · `/news` · `/news/[slug]` (11 articles) ·
`/sitemap.xml` · `/robots.txt`

## Before launch

1. Confirm `OFFICIAL_DOMAINS` and `NON_OFFICIAL_DOMAINS` in `lib/site.ts`
   with management, then set `DOMAINS_VERIFIED`.
2. Get a dedicated affiliate code for this site (`AFFILIATE_CODE`).
3. Vercel: add `88win6.tw` and `www.88win6.tw`, make www primary
   (canonicals use www).
4. Search Console: verify the www property, submit `/sitemap.xml`,
   URL-inspect `/`, `/official-links`, `/review`, `/withdrawal`, `/fake-sites`.

## Keeping it accurate

Every figure must match the live platform. When terms change, update the
copy and the page's `updated` date in the same commit.

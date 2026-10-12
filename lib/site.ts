// Central site configuration. Every URL, official domain and outbound link
// the site prints comes from here, so a domain change is a one-file edit.

export const SITE = {
  name: "88WIN",
  /** Shown in titles and the header — this site's role in the network. */
  title: "88WIN 官方資訊中心",
  tagline: "官方網址查證・登入教學・評價與出金說明",
  description:
    "88WIN 官方資訊中心：最新官方網址查證、登入與註冊教學、假網站辨識、88WIN評價與出金說明，以及官方 LINE 客服管道，一次確認正確入口。",
  // www is the host Vercel serves and the Search Console property, so every
  // canonical, sitemap and hreflang URL uses it. Do not switch to the bare
  // domain — that would name URLs that redirect away.
  url: "https://www.88win6.tw",
  locale: "zh-TW",
  minimumAge: 18,
  editor: { name: "88WIN 資訊編輯部", role: "官方資訊查核" },
} as const;

/**
 * Affiliate code carried on the register link.
 * TODO(before launch): ask for a code dedicated to 88win6.tw so its signups
 * are tracked separately. This is currently 88win5.tw's code.
 */
export const AFFILIATE_CODE = "HB1d29dc";

export const LINKS = {
  register: `https://h5.88win6.com/?ag_code=${AFFILIATE_CODE}`,
  login: "https://h5.88win5.com/login",
  line: "https://line.me/R/ti/p/@850npyfk",
  lineId: "@850npyfk",
  /** Sister site that owns the deposit / payment / VIP how-to content. */
  guideSite: "https://www.88win5.tw/zh-tw",
} as const;

/** Date the official-domain list below was last checked by hand. */
export const DOMAINS_VERIFIED = "2026-10-12";

/**
 * Official platform domains. Only list domains the company has confirmed —
 * this table is the main reason the site exists, so an error here does real
 * damage. Update DOMAINS_VERIFIED whenever it changes.
 */
export const OFFICIAL_DOMAINS = [
  { domain: "88win5.com", role: "官方平台（主要入口）" },
  { domain: "88win6.com", role: "官方平台（備用入口）" },
] as const;

/**
 * Domains confirmed NOT to be operated by 88WIN. Wording on the site stays
 * factual ("非官方經營") — never call a third party a scam.
 * TODO(before launch): confirm each entry with management.
 */
export const NON_OFFICIAL_DOMAINS = [
  { domain: "88win.com.tw", note: "非 88WIN 官方經營" },
  { domain: "88win8.com", note: "非 88WIN 官方經營，註冊連結導向其他平台" },
] as const;

/** Header navigation, in priority order. */
export const NAV = [
  { path: "/official-links", label: "官方網址" },
  { path: "/login", label: "登入教學" },
  { path: "/fake-sites", label: "假網站辨識" },
  { path: "/review", label: "88WIN評價" },
  { path: "/withdrawal", label: "出金說明" },
  { path: "/app", label: "APP" },
  { path: "/support", label: "客服" },
  { path: "/news", label: "資訊專欄" },
] as const;

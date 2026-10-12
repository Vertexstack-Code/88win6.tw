import type { MediaItem } from "@/lib/types";

// Official 88WIN platform banners (static.88win5.com), resized to 1600×583.
// Their promo text is part of the artwork, so alt text repeats it.
const banner = (slug: string, alt: string): MediaItem => ({
  src: `/images/promo/${slug}.webp`,
  alt,
  width: 1600,
  height: 583,
});

export const BANNERS = {
  welcome: banner("welcome-88", "88WIN 歡迎新會員，領取體驗金 88"),
  firstDeposit: banner("first-deposit", "88WIN 首存 100% 紅利，新用戶首存最高領 1,000"),
  rebate: banner("rebate", "88WIN 返水 1.3% 無上限"),
  vip: banner("vip", "88WIN VIP 尊榮特享：升級禮金、生日禮金、每月雙紅包"),
  scheduledWithdrawal: banner("scheduled-withdrawal", "88WIN 預約取款，額外加送 1%"),
  expayGuide: banner("expay-guide", "88WIN EXpay 操作指南"),
} as const;

export const APP_PHONE: MediaItem = {
  src: "/images/promo/app-phone.webp",
  alt: "在手機上使用 88WIN 平台",
  width: 640,
  height: 719,
};

export const LINE_QR = "/images/brand/line-qr.png";

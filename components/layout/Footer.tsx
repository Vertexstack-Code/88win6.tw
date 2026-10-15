import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV, SITE } from "@/lib/site";
import { Container } from "@/components/shared/Container";

const LEGAL_LINKS = [
  { path: "/faq", label: "常見問題" },
  { path: "/responsible-gaming", label: "理性娛樂" },
  { path: "/privacy-policy", label: "隱私權政策" },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <span className="self-start rounded-xl bg-white px-3 py-1.5"><Image src="/images/brand/logo-pc.png" alt={SITE.name} width={137} height={48} className="h-9 w-auto" /></span>
          <p className="max-w-sm text-sm leading-7">
            {SITE.title}整理 88WIN 的官方網址、登入方式、出金規則與客服管道，協助玩家辨識正確入口、避開仿冒網站。
            本站只提供資訊，不會向你索取密碼或簡訊驗證碼。
          </p>
          <a href={LINKS.line} rel="noopener" target="_blank" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">
            官方 LINE 客服：{LINKS.lineId}
          </a>
        </div>

        <nav aria-label="資訊頁面">
          <h2 className="mb-4 text-sm font-semibold text-white">官方資訊</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {NAV.filter((_, idx) => idx <= 7).map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="說明與政策">
          <h2 className="mb-4 text-sm font-semibold text-white">說明與政策</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {LEGAL_LINKS.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={LINKS.guideSite} rel="noopener" className="transition hover:text-white">
                首存與存提款教學（88WIN 教學站）
              </a>
            </li>
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs leading-6 text-ink-400 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              {SITE.minimumAge}+
            </span>
            未滿 {SITE.minimumAge} 歲請勿參與任何博弈活動。請理性娛樂，並先確認所在地區法規。
          </p>
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

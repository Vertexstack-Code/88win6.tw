import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/content";
import { LINE_QR } from "@/lib/media";
import { DOMAINS_VERIFIED, LINKS, OFFICIAL_DOMAINS } from "@/lib/site";
import { CopyButton } from "@/components/shared/CopyButton";
import { Icon } from "@/components/shared/Icon";

/**
 * Sticky sidebar on every information page: the official domains, the
 * official LINE QR code, and a help card. Same visual language as the
 * homepage's official-domain card.
 */
export function PageSidebar() {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
      {/* Official domains */}
      <div className="overflow-hidden rounded-2xl border border-emerald-200/70 bg-white shadow-card">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-white">
          <span aria-hidden="true" className="absolute -right-5 -top-8 h-20 w-20 rounded-full bg-white/10" />
          <p className="relative flex items-center gap-2 text-sm font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/30">
              <Icon name="shield" className="h-4 w-4" />
            </span>
            官方網域
            <span className="ml-auto flex items-center gap-1.5 text-[11px] font-medium text-emerald-50">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              已核對
            </span>
          </p>
        </div>
        <ul className="flex flex-col gap-2 p-3">
          {OFFICIAL_DOMAINS.map((item, index) => (
            <li
              key={item.domain}
              className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 ${
                index === 0 ? "bg-emerald-50 ring-1 ring-emerald-200" : "bg-ink-50 ring-1 ring-ink-100"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  index === 0 ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 ring-1 ring-emerald-200"
                }`}
              >
                <Icon name="globe" className="h-4 w-4" />
              </span>
              <a
                href={`https://${item.domain}`}
                rel="noopener"
                className="min-w-0 flex-1 truncate font-mono text-[14px] font-bold text-ink-900 hover:text-emerald-700"
              >
                {item.domain}
              </a>
              <CopyButton text={item.domain} label={`複製網址 ${item.domain}`} />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-2 border-t border-ink-100 px-4 py-3">
          <p className="text-[11px] text-ink-500">核對 {formatDate(DOMAINS_VERIFIED)}</p>
          <Link
            href="/official-links"
            className="group inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            完整官方管道
            <Icon name="arrowRight" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Official LINE QR */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#06c755] to-[#04a345] p-5 text-white shadow-card">
        <span aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
        <span aria-hidden="true" className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 ring-1 ring-white/30">
            <Icon name="line" className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold leading-tight">掃描加入官方 LINE</p>
            <p className="text-[11px] text-white/80">24 小時官方客服</p>
          </div>
        </div>
        <div className="relative mx-auto mt-4 w-fit rounded-2xl bg-white p-2.5 shadow-lg">
          <Image
            src={LINE_QR}
            alt={`88WIN 官方 LINE ${LINKS.lineId} QR Code`}
            width={360}
            height={360}
            className="h-36 w-36"
          />
        </div>
        <div className="relative mt-4 flex items-center justify-between gap-2 rounded-xl bg-white/15 px-3 py-2 ring-1 ring-white/25">
          <span className="font-mono text-[15px] font-bold tracking-wide">{LINKS.lineId}</span>
          <CopyButton text={LINKS.lineId} label={`複製 LINE ID ${LINKS.lineId}`} />
        </div>
        <p className="relative mt-3 text-[11px] leading-5 text-white/85">請認明這個 ID，其他自稱官方的個人帳號都不是。</p>
      </div>

      {/* Help */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-5 text-white shadow-card">
        <span aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/30 blur-2xl" />
        <div className="relative flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Icon name="headset" className="h-5 w-5 text-brand-300" />
          </span>
          <div>
            <p className="font-bold">需要協助？</p>
            <p className="text-xs text-ink-300">登入、出金問題都可以問</p>
          </div>
        </div>
        <div className="relative mt-4 flex flex-col gap-2.5">
          <a
            href={LINKS.line}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 rounded-full bg-[#06c755] py-2.5 text-sm font-bold text-white transition hover:bg-[#05b14c]"
          >
            <Icon name="line" className="h-4 w-4" />
            官方 LINE 客服
          </a>
          <a
            href={LINKS.login}
            rel="noopener"
            className="flex items-center justify-center gap-1.5 rounded-full border border-white/25 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            前往官方登入
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}

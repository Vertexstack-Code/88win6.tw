import { DOMAINS_VERIFIED, LINKS, NON_OFFICIAL_DOMAINS, OFFICIAL_DOMAINS } from "@/lib/site";
import { formatDate } from "@/lib/content";
import { CopyButton } from "@/components/shared/CopyButton";
import { Icon } from "@/components/shared/Icon";

/**
 * The official-domain card — the single most important block on the site,
 * so it is one component rendered from lib/site.ts everywhere it appears.
 * Styled as a verification certificate: the first domain is the primary
 * entrance and is highlighted; every row can be opened or copied.
 */
export function OfficialDomains({ showNonOfficial = false }: { showNonOfficial?: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        {/* Soft emerald halo — lifts the card off dark backgrounds. */}
        <div aria-hidden="true" className="absolute -inset-1 rounded-[22px] bg-gradient-to-br from-emerald-400/40 via-brand-400/20 to-transparent blur-md" />

        <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white shadow-[0_24px_60px_-28px_rgba(5,9,18,0.7)]">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-4 text-white">
            <div aria-hidden="true" className="absolute -right-6 -top-10 h-28 w-28 rounded-full bg-white/10" />
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[15px] font-bold leading-tight">88WIN 官方網域</p>
                  <p className="text-xs text-emerald-50/90">官方認證・只認這份清單</p>
                </div>
              </div>
              <p className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                最後核對 <time dateTime={DOMAINS_VERIFIED}>{formatDate(DOMAINS_VERIFIED)}</time>
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-2 p-3">
            {OFFICIAL_DOMAINS.map((item, index) => {
              const primary = index === 0;
              return (
                <li
                  key={item.domain}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 ${
                    primary ? "bg-emerald-50/80 ring-1 ring-emerald-200" : "bg-ink-50 ring-1 ring-ink-100"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      primary ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 ring-1 ring-emerald-200"
                    }`}
                  >
                    <Icon name="globe" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <a
                      href={`https://${item.domain}`}
                      rel="noopener"
                      className="group inline-flex max-w-full items-center gap-1.5 font-mono text-[17px] font-bold tracking-wide text-ink-900 hover:text-emerald-700"
                    >
                      <span className="truncate">{item.domain}</span>
                      <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
                    </a>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-500">
                      <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" />
                      {item.role}
                    </p>
                  </div>
                  <CopyButton text={item.domain} label={`複製網址 ${item.domain}`} />
                </li>
              );
            })}

            <li className="flex items-center gap-3 rounded-xl bg-[#06c755]/[0.07] px-3 py-3 ring-1 ring-[#06c755]/25">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#06c755] text-white">
                <Icon name="line" className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <a
                  href={LINKS.line}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-1.5 font-mono text-[17px] font-bold tracking-wide text-ink-900 hover:text-[#05a948]"
                >
                  LINE {LINKS.lineId}
                  <Icon name="arrowRight" className="h-4 w-4 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-[#05a948]" />
                </a>
                <p className="mt-0.5 text-xs text-ink-500">官方客服・24 小時</p>
              </div>
              <CopyButton text={LINKS.lineId} label={`複製 LINE ID ${LINKS.lineId}`} />
            </li>
          </ul>

          <p className="flex items-start gap-2 border-t border-ink-100 bg-ink-50/70 px-5 py-3 text-xs leading-5 text-ink-600">
            <Icon name="alertTriangle" className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            請逐字核對網址列。不在這份清單上的網域，一律不輸入帳號、密碼或驗證碼。
          </p>
        </div>
      </div>

      {showNonOfficial && (
        <div className="card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-ink-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-800">
            <Icon name="alertTriangle" className="h-5 w-5" />
            已確認非官方經營的網域
          </div>
          <ul className="divide-y divide-ink-200">
            {NON_OFFICIAL_DOMAINS.map((item) => (
              <li key={item.domain} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <span className="font-mono text-base font-semibold text-ink-700 line-through decoration-red-400">
                  {item.domain}
                </span>
                <span className="text-xs text-ink-600">{item.note}</span>
              </li>
            ))}
          </ul>
          <p className="border-t border-ink-200 px-5 py-3 text-xs leading-6 text-ink-500">
            名單只列出已確認的網域，沒有出現在這裡不代表是官方。判斷原則只有一個：不在上方官方清單的網域，一律不輸入帳號密碼。
          </p>
        </div>
      )}
    </div>
  );
}

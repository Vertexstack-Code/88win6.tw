import { DOMAINS_VERIFIED, LINKS, NON_OFFICIAL_DOMAINS, OFFICIAL_DOMAINS } from "@/lib/site";
import { formatDate } from "@/lib/content";
import { Icon } from "@/components/shared/Icon";

/**
 * The official-domain card — the single most important block on the site,
 * so it is one component rendered from lib/site.ts everywhere it appears.
 */
export function OfficialDomains({ showNonOfficial = false }: { showNonOfficial?: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-200 bg-emerald-50 px-5 py-3">
          <p className="flex items-center gap-2 text-sm font-bold text-emerald-800">
            <Icon name="shield" className="h-5 w-5" />
            88WIN 官方網域
          </p>
          <p className="text-xs text-emerald-800">
            最後核對：<time dateTime={DOMAINS_VERIFIED}>{formatDate(DOMAINS_VERIFIED)}</time>
          </p>
        </div>
        <ul className="divide-y divide-ink-200">
          {OFFICIAL_DOMAINS.map((item) => (
            <li key={item.domain} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <Icon name="check" className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="font-mono text-lg font-bold tracking-wide text-ink-900">{item.domain}</span>
              </div>
              <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600">{item.role}</span>
            </li>
          ))}
          <li className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <Icon name="line" className="h-5 w-5 shrink-0 text-emerald-600" />
              <span className="font-mono text-lg font-bold tracking-wide text-ink-900">LINE {LINKS.lineId}</span>
            </div>
            <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600">官方客服</span>
          </li>
        </ul>
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

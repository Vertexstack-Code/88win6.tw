import Link from "next/link";
import { LINKS } from "@/lib/site";
import { Icon } from "@/components/shared/Icon";

/** Fixed bottom bar below xl: the three things a visitor most often came for. */
export function MobileBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-semibold";

  return (
    <nav aria-label="快速入口" className="fixed inset-x-0 bottom-0 z-50 flex border-t border-ink-200 bg-white xl:hidden">
      <Link href="/official-links" className={`${item} text-emerald-700`}>
        <Icon name="shield" className="h-5 w-5" />
        官方網址
      </Link>
      <a href={LINKS.line} target="_blank" rel="noopener" className={`${item} text-ink-700`}>
        <Icon name="headset" className="h-5 w-5" />
        LINE 客服
      </a>
      <a href={LINKS.login} rel="noopener" className={`${item} text-ink-700`}>
        <Icon name="user" className="h-5 w-5" />
        登入
      </a>
      <a href={LINKS.register} rel="noopener" className={`${item} bg-brand-500 text-white`}>
        <Icon name="gift" className="h-5 w-5" />
        免費註冊
      </a>
    </nav>
  );
}

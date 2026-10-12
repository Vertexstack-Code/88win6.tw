import Image from "next/image";
import { APP_PHONE } from "@/lib/media";
import { LINKS } from "@/lib/site";

const POINTS = ["不必下載 APK，手機瀏覽器即可使用", "加到主畫面，一鍵從官方網址進入", "手機與電腦共用同一個帳號"];

/** /app lead: the platform's phone artwork beside the three key facts. */
export function AppLead() {
  return (
    <div className="card grid items-center gap-6 overflow-hidden bg-gradient-to-br from-brand-50 to-white p-6 sm:grid-cols-[220px_1fr]">
      <Image
        src={APP_PHONE.src}
        alt={APP_PHONE.alt}
        width={APP_PHONE.width}
        height={APP_PHONE.height}
        priority
        sizes="220px"
        className="mx-auto h-auto w-44 sm:w-full"
      />
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-ink-900">88WIN 手機版：打開就能用</p>
        <ul className="flex flex-col gap-2.5">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2 text-[15px] text-ink-700">
              <span className="mt-0.5 text-emerald-600">✓</span>
              {point}
            </li>
          ))}
        </ul>
        <a href={LINKS.login} rel="noopener" className="w-fit rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-400">
          用手機開啟官方平台
        </a>
      </div>
    </div>
  );
}

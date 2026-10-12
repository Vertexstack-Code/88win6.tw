import Image from "next/image";
import { LINKS } from "@/lib/site";
import { LINE_QR } from "@/lib/media";
import type { MediaItem } from "@/lib/types";

/**
 * Official platform banners. One banner spans the column; two or more sit in
 * a two-up grid. The first one is the page's LCP image, so it loads eagerly.
 */
export function MediaBanners({ items, caption }: { items: MediaItem[]; caption?: string }) {
  if (items.length === 0) return null;
  const grid = items.length > 1;

  return (
    <figure className="flex flex-col gap-2">
      <div className={grid ? "grid gap-3 sm:grid-cols-2" : ""}>
        {items.map((item, index) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            priority={index === 0}
            sizes={grid ? "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 820px, 100vw"}
            className="h-auto w-full rounded-2xl border border-ink-200 bg-brand-50"
          />
        ))}
      </div>
      {caption && <figcaption className="text-xs text-ink-500">{caption}</figcaption>}
    </figure>
  );
}

/** The official LINE QR code, from the platform's own static host. */
export function LineQrCard({ size = "sm" }: { size?: "sm" | "lg" }) {
  const large = size === "lg";

  return (
    <div className={`card flex items-center gap-4 ${large ? "flex-col p-6 text-center sm:flex-row sm:text-left" : "p-4"}`}>
      <Image
        src={LINE_QR}
        alt={`88WIN 官方 LINE ${LINKS.lineId} QR Code`}
        width={360}
        height={360}
        className={`shrink-0 rounded-lg border border-ink-200 bg-white p-1 ${large ? "h-40 w-40" : "h-24 w-24"}`}
      />
      <div className="flex flex-col gap-1.5">
        <p className={`font-bold text-ink-900 ${large ? "text-lg" : "text-sm"}`}>掃描加入官方 LINE</p>
        <p className="font-mono text-sm font-bold text-emerald-700">{LINKS.lineId}</p>
        <p className="text-xs leading-5 text-ink-500">請認明這個 ID，其他自稱官方的個人帳號都不是。</p>
        {large && (
          <a
            href={LINKS.line}
            target="_blank"
            rel="noopener"
            className="mt-2 w-fit self-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 sm:self-start"
          >
            用手機開啟 LINE
          </a>
        )}
      </div>
    </div>
  );
}

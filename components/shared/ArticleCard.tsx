import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/content";
import type { Article } from "@/lib/types";
import { Icon } from "@/components/shared/Icon";

/**
 * Article cover: the official artwork when the article has one, otherwise an
 * inline-SVG gradient. `priority` is for the above-the-fold cover on the
 * article page itself.
 */
export function ArticleCover({
  article,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw",
}: {
  article: Article;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (article.image) {
    return (
      <div className={`relative aspect-[3/2] w-full overflow-hidden bg-brand-50 ${className}`}>
        <Image
          src={article.image}
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-800 shadow-sm">
          {article.category}
        </span>
      </div>
    );
  }

  const id = `cover-${article.slug}`;
  return (
    <div className={`relative aspect-[3/2] w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 640 360" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={article.cover[0]} />
            <stop offset="100%" stopColor={article.cover[1]} />
          </linearGradient>
        </defs>
        <rect width="640" height="360" fill={`url(#${id})`} />
        <path d="M0 290 L640 170 L640 360 L0 360 Z" fill="white" fillOpacity="0.08" />
        <circle cx="560" cy="60" r="110" fill="white" fillOpacity="0.08" />
        <text x="40" y="80" fill="white" fillOpacity="0.9" fontSize="34" fontWeight="800" fontFamily="sans-serif">
          88WIN
        </text>
      </svg>
      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-800">
        {article.category}
      </span>
    </div>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_44px_-26px_rgba(13,26,56,0.55)]"
    >
      <ArticleCover article={article} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-[17px] leading-snug group-hover:text-brand-700">{article.title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-ink-600">{article.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink-100 pt-3">
          <p className="text-xs text-ink-500">
            <time dateTime={article.updatedDate ?? article.publishDate}>
              {formatDate(article.updatedDate ?? article.publishDate)}
            </time>
            {" · "}
            {article.readingTime}
          </p>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-brand-600">
            閱讀全文
            <Icon name="arrowRight" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { formatDate } from "@/lib/content";
import type { Article } from "@/lib/types";

/** Inline-SVG cover: zero image bytes, no layout shift. */
export function ArticleCover({ article, className = "" }: { article: Article; className?: string }) {
  const id = `cover-${article.slug}`;
  return (
    <div className={`relative aspect-[16/9] w-full overflow-hidden ${className}`}>
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
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:border-brand-300"
    >
      <ArticleCover article={article} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-[17px] leading-snug group-hover:text-brand-700">{article.title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-ink-600">{article.description}</p>
        <p className="mt-auto pt-2 text-xs text-ink-500">
          <time dateTime={article.updatedDate ?? article.publishDate}>
            {formatDate(article.updatedDate ?? article.publishDate)}
          </time>
          {" · "}
          {article.readingTime}
        </p>
      </div>
    </Link>
  );
}

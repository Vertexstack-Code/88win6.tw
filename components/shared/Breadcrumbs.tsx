import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

/**
 * Visible breadcrumb trail plus its matching BreadcrumbList JSON-LD.
 * `tone="dark"` is for headers on the dark animated background.
 */
export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: { name: string; path: string }[];
  tone?: "light" | "dark";
}) {
  const trail = [{ name: "首頁", path: "/" }, ...items];
  const dark = tone === "dark";

  return (
    <>
      <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-ink-400" : "text-ink-500"}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.path} className="flex min-w-0 items-center gap-1.5">
                {index > 0 && <span aria-hidden="true">/</span>}
                {last ? (
                  <span aria-current="page" className={`truncate ${dark ? "text-ink-200" : "text-ink-700"}`}>
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className={`transition ${dark ? "hover:text-white" : "hover:text-brand-600"}`}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}

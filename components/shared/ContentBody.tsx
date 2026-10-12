import Link from "next/link";
import type { ContentBlock, FAQItem } from "@/lib/types";

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

/**
 * Renders **bold** and [anchor](/path) links without a markdown parser.
 * Internal paths use <Link>; absolute URLs open in a new tab.
 */
export function inline(text: string) {
  return text.split(INLINE_PATTERN).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(LINK_PATTERN);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={index} href={href}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener">
          {label}
        </a>
      );
    }
    return part;
  });
}

const CALLOUT_TONES = {
  info: "border-brand-500 bg-brand-50 text-ink-800",
  ok: "border-emerald-500 bg-emerald-50 text-emerald-900",
  warn: "border-amber-500 bg-amber-50 text-amber-900",
} as const;

export function ContentBody({ blocks, faq, faqHeading }: { blocks: ContentBlock[]; faq?: FAQItem[]; faqHeading?: string }) {
  return (
    <div className="prose-content">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return <h2 key={index}>{block.text}</h2>;
          case "subheading":
            return <h3 key={index}>{block.text}</h3>;
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{inline(item)}</li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={index}>
                {block.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>：{inline(item.text)}
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              // Wide tables scroll inside their own box so the page never
              // scrolls sideways on a phone.
              <div key={index} className="my-6 overflow-x-auto rounded-xl border border-ink-200 bg-white">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead className="bg-ink-100">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} scope="col" className="px-4 py-3 font-semibold text-ink-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-200">
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="align-top">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 leading-relaxed text-ink-700">
                            {inline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <p
                key={index}
                className={`my-6 rounded-r-xl border-l-4 px-5 py-4 font-medium leading-7 ${CALLOUT_TONES[block.tone ?? "info"]}`}
              >
                {inline(block.text)}
              </p>
            );
          default:
            return <p key={index}>{inline(block.text)}</p>;
        }
      })}

      {faq && faq.length > 0 && (
        <>
          <h2>{faqHeading ?? "常見問題"}</h2>
          <div className="flex flex-col gap-3">
            {faq.map((item) => (
              <details key={item.question} className="group rounded-xl border border-ink-200 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 marker:content-none">
                  <h3 className="!m-0 text-base">{item.question}</h3>
                  <span aria-hidden="true" className="text-brand-600 transition group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="mb-0 mt-3 text-[15px] leading-7 text-ink-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

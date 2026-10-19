import type { FAQItem } from "@/lib/types";
import { Icon } from "@/components/shared/Icon";

/**
 * Accordion FAQ used under every information page and article — the same
 * look as the homepage FAQ: numbered Q badges, a round +/× toggle and a
 * highlighted open state. Plain <details>, so it works without JavaScript.
 */
export function FaqList({ items, heading = "常見問題" }: { items: FAQItem[]; heading?: string }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-2">
          <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
            <Icon name="help" className="h-3.5 w-3.5" />
            FAQ · {items.length} 題
          </p>
          <h2 className="text-2xl">{heading}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-ink-200 bg-white shadow-card transition open:border-brand-300 open:shadow-[0_16px_40px_-24px_rgba(47,127,237,0.6)] hover:border-brand-200"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 marker:content-none">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-black text-brand-600 transition group-open:bg-brand-500 group-open:text-white">
                Q{index + 1}
              </span>
              <h3 className="flex-1 text-base text-ink-900">{item.question}</h3>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-lg leading-none text-brand-600 transition group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500 group-open:text-white"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 sm:pl-[4.5rem]">
              <p className="border-l-2 border-brand-200 pl-4 text-[15px] leading-7 text-ink-700">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

import type { ContentBlock, IconName } from "@/lib/types";
import { inline } from "@/components/shared/ContentBody";
import { Icon } from "@/components/shared/Icon";

/**
 * Card-based renderer for an information page's body — same content blocks
 * as ContentBody, laid out visually instead of as a document. Each heading
 * starts a section card. Sections that hold steps, lists or tables span the
 * full width; plain-text sections pair up two per row.
 */

interface Section {
  heading?: string;
  blocks: ContentBlock[];
}

function toSections(blocks: ContentBlock[]): Section[] {
  const sections: Section[] = [];
  for (const block of blocks) {
    if (block.type === "heading") {
      sections.push({ heading: block.text, blocks: [] });
    } else {
      if (sections.length === 0) sections.push({ blocks: [] });
      sections[sections.length - 1].blocks.push(block);
    }
  }
  return sections;
}

// Icon + gradient per section, picked from the heading's wording so the same
// renderer suits every page; falls back to a rotating set.
const THEMES: { match: RegExp; icon: IconName; tone: string }[] = [
  { match: /清單|使用|步驟|教學/, icon: "check", tone: "from-emerald-400 to-emerald-600" },
  { match: /更換|網址|新/, icon: "globe", tone: "from-sky-400 to-brand-600" },
  { match: /台灣|地區|海外/, icon: "shield", tone: "from-violet-400 to-indigo-600" },
  { match: /封鎖|假|詐騙|風險|注意/, icon: "alertTriangle", tone: "from-rose-400 to-red-600" },
  { match: /拼|寫法|錯/, icon: "bulb", tone: "from-amber-300 to-orange-500" },
  { match: /客服|LINE|聯繫/, icon: "headset", tone: "from-teal-300 to-cyan-600" },
];
const FALLBACK: { icon: IconName; tone: string }[] = [
  { icon: "sparkles", tone: "from-sky-400 to-brand-600" },
  { icon: "star", tone: "from-amber-300 to-orange-500" },
  { icon: "chart", tone: "from-violet-400 to-indigo-600" },
];

function themeFor(heading: string | undefined, index: number) {
  return THEMES.find((theme) => heading && theme.match.test(heading)) ?? FALLBACK[index % FALLBACK.length];
}

const CALLOUT = {
  info: { box: "from-brand-500 to-brand-700", icon: "bulb" as IconName },
  ok: { box: "from-emerald-500 to-emerald-700", icon: "check" as IconName },
  warn: { box: "from-amber-500 to-orange-600", icon: "alertTriangle" as IconName },
};

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "steps":
      return (
        <ol className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item, index) => (
            <li key={item.title} className="relative flex gap-3 rounded-xl border border-ink-200 bg-ink-50/70 p-4 transition hover:border-brand-300 hover:bg-white">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-black text-white shadow-[0_6px_16px_-6px_rgba(47,127,237,0.9)]">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-ink-900">{item.title}</span>
                <span className="vc-text mt-1 block text-sm leading-6 text-ink-600">{inline(item.text)}</span>
              </span>
            </li>
          ))}
        </ol>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item) => (
            <li key={item} className="vc-text flex items-start gap-2.5 text-[15px] leading-7 text-ink-700">
              <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{inline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-ink-200">
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
                    <td key={cellIndex} className="vc-text px-4 py-3 leading-relaxed text-ink-700">
                      {inline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout": {
      const tone = CALLOUT[block.tone ?? "info"];
      return (
        <p className={`flex items-start gap-3 rounded-xl bg-gradient-to-r ${tone.box} px-5 py-4 font-semibold leading-7 text-white shadow-card`}>
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20">
            <Icon name={tone.icon} className="h-4 w-4" />
          </span>
          <span className="vc-text-invert">{inline(block.text)}</span>
        </p>
      );
    }
    case "subheading":
      return <h3 className="text-base text-ink-900">{block.text}</h3>;
    case "heading":
      return null;
    default:
      return <p className="vc-text text-[15px] leading-7 text-ink-700">{inline(block.text)}</p>;
  }
}

export function VisualContent({ blocks }: { blocks: ContentBlock[] }) {
  const sections = toSections(blocks);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sections.map((section, index) => {
        const wide = section.blocks.some((block) => block.type !== "paragraph");
        const theme = themeFor(section.heading, index);
        return (
          <section
            key={section.heading ?? index}
            className={`group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-card backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(13,26,56,0.45)] sm:p-6 ${
              wide ? "md:col-span-2" : ""
            }`}
          >
            <span aria-hidden="true" className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${theme.tone} opacity-10 blur-2xl`} />
            {section.heading && (
              <div className="relative flex items-center gap-3">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${theme.tone} text-white shadow-lg`}>
                  <Icon name={theme.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-ink-400">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="text-lg leading-snug sm:text-xl">{section.heading}</h2>
                </div>
              </div>
            )}
            <div className="relative flex flex-col gap-4">
              {section.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

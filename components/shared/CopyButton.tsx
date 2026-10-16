"use client";

import { useState } from "react";

/**
 * Copies `text` to the clipboard and confirms for two seconds. Copying the
 * official domain lets players paste it into the address bar instead of
 * retyping it — retyping is exactly where look-alike domains catch people.
 */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older or locked-down browsers: fall back to a hidden textarea.
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={`shrink-0 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition ${
        copied
          ? "border-emerald-300 bg-emerald-50 text-emerald-700"
          : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700"
      }`}
    >
      <span aria-live="polite">{copied ? "已複製 ✓" : "複製"}</span>
    </button>
  );
}

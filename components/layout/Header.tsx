"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LINKS, NAV, SITE } from "@/lib/site";
import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white text-ink-900">
      {/* Verification strip — the site's whole purpose, stated on every page. */}
      <div className="bg-ink-950 text-white">
        <Container className="flex h-9 items-center justify-between gap-3 text-xs">
          <p className="flex min-w-0 items-center gap-2 text-ink-300">
            <Icon name="shield" className="h-4 w-4 shrink-0 text-emerald-400" />
            <span className="truncate">
              官方網址只有本站列出的網域，請逐字核對網址列
            </span>
          </p>
          <Link href="/official-links" className="shrink-0 font-semibold text-emerald-300 hover:text-emerald-200">
            查看官方網址 →
          </Link>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${SITE.title} 首頁`}>
          <Image
            src="/images/brand/logo-pc.png"
            alt={SITE.name}
            width={137}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="hidden border-l border-ink-200 pl-3 text-sm font-semibold text-ink-600 sm:inline">
            官方資訊中心
          </span>
        </Link>

        <nav aria-label="主要導覽" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {/* 假網站辨識 (index 2) is left out of the desktop bar to save width. */}
            {NAV.filter((_, idx) => idx <= 5).map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-ink-100 ${
                    isActive(item.path) ? "bg-brand-50 text-brand-700" : "text-ink-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={LINKS.login}
            rel="noopener"
            className="rounded-full border border-ink-300 px-4 py-2 text-sm font-semibold text-ink-800 transition hover:bg-ink-100"
          >
            登入
          </a>
          <a
            href={LINKS.register}
            rel="noopener"
            className="rounded-full bg-brand-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-400"
          >
            免費註冊
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="行動版導覽" className="border-t border-ink-200 bg-white xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.path) ? "page" : undefined}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-800 transition hover:bg-ink-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={LINKS.login}
                rel="noopener"
                className="rounded-full border border-ink-300 py-3 text-center text-sm font-semibold text-ink-800"
              >
                登入
              </a>
              <a href={LINKS.register} rel="noopener" className="rounded-full bg-brand-500 py-3 text-center text-sm font-bold text-white">
                免費註冊
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}

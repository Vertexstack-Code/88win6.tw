import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-4 py-20">
      <p className="text-sm font-bold text-brand-600">404</p>
      <h1 className="text-3xl">找不到這個頁面</h1>
      <p className="max-w-xl leading-8 text-ink-600">
        頁面可能已移動或不存在。如果你是從其他網站的連結進來，請先到官方網址清單確認正確入口。
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/official-links" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white">
          查看官方網址
        </Link>
        <Link href="/" className="rounded-full border border-ink-300 px-5 py-2.5 text-sm font-semibold text-ink-800">
          回首頁
        </Link>
      </div>
    </Container>
  );
}

"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-display font-display font-bold text-foreground/10">!</p>
        <h1 className="mt-4 text-h2 font-display font-bold">Something Went Wrong</h1>
        <p className="mt-4 text-body text-foreground/60">
          {error.message || "Terjadi kesalahan saat memuat project."}
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-lg border-2 border-foreground px-6 py-3 font-display text-body font-bold transition-all hover:bg-foreground hover:text-background"
          >
            Coba Lagi
          </button>
          <Link
            href="/"
            className="rounded-lg border-2 border-border px-6 py-3 font-display text-body font-bold transition-all hover:border-foreground"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}

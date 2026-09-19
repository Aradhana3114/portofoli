import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-display font-display font-bold text-foreground/10">404</p>
        <h1 className="mt-4 text-h2 font-display font-bold">Page Not Found</h1>
        <p className="mt-4 text-body text-foreground/60">
          Halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border-2 border-foreground bg-foreground px-6 py-3 font-display text-body font-bold text-background transition-all hover:bg-background hover:text-foreground"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}

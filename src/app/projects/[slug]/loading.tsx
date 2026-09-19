export default function Loading() {
  return (
    <section className="min-h-screen pt-24">
      <div className="container-editorial">
        <div className="mb-8 h-96 animate-pulse rounded-2xl bg-muted" />
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded bg-muted" />
          <div className="h-4 w-96 animate-pulse rounded bg-muted" />
          <div className="h-4 w-80 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </section>
  );
}

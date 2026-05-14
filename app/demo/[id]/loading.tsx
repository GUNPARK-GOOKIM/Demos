export default function Loading() {
  return (
    <main className="px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5">
        <div className="h-12 w-52 animate-pulse rounded-full bg-[var(--surface)]" />
        <div className="h-80 animate-pulse rounded-[2rem] bg-[var(--surface)]" />
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-36 animate-pulse rounded-[1.5rem] bg-[var(--surface)]" />
          ))}
        </div>
      </div>
    </main>
  );
}

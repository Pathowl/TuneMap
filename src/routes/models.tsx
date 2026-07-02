import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { CARS, type Car } from "@/lib/cars";

export const Route = createFileRoute("/models")({
  component: Models,
  head: () => ({
    meta: [
      { title: "Models — Tunemap" },
      {
        name: "description",
        content: "Search for your chassis. Browse tuning guides by brand.",
      },
    ],
  }),
});

function Models() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CARS;
    return CARS.filter((c) =>
      [c.make, c.model, c.chassis, c.engine].some((s) => s.toLowerCase().includes(q)),
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, Car[]>();
    for (const car of matches) {
      const list = map.get(car.make) ?? [];
      list.push(car);
      map.set(car.make, list);
    }
    return Array.from(map.entries());
  }, [matches]);

  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-14 pb-24 md:px-10 md:pt-20">
      <div className="mb-8 border-b border-border/60 pb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          § 01 · Models
        </div>
        <h1 className="mt-2 font-display text-4xl font-normal text-foreground md:text-5xl">
          Find your <span className="italic text-neon">chassis</span>.
        </h1>
      </div>

      {/* Search */}
      <div className="mb-10">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by make, model, chassis code (e.g. Focus RS, 350Z, S15)…"
            className="w-full rounded-md border border-border bg-card/60 py-4 pl-12 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/70 backdrop-blur focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {matches.length} / {CARS.length}
          </span>
        </label>
      </div>

      {matches.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-card/40 p-16 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            No chassis matched
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a shorter query. We're adding more platforms constantly.
          </p>
        </div>
      ) : (
        <div className="space-y-14">
          {grouped.map(([brand, cars]) => (
            <div key={brand}>
              <div className="mb-4 flex items-baseline justify-between border-b border-border/60 pb-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-foreground">
                  {brand}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {String(cars.length).padStart(2, "0")} chassis
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cars.map((car) => (
                  <Link
                    key={car.slug}
                    to="/cars/$slug"
                    params={{ slug: car.slug }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-accent hover:shadow-[0_0_60px_-15px_var(--pink)]"
                  >
                    <img
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 group-hover:from-background/80" />
                    <div className="absolute left-4 top-4 rounded border border-white/25 bg-black/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur">
                      {car.chassis}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="font-display text-2xl italic text-foreground md:text-3xl">
                        {car.model}
                      </div>
                      <div className="mt-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        <span>{car.engine} · {car.stockHp}</span>
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

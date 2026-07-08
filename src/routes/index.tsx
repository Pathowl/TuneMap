import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CARS } from "@/lib/cars";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tunemap — Interactive Build Roadmap for Tuner Cars" },
      {
        name: "description",
        content:
          "Technical build sheets for proven chassis. Select a platform to load prerequisites and required hardware.",
      },
      { property: "og:title", content: "Tunemap — Interactive Build Roadmap" },
      {
        property: "og:description",
        content: "Interactive tuning roadmap for tuner cars. Stage 0 to Stage 2, curated parts.",
      },
    ],
  }),
});

function Index() {
  const featured = CARS.slice(0, 3);
  const hero = CARS[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero.image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-right opacity-80 md:opacity-90 dark:opacity-40 dark:md:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent dark:from-background dark:via-background/85 dark:to-background/30" />
          <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-background dark:via-transparent dark:to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1400px] items-center px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Interactive build roadmap
            </div>

            <h1 className="mt-4 font-display text-6xl font-normal leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Build roadmap for
              <br />
              <span className="text-foreground">tuned chassis and real build paths</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A technical reference for real chassis: verified build paths, hardware
              prerequisites, and performance tradeoffs.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/models"
                className="group inline-flex items-center gap-3 rounded-md border border-foreground bg-transparent px-7 py-3 font-mono text-[13px] uppercase tracking-[0.42em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                Explore build paths
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2 font-mono text-[13px] uppercase tracking-[0.35em] text-muted-foreground transition-colors duration-200 hover:border-foreground hover:text-foreground"
              >
                View platform roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative border-t border-border/60 bg-background/60 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-end justify-between border-b border-border/60 pb-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                02 · Featured builds
              </div>
              <h2 className="mt-2 font-display text-3xl font-normal text-foreground md:text-5xl">
                Three chassis to start with<span className="text-neon">.</span>
              </h2>
            </div>
            <Link
              to="/models"
              className="hidden font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground md:inline-flex"
            >
              All models →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {featured.map((car, i) => (
              <Link
                key={car.slug}
                to="/cars/$slug"
                params={{ slug: car.slug }}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-accent"
              >
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded border border-white/25 bg-black/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur">
                  {car.chassis}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {car.make}
                  </div>
                  <div className="mt-1 font-display text-2xl italic text-foreground">
                    {car.model}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    {car.engine} · {car.stockHp}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="relative py-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            03 · How it works
          </div>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-normal leading-tight text-foreground md:text-5xl">
            Tunemap is an interactive build roadmap<span className="text-neon">.</span>
            <span className="block text-muted-foreground">
              Every chassis, staged from stock to sent.
            </span>
          </h2>
          {/* 
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Pick", d: "Search for your chassis. Or browse by make." },
              {
                n: "02",
                t: "Plan",
                d: "Stage 0 through Stage 2. Know what each step really gives you.",
              },
              {
                n: "03",
                t: "Build",
                d: "Curated parts with links, notes, and pricing references.",
              },
            ].map((s, i) => (
              <div key={s.n} className="border-t border-border pt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  {s.n}
                </div>
                <div className="mt-2 font-display text-2xl text-foreground">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
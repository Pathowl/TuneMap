import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CARS } from "@/lib/cars";
import { Reveal } from "@/components/tunemap/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tunemap — Interactive Build Roadmap for Tuner Cars" },
      {
        name: "description",
        content:
          "Pick a chassis, follow the stages, source the parts. An interactive tuning roadmap for the cars people actually build.",
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
            className="absolute inset-0 h-full w-full object-cover object-right opacity-40 md:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1400px] items-center px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <Reveal as="div">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                § Interactive build roadmap
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-4 font-display text-6xl font-normal leading-[0.95] tracking-tight text-foreground md:text-8xl">
                Tuning guide
                <br />
                <span className="text-neon">for all cars.</span>
              </h1>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Pick a chassis. Follow the stages. Source the parts. A living roadmap built the way people actually build cars.
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/models"
                  className="group inline-flex items-center gap-3 rounded-md border border-accent bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.35em] text-accent-foreground transition-all duration-500 hover:shadow-[0_0_40px_-6px_var(--pink)]"
                >
                  Start your build
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/roadmap"
                  className="inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  See roadmap
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative border-t border-border/60 bg-background/60 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between border-b border-border/60 pb-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                  § 02 · Featured builds
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
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {featured.map((car, i) => (
              <Reveal key={car.slug} delay={i * 120}>
                <Link
                  to="/cars/$slug"
                  params={{ slug: car.slug }}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-accent hover:shadow-[0_0_50px_-15px_var(--pink)]"
                >
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="relative py-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Reveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              § 03 · How it works
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-normal leading-tight text-foreground md:text-5xl">
              Tunemap is an interactive build roadmap<span className="text-neon">.</span>
              <span className="block text-muted-foreground">
                Every chassis, staged from stock to sent.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Pick", d: "Search for your chassis. Or browse by make." },
              { n: "02", t: "Plan", d: "Stage 0 through Stage 2. Know what each step really gives you." },
              { n: "03", t: "Build", d: "Curated parts with links, notes, and pricing references." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="border-t border-border pt-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    {s.n}
                  </div>
                  <div className="mt-2 font-display text-2xl text-foreground">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

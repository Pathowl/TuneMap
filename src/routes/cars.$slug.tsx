import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Users, ExternalLink } from "lucide-react";
import { getCar, CARS, type Car, type Part } from "@/lib/cars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/cars/$slug")({
  loader: ({ params }): Car => {
    const car = getCar(params.slug);
    if (!car) throw notFound();
    return car;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.make} ${loaderData.model} (${loaderData.chassis}) — Tunemap Build Guide` },
          { name: "description", content: `${loaderData.tagline} Stage 1–3 tuning roadmap for the ${loaderData.chassis}.` },
          { property: "og:title", content: `${loaderData.model} ${loaderData.chassis} — Tunemap` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  component: CarPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        Chassis not in the database
      </div>
      <h1 className="mt-3 font-display text-4xl italic text-neon">Unknown chassis</h1>
      <Link
        to="/models"
        className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-foreground hover:text-accent"
      >
        <ArrowLeft className="h-3 w-3" /> Back to models
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-md px-6 py-32 text-center">
        <h1 className="font-display text-xl">This build didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-accent px-6 py-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-foreground"
        >
          Retry
        </button>
      </div>
    );
  },
});

function CarPage() {
  const car = Route.useLoaderData();
  const nextCar =
    CARS[(CARS.findIndex((c) => c.slug === car.slug) + 1) % CARS.length];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={car.image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-8 md:px-10">
          <Link
            to="/models"
            className="inline-flex items-center gap-2 font-mono text-[15px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All models
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                {car.make} · {car.year}
              </div>
              <h1 className="mt-3 font-display text-6xl font-normal leading-[0.9] tracking-tight text-foreground md:text-7xl">
                {car.model}
              </h1>
              <div className="mt-2 font-display text-2xl italic text-neon">
                {car.chassis}
              </div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {car.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#stages"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 font-mono text-[13px] uppercase tracking-[0.3em] text-accent-foreground transition-all hover:shadow-[0_0_25px_-8px_var(--pink)]"
                >
                  View build stages
                </a>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground backdrop-blur transition-colors hover:border-accent"
                >
                  <Users className="h-3.5 w-3.5" /> Community projects
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
                <SpecItem label="Engine" value={car.engine} />
                <SpecItem label="Displacement" value={car.displacement} />
                <SpecItem label="Layout" value={car.layout} />
                <SpecItem label="Drivetrain" value={car.drivetrain} />
                <SpecItem label="Stock Power" value={car.stockHp} />
                <SpecItem label="Stock Torque" value={car.stockTorque} />
                <SpecItem label="Weight" value={car.weight} />
                <SpecItem label="Redline" value={car.redline} />
              </div>

            </div>

            <div className="relative lg:col-span-7">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border">
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  width={1280}
                  height={832}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute left-6 top-6 rounded border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur">
                  {car.chassis}
                </div>
                <div className="absolute bottom-6 right-6 rounded border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur">
                  {car.stockHp} stock
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="relative border-t border-border/60 bg-background/40 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="mb-10 flex items-end justify-between border-b border-border/60 pb-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                § Build stages
              </div>
              <h2 className="mt-2 font-display text-3xl font-normal text-foreground md:text-4xl">
                Tuning roadmap
              </h2>
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
              {car.stages.length} stages
            </div>
          </div>

          <Accordion type="single" collapsible defaultValue="stage-1" className="w-full">
            {car.stages.map((stage: Car["stages"][number]) => (
              <AccordionItem
                key={stage.id}
                value={`stage-${stage.id}`}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="py-7 hover:no-underline">
                  <div className="flex flex-1 items-start gap-6 pr-4 text-left">
                    <div className="min-w-[64px] pt-1 font-mono text-xs uppercase tracking-[0.3em] text-neon">
                      {stage.code}
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-2xl italic text-foreground tracking-[0.1em] md:text-3xl">
                        {stage.title}
                      </div>
                      <div className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground tracking-[0.2em]">
                        {stage.subtitle}
                      </div>
                    </div>
                    <div className="hidden shrink-0 text-right md:block">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Power
                      </div>
                      <div className="mt-1 font-mono text-sm text-foreground">
                        {stage.power}
                      </div>
                      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Torque
                      </div>
                      <div className="mt-1 font-mono text-sm text-neon">
                        {stage.torque}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-10">
                  <div className="mb-6 flex flex-wrap gap-3 md:hidden">
                    <span className="rounded border border-border bg-card/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
                      {stage.power}
                    </span>
                    <span className="rounded border border-border bg-card/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neon">
                      {stage.torque}
                    </span>
                  </div>
                  {stage.note ? (
                    <p className="mb-6 border-l-2 border-accent/60 bg-card/40 py-2 pl-4 font-mono text-xs leading-relaxed text-muted-foreground">
                      Note — {stage.note}
                    </p>
                  ) : null}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {groupPartsForDisplay(stage.parts).map((item, index) =>
                      item.kind === "alternative-group" ? (
                        <AlternativeGroup key={`${item.title}-${index}`} title={item.title} parts={item.parts} />
                      ) : (
                        <PartCard key={item.part.name} part={item.part} />
                      ),
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Maintenance — small, tucked below stages */}
          {car.maintenance.length > 0 ? (
            <div className="mt-16 border-t border-border/60 pt-8">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                      § Prerequisite
                    </div>
                    <div className="mt-1 font-display text-lg italic text-foreground">
                      Baseline maintenance before Stage 1
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-open:hidden">
                    Show
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-open:inline">
                    Hide
                  </span>
                </summary>
                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {car.maintenance.map((p: Part) => (
                    <PartCard key={p.name} part={p} />
                  ))}
                </div>
              </details>
            </div>
          ) : null}

        </div>
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <Link
          to="/cars/$slug"
          params={{ slug: nextCar.slug }}
          className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-accent hover:shadow-[0_0_40px_-15px_var(--pink)] md:p-12"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Next chassis
            </div>
            <div className="mt-2 font-display text-3xl font-normal text-foreground md:text-5xl">
              {nextCar.model} <span className="italic text-neon">{nextCar.chassis}</span>
            </div>
            <div className="mt-2 max-w-md text-sm text-muted-foreground">
              {nextCar.tagline}
            </div>
          </div>
          <div className="hidden aspect-[4/3] w-56 shrink-0 overflow-hidden rounded-xl border border-border md:block">
            <img
              src={nextCar.image}
              alt={nextCar.model}
              loading="lazy"
              width={1280}
              height={832}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
            />
          </div>
          <ArrowRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition-all group-hover:right-4 group-hover:text-foreground md:right-8 md:top-8" />
        </Link>
      </section>
    </>
  );
}

function groupPartsForDisplay(parts: Part[]) {
  const displayItems: Array<{ kind: "part"; part: Part } | { kind: "alternative-group"; title: string; parts: Part[] }> = [];
  let buffer: Part[] = [];
  let activeTitle: string | null = null;

  const flushBuffer = () => {
    if (!buffer.length) return;

    if (buffer.length > 1 && activeTitle) {
      displayItems.push({ kind: "alternative-group", title: activeTitle, parts: buffer });
    } else {
      buffer.forEach((part) => displayItems.push({ kind: "part", part }));
    }

    buffer = [];
    activeTitle = null;
  };

  parts.forEach((part) => {
    const group = part.group;

    if (group?.kind === "alternative") {
      if (activeTitle && activeTitle !== group.title) {
        flushBuffer();
      }

      buffer.push(part);
      activeTitle = group.title;
    } else {
      flushBuffer();
      displayItems.push({ kind: "part", part });
    }
  });

  flushBuffer();
  return displayItems;
}

function AlternativeGroup({ title, parts }: { title: string; parts: Part[] }) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/30 p-4 md:col-span-2">
      <div className="mb-3 flex items-center gap-2">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {title}
        </div>
        <div className="h-px flex-1 bg-border/60" />
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {parts.map((part, index) => (
          <AccordionItem
            key={part.name}
            value={part.name}
            className="overflow-hidden rounded-lg border border-border/60 bg-card/60"
          >
            <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
              <div className="flex w-full items-center justify-between gap-3">
                <div className="min-w-0 text-left">
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                    {index === 0 ? "Option A" : "Option B"}
                  </div>
                  <div className="mt-1 font-mono text-sm font-medium uppercase tracking-[0.14em] text-foreground">
                    {part.name}
                  </div>
                  <div className="mt-1 text-left text-xs text-muted-foreground">
                    {part.brand}
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
                  Expand
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="border-t border-border/50 pt-3">
                <PartCard part={part} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function PartCard({ part }: { part: Part }) {
  const links: { label: string; url: string }[] =
    part.links && part.links.length > 0
      ? part.links
      : [
          { label: "Search on Google", url: `https://www.google.com/search?q=${encodeURIComponent(part.brand + " " + part.name)}` },
          { label: "Find on eBay", url: `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(part.brand + " " + part.name)}` },
          { label: "Summit Racing", url: `https://www.summitracing.com/search?searchTerm=${encodeURIComponent(part.brand + " " + part.name)}` },
        ];

  return (
    <div className="group rounded-lg border border-border bg-card/60 p-5 transition-all duration-500 hover:border-accent hover:bg-card">
      <div className="flex items-start gap-3">
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {part.brand}
          </div>
          <div className="mt-1 font-mono text-sm font-medium uppercase tracking-[0.16em] text-foreground sm:text-base">
            {part.name}
          </div>
          {part.price ? (
            <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Estimated Cost
              <span className="ml-1 font-mono text-[11px] text-foreground">{part.price}</span>
            </div>
          ) : null}
        </div>
      </div>

      {part.note ? (
        <p className="mt-3 border-l border-border pl-3 text-xs text-muted-foreground">
          {part.note}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2 border-t border-border/60 pt-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 rounded border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            {l.label}
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        ))}
      </div>
    </div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-border/60 pl-4">
      <div className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-display text-l text-foreground tracking-[0.1em]">{value}</div>
    </div>
  );
}

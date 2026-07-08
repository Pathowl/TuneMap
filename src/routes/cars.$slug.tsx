import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Users, ExternalLink } from "lucide-react";
import { getCar, CARS, type Car, type Part, type Stage } from "@/lib/cars";
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
          {
            title: `${loaderData.make} ${loaderData.model} (${loaderData.chassis}) — Tunemap Build Guide`,
          },
          {
            name: "description",
            content: `${loaderData.tagline} Stage 1–3 tuning roadmap for the ${loaderData.chassis}.`,
          },
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

// Helper function to auto-categorize parts based on keywords
function getCategoryForPart(name: string): string {
  const lower = name.toLowerCase();
  
  if (lower.match(/intake|plenum|filter|induction|popcharger/)) return "Air Intake & Induction";
  if (lower.match(/exhaust|downpipe|header|cat-back|frontpipe|y-pipe|test pipe|overpipe|manifold/)) return "Exhaust Systems & Headers";
  if (lower.match(/turbo|supercharger|wastegate|boost|bov/)) return "Forced Induction (Turbos & Superchargers)";
  if (lower.match(/injector|fuel|pump|ethanol|wmi/)) return "Fuel System";
  if (lower.match(/piston|rod|cam|stud|block mod|valve|spring|sprocket|bearing/)) return "Engine Internals & Protection";
  if (lower.match(/clutch|flywheel|transmission|tcu|dsg|gr6|shifter|gearbox/)) return "Drivetrain & Transmission";
  if (lower.match(/tune|flash|ecu|ecutek|hondata|accessport|ktuner|mhd|imap|calibration/)) return "Engine Management & Calibration";
  if (lower.match(/intercooler|oil cooler|water pump|thermostat|radiator|cooling|aos|catch can/)) return "Cooling & Thermal Management";
  if (lower.match(/coilpack|spark plug|ignition|fluid|oil|maintenance|service|pad|rotor/)) return "Maintenance & Support";
  
  return "General Upgrades";
}

function CarPage() {
  type StageZero = {
    id: 0;
    code: string;
    title: string;
    subtitle: string;
    power: string;
    torque: string;
    note: string;
    parts: Part[];
  };

  const car = Route.useLoaderData();
  const nextCar = CARS[(CARS.findIndex((c) => c.slug === car.slug) + 1) % CARS.length];
  const stageIcons: Record<number, string> = {
    1: "/stage1.png",
    2: "/stage2.png",
    3: "/stage3.png",
  };

  const stageZero: StageZero = {
    id: 0,
    code: "Stage 0",
    title: "Prerequisite",
    subtitle: "Baseline maintenance before Stage 1",
    power: "",
    torque: "",
    note: "Required baseline maintenance before Stage 1.",
    parts: car.maintenance,
  };

  const stages: Array<Stage | StageZero> = [stageZero, ...car.stages];

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
              <div className="mt-2 font-display text-2xl italic text-neon">{car.chassis}</div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {car.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#stages"
                  className="inline-flex items-center gap-2 rounded-md border border-foreground bg-transparent px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.32em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  View build stages
                </a>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.3em] text-foreground backdrop-blur transition-colors hover:border-white"
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
      <section
        id="stages"
        className="relative border-t border-border/60 bg-background/40 py-20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="mb-10 flex items-end justify-between border-b border-border/60 pb-4">
            <div>
              <h2 className="mt-2 font-display text-3xl font-normal text-foreground md:text-4xl">
                Tuning roadmap
              </h2>
              <div className="font-mono text-[12px] uppercase tracking-[0.35em] text-muted-foreground">
                <br></br>
                Estimated price is for parts only!
              </div>
            </div>
            <div className="hidden font-mono text-[12px] uppercase tracking-[0.3em] text-muted-foreground md:block">
              {car.stages.length} stages
            </div>
          </div>

          <Accordion type="single" collapsible defaultValue="stage-1" className="w-full">
            {stages.map(
              (
                stage:
                  | Stage
                  | {
                      id: 0;
                      code: string;
                      title: string;
                      subtitle: string;
                      power: string;
                      torque: string;
                      note: string;
                      parts: Part[];
                    },
              ) => {
                const partsByCategory = Array.from(
                  stage.parts.reduce((acc, part) => {
                    const category = getCategoryForPart(part.name);
                    if (!acc.has(category)) acc.set(category, []);
                    acc.get(category)!.push(part);
                    return acc;
                  }, new Map<string, Part[]>())
                );

                return (
                  <AccordionItem
                    key={stage.id}
                    value={`stage-${stage.id}`}
                    className="border-b border-border/60"
                  >
                    <AccordionTrigger className="py-7 hover:no-underline">
                      <div className="flex flex-1 items-start gap-6 pr-4 text-left">
                        <div className="min-w-[72px] flex flex-col items-center gap-4 pt-1">
                          <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
                            {stage.code}
                          </div>
                          {stage.id > 0 ? (
                            <img
                              src={stageIcons[stage.id]}
                              alt={`${stage.code} icon`}
                              className="h-16 w-16 object-contain"
                            />
                          ) : null}
                        </div>
                        <div className="flex-1">
                          <div className="font-sans text-2xl font-semibold text-foreground tracking-[0.06em] md:text-3xl">
                            {stage.title}
                          </div>
                          <div className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground tracking-[0.2em]">
                            {stage.subtitle}
                          </div>
                        </div>
                        {stage.id > 0 ? (
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
                            <div className="mt-1 font-mono text-sm text-neon">{stage.torque}</div>
                          </div>
                        ) : null}
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
                      
                      {/* Sub-categories */}
                      <div className="flex flex-col gap-12 mt-6">
                        {partsByCategory.map(([category, catParts]) => (
                          <div key={category}>
                            <div className="flex items-center gap-4 mb-5">
                              <h4 className="font-mono text-[15px] uppercase tracking-[0.3em] text-foreground/80">
                                {category}
                              </h4>
                              <div className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent"></div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              {catParts.map((part) => (
                                <PartCard key={part.name} part={part} make={car.make} model={car.model} chassis={car.chassis} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              },
            )}
          </Accordion>
        </div>
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <Link
          to="/cars/$slug"
          params={{ slug: nextCar.slug }}
          className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-accent md:p-12"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Next chassis
            </div>
            <div className="mt-2 font-display text-3xl font-normal text-foreground md:text-5xl">
              {nextCar.model} <span className="italic text-neon">{nextCar.chassis}</span>
            </div>
            <div className="mt-2 max-w-md text-sm text-muted-foreground">{nextCar.tagline}</div>
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

function PartCard({ part, make, model, chassis }: { part: Part; make: string; model: string; chassis: string }) {
  // Now includes make, model, and chassis (e.g., "Nissan Silvia S15 Mishimoto...")
  const query = `${make} ${model} ${chassis} ${part.brand} ${part.name}`;
  
  const links: { label: string; url: string }[] =
    part.links && part.links.length > 0
      ? part.links
      : [
          {
            label: "GOOGLE",
            url: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          },
          {
            label: "EBAY",
            url: `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`,
          },
        ];

  return (
    <div className="group relative overflow-hidden border border-border/30 border-l-2 border-l-neon/70 bg-gradient-to-br from-card/40 to-background/20 p-5 backdrop-blur-md transition-colors hover:border-border/80 hover:bg-card/60">
      
      {/* Brand Watermark */}
      <div className="pointer-events-none absolute -bottom-4 -right-2 z-0 select-none font-display text-[60px] font-bold italic tracking-tighter text-muted-foreground/5 transition-transform duration-700 group-hover:scale-105 group-hover:text-muted-foreground/10 sm:text-[80px]">
        {part.brand}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {part.brand}
              </div>
              <div className="mt-1.5 font-mono text-sm font-medium uppercase tracking-[0.16em] text-foreground sm:text-base">
                {part.name}
              </div>
            </div>
            
            {part.price && (
              <div className="shrink-0 text-right">
                <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
                  Est. Cost
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-foreground">
                  {part.price}
                </div>
              </div>
            )}
          </div>

          {part.note && (
            <p className="mt-4 border-l border-muted-foreground/30 pl-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
              {part.note}
            </p>
          )}
        </div>

        {/* Minimalist Data Links */}
        <div className="mt-2 flex flex-wrap gap-5 border-t border-border/40 pt-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group/link flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-[2px] group-hover/link:translate-x-[2px] group-hover/link:text-neon" />
            </a>
          ))}
        </div>
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
      <div className="mt-1 font-display text-l tracking-[0.1em] text-foreground">{value}</div>
    </div>
  );
}
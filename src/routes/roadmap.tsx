import { createFileRoute } from "@tanstack/react-router";

const stages = [
  {
    name: "Stage 0",
    title: "Baseline & reliability",
    description:
      "This is the foundation. Think maintenance, tires, brakes, fluids, and basic setup so the car is safe, consistent, and ready for any future upgrades.",
  },
  {
    name: "Stage 1",
    title: "Entry-level power",
    description:
      "This is the first real performance step. Usually it means a tune plus light bolt-ons that add noticeable power without turning the build into a major project.",
  },
  {
    name: "Stage 2",
    title: "Serious upgrades",
    description:
      "This is where the car gets more serious. Expect stronger hardware, better cooling, upgraded fuel or drivetrain parts, and a bigger jump in power and reliability demands.",
  },
  {
    name: "Stage 3",
    title: "Big-power build",
    description:
      "This is the high-end territory. Stage 3 usually means major engine, turbo, or supporting hardware upgrades aimed at big power, track use, and a much more involved build.",
  },
];

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
  head: () => ({
    meta: [
      { title: "Roadmap — Tunemap" },
      {
        name: "description",
        content: "A practical guide to what Stage 0 through Stage 3 means for tuning builds.",
      },
    ],
  }),
});

function RoadmapPage() {
  return (
    <section className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-24 md:px-10 md:py-32">
      <div className="max-w-3xl">
        <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Roadmap
        </div>
        <h1 className="mt-3 font-display text-5xl font-normal text-foreground md:text-6xl">
          Tuning stages, explained.<span className="text-neon">.</span>
        </h1>
        <p className="mt-6 text-base text-muted-foreground">
          These stages are a simple way to describe how a build grows from a clean, reliable car
          into a serious performance machine.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {stages.map((stage) => (
          <article
            key={stage.name}
            className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neon">
              {stage.name}
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-[0.14em] text-foreground">
              {stage.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{stage.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-border/70 bg-background/70 p-6 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">In short:</p>
        <p className="mt-2">
          Stage 0 is about getting the car right. Stage 1 adds approachable power. Stage 2 pushes
          the build harder. Stage 3 is the big-power, high-commitment phase.
        </p>
      </div>
    </section>
  );
}

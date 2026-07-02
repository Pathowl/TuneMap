import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/roadmap")({
  component: () => <ComingSoon title="Roadmap" blurb="A shared timeline of what's coming to Tunemap." />,
  head: () => ({
    meta: [
      { title: "Roadmap — Tunemap" },
      { name: "description", content: "What's being built next on Tunemap." },
    ],
  }),
});

function ComingSoon({ title, blurb }: { title: string; blurb: string }) {
  return (
    <section className="mx-auto max-w-[900px] px-6 py-32 md:px-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        § Coming soon
      </div>
      <h1 className="mt-3 font-display text-5xl font-normal text-foreground md:text-6xl">
        {title}<span className="text-neon">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted-foreground">{blurb}</p>
    </section>
  );
}

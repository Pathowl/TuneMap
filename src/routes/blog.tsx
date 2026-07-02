import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: () => (
    <section className="mx-auto max-w-[900px] px-6 py-32 md:px-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        § Coming soon
      </div>
      <h1 className="mt-3 font-display text-5xl font-normal text-foreground md:text-6xl">
        Notes &amp; write-ups<span className="text-neon">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted-foreground">
        Long-form breakdowns of platforms, parts, and build decisions.
      </p>
    </section>
  ),
  head: () => ({
    meta: [
      { title: "Blog — Tunemap" },
      { name: "description", content: "Long-form tuning write-ups." },
    ],
  }),
});

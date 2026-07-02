import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/community")({
  component: () => (
    <section className="mx-auto max-w-[900px] px-6 py-32 md:px-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        § Coming soon
      </div>
      <h1 className="mt-3 font-display text-5xl font-normal text-foreground md:text-6xl">
        Community builds<span className="text-neon">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted-foreground">
        Soon you'll be able to upload photos of your own build and tag the chassis so others can see how it was done.
      </p>
    </section>
  ),
  head: () => ({
    meta: [
      { title: "Community — Tunemap" },
      { name: "description", content: "Real builds from the Tunemap community." },
    ],
  }),
});

import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

export function Aurora() {
  return (
    <>
      <div className="aurora-bg" aria-hidden />
      <div className="grain-overlay" aria-hidden />
    </>
  );
}

const NAV_LINKS: { to: "/" | "/models" | "/roadmap" | "/community" | "/blog"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/models", label: "Models" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/community", label: "Community" },
  { to: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4 md:px-10">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-foreground md:text-4xl"
        >
          <img 
            src="/no-backgroundandsmall.png" 
            alt="Tunemap Logo" 
            className="w-23 h-10 object-contain" 
          />
        </Link>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={l.exact ? { exact: true } : undefined}
              className="group relative px-4 py-2 font-mono text-[18px] uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-foreground after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:bg-accent",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>

      {/* mobile row */}
      <nav className="flex items-center gap-1 overflow-x-auto border-t border-border/40 px-4 py-2 md:hidden">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={l.exact ? { exact: true } : undefined}
            className="shrink-0 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}


export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-8 md:px-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Tunemap
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Reference only. Tune at your own risk.
        </div>
      </div>
    </footer>
  );
}

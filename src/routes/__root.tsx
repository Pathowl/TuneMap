import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Aurora, Nav, Footer } from "../components/tunemap/Chrome";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <Aurora />
      <div className="max-w-md text-center">
        <h1 className="font-display text-[8rem] font-bold leading-none text-neon">404</h1>
        <h2 className="mt-2 font-display text-xl font-semibold tracking-widest text-foreground">
          OFF THE MAP
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This route isn't in the build guide.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-foreground transition-all duration-500 hover:shadow-[0_0_30px_-4px_var(--pink)]"
          >
            Return to garage
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <Aurora />
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-widest text-foreground">
          MISFIRE
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head back to the garage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-foreground transition-all duration-500 hover:shadow-[0_0_30px_-4px_var(--pink)]"
          >
            Retry
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-secondary"
          >
            Garage
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TUNEMAP — Cinematic JDM Build Guide" },
      {
        name: "description",
        content:
          "TUNEMAP is a cinematic blueprint for the Core Five JDM platforms. Stage 0 to Stage 2 build guides, curated parts, and engineering roadmaps.",
      },
      { name: "author", content: "TUNEMAP" },
      { property: "og:title", content: "TUNEMAP — Cinematic JDM Build Guide" },
      {
        property: "og:description",
        content:
          "Stage-by-stage tuning roadmaps for the Ford Focus RS Mk2, Nissan 350Z Z33 and Nissan Silvia S15.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500;600&family=Caveat:wght@500;600;700&display=swap",
      },

    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('tunemap-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}var r=document.documentElement;if(t==='dark'){r.classList.add('dark');}else{r.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">
        <Aurora />
        <Nav />
        <main className="relative z-10 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

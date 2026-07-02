# Redesign: Nav sections, cinematic landing, searchable models with collapsible stages

## 1. Nav (top of every page)
Replace the single centered "Models" button with a horizontal set of section links (like the reference screenshot):
- Home · Models · Roadmap · Community · Blog
- Left-aligned "tunemap" wordmark (bigger, keep italic serif)
- Uppercase mono tracking on links, underline on active/hover
- Only Home and Models route to real pages for now; others render simple placeholder routes so nav doesn't break

## 2. Landing page (`/`)
Cinematic full-bleed hero styled after the reference (dark, moody, big wordmark, car image right side):
- Left: giant "TUNEMAP" wordmark (heavy display), short tagline ("Interactive build roadmap for tuner cars."), primary CTA → `/models`
- Right: hero car image (reuse existing Supra render, dark treatment, subtle vignette)
- On-scroll fade/rise animations for the headline, tagline, CTA (intersection observer + CSS transitions, no new libs)

Second section (scroll reveal):
- Small caption "Featured builds" + 3 potential-model cards (first 3 from CARS) — image, chassis code, engine, link into detail

Third section:
- Simple explainer: "Tunemap is an interactive build roadmap. Pick a chassis, follow the stages, source the parts." — three tiny numbered steps (Pick · Plan · Build)

## 3. Models page (`/models`)
- Search input at top — live filters CARS by make/model/chassis as user types
- Below: brand-grouped grid of car tiles (keep current tile style, tightened)
- Empty state when no matches

## 4. Car detail (`/cars/$slug`)
- Hero: car photo + title + specs strip
- Action row: primary "Start build" (scrolls to stages) + secondary "Community builds" button (non-functional placeholder for future user uploads)
- Stages rendered as collapsible accordions (Stage 0 / 1 / 2), collapsed by default
- Expanded stage shows: subtitle, gain, parts list. Each part shows name/brand/price + up to 3 "Buy" affiliate-style link buttons (placeholder `#` hrefs for now)

## Technical notes
- Add `src/routes/roadmap.tsx`, `src/routes/community.tsx`, `src/routes/blog.tsx` as minimal "coming soon" pages so nav links resolve (TanStack requires route files to exist for typed `<Link to>`)
- Use shadcn `Accordion` for collapsible stages (already installed under `@/components/ui/accordion` if present; otherwise use a tiny local disclosure with `useState`)
- Scroll-reveal via a small `useInView` hook + `opacity/translate` transition classes — no new dependency
- Keep existing pink/purple theme tokens; no new colors
- Affiliate links: extend `Part` type with optional `links?: {label:string; url:string}[]`; render up to 3 when present, otherwise a single "Find part" placeholder button

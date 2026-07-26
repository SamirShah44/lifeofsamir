# lifeofsamir

Astro static site. Content-driven — you write markdown, it generates pages.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## First things to edit

1. **`src/config.ts`** — domain, email, socials, resume path. Everything reads from here.
2. **`astro.config.mjs`** — set `site:` to your real domain (needed for OG tags).
3. **`public/og.png`** — 1200×630 screenshot of the site. This is what unfurls in
   Discord/LinkedIn/iMessage when you paste the link.
4. **`public/resume.pdf`** — the hero's download button points here.
5. **`src/content/cases/unsend.md`** — replace the placeholder store URLs.

## Adding a tutorial

Drop a file in `src/content/tutorials/`:

```markdown
---
title: Drawing your first triangle
summary: Vertex buffers, shaders, and the render loop.
number: 2
kind: video
duration: "14:20"
youtube: dQw4w9WgXcQ     # video ID only, not the full URL
topics: [OpenGL, C++]
published: 2026-08-08
draft: false             # true = hidden from the site
---

## Your content here
```

The homepage list, `/tutorials`, and the page at `/tutorials/02-first-triangle`
all generate themselves. No nav edits, no HTML.

## Adding a shipped product

Same idea — a file in `src/content/cases/`. See `unsend.md` for the frontmatter shape.
`status` is `live` / `dev` / `soon` and controls the badge colour.

## Deploy

Push to GitHub, import the repo at vercel.com. Framework preset auto-detects as Astro.
Every `git push` redeploys. HTTPS and the CDN are automatic and free.

Add your domain under Project → Settings → Domains, then point the nameservers or
A record at Vercel from wherever you bought it.

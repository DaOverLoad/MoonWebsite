# moonsdata.com

Personal portfolio for Darren Mounganga. Data science graduate building HELM with AI.

**Aesthetic:** Confident, loud, editorial-chaos. Black + acid yellow. Mixed serif/sans typography.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (component animation)
- **GSAP** (interactive moon)
- **Lenis** (smooth scroll)

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

Visit [http://localhost:3000](http://localhost:3000).

## Project structure

```
/app
  layout.tsx           Root layout with status bar + footer
  page.tsx             Home page (hero + work + about teaser)
  globals.css          Global styles + blueprint grid background

/components
  StatusBar.tsx        Top control-panel header
  HeroMoon.tsx         Interactive draggable yellow moon (GSAP)
  Marquee.tsx          Yellow scrolling band with mixed type
  GhostNumeral.tsx     Massive italic numerals behind sections
  Footer.tsx           Yellow footer with massive headline
  SmoothScroll.tsx     Lenis smooth scroll wrapper
```

## Design tokens

All design tokens are defined in `tailwind.config.ts`:

- **Colours:** void (#0A0A0A), moon-cream (#F5F2ED), acid (#E5FF3D)
- **Type scale:** hero (168px), section (88px), featured (112px)
- **Animations:** marquee, moon-float, fade-up

## Brand rules

1. **Periods after key words are always acid yellow.**
2. **Mix italic Georgia serif into bold Inter sans-serif** for the signature typographic move.
3. **Every section has a ghost numeral, a transmission number, and at least one floating annotation.**
4. **No exclamation marks.** Confidence comes from periods.

## Deployment

This project is designed to deploy to Vercel.

```bash
# Push to GitHub
git push origin main

# Then on vercel.com:
# 1. Import the GitHub repo
# 2. Set domain to moonsdata.com
# 3. Done — auto-deploys on every push
```

## Roadmap

- [x] Phase 1: Foundation (this commit)
- [ ] Phase 2: Polish home + interactive cursor
- [ ] Phase 3: /work/helm case study
- [ ] Phase 4: /about page
- [ ] Phase 5: /writing blog (MDX)

---

Built by Darren. Powered by stubbornness and AI.

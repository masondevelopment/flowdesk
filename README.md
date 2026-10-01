# Flowdesk

A responsive landing page for a fictional team workspace that brings projects, clients, and tasks together.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Deploy to Cloudflare Workers

This project uses the OpenNext Cloudflare adapter to run the standard Next.js app on Workers.

```bash
npm run cf:preview
```

After checking the local Workers preview, deploy from an authenticated Cloudflare session:

```bash
npm run cf:build
npm run cf:deploy
```

For Cloudflare Workers Builds, connect this GitHub repository and use these settings:

- Build command: `npm run cf:build`
- Deploy command: `npm run cf:deploy`
- Root directory: `/`
- Production branch: `main`

The app does not currently require secrets or external Cloudflare bindings. Configure a custom domain in the Worker settings after the first deployment.

The page includes a CSS-built workspace dashboard, product previews, responsive navigation, a monthly/yearly pricing switch, accessible FAQ accordion, metadata, sitemap, robots rules, and SoftwareApplication structured data.

# Pedro Alex — slide portfolio

A lightweight personal portfolio built with Astro. Desktop navigation works horizontally like a presentation; mobile uses natural vertical scrolling.

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown by Astro, normally `http://localhost:4321`.

## Production build

```bash
npm run build
```

The deployable website is created in `dist/`.

## Edit personal information

Most content and links live in:

```text
src/data/profile.ts
```

Replace these placeholders before publishing:

```ts
linkedin: 'https://www.linkedin.com/in/REPLACE-WITH-YOUR-PROFILE',
github: 'https://github.com/REPLACE-WITH-YOUR-GITHUB',
enerFocus: '#',
```

## Main files

```text
src/pages/index.astro       Slides, structure and navigation
src/styles/global.css       Visual system and responsive behaviour
src/data/profile.ts         Personal content, projects and links
src/layouts/BaseLayout.astro Metadata and document shell
public/favicon.svg          Browser icon
```

## Recommended deployment

A clean public address would be:

```text
pedro.techbridge.pt
```

The generated `dist/` directory can be hosted on Cloudflare Pages, Netlify, Vercel or any static web server.

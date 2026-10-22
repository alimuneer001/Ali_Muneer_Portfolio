# Ali Muneer — Next.js portfolio

Next.js 16 App Router, React 19, and compiled Tailwind CSS 3. Preserves the Echo layout, original-color portrait in light mode, monochrome portrait in dark mode, light/dark toggle, project carousel, 3D showcase and scroll animations.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is restricted.

## Build and deploy

```sh
npm run build
npm run check
npm start
```

`next build` generates the static website in `out/`. `npm start` serves that export using Python. On Vercel, import this repository as Next.js; the build command is `npm run build` and static output is `out`. No backend or environment variables are needed.

## Source

- `app/page.jsx`: page composition and animation runtime loading.
- `app/layout.jsx`: metadata, font loading and initial theme selection.
- `components/`: editable React sections and React theme toggle.
- `app/globals.css`, `app/personal.css`, `app/carousel.css`: styles.
- `public/scripts/portfolio-data.js`: project copy, screenshots and live links.
- `public/scripts/`: retained browser animation engines and interactions, loaded after hydration via Next Script.
- `public/assets/`: portrait, project images, resume and artwork.

The original `dist/` is a frozen pre-migration backup, not the current application or deployment output. `migrate-next.py` and `personalize.py` are one-time migration history; do not rerun them over current source changes.

The contact form opens an email draft; it does not send or store submissions. Google Fonts and OGL use external CDNs. Tailwind is compiled at build time and no longer uses its runtime CDN.

Every page load starts in light mode. Theme changes apply only to the current visit; saved and system theme preferences are intentionally ignored.

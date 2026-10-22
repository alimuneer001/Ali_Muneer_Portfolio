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

`next build` generates the Next.js application in `.next/`. `npm start` runs the production Node.js server. On Vercel select the Next.js preset, use `npm run build`, and leave Output Directory at the framework default (remove an existing `out` override). The contact API requires the SMTP variables below.

## Source

- `app/page.jsx`: page composition and animation runtime loading.
- `app/layout.jsx`: metadata, font loading and initial theme selection.
- `components/`: editable React sections and React theme toggle.
- `app/globals.css`, `app/personal.css`, `app/carousel.css`: styles.
- `public/scripts/portfolio-data.js`: project copy, screenshots and live links.
- `public/scripts/`: retained browser animation engines and interactions, loaded after hydration via Next Script.
- `public/assets/`: portrait, project images, resume and artwork.

Legacy static copies, migration scripts and unreferenced template assets have been removed. Edit `app/`, `components/` and `public/`; `.next/` and `out/` are generated and ignored by Git.

The contact form posts to `/api/contact/` and sends email through Nodemailer. It does not store submissions. Google Fonts and OGL use external CDNs. Tailwind is compiled at build time and no longer uses its runtime CDN.

Every page load starts in light mode. Theme changes apply only to the current visit; saved and system theme preferences are intentionally ignored.
# Ali_Muneer_Portfolio


## Responsive behavior

Small screens use a readable vertical career timeline, expanded About section and a project card grid. Desktop retains the scroll effects and 3D showcase. Reduced-motion settings use the same static layouts. Project effects load when their sections approach the viewport.

## Email setup on Vercel

1. For Gmail, enable 2-Step Verification and create an app password at https://myaccount.google.com/apppasswords. Use the app password without spaces, not your Google login password.
2. In Vercel Project Settings > Environment Variables, add the values from `.env.example`. Set `SMTP_PASS` as a secret. Select Production (and Preview if you want preview forms to send).
3. Push this updated code and redeploy. Environment changes apply only to new deployments.
4. Submit the contact form and confirm the message arrives in your inbox. Replies should go to the visitor.

For local use, copy `.env.example` to `.env.local`, fill the password and restart `npm run dev`. Never commit credentials or use a NEXT_PUBLIC_ prefix for SMTP values.

The sender must be an address permitted by your SMTP provider. Port 465 uses TLS; port 587 requires STARTTLS. A honeypot, size limits, validation, same-origin checks and an instance-local five-attempt throttle are included. The throttle resets on cold starts and is not shared across Vercel instances; configure a Vercel Firewall rate limit for `/api/contact/` for stronger spam protection.

Run `npm test` for mocked email tests (no mail is sent), then `npm run build` and `npm run check`. Real delivery requires SMTP credentials and a manual inbox check. The old Sites static deployment is not compatible with this Node.js email endpoint; deploy this version to Vercel.


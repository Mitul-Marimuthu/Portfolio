This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Portfolio customization (start here)

- **Main page content**: `app/page.tsx`
  - Replace the placeholders for **name**, **headline**, **about**, **projects**, **experience**, **links**, and **email**.
  - Project images: put files in `public/images/` and update each card’s `imageSrc`.
  - Portrait: swap `/images/avatar-placeholder.svg` for your real headshot path.
- **Site title + SEO description**: `app/layout.tsx` (`metadata`)
- **Colors / theme tokens**: `app/globals.css` (`:root` + `html[data-theme="dark"]`)
- **Resume download button**: add `public/resume.pdf` (then the header button works as-is)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Suggested Vercel flow (this repo)

- Push this project to GitHub
- Import the repo in Vercel (framework preset should auto-detect Next.js)
- Deploy (no special env vars required for the current template)

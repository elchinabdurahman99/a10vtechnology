# A10V Technology — Website

A modern, professional one-page website for **A10V Technology** — a two-person tech partnership offering web development and creative digital services.

---

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | Next.js 15 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS v3               |
| Fonts       | Syne (display) · Outfit (body) · JetBrains Mono |
| Deployment  | Vercel / any Node host        |

---

## Project Structure

```
a10v-technology/
├── app/
│   ├── globals.css          # Global styles, animations, utilities
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page (composes all sections)
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button (primary / secondary / ghost)
│   │   ├── Badge.tsx        # Tech stack tag badges
│   │   └── Icon.tsx         # SVG icon component
│   │
│   └── sections/
│       ├── Navbar.tsx       # Sticky nav with mobile menu
│       ├── Hero.tsx         # Hero with headline, CTA, stats
│       ├── About.tsx        # Team cards + value pillars
│       ├── Services.tsx     # Dev & Creative service cards
│       ├── Projects.tsx     # Portfolio grid with browser mockups
│       ├── Process.tsx      # 4-step how-we-work section
│       ├── Contact.tsx      # Contact form + social links
│       └── Footer.tsx       # Footer with nav and copyright
│
├── lib/
│   └── data.ts              # All content data (services, projects, team, etc.)
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Customization

### Update your content
All text, team info, services, and project data lives in one place:

```
lib/data.ts
```

Edit the exported arrays/objects there — no need to touch component files.

### Update contact details
In `components/sections/Contact.tsx`, update the `contactLinks` array:

```ts
const contactLinks = [
  { label: 'Email',     value: 'hello@a10v.tech',   href: 'mailto:...' },
  { label: 'WhatsApp',  value: '+994 XX XXX XX XX',  href: 'https://wa.me/...' },
  { label: 'Instagram', value: '@a10v.tech',          href: 'https://instagram.com/...' },
]
```

### Connect the contact form
The form currently runs a demo timeout. To wire it up to a real backend:

1. **EmailJS** (no backend needed): Install `@emailjs/browser` and call `emailjs.sendForm()`
2. **Resend** or **Nodemailer**: Create a `/api/contact/route.ts` API route and `fetch()` it from the form
3. **Formspree**: Change the form `action` attribute to your Formspree endpoint

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Other hosts
```bash
npm run build
# Serve the .next directory with Node.js
npm start
```

---

## Design System

| Token        | Value        | Usage                   |
|--------------|--------------|-------------------------|
| `background` | `#06080f`    | Page background         |
| `surface`    | `#0c1018`    | Card background         |
| `border`     | `#1e2d40`    | Card borders            |
| `accent`     | `#2563eb`    | Primary blue accent     |
| `teal`       | `#0d9488`    | Secondary teal accent   |
| `textPrimary`| `#f0f4f8`    | Headings                |
| `textSecondary`| `#8fa3bc`  | Body text               |
| `textMuted`  | `#4a6280`    | Subtitles / labels      |

---

## License

© 2025 A10V Technology. All rights reserved.

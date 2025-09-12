# Dr. Eyal Maoz Halevy – Website

A modern, fast website for Dr. Eyal Maoz Halevy, Neurologist and Headache & Facial Pain Specialist. Built with React, Vite, and Tailwind CSS, featuring bilingual content (EN/HE), RTL support, and a clean component architecture.

## Tech Stack

- React 18
- Vite
- Tailwind CSS (+ tailwindcss-animate)
- React Router
- Shadcn-style UI components

## Project Structure

- `src/pages/` – Route pages (Home, Treatments, MigraineTreatment, condition pages)
- `src/components/` – Reusable sections (Hero, Services, About, Testimonials, Contact)
- `src/components/LanguageContext.jsx` – EN/HE translations, language toggle, RTL/LTR
- `src/components/ui/` – UI primitives
- `src/utils/index.ts` – Helpers (e.g., `createPageUrl`)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Static output is generated in `dist/`.

## Deployment

You can deploy the static `dist/` folder to any static host (e.g., Netlify, Vercel, GitHub Pages, Nginx).

## Contact (Clinic)

- Phone: 03-5496949
- WhatsApp: 050-2804723
- Email: office@stroke-il.com
- Address: Weizmann St 14 (Weizmann Tower), Tel Aviv-Jaffa, 18th Floor

## Notes

- The project was de-coupled from external service providers; email handling in the contact form is currently simulated. Plug in your preferred backend/email service when ready.
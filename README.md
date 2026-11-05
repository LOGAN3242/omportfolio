# Om Sarvaiya — Portfolio

Personal portfolio of Om Sarvaiya, AI Engineer (Generative AI, LLM & Agentic AI).
Live: https://omsarvaiya.netlify.app

## Stack
React 19 · TypeScript · Vite · Tailwind (CDN) · Netlify Functions · Gemini (portfolio chatbot)

## Run locally
```bash
npm install
npm run dev            # site only, on http://localhost:3000
npx netlify dev        # site + chatbot function (needs GEMINI_API_KEY in .env.local)
```

## Where things live
- `constants.ts` — all content: experience, projects, skills, chatbot context
- `components/` — one file per section
- `netlify/functions/chat.ts` — server-side chatbot; the Gemini key never reaches the browser
- `public/OmResume.pdf` — the résumé every download button points to

## Deploy
Netlify builds with `npm run build` and publishes `dist/`.
Set `GEMINI_API_KEY` under Site configuration → Environment variables.

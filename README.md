# Real Estate Call Training Platform

An interactive bilingual (Japanese/Simplified Chinese) training platform for real-estate agents to practice telephone communication skills with scenario simulations, AI-guided feedback, and progress tracking.

## Getting Started

```bash
npm install
npm run dev
```

The development server will be available at `http://localhost:3000`.

## Features

- 🌐 Dual-language interface powered by `react-i18next`
- 🎯 Structured curriculum with chapters, sections, and conversation examples
- 🎭 Interactive scenario simulator with checklist tracking and real-time hints
- 🤖 AI-ready evaluation pipeline and mock performance reports
- 📊 Visual analytics including radar chart, transcripts, and action items
- ⚙️ Modular architecture prepared for Prisma, Zustand, and Tailwind CSS

## Project Structure

```
src/
  app/                # Next.js app router pages and layouts
  components/         # UI building blocks (dashboard, simulator, reports)
  data/               # Mock data sets for chapters, scenarios, reports
  providers/          # Application providers (i18n)
  store/              # Zustand stores
  types/              # Shared TypeScript interfaces
  utils/              # Helper utilities (e.g., action item generation)
```

## Next Steps

- Integrate authentication and role-based access control
- Connect to PostgreSQL via Prisma schema and migrations
- Add live speech recognition and AI evaluation endpoints
- Build supervisor/admin dashboards and analytics

## License

MIT

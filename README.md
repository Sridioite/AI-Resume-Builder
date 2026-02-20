# KodNest Premium Build System - Project 3: AI Resume Builder

A premium build tracking system for the AI Resume Builder project with 8-step gated progression.

## Features

- **8-Step Build Track**: Problem → Market → Architecture → HLD → LLD → Build → Test → Ship
- **Gated Progression**: Must complete each step before advancing
- **Premium Layout**: Top bar, context header, 70/30 split workspace, build panel
- **Artifact Upload System**: Upload screenshots/files at each step
- **Proof Page**: Track completion status and submit final project
- **Persistent Progress**: LocalStorage saves your progress

## Routes

- `/rb/01-problem` - Problem Definition
- `/rb/02-market` - Market Research
- `/rb/03-architecture` - System Architecture
- `/rb/04-hld` - High-Level Design
- `/rb/05-lld` - Low-Level Design
- `/rb/06-build` - Build Phase
- `/rb/07-test` - Testing Phase
- `/rb/08-ship` - Deployment
- `/rb/proof` - Proof of Completion

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

## How It Works

1. Start at Step 1 (Problem Definition)
2. Copy the prompt from the Build Panel
3. Paste into Lovable.dev to generate content
4. Upload artifact (screenshot, PDF, etc.)
5. Next button unlocks - proceed to next step
6. Complete all 8 steps
7. Visit `/rb/proof` to submit final project

## Tech Stack

- React 18
- React Router 6
- Vite
- LocalStorage for persistence

## Project Structure

```
src/
├── components/
│   ├── PremiumLayout.jsx    # Main layout wrapper
│   ├── PremiumLayout.css
│   └── BuildPanel.jsx        # Build panel with copy/upload
├── context/
│   └── ProgressContext.jsx   # Progress tracking state
├── pages/rb/
│   ├── Problem.jsx           # Step 1
│   ├── Market.jsx            # Step 2
│   ├── Architecture.jsx      # Step 3
│   ├── HLD.jsx               # Step 4
│   ├── LLD.jsx               # Step 5
│   ├── Build.jsx             # Step 6
│   ├── Test.jsx              # Step 7
│   ├── Ship.jsx              # Step 8
│   ├── Proof.jsx             # Proof page
│   └── Proof.css
├── App.jsx
├── main.jsx
└── index.css
```

## Build for Production

```bash
npm run build
npm run preview
```

## License

MIT

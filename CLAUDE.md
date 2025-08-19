# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ScheduleThyme is a Next.js 15 application for mobile-friendly scheduling of facilities, training, and consulting services. The project uses the App Router architecture with TypeScript and Tailwind CSS.

## Development Commands

### Start Development Server
```bash
npm run dev
```
This runs Next.js in development mode with Turbopack enabled for faster builds. The server runs on http://localhost:3000.

### Build and Production
```bash
npm run build    # Build for production
npm start        # Start production server
```

### Linting and Type Checking
```bash
npm run lint     # Run ESLint with Next.js configuration
npx tsc --noEmit # Type checking (no dedicated script exists)
```

## Architecture and Structure

### Framework Stack
- **Next.js 15**: App Router with React Server Components
- **React 19**: Latest React version with concurrent features
- **TypeScript**: Strict mode enabled for type safety
- **Tailwind CSS 4**: Utility-first CSS framework via PostCSS
- **ESLint**: Next.js configuration with TypeScript support

### Directory Structure
```
src/
└── app/                 # App Router directory
    ├── layout.tsx       # Root layout with font configuration
    ├── page.tsx         # Home page component
    ├── globals.css      # Global Tailwind styles
    └── favicon.ico      # App favicon
```

### Key Configuration
- **Aliases**: `@/*` maps to `./src/*` for clean imports
- **Fonts**: Uses Geist Sans and Geist Mono from Google Fonts
- **ESLint**: Extends Next.js core-web-vitals and TypeScript configs
- **TypeScript**: Targets ES2017 with strict mode and incremental compilation

### Current State
The application is in initial setup phase with Next.js default template. The main page displays a starter template with Next.js branding and deployment links. Based on notes.md, the goal is to build a scheduling system for facilities, training, and consulting services with mobile-first design.

## Development Notes

### Path Resolution
Use the `@/` alias for imports from the src directory:
```typescript
import Component from '@/app/components/Component'
```

### Styling Approach
The project uses Tailwind CSS 4.x with a utility-first approach. Global styles are defined in `src/app/globals.css`.

### Font Configuration
The application uses Geist font family (Sans and Mono variants) configured as CSS variables in the root layout.
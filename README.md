# Tulas International School — Homepage Redesign

A modern, responsive and animated homepage redesign for Tulas International School (TIS), built as part of a Frontend Developer assignment.

## Live Demo

https://tis-homepage-redesign-iota.vercel.app/

## GitHub Repository

https://github.com/donakhil9100-crypto/tis-homepage-redesign

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Key Features

- Responsive design for mobile, tablet and desktop
- Animated hero section
- Scroll-triggered reveal animations
- Smooth section transitions
- Interactive navigation
- Mobile navigation menu
- Scroll progress indicator
- Custom cursor interaction on desktop
- Responsive academic and activity cards
- Admissions call-to-action section
- Optimized images using `next/image`

## Standout Features

### 1. Scroll Progress Indicator

A progress bar at the top of the page shows the user's current position while scrolling through the website.

### 2. Custom Cursor

A custom cursor interaction is displayed on desktop devices and responds when hovering over links and buttons.

### 3. Scroll-Triggered Animations

Sections and content cards animate into view using Framer Motion as the user scrolls through the page.

## Component Architecture

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── animation/
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ScrollReveal.tsx
│   │
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Admissions.tsx
│   │   ├── BeyondAcademics.tsx
│   │   ├── Campus.tsx
│   │   ├── Hero.tsx
│   │   ├── Sports.tsx
│   │   ├── Testimonials.tsx
│   │   └── stats.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       └── SectionHeading.tsx
│
└── data/
    └── siteData.ts
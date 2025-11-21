# L'Ottico di Paese - Modern Website

A modern, SEO-optimized website for L'Ottico di Paese built with Next.js 14, TypeScript, and shadcn/ui.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **shadcn/ui** for modern UI components
- ✅ **Tailwind CSS** for styling
- ✅ **Framer Motion** for animations
- ✅ **SEO Optimized** with metadata, sitemap, and robots.txt
- ✅ **Responsive Design** for all devices
- ✅ **Structured Data** (JSON-LD) for better search engine understanding

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap
│   ├── soluzioni-visive/  # Solutions page
│   ├── servizi/           # Services page
│   ├── contattologia/     # Contactology page
│   ├── chi-siamo/         # About page
│   ├── blog/              # Blog pages
│   └── contattaci/        # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   └── hero-section.tsx  # Hero section component
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Pages

- **Home** (`/`) - Main landing page with hero sections and services
- **Soluzioni Visive** (`/soluzioni-visive`) - Visual solutions and lens types
- **Servizi** (`/servizi`) - Professional services offered
- **Contattologia** (`/contattologia`) - Contact lens services
- **Chi Siamo** (`/chi-siamo`) - About the business
- **Blog** (`/blog`) - Blog posts and articles
- **Contattaci** (`/contattaci`) - Contact information and form

## SEO Features

- Comprehensive metadata for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD) for local business
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure

## Color Scheme

The website uses a professional color scheme matching the original site:
- Primary: Deep blue (`hsl(210 100% 25%)`)
- Secondary: Light blue-gray
- Accent colors for highlights

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform supporting Next.js

## License

© 2024 L'Ottico di Paese. All rights reserved.


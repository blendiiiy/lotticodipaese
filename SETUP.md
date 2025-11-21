# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   it npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Adding Images from Original Website

The original website images should be placed in the `public/` directory. You can:

1. Download images from https://www.lotticodipaese.com/
2. Place them in the `public/` folder
3. Update image references in components

### Example Image Usage

Replace placeholder divs with actual images:

```tsx
// Before (placeholder)
<div className="w-full h-full flex items-center justify-center">
  Lenti Anti Luce Blu
</div>

// After (with image)
<Image
  src="/images/lenti-anti-luce-blu.jpg"
  alt="Lenti Anti Luce Blu"
  width={600}
  height={400}
  className="object-cover"
/>
```

## Customizing Colors

The color scheme is defined in `app/globals.css`. To match the exact colors from the original site:

1. Inspect the original website's CSS
2. Update the CSS variables in `:root` section of `globals.css`
3. The primary color is currently set to a professional blue

## SEO Configuration

- Update `app/layout.tsx` with your actual Google verification code
- Update `app/sitemap.ts` if you add new pages
- All pages have proper metadata for SEO

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The `out/` directory will contain the static export (if using static export) or you can use the Next.js server.

## Notes

- All pages are responsive and mobile-friendly
- SEO optimized with metadata, structured data, and sitemap
- Modern animations using Framer Motion
- Accessible components using Radix UI primitives


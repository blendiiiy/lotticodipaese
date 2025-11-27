# Color Consistency Guide

## ✅ Consistent Color Palette

All colors across the website now use a unified color system defined in `app/globals.css`.

### Primary Colors

- **Primary**: `215 100% 25%` - Professional Navy Blue (#004080)
  - Used for: Headers, main buttons, links, primary CTAs, navigation
  - Text on primary: White

- **Accent**: `43 96% 56%` - Gold/Amber (#f59e0b)
  - Used for: Highlights, badges, special CTAs, gradient effects
  - Text on accent: White

### Secondary Colors

- **Secondary**: `210 17% 95%` - Light Gray (#f8f9fa)
  - Used for: Background sections, cards, subtle backgrounds
  - Text on secondary: Dark gray

- **Muted**: `220 14% 96%` - Very Light Gray
  - Used for: Muted backgrounds, subtle elements
  - Text: `0 0% 34%` - Medium gray (#565656)

### Text Colors

- **Foreground**: `0 0% 11%` - Dark Gray (#1c1c1c)
  - Used for: Body text, headings, main content

- **Muted Foreground**: `0 0% 34%` - Medium Gray (#565656)
  - Used for: Secondary text, descriptions, muted content

### Background Colors

- **Background**: `0 0% 100%` - Pure White
  - Main page background

- **Card**: `0 0% 100%` - White
  - Card backgrounds

### Borders & Inputs

- **Border**: `220 13% 91%` - Light Gray
  - Used for: Borders, dividers, input borders

- **Input**: `220 13% 91%` - Light Gray
  - Input field backgrounds

### Focus & Interactive

- **Ring**: `215 100% 25%` - Primary color
  - Used for: Focus states, active elements

## Usage in Components

### ✅ All Components Use Consistent Colors

1. **Hero Section** (`components/smart-video-hero.tsx`)
   - Uses: `text-primary`, `bg-primary`, `text-accent`, `from-accent`
   - ✅ Consistent

2. **Buttons** (`components/ui/button.tsx`)
   - Primary buttons: `bg-primary`
   - Accent buttons: `bg-accent`
   - ✅ Consistent

3. **Gradient Buttons** (`components/21dev/gradient-button.tsx`)
   - Uses: `from-primary`, `to-primary`, `from-accent`, `to-accent`
   - ✅ Consistent

4. **Cards** (`components/21dev/animated-card.tsx`, `spotlight-card.tsx`)
   - Uses: `bg-card`, `border-border`, `text-card-foreground`
   - Spotlight effect uses: `hsl(var(--primary) / 0.15)`
   - ✅ Consistent

5. **Stats Section** (`components/stats-section.tsx`)
   - Uses: `bg-primary`, `text-white`
   - ✅ Consistent

6. **Navbar** (`components/navbar.tsx`)
   - Uses: `text-primary`, `hover:text-primary`
   - WhatsApp button: Green (brand color - acceptable)
   - ✅ Consistent

7. **Footer** (`components/footer.tsx`)
   - Uses: `bg-primary`, `text-primary-foreground`
   - ✅ Consistent

8. **Homepage** (`app/page.tsx`)
   - All gradients use: `from-primary`, `to-primary`, `from-secondary`, `to-secondary`
   - All text uses: `text-primary`, `text-muted-foreground`
   - ✅ Consistent

## How to Use Colors

### In Tailwind Classes

```tsx
// Primary color
<div className="bg-primary text-primary-foreground">...</div>
<button className="bg-primary hover:bg-primary/90">...</button>

// Accent color
<span className="text-accent">Highlight</span>
<button className="bg-accent">...</button>

// Gradients
<div className="bg-gradient-to-r from-primary to-primary/80">...</div>
<h1 className="bg-gradient-to-r from-accent to-accent/90 bg-clip-text">...</h1>

// Secondary backgrounds
<section className="bg-secondary">...</section>
<div className="bg-secondary/20">...</div>

// Text colors
<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Secondary text</p>
```

### In Inline Styles (when needed)

```tsx
// Using CSS variables
<div style={{ backgroundColor: 'hsl(var(--primary))' }}>...</div>
<div style={{ color: 'hsl(var(--accent))' }}>...</div>

// With opacity
<div style={{ backgroundColor: 'hsl(var(--primary) / 0.15)' }}>...</div>
```

## Color Updates

If you need to change colors, **ONLY** update `app/globals.css`:

```css
:root {
  --primary: 215 100% 25%; /* Change this */
  --accent: 43 96% 56%;     /* Change this */
  /* ... other colors */
}
```

All components will automatically use the new colors! 🎨

## Brand Colors

- **WhatsApp Green**: `bg-green-600` - Used only for WhatsApp buttons (brand requirement)
- **Primary Blue**: Professional navy for main brand elements
- **Accent Gold**: For highlights and special elements

## ✅ Status: All Colors Consistent!

All components have been updated to use the consistent color system. The website now has a unified, professional appearance throughout.



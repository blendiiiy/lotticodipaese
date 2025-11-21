# Images Directory

Place all images from the original website here.

## How to Download Images from Original Site

1. **Visit the original website**: https://www.lotticodipaese.com/
2. **Right-click on images** and select "Save image as..."
3. **Save them in this folder** (`public/images/`)

## Recommended Image Names

- `hero-1.jpg` - First hero section image
- `hero-2.jpg` - Second hero section image  
- `lenti-anti-luce-blu.jpg` - Blue light lenses image
- `lenti-monofocali.jpg` - Monofocal lenses image
- `lenti-progressive.jpg` - Progressive lenses image
- `montature.jpg` - Frames/glasses image
- `negozio.jpg` - Store interior image
- `team.jpg` - Team photo (Fatjona and Labeat)
- `servizi.jpg` - Services image
- `contattologia.jpg` - Contactology image

## Image Optimization

Next.js will automatically optimize images. Make sure images are:
- In JPG, PNG, or WebP format
- Reasonably sized (under 2MB each)
- Named descriptively

## Using Images in Code

Images in `public/images/` can be referenced as:
```tsx
<Image src="/images/hero-1.jpg" alt="Description" width={1200} height={600} />
```


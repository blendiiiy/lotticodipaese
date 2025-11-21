# How to Download Images from Original Website

## Method 1: Manual Download (Easiest)

1. Open https://www.lotticodipaese.com/ in your browser
2. Right-click on any image you want
3. Select "Save image as..." or "Inspect"
4. Save to `public/images/` folder with a descriptive name

## Method 2: Using Browser Developer Tools

1. Open https://www.lotticodipaese.com/
2. Press F12 to open Developer Tools
3. Go to "Network" tab
4. Filter by "Img" (images)
5. Refresh the page
6. Right-click on images and "Save as..."

## Method 3: Using Browser Extension

You can use browser extensions like:
- "Image Downloader" for Chrome
- "Download All Images" for Firefox

## Method 4: Using wget (Command Line)

```bash
# Download all images from a page
wget -r -l1 -H -t1 -nd -N -np -A.jpg,.jpeg,.png,.gif -erobots=off https://www.lotticodipaese.com/
```

## Recommended Images to Download

Based on the website content, download these images:

1. **Hero Section Images** (main banner images)
2. **Lenti Anti Luce Blu** - Blue light blocking lenses
3. **Lenti Monofocali** - Monofocal lenses
4. **Lenti Progressive** - Progressive lenses  
5. **Montature** - Eyeglass frames
6. **Store/Shop Interior** - Photos of the store
7. **Team Photo** - Fatjona and Labeat
8. **Service Images** - Various service-related images

## Image Naming Convention

Use descriptive, lowercase names with hyphens:
- `hero-visione-perfetta.jpg`
- `lenti-anti-luce-blu.jpg`
- `montature-selezione.jpg`
- `negozio-interno.jpg`
- `team-fatjona-labeat.jpg`


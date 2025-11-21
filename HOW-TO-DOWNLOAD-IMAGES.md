# How to Download Images from the Original Website

## Method 1: Browser Developer Tools (Easiest)

### Step 1: Open the Original Website
1. Go to https://www.lotticodipaese.com/
2. Press `F12` to open Developer Tools

### Step 2: Find Images
1. Click on the **Network** tab
2. Filter by **Img** (images)
3. Refresh the page (`F5` or `Ctrl+R`)
4. You'll see all images loading

### Step 3: Download Images
1. Right-click on any image in the Network tab
2. Select **"Open in new tab"** or **"Copy link address"**
3. Open the image URL in a new tab
4. Right-click the image → **"Save image as..."**
5. Save to: `public/images/` folder
6. Use these names:
   - `lenti-anti-luce-blu.jpg`
   - `lenti-monofocali.jpg`
   - `lenti-progressive.jpg`
   - `montature.jpg`
   - `negozio.jpg`
   - `team.jpg`

## Method 2: Right-Click on Page Images

1. Go to https://www.lotticodipaese.com/
2. Right-click directly on any image you see
3. Select **"Save image as..."**
4. Save to `public/images/` with a descriptive name

## Method 3: View Page Source

1. Go to https://www.lotticodipaese.com/
2. Right-click → **"View Page Source"** (or `Ctrl+U`)
3. Search for image URLs (look for `.jpg`, `.png`, `.webp`)
4. Copy the full URL (e.g., `https://www.lotticodipaese.com/wp-content/uploads/image.jpg`)
5. Open in browser and save

## Method 4: Browser Extension

Install a browser extension like:
- **Image Downloader** (Chrome)
- **Download All Images** (Firefox)

These can download all images from a page at once.

## Recommended Images to Download

Based on the website content, download these:

1. **Hero/Banner Images** - Main page banners
2. **Lenti Anti Luce Blu** - Blue light blocking lenses image
3. **Lenti Monofocali** - Monofocal lenses image
4. **Lenti Progressive** - Progressive lenses image
5. **Montature** - Eyeglass frames image
6. **Store Interior** - Photos of the shop
7. **Team Photo** - Fatjona and Labeat photo

## After Downloading

1. Place all images in `public/images/` folder
2. Restart the dev server (`Ctrl+C` then `npm run dev`)
3. Refresh the browser
4. Images should appear automatically!

## Troubleshooting

- **Images not showing?** Check the browser console (F12) for errors
- **Wrong filename?** Make sure filenames match exactly (case-sensitive)
- **404 errors?** Verify images are in `public/images/` folder


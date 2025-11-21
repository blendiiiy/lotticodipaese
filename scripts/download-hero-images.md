# Download Hero Images from Original Website

## Images Needed

Based on the original website, you need to download these two main images:

### 1. Team Photo (Left Panel)
- **What to look for**: Photo of two women (one with long brown hair in white lab coat, one with shorter dark curly hair wearing glasses)
- **Save as**: `public/images/team-photo.jpg`
- **Where on site**: Left side of the homepage hero section

### 2. Eyeglasses Collection (Right Panel)
- **What to look for**: Close-up photo of several pairs of eyeglasses on a light surface
- **Save as**: `public/images/eyeglasses-collection.jpg`
- **Where on site**: Right side of the homepage hero section

## How to Download

### Method 1: Right-Click (Easiest)
1. Go to https://www.lotticodipaese.com/
2. Right-click on the left hero image → "Save image as..."
3. Save as `team-photo.jpg` in `public/images/` folder
4. Right-click on the right hero image → "Save image as..."
5. Save as `eyeglasses-collection.jpg` in `public/images/` folder

### Method 2: Developer Tools
1. Open https://www.lotticodipaese.com/
2. Press F12 → Network tab → Filter by "Img"
3. Refresh the page
4. Look for large hero images
5. Right-click → "Open in new tab"
6. Right-click image → "Save image as..."
7. Save to `public/images/` with correct names

### Method 3: View Page Source
1. Go to https://www.lotticodipaese.com/
2. Right-click → "View Page Source" (Ctrl+U)
3. Search for image URLs (look for `.jpg`, `.png`, `.webp`)
4. Copy full URL (e.g., `https://www.lotticodipaese.com/wp-content/uploads/image.jpg`)
5. Open in browser and save

## After Downloading

1. Place images in: `public/images/`
2. Make sure filenames are exactly:
   - `team-photo.jpg`
   - `eyeglasses-collection.jpg`
3. Restart dev server: `Ctrl+C` then `npm run dev`
4. Refresh browser - images will appear automatically!

## Image Requirements

- Format: JPG, PNG, or WebP
- Recommended size: 1200x1600px or larger
- File size: Under 2MB each (for performance)


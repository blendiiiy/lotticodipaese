# Quick Guide: Download Images in 3 Steps

## Step 1: Find Image URLs

1. Open https://www.lotticodipaese.com/ in Chrome/Edge
2. Press **F12** (Developer Tools)
3. Go to **Network** tab
4. Click the **Img** filter button
5. Refresh the page (**F5**)
6. You'll see all images loading - these are the URLs you need!

## Step 2: Download Images

**Option A: Right-click method**
- Right-click on any image in the Network tab
- Select **"Open in new tab"**
- Right-click the image → **"Save image as..."**
- Save to: `public/images/` folder

**Option B: Copy URL method**
- Right-click image in Network tab → **"Copy" → "Copy link address"**
- Paste URL in browser address bar
- Right-click image → **"Save image as..."**
- Save to: `public/images/` folder

## Step 3: Name the Images

Save images with these exact names:
- `lenti-anti-luce-blu.jpg` - For blue light lenses section
- `lenti-monofocali.jpg` - For monofocal lenses
- `lenti-progressive.jpg` - For progressive lenses
- `montature.jpg` - For frames section
- `negozio.jpg` - Store photos
- `team.jpg` - Team photo

## That's it!

After saving images:
1. Restart dev server: `Ctrl+C` then `npm run dev`
2. Refresh browser
3. Images will appear automatically!

---

**Need help?** Check `HOW-TO-DOWNLOAD-IMAGES.md` for more detailed instructions.


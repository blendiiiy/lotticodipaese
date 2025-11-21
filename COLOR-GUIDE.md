# Color Matching Guide

## Current Color Scheme

The website uses these colors (in HSL format):

- **Primary**: `215 100% 25%` - Deep professional blue/navy
- **Accent**: `43 96% 56%` - Gold/amber
- **Background**: White
- **Foreground**: Dark gray-blue

## To Match Original Website Colors Exactly

### Method 1: Use Browser Color Picker

1. Open https://www.lotticodipaese.com/ in your browser
2. Install a color picker extension (like "ColorZilla" for Chrome)
3. Click on different colored elements to get their hex codes
4. Convert hex to HSL using an online converter
5. Update the values in `app/globals.css`

### Method 2: Inspect Element

1. Open https://www.lotticodipaese.com/
2. Press F12 (Developer Tools)
3. Click the element picker tool (top left)
4. Click on colored elements (header, buttons, etc.)
5. In the Styles panel, find the `color` or `background-color` value
6. Copy the hex code (e.g., `#1a4d7a`)
7. Convert to HSL and update `app/globals.css`

### Method 3: Tell Me the Colors

If you can identify the main colors from the original site, tell me:
- Primary color (header, main buttons)
- Accent color (highlights, CTAs)
- Text color
- Background color

And I'll update them for you!

## Quick Color Update

To change colors quickly, edit `app/globals.css`:

```css
--primary: 215 100% 25%;  /* Change these values */
--accent: 43 96% 56%;     /* Change these values */
```

**HSL Format**: Hue (0-360) Saturation (0-100%) Lightness (0-100%)

## Common Optician Website Colors

- **Navy Blue**: `215 100% 25%` or `#004080`
- **Royal Blue**: `220 90% 50%` or `#1e40af`
- **Gold/Amber**: `43 96% 56%` or `#f59e0b`
- **Dark Gray**: `220 20% 15%` or `#1f2937`


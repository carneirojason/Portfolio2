# ✅ GitHub Pages Deployment Fix - Images & Videos

## The Problem

Your portfolio was deployed to GitHub Pages at `https://carneirojason.github.io/Portfolio2/`, but **images and videos weren't loading**.

## Root Causes

1. **Wrong folder location**: Images were in the root `images/` folder instead of `public/images/`
   - Next.js only includes files from the `public/` folder in static exports
   - The root `images/` folder was never copied to the deployed site

2. **Missing `.nojekyll` file**: GitHub Pages uses Jekyll by default, which ignores folders starting with `_`
   - Next.js uses a `_next/` folder for assets
   - Without `.nojekyll`, GitHub Pages would skip these critical files

3. **Missing image files**: Some project images weren't in the public folder:
   - `Airbus/airplane11.jpg`
   - `Ares/rafale.jpg`
   - `PriceSignal/DashboardPriceSignal.jpg`
   - `sweet-spot/` additional images and videos

4. **Video paths not including base path** ⚠️ (Fixed Feb 12):
   - Raw HTML `<video>` tags don't automatically use Next.js's `basePath` configuration
   - Videos were looking for `/images/video.mp4` instead of `/Portfolio2/images/video.mp4`
   - Needed custom utility to add base path to video URLs

## What Was Fixed

### 1. ✅ Moved all images to `public/images/`
All images from the root `images/` folder were copied to `public/images/`:
- `Airbus/` → `public/images/Airbus/`
- `Ares/` → `public/images/Ares/`
- `PriceSignal/` → `public/images/PriceSignal/`
- `Sweet Spot/` → `public/images/sweet-spot/`

### 2. ✅ Added `.nojekyll` file
Created `public/.nojekyll` (empty file) to tell GitHub Pages:
- Don't use Jekyll processing
- Serve all files including `_next/` folder

### 3. ✅ Updated `.gitignore`
Added `/images/` to `.gitignore` to prevent accidentally committing the root images folder again.

### 4. ✅ Fixed video paths with base path utility (Feb 12)
Created `src/lib/basePath.ts` utility to handle asset URLs correctly:
- Detects if running on GitHub Pages and adds `/Portfolio2` prefix
- Updates video components to use this utility dynamically
- Videos now load with correct paths on both development and production

## Verification

Your changes have been **pushed to GitHub** and the **GitHub Actions workflow is now running**.

### Check Deployment Status

1. Go to: `https://github.com/carneirojason/Portfolio2/actions`
2. Look for the workflow run "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)

### Test Your Site

Once deployed, visit: `https://carneirojason.github.io/Portfolio2/`

Check these pages to verify images load:
- **Sweet Spot project**: Should show app screenshots and marketing video
- **NutriCuisine project**: Should show demo video
- **Satellite Imaging project**: Should show technical diagrams (Thales)
- **Rafale project**: Should show Rafale aircraft image (Ares)
- **Landing Time project**: Should show airplane image (Airbus)
- **Price Signal project**: Should show dashboard screenshot

## Test Locally (Optional)

To test the production build locally before deploying:

```bash
# Build for GitHub Pages
$env:GITHUB_PAGES="true"; $env:BASE_PATH="/Portfolio2"; npm run build

# Serve the output folder
npx serve out

# Open in browser: http://localhost:3000/Portfolio2/
```

## File Structure (After Fix)

```
Portfolio/
├── public/
│   ├── .nojekyll                          # ← NEW: Prevents Jekyll processing
│   └── images/
│       ├── Airbus/                        # ← MOVED from root
│       │   └── airplane11.jpg
│       ├── Ares/                          # ← MOVED from root
│       │   └── rafale.jpg
│       ├── PriceSignal/                   # ← MOVED from root
│       │   └── DashboardPriceSignal.jpg
│       ├── sweet-spot/                    # ← Additional files added
│       │   ├── logo.png
│       │   ├── dashboard.png
│       │   ├── marketing.mp4              # 14MB video
│       │   └── ... (9 files total)
│       ├── marmiton/
│       │   └── demo_NutriCuisine.mp4
│       ├── Thales/
│       │   ├── weight_pruning.jpg
│       │   └── distillation.jpg
│       └── Multivariate_time_series/
│           └── Multivariate_time_series.pdf
├── images/                                # ← Ignored by git (use public/ instead)
└── .gitignore                             # ← Updated to ignore /images/
```

## How Next.js + GitHub Pages Works

1. **Development**: Files in `public/` are served at the root (`/images/...`)
2. **Production (GitHub Pages)**: 
   - Next.js builds a static export to the `out/` folder
   - Only `public/` contents are copied to `out/`
   - GitHub Pages serves from `/Portfolio2/` (base path)
   - Images are accessible at: `https://carneirojason.github.io/Portfolio2/images/...`

## Technical Details: Why Videos Needed Special Handling

Next.js's `basePath` configuration automatically handles:
- `<Link>` components from `next/link`
- `<Image>` components from `next/image`
- CSS and JavaScript imports

But it does **NOT** automatically handle:
- Raw HTML tags like `<video>`, `<audio>`, `<img>`
- Fetch API calls
- Custom asset references

**Solution**: Created a utility function that:
1. Checks if code is running on GitHub Pages (by pathname)
2. Prepends `/Portfolio2` to asset paths when needed
3. Uses `useEffect` hook to set video URLs client-side

## Summary

✅ **Fixed**: All images and videos now in correct location (`public/images/`)  
✅ **Fixed**: Added `.nojekyll` for proper GitHub Pages serving  
✅ **Fixed**: Video paths now include GitHub Pages base path (`/Portfolio2`)  
✅ **Fixed**: Updated `.gitignore` to prevent future issues  
✅ **Deployed**: All changes pushed and deployment triggered  

Your images and videos should now load correctly on the deployed site! 🎉

Check the deployment at: **https://carneirojason.github.io/Portfolio2/**

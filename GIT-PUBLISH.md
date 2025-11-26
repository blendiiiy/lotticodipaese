# Si të Publikosh Projektin në GitHub

## Hapi 1: Krijo Repository në GitHub

1. Shkoni te: https://github.com/new
2. Emër repository: `lotticodipaese` (ose çfarëdo emër dëshironi)
3. Zgjidhni Private ose Public
4. **MOS** shtoni README, .gitignore, ose license (ne i kemi tashmë)
5. Klikoni "Create repository"

## Hapi 2: Bashkëngjit Repository-n Lokal me GitHub

Pas krijimit të repository-s në GitHub, do të merrni një URL si:
```
https://github.com/username/lotticodipaese.git
```

Pastaj ekzekutoni këto komanda:

```bash
# Shto remote repository (zëvendëso URL-në me tënde)
git remote add origin https://github.com/USERNAME/lotticodipaese.git

# Push në GitHub
git branch -M main
git push -u origin main
```

## Ose nëse dëshiron të përdorësh SSH:

```bash
git remote add origin git@github.com:USERNAME/lotticodipaese.git
git branch -M main
git push -u origin main
```

## Komanda Alternative (nëse ke tashmë remote):

```bash
# Kontrollo remote-n ekzistues
git remote -v

# Nëse ka, fshi dhe shto të ri
git remote remove origin
git remote add origin https://github.com/USERNAME/lotticodipaese.git

# Push
git push -u origin main
```

## Pas Publikimit

Projekti do të jetë i disponueshëm në GitHub dhe mund ta:
- Deployosh në Vercel (automatik nëse lidh me GitHub)
- Deployosh në Netlify
- Share-osh me të tjerë

## Deployment në Vercel (Pas GitHub)

1. Shkoni te: https://vercel.com
2. Import projektin nga GitHub
3. Vercel do ta detektojë automatikisht si Next.js projekt
4. Klikoni "Deploy"
5. Website-i juaj do të jetë live!

## Deployment në Netlify

1. Shkoni te: https://app.netlify.com
2. "Add new site" -> "Import an existing project"
3. Zgjidhni GitHub dhe repository-n tuaj
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Klikoni "Deploy"

## Problema të Zakonshme

### Nëse merrni error për authentication:
```bash
# Për HTTPS, do t'ju kërkohet username dhe personal access token
# Ose përdorni GitHub CLI:
gh auth login
```

### Nëse merrni error për branch:
```bash
# Ndryshoni branch në main
git branch -M main
git push -u origin main
```


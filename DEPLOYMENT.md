# Udhëzime për Deployment në Vercel

## Hapi 1: Krijo Account në Vercel

1. Shkoni te: https://vercel.com/signup
2. Sign up me GitHub account (më e lehtë sepse projekt-i është tashmë në GitHub)

## Hapi 2: Deploy Projektin

1. Pas sign up, klikoni **"Add New Project"** ose **"Import Project"**
2. Zgjidhni repository-n: `blendiiiy/lotticodipaese`
3. Vercel do të detektojë automatikisht që është Next.js projekt

## Hapi 3: Konfigurimi

Vercel do të sugjerojë këto settings (zakonisht janë të sakta):
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Mos ndrysho asgjë**, vetëm kliko **"Deploy"**

## Hapi 4: Custom Domain (Opsional)

Pas deployment-it të parë, mund të shtoni domain tuaj:

1. Në dashboard-in e Vercel, shkoni te **Settings** → **Domains**
2. Shtoni: `lotticodipaese.com` ose `www.lotticodipaese.com`
3. Vercel do t'ju japë DNS records që duhet t'i konfiguroni në domain provider

## Hapi 5: Environment Variables (Nëse ka)

Nëse keni environment variables:
1. Settings → **Environment Variables**
2. Shtoni çdo variabël që nevojitet

## Pas Deployment

- Website-i juaj do të jetë live në një URL si: `lotticodipaese.vercel.app`
- Çdo push në GitHub do të triggerojë automatikisht një deployment të ri
- Deployment-i është automatik dhe shumë i shpejtë

---

# Opsioni 2: Deployment në Netlify

## Hapi 1: Krijo Account

1. Shkoni te: https://app.netlify.com/signup
2. Sign up me GitHub

## Hapi 2: Deploy

1. Klikoni **"Add new site"** → **"Import an existing project"**
2. Zgjidhni GitHub dhe repository-n `blendiiiy/lotticodipaese`
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Klikoni **"Deploy site"**

---

# Çfarë duhet të kontrolloni para deployment:

- ✅ Build-i kalon lokal (`npm run build`)
- ✅ Të gjitha imazhet janë në `public/images/`
- ✅ Të gjitha faqet funksionojnë
- ✅ SEO metadata është konfiguruar
- ✅ Robots.txt dhe sitemap.xml janë gati

---

# Pas Deployment

1. **Kontrollo website-in live**
2. **Testo të gjitha faqet**
3. **Kontrollo imazhet** (duhet të shfaqen të gjitha)
4. **Testo në mobile** (responsiveness)
5. **Kontrollo SEO** me Google Search Console

---

# Problema të Zakonshme

### Imazhet nuk shfaqen
- Kontrollo që paths janë relative: `/images/...`
- Sigurohu që imazhet janë në `public/images/`

### Build Error
- Kontrollo terminal për errors
- Sigurohu që të gjitha dependencies janë në `package.json`

### Domain nuk funksionon
- Kontrollo DNS settings në domain provider
- Duhet të prisni 24-48 orë për DNS propagation

---

# Kontakt për Ndihmë

Nëse ke probleme me deployment, kontakto mua dhe do ta zgjidhim!



# Come Aggiungere le Immagini dal Sito Originale

## Guida Rapida

### Passo 1: Scarica le Immagini

1. Vai su https://www.lotticodipaese.com/
2. Fai clic destro su ogni immagine che vuoi usare
3. Seleziona "Salva immagine come..."
4. Salva le immagini nella cartella `public/images/`

### Passo 2: Nomi delle Immagini

Usa questi nomi per le immagini principali:

- `lenti-anti-luce-blu.jpg` - Per la sezione lenti anti luce blu
- `lenti-monofocali.jpg` - Per le lenti monofocali
- `lenti-progressive.jpg` - Per le lenti progressive
- `montature.jpg` - Per la sezione montature
- `negozio.jpg` - Foto del negozio
- `team.jpg` - Foto di Fatjona e Labeat
- `hero-1.jpg` - Prima immagine hero
- `hero-2.jpg` - Seconda immagine hero

### Passo 3: Verifica

Dopo aver aggiunto le immagini:

1. Riavvia il server di sviluppo (Ctrl+C e poi `npm run dev`)
2. Ricarica la pagina nel browser
3. Le immagini dovrebbero apparire automaticamente!

## Metodo Alternativo: Usare Immagini dal Sito Originale Direttamente

Se preferisci, puoi anche usare le immagini direttamente dal sito originale modificando il codice per usare URL esterni.

### Esempio:

Nel file `app/page.tsx`, puoi cambiare:

```tsx
<ImageWithFallback
  src="/images/lenti-anti-luce-blu.jpg"
  ...
/>
```

Con:

```tsx
<ImageWithFallback
  src="https://www.lotticodipaese.com/path/to/image.jpg"
  ...
/>
```

**Nota**: Dovrai aggiungere il dominio a `next.config.js` nella sezione `images.domains`.

## Formati Supportati

- JPG/JPEG
- PNG
- WebP (consigliato per performance)

## Ottimizzazione

Next.js ottimizza automaticamente le immagini. Assicurati che:
- Le immagini non siano troppo grandi (max 2-3MB)
- Usa formati moderni come WebP quando possibile

## Problemi?

Se le immagini non appaiono:
1. Controlla che i file siano nella cartella `public/images/`
2. Verifica che i nomi dei file corrispondano esattamente (case-sensitive)
3. Controlla la console del browser per errori
4. Riavvia il server di sviluppo


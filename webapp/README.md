# Grand Tour Nord-Est - Web App

Guida interattiva per il Grand Tour Nord-Est con assistenza personalizzata di Claude AI.

## Setup

### 1. Installa le dipendenze
```bash
cd webapp
npm install
```

### 2. Configura le variabili d'ambiente

Copia `.env.local.example` a `.env.local` e aggiungi la tua Claude API Key:

```bash
cp .env.local.example .env.local
```

Edita `.env.local`:
```
NEXT_PUBLIC_CLAUDE_API_KEY=sk-ant-xxxxxxxxx
```

Ottieni la tua API Key da: https://console.anthropic.com

### 3. Avvia il dev server
```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Deploy su Vercel

### 1. Push su GitHub
```bash
git add .
git commit -m "Grand Tour webapp"
git push
```

### 2. Deploy
```bash
npm i -g vercel
vercel
```

## Aggiungere nuove tappe

Per aggiungere una nuova tappa (es. Berlino):

1. Crea `data/berlino.ts` con la stessa struttura di `data/monaco.ts`
2. Importa e aggiungi a `data/index.ts`:
   ```typescript
   import { berlinoData } from './berlino'
   
   export const tours: Record<string, Tour> = {
     monaco: monacoData,
     berlino: berlinoData,
   }
   ```

3. La pagina dinamica `/[tappa]` userà automaticamente il nuovo tour
4. Claude API avrà il nuovo contesto

## Struttura

```
webapp/
├── app/
│   ├── api/chat/route.ts        # API per Claude
│   ├── [tappa]/page.tsx         # Pagina dinamica tappe
│   └── page.tsx                 # Home
├── components/
│   ├── ChatBot.tsx              # Chat UI
│   └── TourMenu.tsx             # Menu tappe
├── data/
│   ├── monaco.ts                # Dati tappa 1
│   └── index.ts                 # Esporta tutto
└── public/
```

## Funzionalità

✅ Chat real-time con Claude AI  
✅ Contesto completo di ogni tappa  
✅ Risposte personalizzate in italiano  
✅ Suggerimenti veloci (quick suggestions)  
✅ UI moderna con Tailwind CSS  
✅ Responsive design  
✅ Multi-tappe  

## Tecnologie

- **Next.js 14** - Framework React
- **TypeScript** - Tipizzazione
- **Tailwind CSS** - Styling
- **Claude API** - AI Conversazionale

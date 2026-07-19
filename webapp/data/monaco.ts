import type { Tour } from '.'

export const monacoData: Tour = {
  id: 'monaco',
  title: 'Monaco di Baviera',
  icon: '🏰',
  description: 'Prima sosta del Grand Tour Nord-Est. Arrivo pomeriggio del giorno 1, ripartenza per Berlino a metà giornata del giorno 2. In tutto circa 24 ore.',
  distance: '~450 km',
  duration: '5h via Brennero (A22) e Kufstein (A93)',
  days: 2,
  status: 'Attiva',
  
  infoTable: [
    { label: 'Quando arriviamo', value: 'Giorno 1, primo pomeriggio' },
    { label: 'Quando ripartiamo', value: 'Giorno 2, dopo pranzo' },
    { label: 'Tempo utile', value: 'Circa 24 ore' },
    { label: 'Zona in cui dormire', value: 'Centro storico (Altstadt) o Ludwigsvorstadt-Isarvorstadt' },
    { label: 'Auto in città', value: 'Da evitare: ZTL estesa, parcheggi cari (€25-35/notte). Meglio hotel con garage incluso' },
    { label: 'Trasporti', value: 'Tagesticket MVV: €9,20 per zona M (centro)' },
    { label: 'Lingua', value: 'Tedesco. In centro va benissimo l\'inglese' },
  ],

  day1: [
    {
      time: '14:00',
      title: 'Check-in e prima passeggiata',
      description: 'Lasciata l\'auto in hotel, dieci minuti a piedi fino a Marienplatz.',
      location: 'Hotel → Marienplatz',
    },
    {
      time: '15:00',
      title: 'Marienplatz e Neues Rathaus',
      description: 'Marienplatz con la colonna della Madonna al centro. Neues Rathaus: facciata neogotica. Alter Peter: 306 gradini per vista sulla città. €5 a persona.',
      location: 'Marienplatz, Neues Rathaus, Alter Peter',
    },
    {
      time: '17:00',
      title: 'Glockenspiel',
      description: 'Spettacolo del carillon a Marienplatz. Dura 15 minuti.',
      location: 'Marienplatz',
    },
    {
      time: '17:30',
      title: 'Viktualienmarkt',
      description: 'Il mercato all\'aperto di Monaco: bancarelle di formaggi, salumi, fiori. Biergarten all\'ombra dei castagni.',
      location: 'Viktualienmarkt',
      note: 'Chiuso la domenica',
    },
    {
      time: '19:30',
      title: 'Cena in birreria',
      description: 'Augustiner Bräustuben (locale) o Hofbräuhaus (turistica). Ordina: Schweinshaxe, Obatzda, Brezn, Helles.',
      location: 'Birreria a scelta',
      restaurants: [
        { name: 'Augustiner Bräustuben', address: 'Landsberger Straße 19', type: 'Autentica' },
        { name: 'Hofbräuhaus', address: 'Platzl 9', type: 'Turistica' },
      ],
    },
    {
      time: '22:30',
      title: 'Passeggiata di rientro',
      description: 'Giro serale in Odeonsplatz con la Feldherrnhalle e la Theatinerkirche illuminate.',
      location: 'Odeonsplatz',
    },
  ],

  day2Options: [
    {
      name: 'Englischer Garten',
      weather: 'bel tempo',
      description: 'Il parco più grande d\'Europa in una città. Entra da Odeonsplatz, cammina fino al Monopteros, poi verso il Chinesischer Turm.',
      highlight: 'Eisbach — canale dove i surfisti cavalcano un\'onda stazionaria. Spettacolo gratuito.',
      duration: '2 ore comode',
    },
    {
      name: 'Residenz',
      weather: 'brutto tempo',
      description: 'Palazzo dei Wittelsbach con la Antiquarium. €10 ingresso.',
      duration: '1,5–2 ore',
    },
    {
      name: 'Colazione lenta + Frauenkirche',
      weather: 'indifferente',
      description: 'Colazione da Café Frischhut (Schmalznudeln). Poi la Frauenkirche, la cattedrale con le due torri gemelle.',
      duration: '1,5 ore',
    },
  ],

  restaurants: [
    { name: 'Viktualienmarkt', zone: 'Centro', when: 'Pranzo veloce o spuntino (lun-sab)' },
    { name: 'Augustiner Bräustuben', zone: 'Landsberger Str.', when: 'Cena bavarese autentica' },
    { name: 'Café Frischhut', zone: 'Vicino Viktualienmarkt', when: 'Colazione con Schmalznudeln' },
    { name: 'Ratskeller', zone: 'Sotto il Neues Rathaus', when: 'Pranzo comodo dopo Marienplatz' },
    { name: 'Hofbräuhaus', zone: 'Platzl', when: 'Esperienza turistica' },
  ],

  checklist: [
    'Prenotare hotel con garage o Destination Charging',
    'Vignetta austriaca digitale (10 giorni, ~€8,60)',
    'Scaricare app MVV per biglietti dei mezzi',
    'Contanti in euro (almeno €50 in banconote)',
  ],

  notes: [
    { title: 'Domenica', content: 'Negozi chiusi, ma musei statali a 1€ (Alte Pinakothek, Neue Pinakothek, Residenz)' },
    { title: 'Pagamenti', content: 'Contanti ancora usati, alcuni biergarten storici non prendono carte. Portare almeno €50 in banconote' },
    { title: 'Mance', content: '5–10%, si dice l\'importo totale al cameriere prima di pagare' },
    { title: 'Meteo estivo', content: '22–28°C di giorno, temporali possibili nel pomeriggio' },
    { title: 'Piedi', content: 'Si cammina tanto. Scarpe comode obbligatorie!' },
  ],
}

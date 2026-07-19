import type { Tour } from '.'

export const berlinoData: Tour = {
  id: 'berlino',
  title: 'Berlino',
  icon: '🏛️',
  description: 'Seconda sosta del Grand Tour Nord-Est. Arrivo la sera del giorno 2, giornata piena il giorno 3, partenza per Copenaghen la mattina del giorno 4. Circa 36 ore utili.',
  distance: '~585 km',
  duration: '6h di A9 da Monaco',
  days: 3,
  status: 'Attiva',
  
  infoTable: [
    { label: 'Quando arriviamo', value: 'Giorno 2, sera' },
    { label: 'Quando ripartiamo', value: 'Giorno 4, mattina presto' },
    { label: 'Tempo utile', value: 'Circa 36 ore' },
    { label: 'Zona in cui dormire', value: 'Mitte (centrale) o Prenzlauer Berg (più tranquillo)' },
    { label: 'Auto in città', value: 'Berlino è vastissima (891 km²): metro è il migliore. Hotel con parcheggio in garage' },
    { label: 'Umweltplakette', value: '🔴 OBBLIGATORIO bollino verde ambientale (~€6). Ordinare online 2 settimane prima' },
    { label: 'Trasporti', value: 'Tageskarte AB: €10,60/giorno. Metro (U-Bahn), S-Bahn, tram, bus' },
    { label: 'App utile', value: 'BVG Fahrinfo per biglietti e orari' },
  ],

  day1: [
    {
      time: '19:00',
      title: 'Check-in e cena',
      description: 'Dopo 6 ore di autostrada. Cena in zona hotel senza programmi ambiziosi.',
      location: 'Hackescher Markt (Mitte) o Kastanienallee (Prenzlauer Berg)',
    },
    {
      time: '21:00',
      title: 'Prima occhiata: Porta di Brandeburgo illuminata',
      description: 'Se avanza energia: Porta di Brandeburgo di notte è bella e meno affollata di giorno. 10 minuti di U-Bahn dal centro.',
      location: 'Porta di Brandeburgo',
    },
  ],

  day2: [
    {
      time: '09:00',
      title: 'Porta di Brandeburgo',
      description: 'Arrivare presto per trovarla quasi vuota. Alle 11 sarà piena di gruppi. Da qui parte il Tiergarten, il grande parco centrale.',
      location: 'Porta di Brandeburgo',
    },
    {
      time: '09:30',
      title: 'Memoriale dell\'Olocausto',
      description: '2.711 blocchi di cemento di altezze diverse su un terreno ondulato. Centro di documentazione sotto (gratuito, chiuso lunedì).',
      location: 'Memoriale dell\'Olocausto',
    },
    {
      time: '10:30',
      title: 'Reichstag e cupola',
      description: 'Parlamento tedesco con cupola di vetro di Norman Foster. Percorribile a spirale con audioguida e vista 360° sulla città.',
      location: 'Reichstag',
      note: '⚠️ VA PRENOTATO ONLINE GRATIS SU bundestag.de con nome e documento. Settimane di anticipo consigliato.',
    },
    {
      time: '12:00',
      title: 'Unter den Linden e Museumsinsel',
      description: 'Grande viale storico verso est. Tappa: Neue Wache (scultura di Käthe Kollwitz), Bebelplatz (finestra di vetro con storia dei libri bruciati nel 1933), poi Museumsinsel (UNESCO, cinque musei).',
      location: 'Unter den Linden → Museumsinsel',
    },
    {
      time: '13:00',
      title: 'Pranzo',
      description: 'Hackescher Markt o Alexanderplatz. Piatti da provare: Currywurst da Konnopke\'s Imbiss, o Döner da Mustafa\'s Gemüse Kebap (leggendario, code lunghe).',
      location: 'Hackescher Markt / Alexanderplatz',
      restaurants: [
        { name: 'Konnopke\'s Imbiss', address: 'Prenzlauer Berg', type: 'Currywurst storica' },
        { name: 'Mustafa\'s Gemüse Kebap', address: 'Kreuzberg', type: 'Döner leggendario' },
        { name: 'Markthalle Neun', address: 'Kreuzberg', type: 'Mercato coperto, street food' },
      ],
    },
    {
      time: '14:30',
      title: 'Un museo, uno solo',
      description: 'Cinque musei sull\'isola sono troppi. Sceglierne uno: Neues Museum (busto di Nefertiti - consigliato), Alte Nationalgalerie (pittura Ottocento), o Pergamonmuseum (⚠️ chiuso per ristrutturazione fino 2027).',
      location: 'Museumsinsel',
      note: '⚠️ Pergamonmuseum: verificare prima se ha riaperto. Se no, usare il tempo per East Side Gallery con calma.',
    },
    {
      time: '16:00',
      title: 'East Side Gallery',
      description: '1,3 km di Muro rimasto in piedi, dipinto da 118 artisti nel 1990. Tratto più lungo sopravvissuto. Gratuito, all\'aperto, sempre accessibile.',
      location: 'East Side Gallery (Warschauer Straße o Ostbahnhof)',
      highlight: 'Il bacio tra Brežnev e Honecker - opera simbolo. Percorribile a piedi in 30-40 minuti.',
    },
    {
      time: '17:30',
      title: 'Kreuzberg',
      description: 'Attraversare l\'Oberbaumbrücke (ponte di mattoni rossi a due piani) verso il quartiere multiculturale. Street art, negozi indipendenti, vita notturna interessante.',
      location: 'Kreuzberg (Bergmannstraße, Oranienstraße)',
    },
    {
      time: '20:00',
      title: 'Cena e serata',
      description: 'Kreuzberg ha di tutto: cucina turca, mediorientale, vietnamita, vegana. Prezzi bassi. Bar con birra artigianale lungo Oranienstraße e Schlesische Straße.',
      location: 'Kreuzberg',
    },
  ],

  day2Options: [
    {
      name: 'Se piove: Museumsinsel',
      weather: 'brutto tempo',
      description: 'Cinque musei, si passa la giornata al coperto.',
      duration: 'Giornata intera',
    },
    {
      name: 'Se piove: Topographie des Terrors',
      weather: 'brutto tempo',
      description: 'Museo gratuito sul sito del quartier generale della Gestapo. Potente e ben fatto.',
      duration: '2-3 ore',
    },
    {
      name: 'Se piove: DDR Museum',
      weather: 'brutto tempo',
      description: 'La vita quotidiana nella Germania Est. Interattivo, adatto anche se stanchi.',
      duration: '2 ore',
    },
    {
      name: 'Se piove: Berliner Unterwelten',
      weather: 'brutto tempo',
      description: 'Visite guidate nei bunker sotterranei della città. Da prenotare.',
      duration: '1,5-2 ore',
    },
  ],

  restaurants: [
    { name: 'Konnopke\'s Imbiss', zone: 'Prenzlauer Berg', when: 'Currywurst storica, sotto la ferrovia' },
    { name: 'Mustafa\'s Gemüse Kebap', zone: 'Kreuzberg', when: 'Döner leggendario, code lunghe' },
    { name: 'Markthalle Neun', zone: 'Kreuzberg', when: 'Mercato coperto, street food di qualità' },
    { name: 'Hackescher Markt', zone: 'Mitte', when: 'Zona ristoranti, comoda dopo i musei' },
    { name: 'Prater Garten', zone: 'Prenzlauer Berg', when: 'Il biergarten più antico di Berlino' },
  ],

  checklist: [
    'Umweltplakette (bollino verde) ordinato online - CRITICO, almeno 2 settimane prima',
    'Cupola del Reichstag prenotata su bundestag.de (gratis ma obbligatorio)',
    'Verificare se Pergamonmuseum ha riaperto',
    'Hotel con parcheggio o garage in centro',
    'App BVG Fahrinfo scaricata',
    'Contanti: €50-100 in tasca - Berlino usa molto cash',
  ],

  notes: [
    { title: 'Umweltplakette', content: '🔴 OBBLIGATORIO! Bollino verde ambientale. Senza: multa €100. Si ordina online con almeno 2 settimane di anticipo, o si compra nelle officine autorizzate.' },
    { title: 'Reichstag', content: 'Va prenotato gratis sul sito bundestag.de con nome e documento. Se dimentico, provare al Service Center vicino all\'ingresso per posti last minute (non garantito).' },
    { title: 'Pagamenti', content: 'Berlino usa sorprendentemente contanti. Molti locali, chioschi e ristoranti non prendono carte. Tenere sempre €50-100 in tasca.' },
    { title: 'Distanze', content: 'Berlino è vastissima (891 km² - nove volte Monaco). Anche tra due punti "vicini" ci possono essere 3 km. Usare la metro senza esitare.' },
    { title: 'Domenica', content: 'Negozi chiusi come in tutta la Germania, ma musei e ristoranti aperti. Supermercati nelle stazioni fanno eccezione.' },
    { title: 'Mince', content: '5-10%, si dice il totale al cameriere prima di pagare.' },
    { title: 'Meteo estivo', content: '20-26°C (più fresco di Monaco). Temporali frequenti nel pomeriggio. Portare giacca leggera.' },
  ],
}

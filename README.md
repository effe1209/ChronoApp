# ⌚ ChroneApp - La tua collezione di orologi digitale
ChroneApp è un'applicazione web moderna e responsiva progettata per gli appassionati di orologi che desiderano catalogare, gestire e interagire con la propria collezione personale in modo intuitivo e visivamente accattivante.

## 🚀 Funzionalità Principali
- Gestione e Visualizzazione della Collezione
- Registrazione e Accesso Utente: Autenticazione sicura tramite Supabase.
- Gestione Orologi: Inserimento, modifica ed eliminazione degli orologi dalla collezione.
- Vista Dinamica: Alternanza tra la visualizzazione a Griglia, con la possibilità di selezionare gli orologi preferiti, e la visualizzazione a Carosello.
- Organizzazione Avanzata: Ordinamento automatico per Orologi Preferiti e per nome.

## Funzioni Intelligenti e Interattive
- Valore Totale: Calcolo in tempo reale del valore complessivo della collezione.
- Orologio del Giorno: Selezione casuale di un orologio dalla collezione per suggerire cosa indossare.
- Completa l'Outfit (Color Matching): Analisi del colore predominante di un'immagine caricata dall'utente (es. un outfit) e suggerimento degli orologi in collezione con il colore più simile.

## Interfaccia Utente e Performance
- Modalità Scuro/Chiaro: Toggle dinamico della Dark Mode.
- Effetti Visivi: Effetto "frosted glass" sulla barra di navigazione.
- Orologio Analogico Funzionante: Un orologio analogico in CSS e JavaScript puro che mostra l'ora attuale.
- Brand Scroller: Liste di marchi in scorrimento continuo per un tocco estetico.

## 🛠️ Stack Tecnologico

| Categoria | Tecnologia | Note |
| :--- | :--- | :--- |
| **Frontend** | **React** (Hooks, `useMemo`, `useTransition`) | Sviluppo dell'interfaccia utente. |
| **Styling/Animazioni** | **Framer Motion** | Per animazioni fluide del layout (effetto FLIP nel cambio di ordine dei preferiti). |
| **Carosello** | **Swiper.js (via React)** | Componente leader per caroselli e slider. |
| **Backend/DB** | **Supabase** | Backend-as-a-Service (Auth, Database PostgreSQL, Storage). |
| **Storage** | **Supabase Storage** | Gestione dello storage delle immagini. |
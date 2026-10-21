import React from 'react';
import WatchAnalytics from './WatchAnalytics';

// Modale per mostrare le statistiche (WatchAnalytics)
const StatsModal = ({ isVisible, setIsVisible, watches, isDark }) => {

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay statistics-overlay" onClick={() => setIsVisible(false)}>
      <section
        className="statistics-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="statistics-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="statistics-heading">
          <div>
            <span className="statistics-eyebrow">PANORAMICA</span>
            <h2 id="statistics-title">Statistiche collezione</h2>
            <p>Un riepilogo visivo dei tuoi orologi e delle loro caratteristiche.</p>
          </div>
          <div className="statistics-total" aria-label={`${watches.length} orologi in collezione`}>
            <strong>{watches.length}</strong>
            <span>{watches.length === 1 ? 'orologio' : 'orologi'}</span>
          </div>
        </header>

        <WatchAnalytics watches={watches} isDark={isDark} />

        <footer className="statistics-footer">
          <span>I dati si aggiornano con la tua collezione.</span>
          <button type="button" onClick={() => setIsVisible(false)}>Chiudi</button>
        </footer>
      </section>
    </div>
  );
};

export default StatsModal;

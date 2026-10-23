import React, { useEffect } from 'react';
import WatchAnalytics from './WatchAnalytics';

// Modale per mostrare le statistiche (WatchAnalytics)
const StatsModal = ({ isVisible, setIsVisible, watches, isDark }) => {
  useEffect(() => {
    if (!isVisible) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsVisible(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, setIsVisible]);

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
            <p>Valore, composizione e condizioni dei tuoi segnatempo in un unico spazio.</p>
          </div>
          <div className="statistics-heading-actions">
            <div className="statistics-total" aria-label={`${watches.length} orologi in collezione`}>
              <strong>{watches.length}</strong>
              <span>{watches.length === 1 ? 'orologio' : 'orologi'}</span>
            </div>
            <button
              className="statistics-close"
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Chiudi statistiche"
            >
              ×
            </button>
          </div>
        </header>

        <WatchAnalytics watches={watches} isDark={isDark} />

        <footer className="statistics-footer">
          <span>I valori riflettono i dati inseriti nelle schede degli orologi.</span>
          <button type="button" onClick={() => setIsVisible(false)}>Chiudi</button>
        </footer>
      </section>
    </div>
  );
};

export default StatsModal;

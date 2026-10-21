import React, { useEffect } from 'react';
import WatchDetails from './WatchDetails';

// Modale semplice per l'"Orologio del Giorno"
const DayWatchModal = ({ isVisible, setIsVisible, selectedWatch, modalTitle }) => {

  useEffect(() => {
    if (isVisible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => { document.body.style.overflow = 'unset'; };
  }, [isVisible]);

  if (!isVisible || !selectedWatch) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={() => setIsVisible(false)}>
      <div className="day-watch-modal watch-detail-modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-content watch-detail-card" role="dialog" aria-modal="true" aria-labelledby="day-watch-title">
          <header className="watch-detail-heading">
            <div>
              <span className="watch-detail-eyebrow">SELEZIONE DEL GIORNO</span>
              <h2 id="day-watch-title">{modalTitle || 'Orologio del giorno'}</h2>
              <p className="watch-detail-subtitle">{selectedWatch.name}</p>
            </div>
          </header>

          <WatchDetails watch={selectedWatch} />

          <footer className="watch-detail-footer">
            <button type="button" className="funzioniButton" onClick={() => setIsVisible(false)}>Chiudi</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DayWatchModal;


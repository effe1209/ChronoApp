import React from 'react';
import WatchAnalytics from './WatchAnalytics';

// Modale per mostrare le statistiche (WatchAnalytics)
const StatsModal = ({ isVisible, setIsVisible, watches }) => {

  if (!isVisible) {
    return null;
  }

  // 1. Rimuoviamo il Fragment (<>) e usiamo l'overlay come contenitore principale.
  //    Aggiungiamo l'onClick per chiudere.
  return (
    <div className="modal-overlay" onClick={() => setIsVisible(false)}>
      
      {/* 2. Il contenuto del modale (infoView-statistiche) ora è DENTRO l'overlay.
           Aggiungiamo e.stopPropagation() per evitare che il click si propaghi
           all'overlay e chiuda il modale. 
      */}
      <div className="infoView-statistiche" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content-statistiche">
          <div className="TileInfo">
            <h4>Statistiche Collezione</h4>
          </div>
          
          <WatchAnalytics watches={watches} />

          <div className="buttonForm">
            {/* Questo bottone funziona già correttamente */}
            <button className="funzioniButton" onClick={() => setIsVisible(false)}>Chiudi</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default StatsModal;
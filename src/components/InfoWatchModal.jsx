import { Weight } from 'lucide-react';
import React, { useEffect } from 'react'; // 1. Aggiunto import useEffect

const InfoWatchModal = ({ isVisible, setIsVisible, selectedWatch }) => {

  // 2. L'hook deve stare QUI, prima di qualsiasi return condizionale
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'; // Blocca
    } else {
      document.body.style.overflow = 'unset'; // Sblocca se isVisible diventa false ma il comp è montato
    }

    // Cleanup: sblocca sempre quando il componente viene distrutto
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  // 3. Ora puoi fare il controllo per uscire se non c'è nulla da mostrare
  if (!isVisible || !selectedWatch) {
    return null;
  }
  
  const featuresString = selectedWatch.caratteristiche && selectedWatch.caratteristiche.length > 0
    ? selectedWatch.caratteristiche.map(feature => feature.nome_caratteristica).join(", ")
    : "Nessuna";

  return (
      <div className="modal-overlay">
      <div className="infoView">
        <div className="modal-content">
          <div className="TileInfo">
            {/* Qui userai il font Playfair Display che abbiamo impostato prima */}
            <h3>{selectedWatch.name}</h3>
          </div>
          <img 
            src={selectedWatch.imageUrl || "orologio_back.svg"} 
            alt={selectedWatch.name} 
            className="modal-image" 
            loading="lazy"
            onError={(e) => { e.target.src = "orologio_back.svg"; }}
          />
          {/* Qui dentro userai il Minork Sans Light per i p e span */}
          <div className="paragrafi">
            <p><strong>Marca:</strong> <span className="InfoColorInfo">{selectedWatch.brand}</span></p>
            <p><strong>Movimento:</strong> <span className="InfoColorInfo">{selectedWatch.movement}</span></p>
            <p><strong>Anno:</strong> <span className="InfoColorInfo">{selectedWatch.year}</span></p>
            <p><strong>Colore:</strong> <span className="InfoColorInfo">{selectedWatch.color || 'N/D'}</span></p>
            <p><strong>Prezzo di Acquisto:</strong> <span className="InfoColorInfo">{selectedWatch.money ? `${selectedWatch.money} €` : 'N/D'}</span></p>
            <p><strong>Caratteristiche Aggiuntive: </strong> <span className="InfoColorInfo">{featuresString}</span></p>
            <p style={{fontSize: '16px'}}><strong>Note: </strong> <span className="InfoColorInfo">{selectedWatch.note || "Nessuna nota"}</span></p>
          </div>
          <div className="buttonForm">
            <button className="funzioniButton" onClick={() => setIsVisible(false)}>Chiudi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWatchModal;
import React from 'react';

// Modale per mostrare le informazioni dettagliate di un orologio
const InfoWatchModal = ({ isVisible, setIsVisible, selectedWatch }) => {

  if (!isVisible || !selectedWatch) {
    return null;
  }
  
  // Estrae e formatta le caratteristiche
  const featuresString = selectedWatch.caratteristiche && selectedWatch.caratteristiche.length > 0
    ? selectedWatch.caratteristiche.map(feature => feature.nome_caratteristica).join(", ")
    : "Nessuna";

  return (
      <div className="modal-overlay">
      <div className="infoView">
        <div className="modal-content">
          <div className="TileInfo">
            <h3>{selectedWatch.name}</h3>
          </div>
          <img 
            src={selectedWatch.imageUrl || "orologio_back.svg"} 
            alt={selectedWatch.name} 
            className="modal-image" 
            loading="lazy"
            onError={(e) => { e.target.src = "orologio_back.svg"; }}
          />
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


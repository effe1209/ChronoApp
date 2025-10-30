import React from 'react';

// Modale semplice per l'"Orologio del Giorno"
const DayWatchModal = ({ isVisible, setIsVisible, selectedWatch, modalTitle }) => {

  if (!isVisible || !selectedWatch) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{modalTitle}</h2>
        <img 
          src={selectedWatch.imageUrl || "orologio_back.svg"} 
          alt={selectedWatch.name} 
          className="modal-image" 
          loading="lazy"
          onError={(e) => { e.target.src = "orologio_back.svg"; }}
        />
        <p><strong>Nome:</strong> {selectedWatch.name}</p>
        <p><strong>Marca:</strong> {selectedWatch.brand}</p>
        <p><strong>Anno:</strong> {selectedWatch.year}</p>
        <p><strong>Movimento:</strong> {selectedWatch.movement}</p>
        <p><strong>Colore:</strong> {selectedWatch.color || 'N/D'}</p>
        <div className="functionButton">
          <button className="funzioniButton" onClick={() => setIsVisible(false)}>Chiudi</button>
        </div>
      </div>
    </div>
  );
};

export default DayWatchModal;


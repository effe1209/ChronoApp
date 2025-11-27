import React, { useEffect } from 'react';
import FavoriteButton from './FavoriteButton';

const InfoWatchModal = ({ 
  isVisible, 
  setIsVisible, 
  selectedWatch, 
  handleDeleteWatch, 
  handleFavoriteToggle 
}) => {

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible || !selectedWatch) {
    return null;
  }
  
  const featuresString = selectedWatch.caratteristiche && selectedWatch.caratteristiche.length > 0
    ? selectedWatch.caratteristiche.map(feature => feature.nome_caratteristica).join(", ")
    : "Nessuna";

  return (
    <div className="modal-overlay" onClick={() => setIsVisible(false)}>
      <div className="infoView" onClick={(e) => e.stopPropagation()}> 
        
        {/* 'position: relative' è fondamentale per posizionare i tasti agli angoli */}
        <div className="modal-content" style={{ position: 'relative' }}>
          
          {/* --- TASTO PREFERITI (Alto a Sinistra) --- */}
          <div className="modal-favorite-pos">
             <FavoriteButton
                isFavorite={selectedWatch.isFavorite}
                onToggle={() => handleFavoriteToggle(selectedWatch.id)}
             />
          </div>
          
          {/* --- TASTO CESTINO (Alto a Destra) --- */}
          <button 
            className="modal-delete-btn"
            onClick={() => {
                // Aggiunto controllo di sicurezza
                if(window.confirm("Sei sicuro di voler eliminare questo orologio definitivamente?")) {
                    handleDeleteWatch(selectedWatch.id, selectedWatch.imageUrl); 
                    setIsVisible(false);
                }
            }}
            aria-label="Elimina orologio"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
          
          {/* --- CONTENUTO --- */}
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
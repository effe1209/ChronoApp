import React from 'react';
import InfiniteMenu from './InfiniteMenu';
import './componentCSS/InfiniteMenu.css'; // Importa il CSS che abbiamo creato sopra

const InfiniteGridModal = ({ isVisible, setIsVisible,handleInfoWatch, watches }) => {

  if (!isVisible) {
    return null;
  }

  const handleLinkClick = (watch) => {
    handleInfoWatch(watch);
    setIsVisible(false);
  };


  // Prepariamo i dati per il menu
  const formattedItems = watches.map(watch => ({
    id: watch.id,
    image: watch.imageUrl || 'orologio_back.svg',
    title: watch.name,
    description: watch.brand,
    // link: handleLinkClick(watch) // Usa la funzione passata per mostrare le info
    link: watch.imageUrl || 'orologio_back.svg',
  }));

  return (
    <div className="modal-overlay">
      {/* AGGIUNTO 'grid-mode' PER FORZARE LE DIMENSIONI GRANDI */}
      <div className="infoView grid-mode">
        <div className="modal-content">
          
          <div className="TileInfo" style={{ marginBottom: '10px', color: 'white' }}>
            <h3>Galleria Orologi</h3>
          </div>

          {/* Contenitore Griglia che si espande */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', width: '100%' }}>
             <InfiniteMenu items={formattedItems} />
          </div>

          <div className="buttonForm">
            <button className="funzioniButton close-grid-btn" onClick={() => setIsVisible(false)}>
              Chiudi Galleria
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfiniteGridModal;
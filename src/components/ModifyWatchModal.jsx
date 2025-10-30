import React from 'react';
import FeatureCheckboxList from './FeatureCheckboxList'; // Riutilizza il componente

// Il modale di Modifica, che è un form complesso
const ModifyWatchModal = ({
  isVisible,
  setIsVisible,
  updatedWatch,
  setUpdatedWatch,
  handleModifyImageChange,
  fileInputRef,
  isDetailsMenuOpenMOD,
  setIsDetailsMenuOpenMOD,
  isNotesVisibleMOD,
  setIsNotesVisibleMOD,
  allFeaturesList,
  handleUpdatedFeatureChange,
  handleSaveChanges
}) => {

  if (!isVisible) {
    return null;
  }
  
  // Determina quale immagine mostrare:
  // 1. L'URL dell'immagine appena caricata (da updatedWatch.imageUrl se è un blob URL)
  // 2. L'URL dell'immagine esistente (da updatedWatch.imageUrl se è un URL supabase)
  // 3. Un'immagine di fallback
  const previewImageUrl = (updatedWatch.imageUrl && updatedWatch.imageUrl.startsWith('blob:')) 
    ? updatedWatch.imageUrl 
    : (updatedWatch.imageUrl || "orologio_back.svg");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modifica Orologio</h2>
        
        <img 
          src={previewImageUrl} 
          alt="Anteprima" 
          className="modal-image" 
          loading="lazy"
          onError={(e) => { e.target.src = "orologio_back.svg"; }}
        />
        
        <div className="formModify" style={{ fontFamily: "minork" }}>
          <div>
            <label>Nome: </label>
            <input
              type="text"
              value={updatedWatch.name}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, name: e.target.value })}
            />
          </div>

          <div>
            <label>Marca: </label>
            <input
              type="text"
              value={updatedWatch.brand}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, brand: e.target.value })}
            />
          </div>

          <div>
            <label>Anno: </label>
            <input
              type="text"
              value={updatedWatch.year}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, year: e.target.value })}
            />
          </div>

          <div>
            <label>Prezzo: </label>
          <input
            type="number"
            value={updatedWatch.money || ''}
            onChange={(e) => setUpdatedWatch({ ...updatedWatch, money: e.target.value ? Number(e.target.value) : null })}
          />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%" }}>
            <div className="selectMenu">
              <label>
                <strong>Movimento: </strong>
              </label>
              <div style={{ marginBottom: "10px" }}></div>
              <select
                value={updatedWatch.movement}
                onChange={(e) => setUpdatedWatch({ ...updatedWatch, movement: e.target.value })}
                style={{ textAlign: "center", display: "flex", border: "1px solid green" }}
              >
                <option className="menuTendina" value="">Seleziona il movimento</option>
                <option className="menuTendina" value="Automatico">Automatico</option>
                <option className="menuTendina" value="Carica Manuale">Carica Manuale</option>
                <option className="menuTendina" value="Quarzo">Quarzo</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "10px" }}></div>

          <label>
            <strong>Colore: </strong>
          </label>
          <div className="color-picker-container">
            <button
              type="button" 
              className="color-picker-button"
              style={{ backgroundColor: updatedWatch.color || "#ffffff", border: "1px solid green" }}
              tabIndex="-1" 
            >
              🎨 Scegli un colore
            </button>
            <input
              type="color"
              id="color-modify" // ID univoco
              className="color-input-overlay"
              value={updatedWatch.color || '#ffffff'}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, color: e.target.value })}
            />
            {updatedWatch.color && <p className="selected-color">Colore selezionato: {updatedWatch.color}</p>}
          </div>

          {/* Caricamento immagine */}
          <div className="upload-container">
            <input
              type="file"
              accept="image/*"
              onChange={handleModifyImageChange} // Usa il gestore per la modifica
              ref={fileInputRef}
              className="hidden-input"
              id="file-upload-modify" // ID univoco
            />
            <button type="button" className="upload-button" onClick={() => fileInputRef.current.click()}>
              📸 Sostituisci immagine
            </button>
          </div>

          {/* Pulsante Dettagli */}
          <div style={{ marginBottom: "20px", width: "100%" }}>
            <button
              type="button"
              className="details-toggle-button"
              onClick={() => setIsDetailsMenuOpenMOD(!isDetailsMenuOpenMOD)}
            >
              {isDetailsMenuOpenMOD ? 'Chiudi Dettagli ▴' : 'Caratteristiche Aggiuntive ▾'}
            </button>
          </div>

          {/* Lista Checkbox Caratteristiche (riutilizzata) */}
          {isDetailsMenuOpenMOD && (
            <FeatureCheckboxList
              featuresList={allFeaturesList}
              selectedFeatures={updatedWatch.features}
              onChange={handleUpdatedFeatureChange}
            />
          )}

          {/* Pulsante Note */}
          <div style={{ margin: "20px 0 10px 0", width: "100%" }}>
            <button
              type="button"
              className="details-toggle-button"
              onClick={() => setIsNotesVisibleMOD(!isNotesVisibleMOD)}
            >
              {isNotesVisibleMOD ? 'Chiudi Note ▴' : 'Apri Note ▾'}
            </button>
          </div>

          {/* Textarea Note */}
          {isNotesVisibleMOD && (
            <div>
              <textarea
                placeholder="Note aggiuntive..."
                className="notes-textarea"
                value={updatedWatch.note}
                onChange={(e) =>
                setUpdatedWatch({ ...updatedWatch, note: e.target.value })
              }
            />
          </div>
          )}
          <div style={{ marginBottom: "20px", width: "100%" }}></div>
        </div>

        <div className="buttonForm">
          <button className="funzioniButton" onClick={handleSaveChanges}>Salva</button>
          <button className="funzioniButton" onClick={() => setIsVisible(false)}>Chiudi</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyWatchModal;


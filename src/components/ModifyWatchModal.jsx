import React from 'react';
import FeatureCheckboxList from './FeatureCheckboxList'; // Riutilizza il componente
import WatchOccasionSelector from './WatchOccasionSelector';

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
  featuresLoading,
  featuresError,
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
    <div className="modal-overlay modify-watch-overlay">
      <div className="modal-content modify-watch-modal">
        <h2>Modifica Orologio</h2>
        
        <img 
          src={previewImageUrl} 
          alt="Anteprima" 
          className="modal-image" 
          loading="lazy"
          onError={(e) => { e.target.src = "orologio_back.svg"; }}
        />
        
        <div className="formModify modify-watch-form">
          <div className="modify-watch-field">
            <label>Nome: </label>
            <input
              type="text"
              value={updatedWatch.name}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, name: e.target.value })}
            />
          </div>

          <div className="modify-watch-field">
            <label>Marca: </label>
            <input
              type="text"
              value={updatedWatch.brand}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, brand: e.target.value })}
            />
          </div>

          <div className="modify-watch-field">
            <label>Anno: </label>
            <input
              type="text"
              value={updatedWatch.year}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, year: e.target.value })}
            />
          </div>

          <div className="modify-watch-field">
            <label>Prezzo: </label>
            <input
              type="number"
              value={updatedWatch.money || ''}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, money: e.target.value ? Number(e.target.value) : null })}
            />
          </div>

          <div className="modify-watch-field">
            <label htmlFor="modify-watch-condition">Condizione (scala 1–10)</label>
            <select
              id="modify-watch-condition"
              value={updatedWatch.condition_rating ?? ''}
              onChange={(event) => setUpdatedWatch({
                ...updatedWatch,
                condition_rating: event.target.value ? Number(event.target.value) : null,
              })}
            >
              <option value="">Non valutata</option>
              {Array.from({ length: 10 }, (_, index) => index + 1).map((rating) => (
                <option key={rating} value={rating}>
                  {rating}{rating === 1 ? ' · Da revisionare' : rating === 10 ? ' · Pari al nuovo' : ''}
                </option>
              ))}
            </select>
            <small className="condition-rating-help">1 = da revisionare · 10 = pari al nuovo</small>
          </div>

          <div className="modify-watch-field">
            <label><strong>Movimento</strong></label>
            <select
              value={updatedWatch.movement}
              onChange={(e) => setUpdatedWatch({ ...updatedWatch, movement: e.target.value })}
            >
              <option value="">Seleziona il movimento</option>
              <option value="Automatico">Automatico</option>
              <option value="Carica Manuale">Carica Manuale</option>
              <option value="Quarzo">Quarzo</option>
            </select>
          </div>

          <div className="modify-watch-field">
            <label><strong>Colore</strong></label>
            <div className="color-picker-container">
              <button
                type="button"
                className="color-picker-button"
                style={{ backgroundColor: updatedWatch.color || ""}}
                tabIndex="-1"
              >
                🎨 Scegli un colore
              </button>
              <input
                type="color"
                id="color-modify"
                className="color-input-overlay"
                value={updatedWatch.color || ''}
                onChange={(e) => setUpdatedWatch({ ...updatedWatch, color: e.target.value })}
              />
              {updatedWatch.color && <p className="selected-color">Colore selezionato: {updatedWatch.color}</p>}
            </div>
          </div>

          <div className="modify-watch-field modify-watch-field--wide">
            <WatchOccasionSelector
              idPrefix="modify-watch-occasion"
              value={updatedWatch.occasions}
              onChange={(occasions) => setUpdatedWatch({ ...updatedWatch, occasions })}
            />
          </div>

          <div className="upload-container modify-watch-field modify-watch-field--wide">
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
          <div className="modify-watch-field modify-watch-field--wide">
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
            <div className="modify-watch-field modify-watch-field--wide">
              <FeatureCheckboxList
                featuresList={allFeaturesList}
                selectedFeatures={updatedWatch.features}
                onChange={handleUpdatedFeatureChange}
                isLoading={featuresLoading}
                error={featuresError}
              />
            </div>
          )}

          <fieldset className="modify-watch-field modify-watch-field--wide watch-equipment-fields">
            <legend>Dotazione e garanzia</legend>
            <div className="watch-equipment-options watch-equipment-fields__wide">
              <label className={`watch-equipment-check${updatedWatch.has_box ? ' is-selected' : ''}`}>
                <input type="checkbox" checked={Boolean(updatedWatch.has_box)} onChange={(e) => setUpdatedWatch({ ...updatedWatch, has_box: e.target.checked })} />
                <span>Scatola originale</span>
              </label>
              <label className={`watch-equipment-check${updatedWatch.has_papers ? ' is-selected' : ''}`}>
                <input type="checkbox" checked={Boolean(updatedWatch.has_papers)} onChange={(e) => setUpdatedWatch({ ...updatedWatch, has_papers: e.target.checked })} />
                <span>Documenti e libretti</span>
              </label>
            </div>
            <label className="modify-watch-field modify-watch-field--wide">
              <span>Altra dotazione</span>
              <input type="text" maxLength="500" value={updatedWatch.accessories || ''} onChange={(e) => setUpdatedWatch({ ...updatedWatch, accessories: e.target.value })} />
            </label>
            <label className={`watch-equipment-check modify-watch-field--wide${updatedWatch.has_warranty ? ' is-selected' : ''}`}>
              <input type="checkbox" checked={Boolean(updatedWatch.has_warranty)} onChange={(e) => setUpdatedWatch({ ...updatedWatch, has_warranty: e.target.checked })} />
              <span>È coperto da garanzia</span>
            </label>
            {updatedWatch.has_warranty && (
              <>
                <label className="modify-watch-field">
                  <span>Inizio garanzia</span>
                  <input type="date" value={updatedWatch.warranty_start || ''} onChange={(e) => setUpdatedWatch({ ...updatedWatch, warranty_start: e.target.value || null })} />
                </label>
                <label className="modify-watch-field">
                  <span>Scadenza garanzia</span>
                  <input type="date" value={updatedWatch.warranty_end || ''} onChange={(e) => setUpdatedWatch({ ...updatedWatch, warranty_end: e.target.value || null })} />
                </label>
                <label className="modify-watch-field modify-watch-field--wide">
                  <span>Rivenditore o centro assistenza</span>
                  <input type="text" maxLength="160" value={updatedWatch.warranty_provider || ''} onChange={(e) => setUpdatedWatch({ ...updatedWatch, warranty_provider: e.target.value })} />
                </label>
              </>
            )}
          </fieldset>

          {/* Pulsante Note */}
          <div className="modify-watch-field modify-watch-field--wide">
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
            <div className="modify-watch-field modify-watch-field--wide">
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


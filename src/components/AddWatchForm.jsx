import React from 'react';
import FeatureCheckboxList from './FeatureCheckboxList'; // Importa il nuovo componente
import Stepper, { Step } from './Stepper';


// Questo è solo il Form per aggiungere un orologio
// Riceve tutto lo stato e i gestori da App.jsx
const AddWatchForm = ({
  showForm,
  newWatch,
  setNewWatch,
  handleImageChange,
  fileInputRef,
  isDetailsMenuOpen,
  setIsDetailsMenuOpen,
  isNotesVisible,
  setIsNotesVisible,
  allFeaturesList,
  featuresLoading,
  featuresError,
  handleFeatureChange,
  handleAddWatch,
  handleCancel,
  isDark
}) => {

  // Se non dobbiamo mostrarlo, non renderizziamo nulla
  if (!showForm) {
    return null;
  }

  return (
    <section className="add-watch-section" aria-labelledby="add-watch-title">
      <header className="add-watch-heading">
        <p className="add-watch-eyebrow">LA TUA COLLEZIONE</p>
        <h2 id="add-watch-title">Aggiungi un orologio</h2>
        <p>Completa la scheda un passaggio alla volta e arricchisci la tua collezione.</p>
      </header>
      <div className="form add-watch-form">
        <Stepper
          initialStep={1}
          onFinalStepCompleted={handleAddWatch}
          onCancel={handleCancel}
          backButtonText="Indietro"
          nextButtonText="Avanti"
          isDark={isDark}
        >
        <Step>
          <div className="add-watch-field">
            <label htmlFor="add-watch-name">Nome</label>
            <input
              id="add-watch-name"
              type="text"
              placeholder="Es. Speedmaster Professional"
              value={newWatch.name}
              onChange={(e) => setNewWatch({ ...newWatch, name: e.target.value })}
            />
          </div>
        </Step>
        <Step>
          <div className="add-watch-field">
            <label htmlFor="add-watch-brand">Marca</label>
            <input
              id="add-watch-brand"
              type="text"
              placeholder="Es. Omega"
              value={newWatch.brand}
              onChange={(e) => setNewWatch({ ...newWatch, brand: e.target.value })}
            />
          </div>
        </Step>
        <Step>
          <div className="add-watch-field">
            <label htmlFor="add-watch-year">Anno</label>
            <input
              id="add-watch-year"
              type="number"
              placeholder="Es. 2024"
              value={newWatch.year}
              onChange={(e) => setNewWatch({ ...newWatch, year: e.target.value })}
            />
          </div>
        </Step>
        <Step>
          <div className="add-watch-field">
            <label htmlFor="add-watch-price">Prezzo di acquisto</label>
            <input
              id="add-watch-price"
              type="number"
              placeholder="Importo in euro"
              value={newWatch.money || ''}
              onChange={(e) => setNewWatch({ ...newWatch, money: e.target.value ? Number(e.target.value) : null })}
            />
          </div>
        </Step>
        <Step>
          <div className="add-watch-step-heading">
            <h3>Caratteristiche</h3>
            <p>Scegli il movimento e il colore del tuo orologio.</p>
          </div>
          <div className="add-watch-feature-fields">
            <div className="add-watch-control">
              <label htmlFor="add-watch-movement">Movimento</label>
              <select
                id="add-watch-movement"
                value={newWatch.movement}
                onChange={(e) => setNewWatch({ ...newWatch, movement: e.target.value })}
              >
                <option value="">Seleziona il movimento</option>
                <option value="Automatico">🌀 Automatico</option>
                <option value="Carica Manuale">🤏 Carica manuale</option>
                <option value="Quarzo">🔋 Quarzo</option>
              </select>
            </div>
            <div className="add-watch-control">
              <label htmlFor="add-watch-color">Colore</label>
              <div className="color-picker-container">
                <button
                  type="button"
                  className="color-picker-button"
                  style={{ backgroundColor: newWatch.color }}
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  🎨 Scegli un colore
                </button>
                <input
                  type="color"
                  id="add-watch-color"
                  className="color-input-overlay"
                  aria-label="Seleziona il colore dell'orologio"
                  value={newWatch.color || '#ffffff'}
                  onChange={(e) => setNewWatch({ ...newWatch, color: e.target.value })}
                />
                {newWatch.color && <p className="selected-color">Colore selezionato: {newWatch.color}</p>}
              </div>
            </div>
          </div>
        </Step>
        
      

        <Step>
          <div className="add-watch-step-heading">
            <h3>Immagine</h3>
            <p>Aggiungi una foto per riconoscere subito il tuo segnatempo.</p>
          </div>
          <div className="upload-container add-watch-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden-input"
              id="file-upload-add"
              multiple={false}
            />
            <button type="button" className="upload-button" onClick={() => fileInputRef.current.click()}>
              📸 Seleziona un'immagine
            </button>
          </div>
          {newWatch.image && typeof newWatch.image === 'object' && (
            <img
              src={URL.createObjectURL(newWatch.image)}
              alt="Anteprima dell'orologio"
              className="preview-image add-watch-preview"
              onLoad={() => URL.revokeObjectURL(newWatch.image)}
            />
          )}
        </Step>
        <Step>
          <div className="add-watch-step-heading">
            <h3>Dettagli tecnici</h3>
            <p>Se vuoi, seleziona le caratteristiche che descrivono il tuo orologio.</p>
          </div>
          <div className="add-watch-step-action">
            <button
              type="button"
              className="details-toggle-button"
              onClick={() => setIsDetailsMenuOpen(!isDetailsMenuOpen)}
              aria-expanded={isDetailsMenuOpen}
            >
              {isDetailsMenuOpen ? 'Chiudi dettagli ▴' : 'Scegli le caratteristiche ▾'}
            </button>
          </div>
          {isDetailsMenuOpen && (
            <FeatureCheckboxList
              featuresList={allFeaturesList}
              selectedFeatures={newWatch.features}
              onChange={handleFeatureChange}
              isLoading={featuresLoading}
              error={featuresError}
            />
          )}
        </Step>

        <Step>
          <div className="add-watch-step-heading">
            <h3>Note personali</h3>
            <p>Annota la storia, la data di acquisto o altri dettagli che vuoi ricordare.</p>
          </div>
          <div className="add-watch-step-action">
            <button
              type="button"
              className="details-toggle-button"
              onClick={() => setIsNotesVisible(!isNotesVisible)}
              aria-expanded={isNotesVisible}
            >
              {isNotesVisible ? 'Nascondi le note ▴' : 'Aggiungi una nota ▾'}
            </button>
          </div>
          {isNotesVisible && (
            <textarea
              placeholder="Note aggiuntive (es. data acquisto, storia, difetti...)"
              className="notes-textarea"
              value={newWatch.note}
              onChange={(e) => setNewWatch({ ...newWatch, note: e.target.value })}
              aria-label="Note aggiuntive sull'orologio"
            />
          )}
        </Step>
        </Stepper>
      </div>
    </section>
  );
};

export default AddWatchForm;


import React from 'react';
import FeatureCheckboxList from './FeatureCheckboxList'; // Importa il nuovo componente

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
  handleFeatureChange,
  handleAddWatch,
  handleCancel
}) => {

  // Se non dobbiamo mostrarlo, non renderizziamo nulla
  if (!showForm) {
    return null;
  }

  return (
    <>
      <div className="titleList">
        <h3>Aggiungi un nuovo orologio</h3>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Nome"
          value={newWatch.name}
          onChange={(e) =>
            setNewWatch({ ...newWatch, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Marca"
          value={newWatch.brand}
          onChange={(e) =>
            setNewWatch({ ...newWatch, brand: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Anno"
          value={newWatch.year}
          onChange={(e) =>
            setNewWatch({ ...newWatch, year: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Prezzo di Acquisto (€)"
          value={newWatch.money || ''} // Usa '' per input controllato
          onChange={(e) =>
            setNewWatch({ ...newWatch, money: e.target.value ? Number(e.target.value) : null })
          }
        />
        <div style={{ marginBottom: "10px" }}></div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%"}}>
          <div className="selectMenu">
            <label>
              <strong>Movimento: </strong>
            </label>
            <div style={{ marginBottom: "10px" }}></div>
            <select
              value={newWatch.movement}
              onChange={(e) => setNewWatch({ ...newWatch, movement: e.target.value })}
              style={{textAlign: "center", display: "flex"}}
            >
              <option className="menuTendina" value="">Seleziona il movimento</option>
              <option className="menuTendina" value="Automatico">Automatico</option>
              <option className="menuTendina" value="Carica Manuale">Carica Manuale</option>
              <option className="menuTendina" value="Quarzo">Quarzo</option>
            </select>
          </div>
          <label>
          <strong>Colore: </strong>
        </label>
        <div className="color-picker-container">
          <button
            type="button" 
            className="color-picker-button"
            style={{ backgroundColor: newWatch.color || ''}}
            tabIndex="-1" 
          >
            🎨 Scegli un colore
          </button>
          <input
            type="color"
            id="color"
            className="color-input-overlay"
            value={newWatch.color || ''}
            onChange={(e) => setNewWatch({ ...newWatch, color: e.target.value })}
          />
          {newWatch.color && <p className="selected-color">Colore selezionato: {newWatch.color}</p>}
      </div>
        </div>

        <div style={{ marginBottom: "10px" }}></div>
        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden-input"
            id="file-upload-add" // ID univoco
            multiple={false} // Assicura un solo file
          />
          <button type="button" className="upload-button" onClick={() => fileInputRef.current.click()}>
            📸 Seleziona un'immagine
          </button>
        </div>
        
        {/* Anteprima immagine (se 'image' è un oggetto File) */}
        {newWatch.image && typeof newWatch.image === 'object' && (
            <img
              src={URL.createObjectURL(newWatch.image)}
              alt="Anteprima"
              className="preview-image"
              width="100"
              loading="lazy"
              onLoad={() => URL.revokeObjectURL(newWatch.image)} // Pulisci memoria
            />
        )}

        {/* Pulsante Dettagli */}
        <div style={{ margin: "20px 0 10px 0", width: "100%" }}>
          <button
            type="button"
            className="details-toggle-button"
            onClick={() => setIsDetailsMenuOpen(!isDetailsMenuOpen)}
          >
            {isDetailsMenuOpen ? 'Chiudi Dettagli ▴' : 'Caratteristiche Aggiuntive ▾'}
          </button>
        </div>

        {/* Lista Checkbox Caratteristiche */}
        {isDetailsMenuOpen && (
          <FeatureCheckboxList
            featuresList={allFeaturesList}
            selectedFeatures={newWatch.features}
            onChange={handleFeatureChange}
          />
        )}

        {/* Pulsante Note */}
        <div style={{ margin: "20px 0 10px 0", width: "100%" }}>
          <button
            type="button"
            className="details-toggle-button"
            onClick={() => setIsNotesVisible(!isNotesVisible)}
          >
            {isNotesVisible ? 'Chiudi Note ▴' : 'Apri Note ▾'}
          </button>
        </div>

        {/* Textarea Note */}
        {isNotesVisible && (
          <div>
            <textarea
              placeholder="Note aggiuntive (es. data acquisto, storia, difetti...)"
              className="notes-textarea"
              value={newWatch.note}
            onChange={(e) =>
              setNewWatch({ ...newWatch, note: e.target.value })
            }
          />
        </div>
        )}
        
        <div style={{ marginBottom: "30px" }}></div>
        <div className="buttonForm">
          <button onClick={handleAddWatch}>Salva</button>
          <button onClick={handleCancel}>Annulla</button>
        </div>
      </div>
    </>
  );
};

export default AddWatchForm;


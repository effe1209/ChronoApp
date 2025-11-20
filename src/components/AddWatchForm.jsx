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
        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log("Step changed to:", step)}
          
          // 1. COLLEGA IL SALVATAGGIO QUI
          // Quando l'utente preme "Finito" o "Salva" sull'ultimo step, scatta questa funzione
          onFinalStepCompleted={handleAddWatch}
          
          // 2. PASSA LA FUNZIONE DI ANNULLAMENTO (Dovrai gestirla dentro Stepper.jsx)
          onCancel={handleCancel} 

          // Personalizzazione testi bottoni
          backButtonText="Indietro"
          nextButtonText="Avanti"
          finishButtonText="Salva" // Testo per l'ultimo step (se il tuo Stepper lo supporta)
        >
        <Step>
        <h3>Nome</h3>
        <input
          type="text"
          placeholder="Nome"
          value={newWatch.name}
          onChange={(e) =>
            setNewWatch({ ...newWatch, name: e.target.value })
          }
        />
        </Step>
        <Step>
        <h3>Marca</h3>
        <input
          type="text"
          placeholder="Marca"
          value={newWatch.brand}
          onChange={(e) =>
            setNewWatch({ ...newWatch, brand: e.target.value })
          }
        />
        </Step>
        <Step>
        <h3>Anno</h3>
        <input
          type="number"
          placeholder="Anno"
          value={newWatch.year}
          onChange={(e) =>
            setNewWatch({ ...newWatch, year: e.target.value })
          }
        />
        </Step>
        <Step>
        <h3 style={{marginBottom:"10px !important"}}>Prezzo di Acquisto</h3>
        <input
          type="number"
          placeholder="Prezzo (€)"
          value={newWatch.money || ''} // Usa '' per input controllato
          onChange={(e) =>
            setNewWatch({ ...newWatch, money: e.target.value ? Number(e.target.value) : null })
          }
        />
        </Step>
        <Step>
        <h3>Dettagli</h3>
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
            style={{ backgroundColor: newWatch.color}}
            tabIndex="-1" 
          >
            🎨 Scegli un colore
          </button>
          <input
            type="color"
            id="color"
            className="color-input-overlay"
            value={newWatch.color || '#ffffff'}
            onChange={(e) => setNewWatch({ ...newWatch, color: e.target.value })}
          />
          {newWatch.color && <p className="selected-color">Colore selezionato: {newWatch.color}</p>}
      </div>
        </div>
        </Step>
        
      

        <Step>
          <h3>Immagine</h3>
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
              onLoad={() => URL.revokeObjectURL(newWatch.image)} // Pulisci memoria
            />
        )}
        </Step>
        <Step>
          <h3>Dettagli Orologi</h3>
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
        </Step>

        <Step>
          <h3>Caratteristiche Aggiuntive</h3>
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
        
        {/* <div style={{ marginBottom: "30px" }}></div>
        <div className="buttonForm">
          <button onClick={handleAddWatch}>Salva</button>
          <button onClick={handleCancel}>Annulla</button>
        </div> */}
        </Step>
        </Stepper>
      </div>
    </>
  );
};

export default AddWatchForm;


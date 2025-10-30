import React from 'react';

// Raggruppa i bottoni delle "Funzioni"
const FunctionsSection = ({ onDayWatchClick, onOutfitImageChange, fileInputRefOutfit }) => {
  return (
    <div className="functionButton">
      <div>
        <h4>Orologio del Giorno</h4>
        <div className="funzioniButton">
          <div className="buttonBackground"></div>
          <button onClick={onDayWatchClick}>
            DailyWatch
          </button>              
        </div>
      </div>
      
      <div className="pickWatch">
        <div>
          <h4>Completa l'Outfit</h4>
          <div className="upload-container">
            <input
              type="file"
              accept="image/*"
              onChange={onOutfitImageChange}
              ref={fileInputRefOutfit}
              className="hidden-input"
              id="file-upload-outfit" // ID univoco
            />
          <button type="button" className="select-image-button" onClick={() => fileInputRefOutfit.current.click()}>
              📸 <span className="button-text-mobile">Seleziona un'immagine</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionsSection;


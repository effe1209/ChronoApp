import React from 'react';

// Raggruppa i bottoni delle "Funzioni"
const FunctionsSection = ({ onDayWatchClick, onOutfitImageChange, fileInputRefOutfit }) => {
  return (
    <div className="functionButton">
      <article className="function-card function-card--daily">
        <div className="function-card__copy">
          <span className="function-card__eyebrow">SELEZIONE DEL GIORNO</span>
          <h4>Orologio del giorno</h4>
          <p>Lascia scegliere alla collezione il protagonista di oggi.</p>
        </div>
        <button type="button" className="function-card__action" onClick={onDayWatchClick}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7v5l3.2 2" />
          </svg>
          <span>Mostra l'orologio</span>
          <span className="function-card__arrow" aria-hidden="true">↗</span>
        </button>
      </article>

      <article className="function-card function-card--outfit">
        <div className="function-card__copy">
          <span className="function-card__eyebrow">ABBINAMENTO PERSONALE</span>
          <h4>Completa l'outfit</h4>
          <p>Carica una foto nitida dell’outfit: cercherò gli abbinamenti nella tua collezione.</p>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={onOutfitImageChange}
          ref={fileInputRefOutfit}
          className="hidden-input"
          id="file-upload-outfit"
        />
        <button
          type="button"
          className="function-card__action function-card__action--secondary"
          onClick={() => fileInputRefOutfit.current?.click()}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
            <circle cx="9" cy="10" r="1.5" />
            <path d="m5 17 4.5-4.5 3 3L15 13l4 4" />
          </svg>
          <span>Carica una foto</span>
          <span className="function-card__arrow" aria-hidden="true">↗</span>
        </button>
      </article>
    </div>
  );
};

export default FunctionsSection;


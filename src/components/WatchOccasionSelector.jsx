import React from 'react';
import { OUTFIT_OCCASIONS } from './outfitPreferences';

const WatchOccasionSelector = ({ value = [], onChange, idPrefix }) => {
  const selectedOccasions = Array.isArray(value) ? value : [];

  const toggleOccasion = (occasion) => {
    const nextOccasions = selectedOccasions.includes(occasion)
      ? selectedOccasions.filter((selected) => selected !== occasion)
      : [...selectedOccasions, occasion];
    onChange(nextOccasions);
  };

  return (
    <fieldset className="watch-occasion-selector">
      <legend>Occasioni d’uso</legend>
      <p>Seleziona quando indosseresti questo orologio: servirà per filtrare gli abbinamenti.</p>
      <div className="watch-occasion-selector__options">
        {OUTFIT_OCCASIONS.map(({ value: occasion, label }) => {
          const inputId = `${idPrefix}-${occasion}`;
          return (
            <label key={occasion} htmlFor={inputId}>
              <input
                id={inputId}
                type="checkbox"
                checked={selectedOccasions.includes(occasion)}
                onChange={() => toggleOccasion(occasion)}
              />
              <span>{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default WatchOccasionSelector;

import React from 'react';

// Un componente riutilizzabile per renderizzare la lista di checkbox
const FeatureCheckboxList = ({ featuresList, selectedFeatures, onChange }) => {
  
  if (!featuresList || featuresList.length === 0) {
    return <p>Caricamento caratteristiche...</p>;
  }

  return (
    <div>
      <strong>Seleziona Caratteristiche</strong>
      <div className="details-menu">
        {featuresList.map((feature) => {
          const isChecked = selectedFeatures.includes(feature.id_caratteristica);
          return (
            <label 
              key={feature.id_caratteristica} 
              className={`checkbox-label ${isChecked ? 'selected' : ''}`}
            >
              <input
                type="checkbox"
                className="checkbox-input"
                value={feature.id_caratteristica}
                checked={isChecked}
                onChange={onChange}
              />
              {feature.nome_caratteristica}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCheckboxList;
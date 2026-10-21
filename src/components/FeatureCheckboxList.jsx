import React from 'react';

// Un componente riutilizzabile per renderizzare la lista di checkbox
const FeatureCheckboxList = ({
  featuresList,
  selectedFeatures = [],
  onChange,
  isLoading = false,
  error = '',
}) => {
  
  if (isLoading) {
    return <p className="features-status" role="status">Caricamento caratteristiche...</p>;
  }

  if (error) {
    return (
      <p className="features-status features-status--error" role="alert">
        Impossibile caricare le caratteristiche. {error}
      </p>
    );
  }

  if (!featuresList || featuresList.length === 0) {
    return <p className="features-status">Nessuna caratteristica aggiuntiva disponibile.</p>;
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

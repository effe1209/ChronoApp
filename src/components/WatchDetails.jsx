import React from 'react';

const WatchDetails = ({ watch }) => {
  const features = Array.isArray(watch.caratteristiche)
    ? watch.caratteristiche.filter(Boolean)
    : [];
  const formattedPrice = watch.money !== null && watch.money !== undefined && watch.money !== ''
    ? `${Number(watch.money).toLocaleString('it-IT')} €`
    : 'N/D';

  return (
    <div className="watch-detail-body">
      <div className="watch-detail-image-frame">
        <img
          src={watch.imageUrl || 'orologio_back.svg'}
          alt={watch.name || 'Orologio della collezione'}
          className="watch-detail-image"
          loading="lazy"
          onError={(event) => { event.currentTarget.src = 'orologio_back.svg'; }}
        />
      </div>

      <dl className="watch-detail-grid">
        <div className="watch-detail-item">
          <dt>Marca</dt>
          <dd>{watch.brand || 'N/D'}</dd>
        </div>
        <div className="watch-detail-item">
          <dt>Anno</dt>
          <dd>{watch.year || 'N/D'}</dd>
        </div>
        <div className="watch-detail-item">
          <dt>Movimento</dt>
          <dd>{watch.movement || 'N/D'}</dd>
        </div>
        <div className="watch-detail-item">
          <dt>Colore</dt>
          <dd>{watch.color || 'N/D'}</dd>
        </div>
        <div className="watch-detail-item">
          <dt>Prezzo di acquisto</dt>
          <dd>{formattedPrice}</dd>
        </div>
        <div className="watch-detail-item watch-detail-item--wide">
          <dt>Caratteristiche aggiuntive</dt>
          <dd>
            {features.length > 0 ? (
              <ul className="watch-detail-features">
                {features.map((feature, index) => (
                  <li key={feature.id_caratteristica || `${feature.nome_caratteristica}-${index}`}>
                    {feature.nome_caratteristica}
                  </li>
                ))}
              </ul>
            ) : 'Nessuna'}
          </dd>
        </div>
        <div className="watch-detail-item watch-detail-item--wide">
          <dt>Note</dt>
          <dd>{watch.note || 'Nessuna nota'}</dd>
        </div>
      </dl>
    </div>
  );
};

export default WatchDetails;

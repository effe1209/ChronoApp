import React, { useEffect, useMemo, useState } from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  getOutfitMatchExplanation,
  getWatchColorFamily,
  OUTFIT_COLOR_FAMILIES,
  OUTFIT_OCCASIONS,
} from './outfitPreferences';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OutfitModal = ({
  isVisible,
  watchConsigliati = [],
  occasion = 'all',
  colorFamily = 'all',
  filtersRelaxed = false,
  feedbackByWatch = {},
  feedbackMessage = '',
  onFeedback,
  onClose,
  onOpenWatch,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [comparisonIds, setComparisonIds] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  useEffect(() => {
    if (!isVisible) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, onClose]);

  const comparisonWatches = useMemo(
    () => comparisonIds.map((id) => watchConsigliati.find((watch) => String(watch.id) === id)).filter(Boolean),
    [comparisonIds, watchConsigliati]
  );
  const activeOccasionLabel = OUTFIT_OCCASIONS.find((entry) => entry.value === occasion)?.label || 'tutte le occasioni';
  const activeColorLabel = OUTFIT_COLOR_FAMILIES.find((entry) => entry.value === colorFamily)?.label || 'tutti i colori';

  if (!isVisible || watchConsigliati.length === 0) return null;

  const toggleComparison = (watchId) => {
    const normalizedId = String(watchId);
    setComparisonIds((current) => {
      if (current.includes(normalizedId)) return current.filter((id) => id !== normalizedId);
      if (current.length >= 2) return [current[1], normalizedId];
      return [...current, normalizedId];
    });
  };

  const renderComparisonValue = (label, value) => (
    <div className="outfit-comparison__row" key={label}>
      <span>{label}</span>
      <strong>{value || 'Non indicato'}</strong>
    </div>
  );

  return (
    <div
      className="modal-overlay outfit-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="outfit-modal" role="dialog" aria-modal="true" aria-labelledby="outfit-modal-title">
        <button className="outfit-modal__close" type="button" onClick={onClose} aria-label="Chiudi i consigli">
          ×
        </button>

        <div className="outfit-modal__heading">
          <span>ABBINAMENTO PERSONALE</span>
          <h2 id="outfit-modal-title">{isComparing ? 'Confronta gli orologi' : 'Orologi per il tuo outfit'}</h2>
          <p>
            {isComparing
              ? 'Metti a confronto i dettagli dei due modelli selezionati.'
              : filtersRelaxed
                ? `Nessun orologio corrisponde a tutti i filtri (${activeOccasionLabel} · ${activeColorLabel}): mostro gli abbinamenti visivamente più vicini.`
                : `Filtri attivi: ${activeOccasionLabel} · ${activeColorLabel}.`}
          </p>
        </div>

        {isComparing ? (
          <div className="outfit-comparison">
            <div className="outfit-comparison__grid">
              {comparisonWatches.map((watch) => {
                const colorLabel = OUTFIT_COLOR_FAMILIES.find(
                  (family) => family.value === getWatchColorFamily(watch.color)
                )?.label;
                const occasionLabels = (watch.occasions || [])
                  .map((value) => OUTFIT_OCCASIONS.find((entry) => entry.value === value)?.label)
                  .filter(Boolean)
                  .join(', ');

                return (
                  <article className="outfit-comparison__watch" key={watch.id}>
                    <img src={watch.imageUrl || 'orologio_back.svg'} alt={watch.name} />
                    <span>{watch.brand || 'Marca non indicata'}</span>
                    <h3>{watch.name}</h3>
                    <div className="outfit-comparison__facts">
                      {renderComparisonValue('Anno', watch.year)}
                      {renderComparisonValue('Condizione', watch.condition_rating ? `${watch.condition_rating}/10` : null)}
                      {renderComparisonValue('Movimento', watch.movement)}
                      {renderComparisonValue('Colore', colorLabel)}
                      {renderComparisonValue('Occasioni', occasionLabels)}
                      {renderComparisonValue('Prezzo registrato', watch.money != null && watch.money !== '' ? `${Number(watch.money).toLocaleString('it-IT')} €` : null)}
                    </div>
                    <button type="button" className="outfit-result-card__action" onClick={() => onOpenWatch?.(watch)}>
                      Apri scheda <span aria-hidden="true">↗</span>
                    </button>
                  </article>
                );
              })}
            </div>
            <button type="button" className="outfit-comparison__back" onClick={() => setIsComparing(false)}>
              Torna ai consigli
            </button>
          </div>
        ) : (
          <Swiper
            className="outfit-modal__swiper"
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {watchConsigliati.map((watch) => {
              const feedback = feedbackByWatch[String(watch.id)] ?? null;
              const isSelectedForComparison = comparisonIds.includes(String(watch.id));

              return (
                <SwiperSlide key={watch.id}>
                  <article className="outfit-result-card">
                    <div className="outfit-result-card__image-wrap">
                      <img
                        src={watch.imageUrl || 'orologio_back.svg'}
                        alt={`${watch.brand ? `${watch.brand} ` : ''}${watch.name}`}
                        className="outfit-result-card__image"
                        onError={(event) => { event.currentTarget.src = 'orologio_back.svg'; }}
                      />
                    </div>
                    <div className="outfit-result-card__details">
                      <span className="outfit-result-card__brand">{watch.brand || 'Dalla tua collezione'}</span>
                      <h3>{watch.name}</h3>
                      {watch.year && <p>Anno {watch.year}</p>}
                      <p className="outfit-result-card__reason">
                        {filtersRelaxed
                          ? 'Suggerito per affinità visiva con la foto; i filtri non hanno trovato una corrispondenza esatta.'
                          : getOutfitMatchExplanation(watch, occasion, colorFamily)}
                      </p>
                      <div className="outfit-result-card__feedback" aria-label="Valuta questo abbinamento">
                        <span>È un buon abbinamento?</span>
                        <button
                          type="button"
                          aria-label="Mi piace questo abbinamento"
                          aria-pressed={feedback === 1}
                          onClick={() => onFeedback?.(watch.id, 1)}
                        >👍</button>
                        <button
                          type="button"
                          aria-label="Non mi piace questo abbinamento"
                          aria-pressed={feedback === -1}
                          onClick={() => onFeedback?.(watch.id, -1)}
                        >👎</button>
                      </div>
                      <button
                        type="button"
                        className={`outfit-result-card__compare${isSelectedForComparison ? ' is-selected' : ''}`}
                        aria-pressed={isSelectedForComparison}
                        onClick={() => toggleComparison(watch.id)}
                      >
                        {isSelectedForComparison ? 'Rimuovi dal confronto' : 'Aggiungi al confronto'}
                      </button>
                      <button type="button" className="outfit-result-card__action" onClick={() => onOpenWatch?.(watch)}>
                        Vedi dettagli
                        <span aria-hidden="true">↗</span>
                      </button>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        {feedbackMessage && <p className="outfit-modal__feedback-message" role="status">{feedbackMessage}</p>}
        <div className="outfit-modal__footer">
          <span aria-live="polite">
            {isComparing ? 'Confronto di 2 orologi' : `${activeIndex + 1} di ${watchConsigliati.length}`}
          </span>
          <div className="outfit-modal__footer-actions">
            {!isComparing && (
              <button
                type="button"
                className="outfit-modal__compare-button"
                disabled={comparisonWatches.length !== 2}
                onClick={() => setIsComparing(true)}
              >
                Confronta ({comparisonWatches.length}/2)
              </button>
            )}
            <button type="button" className="outfit-modal__done" onClick={onClose}>Chiudi</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutfitModal;

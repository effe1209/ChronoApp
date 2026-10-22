import React, { useEffect, useState } from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OutfitModal = ({ isVisible, watchConsigliati = [], onClose, onOpenWatch }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, onClose]);

  if (!isVisible || watchConsigliati.length === 0) return null;

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
          <h2 id="outfit-modal-title">Orologi per il tuo outfit</h2>
          <p>Una selezione dalla tua collezione in base alla foto caricata.</p>
        </div>

        <Swiper
          className="outfit-modal__swiper"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {watchConsigliati.map((watch) => (
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
                  <button type="button" className="outfit-result-card__action" onClick={() => onOpenWatch?.(watch)}>
                    Vedi dettagli
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="outfit-modal__footer">
          <span aria-live="polite">{activeIndex + 1} di {watchConsigliati.length}</span>
          <button type="button" className="outfit-modal__done" onClick={onClose}>Chiudi</button>
        </div>
      </section>
    </div>
  );
};

export default OutfitModal;

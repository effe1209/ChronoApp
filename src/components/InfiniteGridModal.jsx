import React, { useEffect } from 'react';

const InfiniteGridModal = ({ isVisible, setIsVisible, handleInfoWatch, watches }) => {
  const closeGallery = () => setIsVisible(false);
  const openWatch = (watch) => {
    handleInfoWatch(watch);
    closeGallery();
  };

  useEffect(() => {
    if (!isVisible) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, setIsVisible]);

  if (!isVisible) return null;

  return (
    <div className="watch-gallery-overlay" onClick={closeGallery}>
      <section
        className="watch-gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="watch-gallery-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="watch-gallery-header">
          <div>
            <span className="watch-gallery-eyebrow">LA COLLEZIONE</span>
            <h2 id="watch-gallery-title">Galleria Orologi</h2>
            <p>Un colpo d'occhio su ogni segnatempo della tua collezione.</p>
          </div>
          <div className="watch-gallery-header__actions">
            <span className="watch-gallery-count">
              {watches.length} {watches.length === 1 ? 'orologio' : 'orologi'}
            </span>
            <button
              type="button"
              className="watch-gallery-close"
              onClick={closeGallery}
              aria-label="Chiudi la galleria"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </header>

        {watches.length > 0 ? (
          <div className="watch-gallery-grid">
            {watches.map((watch) => (
              <button
                type="button"
                className="watch-gallery-card"
                key={watch.id}
                onClick={() => openWatch(watch)}
              >
                <span className="watch-gallery-card__image">
                  <img
                    src={watch.imageUrl || 'orologio_back.svg'}
                    alt=""
                    loading="lazy"
                    onError={(event) => { event.currentTarget.src = 'orologio_back.svg'; }}
                  />
                  {watch.isFavorite && <span className="watch-gallery-favorite" aria-label="Preferito">★</span>}
                </span>
                <span className="watch-gallery-card__copy">
                  <strong>{watch.name}</strong>
                  <span>{watch.brand || 'Segnatempo della collezione'}</span>
                </span>
                <span className="watch-gallery-card__arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="watch-gallery-empty">
            <span className="watch-gallery-empty__icon" aria-hidden="true">◷</span>
            <strong>La galleria è pronta per la tua collezione</strong>
            <p>Aggiungi il tuo primo orologio per vederlo apparire qui.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default InfiniteGridModal;

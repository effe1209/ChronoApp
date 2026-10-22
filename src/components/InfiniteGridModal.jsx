import React, { useEffect, useMemo } from 'react';
import InfiniteMenu from './InfiniteMenu';

const InfiniteGridModal = ({ isVisible, setIsVisible, handleInfoWatch, watches, isDark }) => {
  const closeGallery = () => setIsVisible(false);
  const items = useMemo(() => watches.map((watch) => ({
    id: watch.id,
    image: watch.imageUrl || 'orologio_back.svg',
    title: watch.name,
    description: watch.brand || 'Dalla tua collezione',
    link: watch.imageUrl || 'orologio_back.svg',
  })), [watches]);

  useEffect(() => {
    if (!isVisible) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, setIsVisible]);

  if (!isVisible) return null;

  const handleItemClick = (item) => {
    const watch = watches.find((entry) => entry.id === item.id);
    if (!watch) return;
    handleInfoWatch(watch);
    closeGallery();
  };

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
            <p>Ruota la sfera e scegli un orologio per scoprirne i dettagli.</p>
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

        <div className="watch-gallery-stage">
          {watches.length > 0 ? (
            <InfiniteMenu
              items={items}
              onItemClick={handleItemClick}
              imageBackgroundColor={isDark ? '#182532' : '#eef3f5'}
            />
          ) : (
            <div className="watch-gallery-empty">
              <span className="watch-gallery-empty__icon" aria-hidden="true">◷</span>
              <strong>La galleria è pronta per la tua collezione</strong>
              <p>Aggiungi il tuo primo orologio per vederlo apparire qui.</p>
            </div>
          )}
        </div>

        {watches.length > 0 && (
          <p className="watch-gallery-hint">Trascina per esplorare · Seleziona la freccia per aprire i dettagli</p>
        )}
      </section>
    </div>
  );
};

export default InfiniteGridModal;

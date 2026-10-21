import React, { useState, useEffect, useMemo } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import FavoriteButton from './FavoriteButton';
import TiltedCard from './TiltedCard';
import InfiniteMenu from './InfiniteMenu';

// Importa gli stili di Swiper necessari
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Questo componente gestisce la visualizzazione (lista o carosello)
// e l'ordinamento degli orologi
const WatchList = ({ 
  watches, 
  handleModifyWatch, 
  handleDeleteWatch, 
  handleFavoriteToggle, 
  handleInfoWatch,
  handleShowStats,
  handleInfiniteGrid,
}) => {
  
  const [isCarouselView, setIsCarouselView] = useState(() => {
    const savedView = localStorage.getItem('viewMode');
    return savedView ? JSON.parse(savedView) : false;
  });

  useEffect(() => {
    localStorage.setItem('viewMode', JSON.stringify(isCarouselView));
  }, [isCarouselView]);

  const toggleView = () => {
    setIsCarouselView(prevState => !prevState);
  };

  const sortByName = (a, b) => a.name.localeCompare(b.name);

  // Filtra e ordina
  const sortedWatches = useMemo(() => {
    const favoriteWatches = watches.filter(w => w.isFavorite).sort(sortByName);
    const nonFavoriteWatches = watches.filter(w => !w.isFavorite).sort(sortByName);
    return [...favoriteWatches, ...nonFavoriteWatches];
  }, [watches]); // Ricalcola solo se 'watches' cambia

  return (
    <div>
      <div className="buttonView" id="listWatch">
        <button
          className="buttonView__stats"
          onClick={handleShowStats}
        >
          <span className="buttonView__stats-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 19.5h16M6.5 16V11m5.5 5V5m5.5 11V8" />
            </svg>
          </span>
          <span className="buttonView__stats-copy">
            <strong>Mostra statistiche</strong>
            <small>Analisi della collezione</small>
          </span>
          <span className="buttonView__stats-arrow" aria-hidden="true">↗</span>
        </button>
        <button
          type="button"
          className="buttonView__control buttonView__gallery galleriaInfinita"
          onClick={handleInfiniteGrid}
        >
          <span className="buttonView__control-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3.5" y="4" width="17" height="16" rx="3" />
              <circle cx="9" cy="9" r="1.5" />
              <path d="m5 17 4.5-4.5 3 3L15 13l4 4" />
            </svg>
          </span>
          <span>Galleria</span>
        </button>
        <button
          type="button"
          className="buttonView__control buttonView__toggle"
          onClick={toggleView}
          aria-label={isCarouselView ? 'Passa alla vista lista' : 'Passa alla vista carosello'}
        >
          <span className="buttonView__control-icon" aria-hidden="true">
            {isCarouselView ? (
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 6h12M8 12h12M8 18h12M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="4" width="7" height="7" rx="1.5" />
                <rect x="13.5" y="4" width="7" height="7" rx="1.5" />
                <rect x="3.5" y="13" width="7" height="7" rx="1.5" />
                <rect x="13.5" y="13" width="7" height="7" rx="1.5" />
              </svg>
            )}
          </span>
          <span>{isCarouselView ? 'Mostra lista' : 'Mostra carosello'}</span>
        </button>
      </div>

      {/* VISTA LISTA */}
      {!isCarouselView && (
        <div className="watch-list">
          {sortedWatches.map((watch) => (
            <motion.div 
              key={watch.id} 
              className="watch-card"
              layout="position"
              layoutScroll
              transition={{ 
                type: "spring", // Spring è più naturale di linear per riordino
                stiffness: 200, 
                damping: 30 
              }}
            >
              <div className="GRID">
                  <FavoriteButton
                    isFavorite={watch.isFavorite}
                    onToggle={() => handleFavoriteToggle(watch.id)}
                  />
                {watch.imageUrl ? (
                  <TiltedCard
                    imageSrc={watch.imageUrl} // Usa imageUrl
                    alt={watch.name}
                    className="watch-image"
                    loading="lazy"
                    onError={(e) => { e.target.src = "orologio_back.svg"; }}
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                  />
                ) : (
                  <img src="orologio_back.svg" alt="Default" className="watch-image"/>
                )}
                <div className="CaratteristicheCard">
                  <h3 className="textCard" style={{padding:"5px"}}>{watch.name}</h3>
                </div>
                
                <div className="cardBottoni">
                  <div className="modifyButton">
                    <button
                      className="modify-btn"
                      onClick={() => handleModifyWatch(watch)} // Passa l'intero oggetto
                    >
                      Modifica
                    </button>
                  </div>
                  
                  <div className="InfoButton">
                  <button
                    className="modify-btn"
                    onClick={() => handleInfoWatch(watch)} // Passa l'intero oggetto
                    >
                    Info
                  </button>
                </div>
                </div>
              </div>
            </motion.div>
            
            ))}
        </div>
      )}

      {/* VISTA CAROSELLO */}
      {isCarouselView && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{borderRadius:"20px"}}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
        {watches.map((watch) => ( // Usa 'watches' non ordinati per il carosello? o 'sortedWatches'? 
                                    // Usiamo 'watches' come l'originale
          <SwiperSlide key={watch.id}>
            <div className="watch-card carousel-card">
              <FavoriteButton
                    isFavorite={watch.isFavorite}
                    onToggle={() => handleFavoriteToggle(watch.id)}
                  />
              {watch.imageUrl ? ( // Usa imageUrl
                <img
                  src={watch.imageUrl}
                  alt={watch.name}
                  className="watch-imageCarosel"
                  loading="lazy"
                  onError={(e) => { e.target.src = "orologio_back.svg"; }}
                />
              ) : (
                <img src="orologio_back.svg" alt="Default" className="watch-imageCarosel"/>
              )}
              <div className="watchName_Button">
              <h3 className="textCard" style={{padding:"2%"}}>{watch.name}</h3>
              <div className="cardBottoni">
                <div className="InfoButton">
                  <button
                    className="modify-btn"
                      onClick={() => handleInfoWatch(watch)} // Passa l'oggetto
                    >
                    Info
                  </button>
                </div>
                  <div className="modifyButton">
                    <button
                      className="modify-btn"
                      onClick={() => handleModifyWatch(watch)} // Passa l'oggetto
                    >
                      Modifica
                    </button>
                  </div>
                </div>
                 
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      )}
    </div>
  );
};

export default WatchList;


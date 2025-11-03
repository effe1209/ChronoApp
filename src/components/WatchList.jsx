import React, { useState, useEffect, useMemo } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import FavoriteButton from './FavoriteButton';

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
  handleShowStats 
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
          onClick={handleShowStats}
          style={{ width: "200px", padding: "10px"}}
        >
          📊 Mostra Statistiche
        </button>
        <button onClick={toggleView} >
          {isCarouselView ? 'Mostra Lista' : 'Mostra Carosello'}
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
                  <img
                    src={watch.imageUrl} // Usa imageUrl
                    alt={watch.name}
                    className="watch-image"
                    loading="lazy"
                    onError={(e) => { e.target.src = "orologio_back.svg"; }}
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
                  <div className="delete-button">
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteWatch(watch.id, watch.image)} // Passa 'image' (path)
                    >
                      Elimina
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
              <h3 className="textCard" style={{fontSize:"42px", padding:"2%"}}>{watch.name}</h3>
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
                  <div className="delete-button">
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteWatch(watch.id, watch.image)} // Passa 'image' (path)
                    >
                      Elimina
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


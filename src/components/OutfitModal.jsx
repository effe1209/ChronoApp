import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa gli stili di Swiper necessari
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Modale per i consigli sull'outfit
const OutfitModal = ({ isVisible, watchConsigliati, onClose }) => {

  if (!isVisible || !watchConsigliati || watchConsigliati.length === 0) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]} // Rimuovi Autoplay qui?
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {watchConsigliati.map((watch) => (
            <SwiperSlide key={watch.id}>
              <div className="watch-card" style={{marginRight:"40px", marginBottom:"-20px"}}>
              <div style={{margin:"10px"}}></div>
              <h3>Orologi Consigliati</h3>
              <div style={{margin:"20px"}}></div>
                <img 
                  src={watch.imageUrl || "orologio_back.svg"} 
                  alt={watch.name} 
                  className="watch-imageCarosel" 
                  onError={(e) => { e.target.src = "orologio_back.svg"; }}
                />
                <p style={{fontSize:"29px", marginBottom:"10px",marginTop:"25px", fontWeight:"bold"}}>{watch.name}</p>
                <button className="funzioniButton" onClick={onClose}>Chiudi</button>
                <div style={{margin:"40px"}}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OutfitModal;


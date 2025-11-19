import React, { useState, useCallback, useEffect } from 'react';
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscSignOut, VscAdd } from 'react-icons/vsc';

/**
 * Componente Dock interattivo (effetto macOS).
 */
const Dock = ({ items, activeSection, onLogout, onAddWatchToggle, isFormVisible, panelHeight = 68, baseItemSize = 50, magnification = 70 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Stato per il mobile
  const dockRef = React.useRef(null);
  
  // LOGICA DI RILEVAMENTO MOBILE
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // 600px come breakpoint mobile
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Creazione della lista completa degli elementi di sistema
  const fullSystemItems = [
    ...items,
    { icon: <VscSignOut size={18} />, label: 'Logout', onClick: onLogout },
    { icon: <VscAdd size={18} />, label: 'AddWatch', onClick: onAddWatchToggle },
  ];
  
  // FILTRO CONDIZIONALE PER GLI ELEMENTI MOSTRATI
  const systemItems = isMobile
    ? fullSystemItems.filter(item => item.label === 'Logout' || item.label === 'AddWatch')
    : fullSystemItems;

  const handleMouseMove = useCallback((e) => {
    if (!dockRef.current || isMobile) return; // Disabilita l'effetto di ingrandimento su mobile

    const dockRect = dockRef.current.getBoundingClientRect();
    const mouseX = e.clientX - dockRect.left;

    const iconCenters = systemItems.map((_, index) => {
      // Nota: Ora l'indice è basato sulla lista filtrata (systemItems)
      return (baseItemSize * index) + (baseItemSize / 2);
    });

    const distances = iconCenters.map(center => Math.abs(center - mouseX));
    const closestIndex = distances.indexOf(Math.min(...distances));
    setHoveredIndex(closestIndex);
  }, [systemItems, baseItemSize, magnification, isMobile]); // Aggiunto isMobile alle dipendenze

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const getItemSize = (index) => {
    if (hoveredIndex === null || isMobile) return baseItemSize; // Nessun ingrandimento su mobile

    const distance = Math.abs(hoveredIndex - index);
    
    let scaleFactor = 1;
    if (distance === 0) {
      scaleFactor = magnification / baseItemSize;
    } else if (distance === 1) {
      scaleFactor = 1 + ((magnification - baseItemSize) / baseItemSize) * 0.5;
    } else if (distance === 2) {
      scaleFactor = 1 + ((magnification - baseItemSize) / baseItemSize) * 0.2;
    }

    return baseItemSize * scaleFactor;
  };
  
  // STILI AGGIORNATI: position: sticky rimane
  const dockStyles = {
    display: 'flex',
    // backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    
    // POSIZIONAMENTO INVARIATO: position: sticky
    position: 'sticky', 
    width: 'fit-content',
    
    zIndex: 1000,
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    listStyle: 'none',
    margin: 0,
    gap: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
  };

  const itemWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    height: panelHeight,
  };

  return (
    <ul
      ref={dockRef}
      style={dockStyles}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {systemItems.map((item, index) => {
        const size = getItemSize(index);
        
        let isActive = activeSection === item.label;
        if (item.label === 'AddWatch') {
            isActive = isFormVisible;
        }

        const iconStyles = {
          // Si noti l'uso di baseItemSize per il mobile per prevenire overflow/layout shift
          width: `${(isMobile ? baseItemSize : size)-10}px`,
          height: `${(isMobile ? baseItemSize : size)-10}px`,
          transition: 'width 0.2s, height 0.2s',
          cursor: 'pointer',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isActive ? 'rgba(0, 123, 255, 0.4)' : 'transparent', 
          color: 'white',
          // L'aggiustamento del margine è disabilitato/fissato su mobile
          // marginBottom: isMobile ? '0px' : `${(magnification - baseItemSize) / 2}px`, 
        };

        return (
          <li key={item.label} style={itemWrapperStyles}>
            <div 
              style={iconStyles}
              onClick={item.onClick}
              title={item.label}
              aria-label={item.label}
            >
              {/* Uso di baseItemSize per il dimensionamento su mobile per coerenza */}
              {React.cloneElement(item.icon, { size: (isMobile ? baseItemSize * 0.6 : size * 0.6) })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Dock;
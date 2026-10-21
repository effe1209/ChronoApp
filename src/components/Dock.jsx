import React, { useState, useCallback, useEffect, useRef } from 'react';
import { BiFontSize } from 'react-icons/bi';
import { RxFontStyle } from 'react-icons/rx';
import { VscSignOut, VscAdd } from 'react-icons/vsc';

const Dock = ({ 
  items, 
  activeSection, 
  onLogout, 
  onAddWatchToggle, 
  isFormVisible, 
  panelHeight = 68, 
  baseItemSize = 50, 
  magnification = 70,
  isDark
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); 
  const dockRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Costruiamo la lista completa
  const fullSystemItems = [
    ...items,
    { icon: <VscAdd size={18} />, label: 'AddWatch', onClick: onAddWatchToggle },
    { icon: <VscSignOut size={18} />, label: 'Logout', onClick: onLogout },
  ];
  
  // Filtro per Mobile: Mostra solo AddWatch e Logout
  const systemItems = isMobile
    ? fullSystemItems.filter(item => item.label === 'AddWatch' || item.label === 'Logout')
    : fullSystemItems;

  const handleMouseMove = useCallback((e) => {
    if (!dockRef.current || isMobile) return; 
    const dockRect = dockRef.current.getBoundingClientRect();
    const mouseX = e.clientX - dockRect.left;
    const iconCenters = systemItems.map((_, index) => (baseItemSize * index) + (baseItemSize / 2));
    const distances = iconCenters.map(center => Math.abs(center - mouseX));
    setHoveredIndex(distances.indexOf(Math.min(...distances)));
  }, [systemItems, baseItemSize, magnification, isMobile]); 

  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  const getItemSize = (index) => {
    if (hoveredIndex === null || isMobile) return baseItemSize; 
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return magnification;
    if (distance === 1) return baseItemSize + (magnification - baseItemSize) * 0.5;
    if (distance === 2) return baseItemSize + (magnification - baseItemSize) * 0.2;
    return baseItemSize;
  };

  const dockStyles = {
    display: 'flex',
    // backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    position: 'sticky', 
    width: 'fit-content',
    zIndex: 1000,
    // boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    listStyle: 'none',
    margin: 0,
    gap: '5px',
    padding: '0 5px',
  };

const itemWrapperStyles = {
    display: 'flex',
    flexDirection: 'column', // <--- Fondamentale per mettere il testo sotto
    alignItems: 'center',
    justifyContent: 'center', // Centra verticalmente nel pannello
    height: panelHeight - 4,
    position: 'relative',
    minWidth: baseItemSize, // Assicura che ci sia spazio orizzontale minimo
  };

  const labelStyles = {
    fontSize: '10px',
    marginTop: '-3px',
    fontFamily: 'minork', // O il tuo font 'minork'
    color: isDark ? '#aebbc5' : '#6c7a84',
    opacity: 0.86,
    transition: 'opacity 0.2s',
    whiteSpace: 'nowrap', // Evita che il testo vada a capo
    pointerEvents: 'none' // Evita interferenze col mouse
  };

  const tooltipStyles = {
    color: 'white', whiteSpace: 'nowrap', zIndex: 1010, fontWeight: '600', fontFamily: 'minork', fontStyle: 'italic', BiFontSize: '2px', fontSize: '16px', right:'10px'
  };

  return (
    <ul ref={dockRef} style={dockStyles} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {systemItems.map((item, index) => {
        const size = getItemSize(index);
        
        // Calcolo stato attivo
        let isActive = activeSection === item.label;
        if (item.label === 'AddWatch') isActive = isFormVisible;
        if (item.label === 'Logout') isActive = false;

        const iconStyles = {
          // Ho ridotto leggermente il size (-15) per dare spazio al testo senza esplodere
          width: `${(isMobile ? baseItemSize : size) - 15}px`, 
          height: `${(isMobile ? baseItemSize : size) - 15}px`,
    transition: 'width 220ms cubic-bezier(0.2, 0.7, 0.2, 1), height 220ms cubic-bezier(0.2, 0.7, 0.2, 1), background-color 220ms ease, color 220ms ease, box-shadow 220ms ease',
          cursor: 'pointer',
          borderRadius: '12px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: isActive ? (isDark ? 'var(--accent-primary_DARK)' : 'var(--accent-primary)') : 'transparent',
          color: isActive ? (isDark ? '#1b2025' : '#ffffff') : (isDark ? '#dce5eb' : '#536671'),
          boxShadow: isActive ? '0 5px 14px rgba(34, 74, 91, 0.18)' : 'none',
          zIndex: 10, // L'icona deve stare sopra
        };

        const showTooltip = hoveredIndex === index && !isMobile;

        return (
          <li key={item.label} style={itemWrapperStyles}>
            
            <div style={iconStyles} onClick={item.onClick} aria-label={item.label}>
              {React.cloneElement(item.icon, { size: (isMobile ? baseItemSize * 0.5 : size * 0.5) })}
            </div>
            <span style={labelStyles}>
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Dock;

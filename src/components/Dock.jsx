import React, { useState, useCallback, useEffect, useRef } from 'react';
import { VscSignOut, VscAdd } from 'react-icons/vsc';

const Dock = ({ 
  items, 
  activeSection, 
  onLogout, 
  onAddWatchToggle, 
  isFormVisible, 
  panelHeight = 68, 
  baseItemSize = 50, 
  magnification = 70 
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
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    position: 'sticky', 
    width: 'fit-content',
    zIndex: 1000,
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    listStyle: 'none',
    margin: 0,
    gap: '5px',
    padding: '0 5px',
  };

  const itemWrapperStyles = {
    display: 'flex', alignItems: 'center', height: panelHeight, position: 'relative', justifyContent: 'center'
  };

  const tooltipStyles = {
    fontFamily: 'sans-serif', position: 'absolute', top: '-35px', 
    backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black',
    padding: '4px 8px', borderRadius: '6px', fontSize: '12px', pointerEvents: 'none',
    whiteSpace: 'nowrap', zIndex: 1010, fontWeight: '600', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
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
          width: `${(isMobile ? baseItemSize : size)-10}px`,
          height: `${(isMobile ? baseItemSize : size)-10}px`,
          transition: 'width 0.2s, height 0.2s',
          cursor: 'pointer', borderRadius: '15px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: isActive ? 'rgba(0, 123, 255, 0.8)' : 'transparent', // Blu più deciso
          color: 'white',
        };

        const showTooltip = hoveredIndex === index && !isMobile;

        return (
          <li key={item.label} style={itemWrapperStyles}>
            {showTooltip && <div style={tooltipStyles}>{item.label}</div>}
            <div style={iconStyles} onClick={item.onClick} aria-label={item.label}>
              {React.cloneElement(item.icon, { size: (isMobile ? baseItemSize * 0.5 : size * 0.5) })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Dock;
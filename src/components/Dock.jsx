import React, { useState, useCallback, useEffect, useRef } from 'react';
import { VscSignOut, VscAdd } from 'react-icons/vsc';

const Dock = ({ 
  items, 
  activeSection, 
  onLogout, 
  onAddWatchToggle, 
  isFormVisible, 
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

  return (
    <ul ref={dockRef} className="dock-menu" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {systemItems.map((item, index) => {
        const size = getItemSize(index);
        
        // Calcolo stato attivo
        let isActive = activeSection === item.label;
        if (item.label === 'AddWatch') isActive = isFormVisible;
        if (item.label === 'Logout') isActive = false;

        const iconStyles = {
          width: `${(isMobile ? baseItemSize : size) - 15}px`, 
          height: `${(isMobile ? baseItemSize : size) - 15}px`,
          transition: 'width 220ms cubic-bezier(0.2, 0.7, 0.2, 1), height 220ms cubic-bezier(0.2, 0.7, 0.2, 1)',
        };

        return (
          <li key={item.label} className="dock-menu__item" style={{ minWidth: baseItemSize }}>
            <button
              type="button"
              className={`dock-menu__button${isActive ? ' is-active' : ''}`}
              style={iconStyles}
              onClick={item.onClick}
              aria-label={item.label}
              aria-current={activeSection === item.label ? 'location' : undefined}
              title={item.label}
            >
              {React.cloneElement(item.icon, { size: (isMobile ? baseItemSize * 0.5 : size * 0.5) })}
            </button>
            <span className="dock-menu__label">
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Dock;

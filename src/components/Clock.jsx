import React, { useEffect, useRef } from 'react';
import GlassSurface from './GlassSurface';

const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

const getClockPosition = (index, radius) => {
  const angle = (index * 30 - 90) * (Math.PI / 180);

  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
    transform: 'translate(-50%, -50%)',
  };
};

// Componente auto-contenuto per l'orologio analogico
function Clock() {
  const clockRef = useRef(null);

  // Tutta la logica di manipolazione del DOM va in useEffect
  // per assicurarsi che i nodi del DOM siano pronti
  useEffect(() => {
    function clock() {
      const date = new Date();
      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = (hours + minutes / 60) * 30;
      const minute = (minutes + seconds / 60) * 6;
      const second = seconds * 6;

      const hourHand = clockRef.current?.querySelector('.hour');
      const minuteHand = clockRef.current?.querySelector('.minute');
      const secondHand = clockRef.current?.querySelector('.second');

      if (hourHand) hourHand.style.transform = `translate(-50%, -100%) rotate(${hour}deg)`;
      if (minuteHand) minuteHand.style.transform = `translate(-50%, -100%) rotate(${minute}deg)`;
      if (secondHand) secondHand.style.transform = `translate(-50%, -100%) rotate(${second}deg)`;
    }

    // Avvia l'orologio
    clock();
    const intervalId = setInterval(clock, 1000);

    // Funzione di cleanup
    return () => clearInterval(intervalId);

  }, []); // Array vuoto significa "esegui solo al mount"

  return (
    <div className="clockContainer">
      <GlassSurface 
          width={180} 
          height={180}
          borderRadius={100}
          className="my-custom-class"
        >
      <div className="clock" ref={clockRef}>
        <div className="wrap">
          <div className="numbers">
            {romanNumerals.map((numeral, index) => (
              <React.Fragment key={numeral}>
                <div className="dot" aria-hidden="true" style={getClockPosition(index, 44)} />
                <div className="number" style={getClockPosition(index, 32)}>
                  {numeral}
                </div>
              </React.Fragment>
            ))}
            <div className="hour"></div>
            <div className="minute"></div>
            <div className="second"></div>
            <div className="point"></div>
          </div>
        </div>
      </div>
      </GlassSurface>
    </div>
  );
}

export default Clock;


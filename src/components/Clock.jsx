import React, { useEffect } from 'react';
import GlassSurface from './GlassSurface';

// Componente auto-contenuto per l'orologio analogico
function Clock() {

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

        const hourHand = document.querySelector('.hour');
        const minuteHand = document.querySelector('.minute');
        const secondHand = document.querySelector('.second');

        if (hourHand) hourHand.style.transform = `rotate(${hour}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minute}deg)`;
        if (secondHand) secondHand.style.transform = `rotate(${second}deg)`;
    }

    // Posizionamento numeri
    const numbers = document.querySelectorAll(".number");
    if (numbers.length > 0) {
      const clockRadius = 145; 
      const clockCenterX = 15; 
      const clockCenterY = 12; 
      
      numbers.forEach((num, index) => {
          const angle = (index - 2) * 30; 
          const radian = angle * (Math.PI / 180);
          const x = clockCenterX + clockRadius * Math.cos(radian) - num.clientWidth / 2;
          const y = clockCenterY + clockRadius * Math.sin(radian) - num.clientHeight / 2;
          num.style.left = `${x}px`;
          num.style.top = `${y}px`;
          num.style.transform = `rotate(${(angle)+90}deg)`;
      });
    }

    // Posizionamento puntini
    const dots = document.querySelectorAll(".dot");
    if (dots.length > 0) {
      const clockRadiusDot = 170; 
      const clockPointCenterX = 0; 
      const clockPointCenterY = 0; 

      dots.forEach((dot, index) => {
          const angle = index * 30; 
          const radian = angle * (Math.PI / 180);
          const x = clockPointCenterX + clockRadiusDot * Math.cos(radian) - dot.clientWidth / 2;
          const y = clockPointCenterY + clockRadiusDot * Math.sin(radian) - dot.clientHeight / 2;
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
      });
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
      <div className="clock">
        <div className="wrap">
          <div className="numbers">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="number" data-num="1">I</div>
            <div className="number" data-num="2">II</div>
            <div className="number" data-num="3">III</div>
            <div className="number" data-num="4">IV</div>
            <div className="number" data-num="5">V</div>
            <div className="number" data-num="6">VI</div>
            <div className="number" data-num="7">VII</div>
            <div className="number" data-num="8">VIII</div>
            <div className="number" data-num="9">IX</div>
            <div className="number" data-num="10">X</div>
            <div className="number" data-num="11">XI</div>
            <div className="number" data-num="12">XII</div>
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


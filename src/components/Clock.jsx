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

        if (hourHand) hourHand.style.transform = `translate(-50%, -100%) rotate(${hour}deg)`;
        if (minuteHand) minuteHand.style.transform = `translate(-50%, -100%) rotate(${minute}deg)`;
        if (secondHand) secondHand.style.transform = `translate(-50%, -100%) rotate(${second}deg)`;
    }

    // Posizionamento di numeri e indici sul quadrante.
    const face = document.querySelector(".numbers");
    if (face) {
      // clientWidth / clientHeight ignorano le trasformazioni di scala del layout mobile.
      const width = face.clientWidth;
      const height = face.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const numberRadius = Math.min(width, height) * 0.38;
      const indexRadius = Math.min(width, height) * 0.45;

      face.querySelectorAll(".number").forEach((num, index) => {
        const angle = (index * 30 - 60) * (Math.PI / 180);
        num.style.left = `${centerX + numberRadius * Math.cos(angle) - num.clientWidth / 2}px`;
        num.style.top = `${centerY + numberRadius * Math.sin(angle) - num.clientHeight / 2}px`;
        num.style.transform = `rotate(${index * 30 - 60 + 90}deg)`;
      });

      face.querySelectorAll(".dot").forEach((dot, index) => {
        const angle = (index * 30 - 90) * (Math.PI / 180);
        dot.style.left = `${centerX + indexRadius * Math.cos(angle) - dot.clientWidth / 2}px`;
        dot.style.top = `${centerY + indexRadius * Math.sin(angle) - dot.clientHeight / 2}px`;
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


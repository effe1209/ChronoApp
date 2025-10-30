import React, { useEffect } from 'react';

// Questi componenti sono quasi identici.
// In futuro, potresti combinarli in un unico componente 
// che accetta 'className' e 'brands' come props.
// Per ora, li teniamo separati come nell'originale.

export function ScrollingBrands1() {
  useEffect(() => {
    // Duplica il contenuto per lo scroll infinito
    const scrollDiv = document.querySelector(".scroll div");
    // Controlla se è già stato duplicato
    if (scrollDiv && scrollDiv.children.length <= 9) { 
      scrollDiv.innerHTML += scrollDiv.innerHTML;
    }
  }, []); // Esegui solo al mount

  return (
    <div className="scroll">
      <div>
          <span>rolex</span>
          <span>tissot</span>
          <span>audemarspiguet</span>
          <span>citizen</span>
          <span>casio</span>
          <span>orient</span>
          <span>hublot</span>
          <span>tudor</span>
          <span>oris</span>
      </div>
    </div>
  );
}

export function ScrollingBrands2() {
  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll2 div");
    if (scrollDiv && scrollDiv.children.length <= 9) {
      scrollDiv.innerHTML += scrollDiv.innerHTML;
    }
  }, []);

  return (
    <div className="scroll2">
      <div>
        <span>alpina</span>
        <span>bulova</span>
        <span>patek philippe</span>
        <span>zenith</span>
        <span>cartier</span>
        <span>seiko</span>
        <span>omega</span>
        <span>longines</span>
        <span>mido</span>
      </div>
    </div>
  );
}

export function ScrollingBrands3() {
  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll3 div");
    if (scrollDiv && scrollDiv.children.length <= 9) {
      scrollDiv.innerHTML += scrollDiv.innerHTML;
    }
  }, []);

  return (
    <div className="scroll3">
      <div>
          <span>hamilton</span>
          <span>iwc</span>
          <span>swatch</span>
          <span>maurice lacroix</span>
          <span>timex</span>
          <span>breitling</span>
          <span>panerai</span>
          <span>jaeger-lecoultre</span>
          <span>lorenz</span>
      </div>
    </div>
  );
}

export default { ScrollingBrands1, ScrollingBrands2, ScrollingBrands3 };
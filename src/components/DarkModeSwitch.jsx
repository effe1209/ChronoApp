// DarkModeSwitch.jsx
import React from 'react';

// Destrutturiamo le props che arrivano dal genitore
function DarkModeSwitch({ isDark, toggleTheme }) {
  return (
    <div className="slideWrap">
      <input
        type="checkbox"
        id="s5"
        checked={isDark}
        // ERRORE PRECEDENTE: onChange={() => setIsDark(!isDark)}
        // CORREZIONE: Usa la funzione passata dal genitore
        onChange={toggleTheme} 
      />
      <label className="slider-v3" htmlFor="s5"></label>
    </div>
  );
}

export default DarkModeSwitch;
import React, { useState, useEffect } from 'react';

// Rimosse importazioni VscSignOut, VscAdd
// Il componente ora si occupa SOLO dello switch Dark Mode.
function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(
    // Legge il tema salvato all'avvio
    () => localStorage.getItem("theme") === "dark" 
  );

  useEffect(() => {
    // Applica o rimuove la classe 'dark-mode' al body
    if (isDark) {
      document.body.classList.add("dark-mode");
      // Importante per il comportamento nativo di alcuni browser
      document.documentElement.setAttribute("style", "color-scheme:dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.setAttribute("style", "color-scheme:light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]); // Esegue il side effect solo quando isDark cambia

  return (
    // Ho spostato la classe slideWrap nello style={controlStyle}
    
    <div className="slideWrap"  >
      {/* Switch Dark Mode */}
      <input
        type="checkbox"
        id="s5"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <label className="slider-v3" htmlFor="s5"></label>
    </div>
  );
}

export default DarkModeSwitch;
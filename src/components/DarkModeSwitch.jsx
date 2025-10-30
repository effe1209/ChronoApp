import React, { useState, useEffect } from 'react';

// Gestisce sia il dark mode che il menu hamburger mobile
function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark" // Usa una funzione per leggere solo all'inizio
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.documentElement.setAttribute("style", "color-scheme:dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.setAttribute("style", "color-scheme:light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]); // Esegui solo quando isDark cambia

  // Chiudi il menu quando si fa clic su un link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="slideWrap">
      {/* Pulsante Hamburger per il Mobile */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Menu di Navigazione */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <nav>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#function" onClick={handleLinkClick}>Funzioni</a>
          <a href="#listWatch" onClick={handleLinkClick}>Lista Orologi</a>
        </nav>
      </div>

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


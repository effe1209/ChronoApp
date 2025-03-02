import { useState } from "react";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <h1>La mia collezione di orologi</h1>

      {/* Barra in fondo */}
      <nav className="bottom-bar">
        <button onClick={toggleMenu} className="menu-button">Menu</button>

        {/* Sottomenu */}
        {showMenu && (
          <div className="submenu">
            <a href="#">Aggiungi Orologio</a>
            <a href="#">Rimuovi Orologio</a>
            <a href="#">Impostazioni</a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default App;

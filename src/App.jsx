import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [watches, setWatches] = useState(() => {
    const savedWatches = localStorage.getItem("watches");
    return savedWatches ? JSON.parse(savedWatches) : [
      { id: 1, name: "Rolex Submariner", brand: "Rolex", year: 2020, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Omega Speedmaster", brand: "Omega", year: 2018, image: "https://via.placeholder.com/150" },
    ];
  });
  
  const [showBanner, setShowBanner] = useState(false);
  const [newWatch, setNewWatch] = useState({ name: "", brand: "", year: "", image: "" });

  useEffect(() => {
    localStorage.setItem("watches", JSON.stringify(watches));
  }, [watches]);

  const handleAddWatch = () => {
    if (newWatch.name && newWatch.brand && newWatch.year && newWatch.image) {
      const watchToAdd = { id: Date.now(), ...newWatch };
      setWatches((prevWatches) => {
        const updatedWatches = [...prevWatches, watchToAdd];
        localStorage.setItem("watches", JSON.stringify(updatedWatches)); // Salva nel localStorage
        return updatedWatches;
      });
      setShowBanner(false);
      const [newWatch, setNewWatch] = useState({ name: "", brand: "", year: "", movement: "", image: "" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewWatch((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteWatch = (id) => {
    setWatches((prevWatches) => {
      const updatedWatches = prevWatches.filter(watch => watch.id !== id);
      localStorage.setItem("watches", JSON.stringify(updatedWatches)); // Aggiorna localStorage
      return updatedWatches;
    });
  };

  const [selectedWatches, setSelectedWatches] = useState([]);
  
  const handleSelectWatch = (id) => {
    setSelectedWatches((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((watchId) => watchId !== id) // Se già selezionato, lo rimuove
        : [...prevSelected, id] // Altrimenti, lo aggiunge
    );
  };

  const handleDeleteSelected = () => {
    setWatches((prevWatches) => {
      const updatedWatches = prevWatches.filter((watch) => !selectedWatches.includes(watch.id));
      localStorage.setItem("watches", JSON.stringify(updatedWatches)); // Aggiorna localStorage
      return updatedWatches;
    });
    setSelectedWatches([]); // Svuota la selezione dopo la cancellazione
  };

  return (
    <div className="container">
      <h1>La mia collezione di orologi</h1>
      <button onClick={() => setShowBanner(true)} className="add-button">Aggiungi Orologio</button>
      
      {showBanner && (
        <div className="banner">
          <h2>Aggiungi un nuovo orologio</h2>
          <div className="form">
            <input type="text" placeholder="Nome" value={newWatch.name} onChange={(e) => setNewWatch({ ...newWatch, name: e.target.value })} />
            <input type="text" placeholder="Marca" value={newWatch.brand} onChange={(e) => setNewWatch({ ...newWatch, brand: e.target.value })} />
            <input type="number" placeholder="Anno" value={newWatch.year} onChange={(e) => setNewWatch({ ...newWatch, year: e.target.value })} />
            <label>Movimento:</label>
            <select value={newWatch.movement} onChange={(e) => setNewWatch({ ...newWatch, movement: e.target.value })}>
              <option value="">Seleziona il movimento</option>
              <option value="Automatico">Automatico</option>
              <option value="Meccanico">Carica Manuale</option>
              <option value="Quarzo">Quarzo</option>
            </select>
          </div>
          <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
          <div className="buttonForm">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {newWatch.image && <img src={newWatch.image} alt="Anteprima" className="preview-image" />}
            <div style={{ marginBottom: "10px" }}></div> {/* Spazio extra */}
            <button onClick={handleAddWatch}>Salva</button>
            <button onClick={() => setShowBanner(false)}>Annulla</button>
          </div>
        </div>
      )}

      <div className="watch-list">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <input
              type="checkbox"
              checked={selectedWatches.includes(watch.id)}
              onChange={() => handleSelectWatch(watch.id)}
            />
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h2>{watch.name}</h2>
            <p>{watch.brand} - {watch.year}</p>
            <p>{watch.brand} - {watch.year}</p>
            <p>Movimento: {watch.movement}</p>
          </div>
        ))}
      </div>
      {selectedWatches.length > 0 && (
          <button onClick={handleDeleteSelected} className="delete-button">
            Elimina selezionati
          </button>
      )}

    </div>
  );
}

export default App;

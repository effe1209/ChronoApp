import { useState } from "react";
import "./App.css";

function App() {
  const [watches, setWatches] = useState([
    { id: 1, name: "Rolex Submariner", brand: "Rolex", year: 2020, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Omega Speedmaster", brand: "Omega", year: 2018, image: "https://via.placeholder.com/150" },
  ]);

  const addWatch = () => {
    const newWatch = {
      id: watches.length + 1,
      name: "Nuovo Orologio",
      brand: "Marca",
      year: new Date().getFullYear(),
      image: "https://via.placeholder.com/150",
    };
    setWatches([...watches, newWatch]);
  };

  return (
    <div className="container">
      <h1>La mia collezione di orologi</h1>
      <button onClick={addWatch} className="add-button">Aggiungi Orologio</button>
      <div className="watch-list">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h2>{watch.name}</h2>
            <p>{watch.brand} - {watch.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
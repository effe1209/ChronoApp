import "./App.css";

function App() {
  const watches = [
    { id: 1, name: "Rolex Submariner", brand: "Rolex", year: 2020 },
    { id: 2, name: "Omega Speedmaster", brand: "Omega", year: 2018 },
  ];

  return (
    <div className="container">
      <h1>La mia collezione di orologi</h1>
      <div className="watch-list">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <h2>{watch.name}</h2>
            <p>{watch.brand} - {watch.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useMemo } from 'react';
// Importiamo Pie (grafico a torta) e gli elementi necessari
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registriamo gli elementi che Chart.js userà
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Funzione helper per generare colori unici dinamicamente
 * in base al numero di "fette" del grafico.
 */
const generateColors = (count) => {
  const colors = [];
  const borderColors = [];
  for (let i = 0; i < count; i++) {
    // Genera un colore diverso per ogni fetta
    const hue = (i * (360 / count)) % 360;
    colors.push(`hsla(${hue}, 70%, 60%, 0.7)`); // Colore con trasparenza
    borderColors.push(`hsla(${hue}, 70%, 60%, 1)`); // Stesso colore, opaco
  }
  return { backgroundColors: colors, borderColors: borderColors };
};

/**
 * Funzione helper (pura) per processare l'array di orologi.
 * Questa è la logica di aggregazione (la parte da "informatico").
 * @param {Array} watches - L'array di orologi dallo stato di App.jsx
 * @param {String} key - La chiave per cui aggregare (es. 'brand' or 'movement')
 */
const processData = (watches, key) => {
  // 1. Contiamo le occorrenze usando .reduce()
  const counts = watches.reduce((acc, watch) => {
    // Usiamo 'Non specificato' se il campo è vuoto
    const value = watch[key] || 'Non specificato';
    
    // Incrementiamo il contatore per quel valore
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {}); // Iniziamo con un oggetto vuoto {}

  // 2. Trasformiamo l'oggetto { Rolex: 2, Seiko: 1 } in array
  const labels = Object.keys(counts);
  const dataValues = Object.values(counts);
  const { backgroundColors, borderColors } = generateColors(labels.length);

  // 3. Restituiamo il formato richiesto da Chart.js
  return {
    labels: labels,
    datasets: [
      {
        label: `Distribuzione ${key}`,
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
};

// --- IL COMPONENTE REACT ---

const WatchAnalytics = ({ watches }) => {
  
  // 1. Calcoliamo i dati per le MARCHE
  // useMemo ottimizza: ricalcola solo se [watches] cambia
  const brandChartData = useMemo(() => {
    return processData(watches, 'brand');
  }, [watches]);

  // 2. Calcoliamo i dati per i MOVIMENTI
  const movementChartData = useMemo(() => {
    return processData(watches, 'movement');
  }, [watches]);

  // Opzioni comuni per i grafici
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Per gestire l'altezza
    plugins: {
      legend: {
        position: 'top',
        labels: {
            // Aggiungi questo se hai il dark mode
            // color: document.body.classList.contains('dark-mode') ? '#FFF' : '#333'
        }
      },
      title: {
        display: false, // Nascondiamo il titolo di default
      },
    },
  };

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h4 style={{padding: '10px'}}>Distribuzione Marche</h4>
        <div className="canvas_container">
        {watches && watches.length > 0 ? (
          <Pie data={brandChartData} options={options} />
        ) : (
          <p>Aggiungi un orologio per vedere il grafico.</p>
        )}
        </div>
      </div>

      <div className="chart-wrapper">
        <h4 style={{padding: '10px'}}>Distribuzione Movimenti</h4>
        <div className="canvas_container">
        {watches && watches.length > 0 ? (
          <Pie data={movementChartData} options={options} />
        ) : (
          <p>Aggiungi un orologio per vedere il grafico.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default WatchAnalytics;

import React, { useMemo, useEffect } from 'react';
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
 */
const processData = (watches, key) => {
  const counts = watches.reduce((acc, watch) => {
    const value = watch[key] || 'Non specificato';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {}); 

  const labels = Object.keys(counts);
  const dataValues = Object.values(counts);
  const { backgroundColors, borderColors } = generateColors(labels.length);

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
  
  // --- GESTIONE SCROLL BODY ---
  useEffect(() => {
    // 1. Salviamo lo stile originale per sicurezza (opzionale, ma buona prassi)
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // 2. Blocchiamo lo scroll
    document.body.style.overflow = 'hidden';

    // 3. Cleanup function: viene eseguita quando il componente viene smontato
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Array vuoto = esegui solo al mount e unmount

  // --- FINE GESTIONE SCROLL ---

  // 1. Calcoliamo i dati per le MARCHE
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
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false, 
      },
    },
  };

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h4>Distribuzione Marche</h4>
        <div className="canvas_container" style={{ position: 'relative', height: '300px', width: '100%' }}>
        {watches && watches.length > 0 ? (
          <Pie data={brandChartData} options={options} />
        ) : (
          <p>Aggiungi un orologio per vedere il grafico.</p>
        )}
        </div>
      </div>

      <div className="chart-wrapper">
        <h4>Distribuzione Movimenti</h4>
        <div className="canvas_container" style={{ position: 'relative', height: '300px', width: '100%' }}>
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
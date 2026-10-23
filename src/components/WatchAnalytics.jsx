import React, { useMemo, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CHART_COLORS = [
  '#28788c', '#d1a45f', '#728b75', '#b97368', '#7488a3',
  '#aa8bab', '#65a69b', '#d18b4f', '#7b9ab2', '#a4a66a',
];

const asNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const formatEuro = (value) => new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
}).format(value);

const makeCountData = (watches, field, limit = 7) => {
  const counts = watches.reduce((result, watch) => {
    const label = String(watch[field] || '').trim() || 'Non specificato';
    result[label] = (result[label] || 0) + 1;
    return result;
  }, {});
  const sorted = Object.entries(counts).sort((first, second) => second[1] - first[1]);
  const visible = sorted.slice(0, limit);
  const hiddenCount = sorted.slice(limit).reduce((sum, [, count]) => sum + count, 0);
  if (hiddenCount > 0) visible.push(['Altri', hiddenCount]);

  return {
    labels: visible.map(([label]) => label),
    values: visible.map(([, count]) => count),
  };
};

const makeConditionData = (watches) => {
  const counts = Array.from({ length: 10 }, () => 0);
  watches.forEach((watch) => {
    const rating = asNumber(watch.condition_rating);
    if (Number.isInteger(rating) && rating >= 1 && rating <= 10) counts[rating - 1] += 1;
  });
  return {
    labels: counts.map((_, index) => `${index + 1}/10`),
    values: counts,
  };
};

const makeDecadeData = (watches) => {
  const counts = watches.reduce((result, watch) => {
    const year = asNumber(watch.year);
    if (!Number.isInteger(year) || year < 1800 || year > new Date().getFullYear() + 1) return result;
    const decade = Math.floor(year / 10) * 10;
    const label = `${decade}–${decade + 9}`;
    result[label] = (result[label] || 0) + 1;
    return result;
  }, {});
  const sorted = Object.entries(counts).sort((first, second) => Number(first[0].slice(0, 4)) - Number(second[0].slice(0, 4)));
  return { labels: sorted.map(([label]) => label), values: sorted.map(([, count]) => count) };
};

const StatCard = ({ label, value, detail, icon }) => (
  <article className="statistics-kpi">
    <span className="statistics-kpi__icon" aria-hidden="true">{icon}</span>
    <span className="statistics-kpi__label">{label}</span>
    <strong>{value}</strong>
    <small>{detail}</small>
  </article>
);

const WatchAnalytics = ({ watches = [], isDark = false }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalOverflow; };
  }, []);

  const summary = useMemo(() => {
    const values = watches.map((watch) => asNumber(watch.money)).filter((value) => value !== null);
    const ratings = watches
      .map((watch) => asNumber(watch.condition_rating))
      .filter((rating) => Number.isInteger(rating) && rating >= 1 && rating <= 10);
    const equipped = watches.filter((watch) => watch.has_box && watch.has_papers).length;
    const warranties = watches.filter((watch) => watch.has_warranty).length;
    const brands = makeCountData(watches, 'brand', watches.length || 1);
    const movements = makeCountData(watches, 'movement', watches.length || 1);

    return {
      totalValue: values.reduce((sum, value) => sum + value, 0),
      recordedValues: values.length,
      averageCondition: ratings.length
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
        : null,
      ratedWatches: ratings.length,
      equipped,
      warranties,
      topBrand: brands.labels[0] || '—',
      topBrandCount: brands.values[0] || 0,
      topMovement: movements.labels[0] || '—',
      topMovementCount: movements.values[0] || 0,
    };
  }, [watches]);

  const brandData = useMemo(() => makeCountData(watches, 'brand'), [watches]);
  const movementData = useMemo(() => makeCountData(watches, 'movement'), [watches]);
  const conditionData = useMemo(() => makeConditionData(watches), [watches]);
  const decadeData = useMemo(() => makeDecadeData(watches), [watches]);

  const textColor = isDark ? '#d8e1e7' : '#344b58';
  const gridColor = isDark ? 'rgba(216, 225, 231, 0.12)' : 'rgba(52, 75, 88, 0.1)';
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '64%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: textColor,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
          boxWidth: 8,
          font: { size: 11, weight: 500 },
        },
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(15, 24, 33, .96)' : 'rgba(31, 48, 59, .96)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 10,
      },
    },
  };
  const barOptions = (horizontal = false) => ({
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? 'rgba(15, 24, 33, .96)' : 'rgba(31, 48, 59, .96)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: textColor, precision: 0, font: { size: 10 } },
        grid: { color: gridColor, drawBorder: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: textColor, precision: 0, font: { size: 10 } },
        grid: { color: gridColor, drawBorder: false },
      },
    },
  });

  const chartData = (data, label) => ({
    labels: data.labels,
    datasets: [{
      label,
      data: data.values,
      backgroundColor: data.values.map((_, index) => CHART_COLORS[index % CHART_COLORS.length]),
      borderColor: isDark ? 'rgba(20, 30, 39, .9)' : 'rgba(255, 255, 255, .95)',
      borderWidth: 2,
      borderRadius: 8,
      hoverOffset: 5,
    }],
  });

  const renderChart = (data, Chart, options, label) => (
    data.values.some((value) => value > 0)
      ? <Chart data={chartData(data, label)} options={options} />
      : <p className="statistics-empty">Non ci sono ancora dati sufficienti.</p>
  );

  return (
    <div className="statistics-content">
      <section className="statistics-kpis" aria-label="Indicatori della collezione">
        <StatCard
          icon="€"
          label="Valore registrato"
          value={formatEuro(summary.totalValue)}
          detail={`${summary.recordedValues} ${summary.recordedValues === 1 ? 'orologio valorizzato' : 'orologi valorizzati'}`}
        />
        <StatCard
          icon="✧"
          label="Condizione media"
          value={summary.averageCondition === null ? '—' : `${summary.averageCondition.toLocaleString('it-IT', { maximumFractionDigits: 1 })}/10`}
          detail={`${summary.ratedWatches} ${summary.ratedWatches === 1 ? 'valutazione' : 'valutazioni'} inserite`}
        />
        <StatCard
          icon="▣"
          label="Dotazione completa"
          value={`${summary.equipped}/${watches.length}`}
          detail="Scatola e documenti presenti"
        />
        <StatCard
          icon="◷"
          label="Con garanzia"
          value={`${summary.warranties}/${watches.length}`}
          detail="Orologi con garanzia registrata"
        />
      </section>

      <section className="statistics-insights" aria-label="Punti salienti">
        <article>
          <span>MARCA PIÙ PRESENTE</span>
          <strong>{summary.topBrand}</strong>
          <small>{summary.topBrandCount} {summary.topBrandCount === 1 ? 'pezzo' : 'pezzi'}</small>
        </article>
        <article>
          <span>MOVIMENTO PIÙ DIFFUSO</span>
          <strong>{summary.topMovement}</strong>
          <small>{summary.topMovementCount} {summary.topMovementCount === 1 ? 'orologio' : 'orologi'}</small>
        </article>
      </section>

      <section className="charts-container statistics-charts" aria-label="Grafici della collezione">
        <article className="chart-wrapper statistics-chart">
          <div className="statistics-chart-heading">
            <span className="statistics-chart-mark statistics-chart-mark--brands" aria-hidden="true">✦</span>
            <div><h3>Marche</h3><p>Distribuzione dei modelli per brand</p></div>
          </div>
          <div className="canvas_container statistics-chart-canvas">
            {renderChart(brandData, Doughnut, doughnutOptions, 'Orologi')}
          </div>
        </article>

        <article className="chart-wrapper statistics-chart">
          <div className="statistics-chart-heading">
            <span className="statistics-chart-mark statistics-chart-mark--movements" aria-hidden="true">◷</span>
            <div><h3>Movimenti</h3><p>La meccanica che anima la collezione</p></div>
          </div>
          <div className="canvas_container statistics-chart-canvas">
            {renderChart(movementData, Doughnut, doughnutOptions, 'Orologi')}
          </div>
        </article>

        <article className="chart-wrapper statistics-chart">
          <div className="statistics-chart-heading">
            <span className="statistics-chart-mark statistics-chart-mark--condition" aria-hidden="true">↗</span>
            <div><h3>Condizione</h3><p>Valutazioni inserite da 1 a 10</p></div>
          </div>
          <div className="canvas_container statistics-chart-canvas">
            {renderChart(conditionData, Bar, barOptions(true), 'Orologi')}
          </div>
        </article>

        <article className="chart-wrapper statistics-chart">
          <div className="statistics-chart-heading">
            <span className="statistics-chart-mark statistics-chart-mark--decades" aria-hidden="true">⌚</span>
            <div><h3>Epoca</h3><p>Distribuzione per decennio di produzione</p></div>
          </div>
          <div className="canvas_container statistics-chart-canvas">
            {renderChart(decadeData, Bar, barOptions(false), 'Orologi')}
          </div>
        </article>
      </section>
    </div>
  );
};

export default WatchAnalytics;

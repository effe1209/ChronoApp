import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import './componentCSS/CollectionValue.css';

const gears = [
  { id: 'left', size: 120, teeth: 18, left: '-3%', top: '-2.3%', direction: 1, duration: 72 },
  { id: 'left-center', size: 80, teeth: 12, left: '24%', top: '19%', direction: -1, duration: 48 },
  { id: 'right-center', size: 86, teeth: 13, left: '43%', top: '6%', direction: 1, duration: 52 },
  { id: 'right', size: 128, teeth: 19, left: '63%', top: '-1.5%', direction: -1, duration: 78 },
];

function createGearPath(teeth = 12) {
  const pointsPerTooth = [
    [-0.5, 0.72],
    [-0.36, 0.72],
    [-0.3, 0.96],
    [-0.16, 0.96],
    [0.16, 0.96],
    [0.3, 0.96],
    [0.36, 0.72],
    [0.5, 0.72],
  ];

  const points = Array.from({ length: teeth }, (_, tooth) =>
    pointsPerTooth.map(([offset, radius]) => {
      const angle = ((tooth + offset) / teeth) * Math.PI * 2 - Math.PI / 2;
      return [50 + Math.cos(angle) * radius * 50, 50 + Math.sin(angle) * radius * 50];
    })
  ).flat();

  return `${points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`).join(' ')} Z`;
}

function Gear({ gear, scrollProgress, isDark, reduceMotion }) {
  const gearPath = createGearPath(gear.teeth);
  const scrollRotation = useTransform(
    scrollProgress,
    [0, 1],
    [-90 * gear.direction, 90 * gear.direction]
  );

  return (
    <motion.div
      className="collection-gear"
      style={{
        left: gear.left,
        top: gear.top,
        width: `${(gear.size / 4.4).toFixed(2)}%`,
        color: isDark ? '#d6b675' : '#28677b',
      }}
      animate={reduceMotion ? undefined : { rotate: gear.direction * 360 }}
      transition={{ duration: gear.duration, ease: 'linear', repeat: Infinity }}
    >
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        fill="none"
        style={{ rotate: reduceMotion ? 0 : scrollRotation }}
      >
        <path className="collection-gear-tooth" d={gearPath} />
        <circle className="collection-gear-rim" cx="50" cy="50" r="32" />
        <g className="collection-gear-spokes">
          <path d="M50 18v20M50 62v20M18 50h20M62 50h20M27.4 27.4l14.2 14.2M58.4 58.4l14.2 14.2M72.6 27.4 58.4 41.6M41.6 58.4 27.4 72.6" />
        </g>
        <circle className="collection-gear-hub" cx="50" cy="50" r="13" />
        <circle className="collection-gear-pin" cx="50" cy="50" r="4" />
      </motion.svg>
    </motion.div>
  );
}

export default function CollectionValue({ value, isDark = false }) {
  const sceneRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div
      ref={sceneRef}
      className={`collection-value-scene${isDark ? ' is-dark' : ''}`}
      role="group"
      aria-label="Valore della collezione"
    >
      <div className="collection-gears" aria-hidden="true">
        {gears.map((gear) => (
          <Gear
            key={gear.id}
            gear={gear}
            scrollProgress={scrollYProgress}
            isDark={isDark}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
      <p className="profile-collection-value collection-value-card">
        <span>Valore della collezione</span>
        <strong>{value} €</strong>
      </p>
    </div>
  );
}

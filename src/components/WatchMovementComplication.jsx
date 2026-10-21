const createGearPath = (cx, cy, teeth, outerRadius, rootRadius) => {
  const step = (Math.PI * 2) / teeth;
  const points = Array.from({ length: teeth }, (_, index) => {
    const angle = index * step - Math.PI / 2;
    const toothStart = step * 0.18;
    const toothEnd = step * 0.43;

    return [
      [rootRadius, angle],
      [rootRadius, angle + toothStart],
      [outerRadius, angle + toothStart],
      [outerRadius, angle + toothEnd],
      [rootRadius, angle + toothEnd],
      [rootRadius, angle + step],
    ];
  }).flat();

  return points
    .map(([radius, angle], index) => {
      const x = (cx + Math.cos(angle) * radius).toFixed(2);
      const y = (cy + Math.sin(angle) * radius).toFixed(2);
      return `${index === 0 ? 'M' : 'L'}${x} ${y}`;
    })
    .join(' ') + ' Z';
};

function Gear({ cx, cy, teeth, outerRadius, rootRadius, className }) {
  return (
    <g className={`movement-gear ${className}`}>
      <path d={createGearPath(cx, cy, teeth, outerRadius, rootRadius)} fill="url(#movement-steel)" stroke="#31393a" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={rootRadius * 0.77} fill="none" stroke="#f1eee6" strokeOpacity="0.76" strokeWidth="2" />
      <path
        d={`M${cx} ${cy - rootRadius * 0.66} L${cx} ${cy + rootRadius * 0.66} M${cx - rootRadius * 0.66} ${cy} L${cx + rootRadius * 0.66} ${cy}`}
        stroke="#596366"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={rootRadius * 0.32} fill="url(#movement-gold)" stroke="#424849" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={rootRadius * 0.13} fill="#873d4d" stroke="#f1bdc0" strokeWidth="1" />
    </g>
  );
}

function Screw({ cx, cy }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="5.5" fill="url(#movement-steel)" stroke="#30383b" strokeWidth="1.2" />
      <path d={`M${cx - 2.6} ${cy + 2.6} L${cx + 2.6} ${cy - 2.6}`} stroke="#485154" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

export default function WatchMovementComplication() {
  return (
    <div className="movement-complication" role="img" aria-label="Dettaglio di un movimento meccanico con ingranaggi in rotazione">
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <defs>
          <radialGradient id="movement-plate" cx="34%" cy="26%" r="80%">
            <stop offset="0" stopColor="#394348" />
            <stop offset="0.7" stopColor="#182226" />
            <stop offset="1" stopColor="#090e10" />
          </radialGradient>
          <linearGradient id="movement-steel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f1f0e8" />
            <stop offset="0.32" stopColor="#9fa9aa" />
            <stop offset="0.62" stopColor="#e1dfd5" />
            <stop offset="1" stopColor="#657176" />
          </linearGradient>
          <linearGradient id="movement-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6df9e" />
            <stop offset="0.5" stopColor="#ad7b35" />
            <stop offset="1" stopColor="#f2d58a" />
          </linearGradient>
          <linearGradient id="movement-bridge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f1d899" />
            <stop offset="0.55" stopColor="#97703b" />
            <stop offset="1" stopColor="#e4c987" />
          </linearGradient>
          <clipPath id="movement-window">
            <circle cx="120" cy="120" r="105" />
          </clipPath>
        </defs>

        <circle cx="120" cy="120" r="117" fill="url(#movement-steel)" stroke="#f9f4e8" strokeWidth="1.5" />
        <circle cx="120" cy="120" r="109" fill="#242d30" stroke="#6b777a" strokeWidth="2" />
        <g clipPath="url(#movement-window)">
          <circle cx="120" cy="120" r="105" fill="url(#movement-plate)" />
          <path d="M12 79 C36 30 75 26 102 47 L110 67 C83 58 56 61 37 99 Z" fill="url(#movement-bridge)" stroke="#4c4e49" strokeWidth="2" />
          <path d="M133 25 C177 23 209 47 225 82 L205 95 C190 65 167 51 132 52 Z" fill="url(#movement-bridge)" stroke="#4c4e49" strokeWidth="2" />
          <path d="M22 158 C46 178 67 196 104 211 L116 190 C81 181 63 163 48 139 Z" fill="url(#movement-bridge)" stroke="#4c4e49" strokeWidth="2" />
          <path d="M143 174 C169 157 191 150 220 151 L216 175 C191 175 177 185 158 205 Z" fill="url(#movement-bridge)" stroke="#4c4e49" strokeWidth="2" />

          <Gear cx={78} cy={91} teeth={12} outerRadius={39} rootRadius={32} className="movement-gear--large" />
          <Gear cx={151} cy={127} teeth={11} outerRadius={34} rootRadius={27} className="movement-gear--medium" />
          <Gear cx={108} cy={174} teeth={9} outerRadius={27} rootRadius={21} className="movement-gear--small" />

          <g className="movement-balance">
            <circle cx="167" cy="68" r="19" fill="none" stroke="url(#movement-steel)" strokeWidth="5" />
            <circle cx="167" cy="68" r="12" fill="none" stroke="url(#movement-gold)" strokeWidth="2" />
            <circle cx="167" cy="68" r="4" fill="#a13f4c" stroke="#e8b9bd" strokeWidth="1" />
            <path d="M167 49 L167 58 M167 78 L167 87 M148 68 L157 68 M177 68 L186 68" stroke="#d8d5ca" strokeWidth="2" />
          </g>

          <circle cx="37" cy="118" r="8" fill="#873d4d" stroke="#e9b3bd" strokeWidth="2" />
          <circle cx="195" cy="111" r="7" fill="#873d4d" stroke="#e9b3bd" strokeWidth="2" />
          <circle cx="173" cy="190" r="8" fill="#873d4d" stroke="#e9b3bd" strokeWidth="2" />
          <Screw cx={52} cy={52} />
          <Screw cx={205} cy={135} />
          <Screw cx={64} cy={194} />
          <Screw cx={134} cy={211} />
        </g>
        <circle cx="120" cy="120" r="108" fill="none" stroke="#f5f2e9" strokeOpacity="0.65" strokeWidth="1" />
      </svg>
    </div>
  );
}

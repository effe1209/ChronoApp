export const OUTFIT_OCCASIONS = [
  { value: 'casual', label: 'Quotidiano / casual' },
  { value: 'elegante', label: 'Elegante' },
  { value: 'sportivo', label: 'Sportivo' },
  { value: 'sera', label: 'Sera / evento' },
];

export const OUTFIT_COLOR_FAMILIES = [
  { value: 'black', label: 'Nero' },
  { value: 'silver', label: 'Bianco, grigio o argento' },
  { value: 'blue', label: 'Blu' },
  { value: 'green', label: 'Verde' },
  { value: 'gold', label: 'Giallo o oro' },
  { value: 'brown', label: 'Marrone' },
  { value: 'orange', label: 'Arancione' },
  { value: 'red', label: 'Rosso' },
  { value: 'purple', label: 'Viola' },
];

const COLOR_LABEL_BY_VALUE = Object.fromEntries(
  OUTFIT_COLOR_FAMILIES.map(({ value, label }) => [value, label.toLocaleLowerCase('it')])
);
const OCCASION_LABEL_BY_VALUE = Object.fromEntries(
  OUTFIT_OCCASIONS.map(({ value, label }) => [value, label.toLocaleLowerCase('it')])
);

export const getWatchColorFamily = (hexColor) => {
  if (!/^#[\da-f]{6}$/i.test(hexColor || '')) return null;

  const red = Number.parseInt(hexColor.slice(1, 3), 16) / 255;
  const green = Number.parseInt(hexColor.slice(3, 5), 16) / 255;
  const blue = Number.parseInt(hexColor.slice(5, 7), 16) / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  const lightness = (max + min) / 2;

  if (delta < 0.12) return lightness < 0.2 ? 'black' : 'silver';

  const saturation = delta / (1 - Math.abs(2 * lightness - 1));
  let hue;
  if (max === red) hue = ((green - blue) / delta) % 6;
  else if (max === green) hue = (blue - red) / delta + 2;
  else hue = (red - green) / delta + 4;
  hue = (hue * 60 + 360) % 360;

  if (hue < 15 || hue >= 345) return 'red';
  if (hue < 38) return lightness < 0.48 ? 'brown' : saturation > 0.5 ? 'orange' : 'gold';
  if (hue < 70) return 'gold';
  if (hue < 170) return 'green';
  if (hue < 255) return 'blue';
  if (hue < 325) return 'purple';
  return 'red';
};

export const matchesOutfitFilters = (watch, occasion, colorFamily) => {
  const occasionMatches = occasion === 'all'
    || (Array.isArray(watch.occasions) && watch.occasions.includes(occasion));
  const colorMatches = colorFamily === 'all' || getWatchColorFamily(watch.color) === colorFamily;
  return occasionMatches && colorMatches;
};

export const getOutfitMatchExplanation = (watch, occasion, colorFamily) => {
  const reasons = ['affinità visiva con la foto'];
  if (occasion !== 'all') reasons.push(OCCASION_LABEL_BY_VALUE[occasion] || occasion);
  if (colorFamily !== 'all') reasons.push(COLOR_LABEL_BY_VALUE[colorFamily] || colorFamily);
  return `Selezionato per ${reasons.join(' · ')}.`;
};

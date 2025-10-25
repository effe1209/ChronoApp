// Logica pura, non dipende da nulla
export const isValidWatch = (watch) => {
  return (
    watch.name.trim() !== "" &&
    watch.brand.trim() !== "" &&
    watch.year > 0 &&
    !isNaN(watch.year) &&
    watch.movement.trim() !== "" &&
    (watch.money === null || (!isNaN(watch.money) && watch.money >= 0))
  );
};

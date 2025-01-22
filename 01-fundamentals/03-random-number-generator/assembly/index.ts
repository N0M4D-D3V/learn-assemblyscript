export function random(min: i32, max: i32): i32 {
  if (min > max) {
    // Mensaje de error más descriptivo
    throw new Error(
      `Invalid range: min (${min}) cannot be greater than max (${max}).`
    );
  }

  // Si min === max, devolver el valor directamente
  if (min === max) return min;

  // Cálculo del número pseudoaleatorio
  return (Math.floor(Math.random() * (max - min + 1)) + min) as i32;
}

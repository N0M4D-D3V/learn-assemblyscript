/**
 *
 * @param y0 altura inicial en metros
 * @param v0 velocidad inicial en m/s
 * @param g aceleración de la gravedad en m/s^2
 * @param t tiempo en segundos
 * @returns La posición del objeto después de ${t} segundos en metros
 */
export function calcFreeFall(y0: f64, v0: f64, g: f64, t: f64): f64 {
  return y0 + v0 * t - 0.5 * g * t * t;
}

export function calcAcceleration(g: f64, t: f64): f64 {
  return g * t;
}

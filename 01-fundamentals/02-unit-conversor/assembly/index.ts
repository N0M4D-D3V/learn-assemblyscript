// km to miles
export function kmToMiles(km: f32): f32 {
  return km * 0.621371;
}

// miles to km
export function milesToKm(m: f32): f32 {
  return m / 0.621371;
}

// celsius a fahrenheit
export function celsiusToFahrenheit(celsius: i32): i32 {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(f: i32): i32 {
  return (f - 32) * (5 / 9);
}

// time
export function minToHour(min: i32): i32 {
  return min / 60;
}

export function hourToMin(h: i32): i32 {
  return h * 60;
}

// weight
export function kgToLb(kg: f32): f32 {
  return kg * 2.20462;
}

export function lbToKg(lb: f32): f32 {
  return lb / 2.20462;
}

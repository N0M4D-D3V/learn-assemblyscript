export function add(a: f32, b: f32): f32 {
  return a + b;
}

export function subtract(a: f32, b: f32): f32 {
  return a - b;
}

export function multiply(a: f32, b: f32): f32 {
  return a * b;
}

export function divide(a: f32, b: f32): f32 {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}

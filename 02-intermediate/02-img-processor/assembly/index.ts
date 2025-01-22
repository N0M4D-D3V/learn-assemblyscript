export function grayscale(buffer: Uint8Array): Uint8Array {
  return buffer;
}

export function inversion(buffer: Uint8Array): Uint8Array {
  let result = new Uint8Array(buffer.length);

  for (let i = 0; i < buffer.length; i++) {
    const pixel = buffer[i];
    let invertedPixel = 255 - pixel;

    result[i] = validateRange(invertedPixel);
  }
  return result;
}

export function adjustBrightness(
  buffer: Uint8Array,
  brightness: i32
): Uint8Array {
  let result = new Uint8Array(buffer.length);

  for (let i = 0; i < buffer.length; i++) {
    const pixel = buffer[i];
    let lightedPixel = pixel + brightness;
    result[i] = validateRange(lightedPixel);
  }
  return result;
}

export function applyThreshold(buffer: Uint8Array, threshold: u8): Uint8Array {
  let result = new Uint8Array(buffer.length);

  for (let i = 0; i < buffer.length; i++) {
    const pixel = buffer[i];
    result[i] = pixel >= threshold ? 255 : 0;
  }

  return result;
}

function validateRange(pixel: i32): i32 {
  if (pixel > 255) return 255;
  if (pixel < 0) return 0;

  return pixel;
}

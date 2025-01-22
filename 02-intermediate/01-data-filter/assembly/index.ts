// <!> Configuration
//    0 - No filter applyed
//    1 - delete negative numbers
//    2 - filter par
//    3 - filter no-par
export function filter(array: Int32Array, config: Int32Array): Int32Array {
  let result = new Int32Array(array.length);
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let include = true;
    for (let j = 0; j < config.length; j++) {
      switch (config[j]) {
        case 1: // Eliminar números negativos
          if (array[i] < 0) include = false;
          break;
        case 2: // Filtrar pares
          if (array[i] % 2 !== 0) include = false;
          break;
        case 3: // Filtrar impares
          if (array[i] % 2 === 0) include = false;
          break;
        default:
          include = true;
      }
      if (!include) break;
    }
    if (include) {
      result[count] = array[i];
      count++;
    }
  }

  return result.subarray(0, count);
}

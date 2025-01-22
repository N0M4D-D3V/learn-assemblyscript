export function rleCompression(chain: string): string {
  if (chain.length === 0) return ""; // Validación de entrada

  let result: Array<string> = [];
  let repeatedChar: string = chain.charAt(0);
  let repeatedCount: i32 = 1;

  for (let i = 1; i < chain.length; i++) {
    if (chain.charAt(i) === repeatedChar) {
      repeatedCount++;
    } else {
      result.push(repeatedChar + repeatedCount.toString());
      repeatedChar = chain.charAt(i);
      repeatedCount = 1;
    }
  }

  // Añadir el último carácter y su cuenta
  result.push(repeatedChar + repeatedCount.toString());
  return result.join("");
}

export function rleDecompression(chain: string): string {
  let result: Array<string> = [];
  let i = 0;

  while (i < chain.length) {
    let char = chain.charAt(i);
    let countStr = "";

    // Leer número completo
    i++;
    while (
      i < chain.length &&
      chain.charAt(i) >= "0" &&
      chain.charAt(i) <= "9"
    ) {
      countStr += chain.charAt(i);
      i++;
    }

    if (countStr.length > 0) {
      let count = I32.parseInt(countStr);
      for (let j = 0; j < count; j++) {
        result.push(char);
      }
    }
  }

  return result.join("");
}

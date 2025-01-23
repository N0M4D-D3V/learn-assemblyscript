export function encrypt(chain: Uint8Array): string {
  //1. prepare data
  const blocks: Uint8Array[] = divideBlocks(chain);

  //2. generate key
  const key = keyGen();
  //3. Block encrypt
  //4. Round encrypt
  //5. get cyphered txt
  return "";
}

export function decrypt(chain: string): string {
  return "";
}

// Definir una función para dividir los datos en bloques de 128 bits
function divideBlocks(data: Uint8Array): Uint8Array[] {
  const bloques: Uint8Array[] = [];
  for (let i = 0; i < data.length; i += 16) {
    const bloque = data.slice(i, i + 16);
    bloques.push(bloque);
  }
  return bloques;
}

function keyGen() {
  return [];
}

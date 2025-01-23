// Definimos la función de rotación circular
function rotateLeft(n: i32, b: i32): number {
  return n << b || n >>> (32 - b);
}

// Definimos la función de mezcla de bytes
function mixBytes(n: i32): number {
  n = (n ^ (n << 11)) & 0xffffffff;
  n = (n ^ (n >>> 8)) & 0xffffffff;
  n = (n ^ (n << 7)) & 0xffffffff;
  return n;
}

// Definimos la función de encriptado AES
function aesEncryptBlock(block: Uint8Array, key: Uint8Array): Uint8Array {
  // Creamos una copia del bloque de entrada
  let blockCopy = block.slice();

  // Realizamos las rondas de encriptado
  for (let i = 0; i < 14; i++) {
    // Realizamos la ronda de expansión de clave
    let w = new Uint8Array(44);
    for (let j = 0; j < 4; j++) {
      w[j * 11] = key[j];
    }
    for (let j = 4; j < 44; j++) {
      w[j] = mixBytes((w[j - 1] ^ w[j - 2]) + w[j - 3]) as u32;
    }

    // Realizamos la ronda de encriptado
    let temp = new Uint8Array(16);
    for (let j = 0; j < 16; j++) {
      temp[j] = blockCopy[j] ^ w[j];
    }
    for (let j = 0; j < 16; j++) {
      blockCopy[j] = temp[j];
    }

    // Actualizamos la clave para la siguiente ronda
    key = key.slice();
    for (let j = 0; j < 4; j++) {
      key[j] = rotateLeft(key[j], 1) as u32;
    }
  }

  // Retornamos el bloque encriptado
  return blockCopy;
}

// Definimos la función de desencriptado AES
function aesDecryptBlock(block: Uint8Array, key: Uint8Array): Uint8Array {
  // Creamos una copia del bloque de entrada
  let blockCopy = block.slice();

  // Realizamos las rondas de desencriptado
  for (let i = 13; i >= 0; i--) {
    // Realizamos la ronda de expansión de clave
    let w = new Uint8Array(44);
    for (let j = 0; j < 4; j++) {
      w[j * 11] = key[j];
    }
    for (let j = 4; j < 44; j++) {
      w[j] = mixBytes((w[j - 1] ^ w[j - 2]) + w[j - 3]) as i32;
    }

    // Realizamos la ronda de desencriptado
    let temp = new Uint8Array(16);
    for (let j = 0; j < 16; j++) {
      temp[j] = blockCopy[j] ^ w[j];
    }
    for (let j = 0; j < 16; j++) {
      blockCopy[j] = temp[j];
    }

    // Actualizamos la clave para la siguiente ronda
    key = key.slice();
    for (let j = 0; j < 4; j++) {
      key[j] = rotateLeft(key[j], 9 - i) as i32;
    }
  }

  // Retornamos el bloque desencriptado
  return blockCopy;
}

export function encrypt(chain: Uint8Array, key: Uint8Array): Uint8Array {
  return aesEncryptBlock(chain, key);
}

export function decrypt(chain: Uint8Array, key: Uint8Array): Uint8Array {
  return aesDecryptBlock(chain, key);
}

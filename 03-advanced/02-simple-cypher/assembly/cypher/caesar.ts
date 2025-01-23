const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_SIZE: i32 = ALPHABET.length - 1;

export function encrypt(chain: string, k: i32): string {
  const encrypted: string[] = [];
  chain = chain.toLowerCase();

  for (let i = 0; i < chain.length; i++) {
    const char: string = chain.charAt(i);
    const encryptedChar: string = cypher(char, k);
    encrypted.push(encryptedChar);
  }

  return encrypted.join("");
}

export function decrypt(chain: string, k: i32): string {
  const encrypted: string[] = [];
  chain = chain.toLowerCase();

  for (let i = 0; i < chain.length; i++) {
    const char: string = chain.charAt(i);
    const encryptedChar: string = uncypher(char, k);
    encrypted.push(encryptedChar);
  }

  return encrypted.join("");
}

function locate(char: string): i32 {
  let pos: i32 = 0;
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    const chr: string = ALPHABET.charAt(i);
    if (chr === char) {
      pos = i;
      break;
    }
  }

  return pos;
}

// C=(P+K) % N
function cypher(c: string, k: i32): string {
  if (ALPHABET.includes(c)) {
    const cy: i32 = locate(c);
    const cyphered: i32 = (cy + k) % ALPHABET_SIZE;

    return ALPHABET.charAt(cyphered);
  }
  return c;
}

// P=(C−K+N) % N
function uncypher(c: string, k: i32): string {
  if (ALPHABET.includes(c)) {
    const un: i32 = locate(c);
    const uncyphered: i32 = (un - k + ALPHABET_SIZE) % ALPHABET_SIZE;

    return ALPHABET.charAt(uncyphered);
  }

  return c;
}

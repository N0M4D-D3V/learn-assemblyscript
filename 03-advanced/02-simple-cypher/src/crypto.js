import {
  c_decrypt,
  c_encrypt,
  xor_decrypt,
  xor_encrypt,
} from "../build/release.js";

const CAESAR_KEY = 7;
const XOR_KEY = "ABCDEFGHIJK";

export const caesarEncript = (chain) => c_encrypt(chain, CAESAR_KEY);
export const caesarDecript = (chain) => c_decrypt(chain, CAESAR_KEY);
export const xorEncript = (chain) => xor_encrypt(chain, XOR_KEY);
export const xorDecript = (chain) => xor_decrypt(chain, XOR_KEY);

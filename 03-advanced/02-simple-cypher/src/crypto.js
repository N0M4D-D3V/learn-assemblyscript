import {
  c_decrypt,
  c_encrypt,
  xor_decrypt,
  xor_encrypt,
} from "../build/release.js";

const CAESAR_KEY = 7;
const XOR_KEY = "ABCDEFGHIJK";

export const caesarEncrypt = (chain) => c_encrypt(chain, CAESAR_KEY);
export const caesarDecrypt = (chain) => c_decrypt(chain, CAESAR_KEY);
export const xorEncrypt = (chain) => xor_encrypt(chain, XOR_KEY);
export const xorDecrypt = (chain) => xor_decrypt(chain, XOR_KEY);
export const aesEncrypt = (chain) => console.log(chain);
export const aesDecrypt = (chain) => console.log(chain);

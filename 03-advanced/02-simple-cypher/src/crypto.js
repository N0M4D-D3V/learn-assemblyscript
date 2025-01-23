import {
  c_decrypt,
  c_encrypt,
  xor_decrypt,
  xor_encrypt,
  aes_encrypt,
  aes_decrypt,
} from "../build/release.js";

const CAESAR_KEY = 7;
const XOR_KEY = "ABCDEFGHIJK";
const AES_KEY = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const caesarEncrypt = (chain) => c_encrypt(chain, CAESAR_KEY);
export const caesarDecrypt = (chain) => c_decrypt(chain, CAESAR_KEY);
export const xorEncrypt = (chain) => xor_encrypt(chain, XOR_KEY);
export const xorDecrypt = (chain) => xor_decrypt(chain, XOR_KEY);
export const aesEncrypt = (chain) => aes_encrypt(chain, AES_KEY);
export const aesDecrypt = (chain) => aes_decrypt(chain, AES_KEY);

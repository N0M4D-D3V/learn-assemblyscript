import {
  caesarDecript,
  caesarEncript,
  xorDecript,
  xorEncript,
} from "./src/crypto.js";

const caesarEncriptBtnEl = document.getElementById("caesar-encrypt-btn");
const caesarDecriptBtnEl = document.getElementById("caesar-decrypt-btn");
const xorEncriptBtnEl = document.getElementById("xor-encrypt-btn");
const xorDecriptBtnEl = document.getElementById("xor-decrypt-btn");

caesarEncriptBtnEl.addEventListener("click", () => {
  const resultEl = document.getElementById("caesar-result");
  const inEl = document.getElementById("caesar-in");
  const chain = inEl.value;
  const encrypted = caesarEncript(chain);

  resultEl.innerText = "Result: " + encrypted;
  inEl.value = "";
});

caesarDecriptBtnEl.addEventListener("click", () => {
  const resultEl = document.getElementById("caesar-result");
  const inEl = document.getElementById("caesar-in");
  const chain = inEl.value;
  const encrypted = caesarDecript(chain);

  resultEl.innerText = "Result: " + encrypted;
  inEl.value = "";
});

xorEncriptBtnEl.addEventListener("click", () => {
  const resultEl = document.getElementById("xor-result");
  const inEl = document.getElementById("xor-in");
  const chain = inEl.value;
  const encrypted = xorEncript(chain);

  resultEl.innerText = "Result: " + encrypted;
  inEl.value = "";
});

xorDecriptBtnEl.addEventListener("click", () => {
  const resultEl = document.getElementById("xor-result");
  const inEl = document.getElementById("xor-in");
  const chain = inEl.value;
  const encrypted = xorDecript(chain);

  resultEl.innerText = "Result: " + encrypted;
  inEl.value = "";
});

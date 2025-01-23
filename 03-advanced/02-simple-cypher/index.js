import {
  aesDecrypt,
  aesEncrypt,
  caesarDecrypt,
  caesarEncrypt,
  xorDecrypt,
  xorEncrypt,
} from "./src/crypto.js";

const cypher = (id, fun) => {
  const resultEl = document.getElementById(`${id}-result`);
  const inEl = document.getElementById(`${id}-in`);
  const chain = inEl.value;
  const encrypted = fun(chain);

  resultEl.innerText = "Result: " + encrypted;
  inEl.value = "";
};

const encrypters = [
  { id: "caesar", encrypt: caesarEncrypt, decrypt: caesarDecrypt },
  { id: "xor", encrypt: xorEncrypt, decrypt: xorDecrypt },
  { id: "aes", encrypt: aesEncrypt, decrypt: aesDecrypt },
];
const sectionEl = document.querySelector("section");

// generate view dynamically
for (let encrypter of encrypters) {
  sectionEl.innerHTML += `
        <div class="encryption-form">
        <label for="${encrypter.id}-in">${encrypter.id}</label>
        <input
          id="${encrypter.id}-in"
          type="text"
          placeholder="Text to encript/decript ..."
        />

        <button id="${encrypter.id}-encrypt-btn">ENCRYPT</button>
        <button id="${encrypter.id}-decrypt-btn">DECRYPT</button>

        <span id="${encrypter.id}-result"></span>
      </div>
  `;
}

// add listeners
for (let encrypter of encrypters) {
  const encriptBtnEl = document.getElementById(`${encrypter.id}-encrypt-btn`);
  const decriptBtnEl = document.getElementById(`${encrypter.id}-decrypt-btn`);

  encriptBtnEl.addEventListener("click", () =>
    cypher(encrypter.id, encrypter.encrypt)
  );
  decriptBtnEl.addEventListener("click", () =>
    cypher(encrypter.id, encrypter.decrypt)
  );
}

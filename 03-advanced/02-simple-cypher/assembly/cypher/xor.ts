export function encrypt(chain: string, key: string): string {
  key = fill(key, chain.length);

  let encryptedText: string = "";
  for (let i = 0; i < chain.length; i++) {
    let charTxt: u8 = chain.charCodeAt(i) as u8;
    let charKey: u8 = key.charCodeAt(i % key.length) as u8;
    let binTxt: string = charTxt.toString(2).padStart(8, "0");
    let binKey: string = charKey.toString(2).padStart(8, "0");
    let binXor: string = "";
    for (let j: i32 = 0; j < 8; j++) {
      if (binTxt.charAt(j) === binKey.charAt(j)) {
        binXor += "0";
      } else {
        binXor += "1";
      }
    }
    let encryptedChar: u8 = parseInt(binXor, 2) as u8;
    encryptedText += String.fromCharCode(encryptedChar);
  }
  return encryptedText;
}

export function decrypt(chain: string, key: string): string {
  return encrypt(chain, key);
}

function fill(key: string, chainLen: i32): string {
  while (key.length < chainLen) {
    key += key;
  }

  return key;
}

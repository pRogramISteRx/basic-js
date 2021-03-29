const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = !(!isDirect && isDirect != undefined)
  }

  encrypt(message, key) {
    if (!message || !key) {
        throw new Error;
    }
    let result = '';
    let j = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      let a = message.charCodeAt(i) - 65;
      let b = key.charCodeAt(j % key.length ) - 65;
      if (0 <= a && a <= 25){
        result += String.fromCharCode(( a + b) % 26 + 65);
        j++;
      } else {
        result += message[i];
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key){
      throw new Error;
    }
    let result = '';
    let j = 0;
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++){
        let a = message.charCodeAt(i);
        let b = key.charCodeAt(j % key.length);
        if (65 <= a && a <= 90){
            if (a < b){
                a += 26;
            }
            result += String.fromCharCode(( a - b) % 26 + 65);
            j++;
        }else{
            result += message[i];
        }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.class = value;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new TypeError('Incorrect arguments!');
    } else {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let encryptText = '';
      let j = 0;
  
      for (let i = 0; i < message.length; i++) {
        if (message[i].match(/[a-zA-Z]/i)) {
          const keyValueCurrent = key[j % key.length];
          const messageCurrentValueIndex = alphabet.indexOf(message[i].toUpperCase());
          const moveIndex = alphabet.indexOf(keyValueCurrent.toUpperCase());
          encryptText += alphabet[(messageCurrentValueIndex + moveIndex) % alphabet.length];
          j++;
        } else {
          encryptText += message[i];
        }
      }

      return this.class === false ? encryptText.split('').reverse().join('') : encryptText;
    }
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new TypeError('Incorrect arguments!');
    } else {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let decryptText = '';
      let j = 0;
  
      for (let i = 0; i < message.length; i++) {
        if (message[i].match(/[a-zA-Z]/i)) {
          const keyValueCurrent = key[j % key.length];
          const messageCurrentValueIndex = alphabet.indexOf(message[i].toUpperCase());
          const moveIndex = alphabet.indexOf(keyValueCurrent.toUpperCase());
          decryptText += alphabet[((messageCurrentValueIndex - moveIndex) + alphabet.length) % alphabet.length];
          j++;
        } else {
          decryptText += message[i];
        }
      }

      return this.class === false ? decryptText.split('').reverse().join('') : decryptText;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

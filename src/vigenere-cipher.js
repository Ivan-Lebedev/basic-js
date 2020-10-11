const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse'
  }

  encrypt(message, code) {
    if (message === undefined || code === undefined) {
      throw new Error("ErrorOfArguments")
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase()
    code = code.toUpperCase()
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let letterNumber = (message[i].charCodeAt() + (code[j % code.length]).charCodeAt() - 130) % 26
        let letter = alphabet.charAt(letterNumber)
        result += letter
        j++
      } else {
        result += message[i]
      }
    }

    return this.type === 'reverse' ? result.split('').reverse().join('') : result
  }

  decrypt(message, code) {

    if (message === undefined || code === undefined) {
      throw new Error("ErrorOfArguments")
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase()
    code = code.toUpperCase()
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let letterNumber = (message[i].charCodeAt() - (code[j % code.length]).charCodeAt() + 104) % 26
        let letter = alphabet.charAt(letterNumber)
        result += letter
        j++
      } else {
        result += message[i]
      }
    }
    return this.type === 'reverse' ? result.split('').reverse().join('') : result
  }
}

module.exports = VigenereCipheringMachine

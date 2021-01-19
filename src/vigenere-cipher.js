const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    if (flag === true) {
      this.type = true
    } else {
      this.type = false
    }

    this.startCode = 65
    this.endCode = 90
    this.codeAmount = this.endCode - this.startCode + 1
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error()
    }
    
    const encryptedMsg = this._encrypt(message, key)
    return this.type ? encryptedMsg.join('') : encryptedMsg.reverse().join('')
  }    

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error()
    }

    const decryptedMsg = this._decrypt(message, key)
    return this.type ? decryptedMsg.join('') : decryptedMsg.reverse().join('') 
  }

  _encrypt(message, key) {
    message = message.toUpperCase()
    const keyLength = message.split('').filter(c => this._isChar(c)).length
    const newKey = this._generateKey(key, keyLength)

    let i = 0
    return message.split('').map(char => {
      if (this._isChar(char)) {
        const code = this._getEncryptCode(char, newKey[i])
        char = String.fromCharCode(code)
        i++
      } 
      
      return char
    })
  }

  _decrypt(message, key) {
    message = message.toUpperCase()
    const keyLength = message.split('').filter(c => this._isChar(c)).length
    const newKey = this._generateKey(key, keyLength)

    let i = 0
    return message.split('').map(char => {
      if (this._isChar(char)) {
        const code = this._getDecryptCode(char, newKey[i])
        char = String.fromCharCode(code)
        i++
      } 
      
      return char
    })
  }

  _generateKey(key, keyLength) {
    key = key.toUpperCase()
    let newKey = key
    for (let i = 0; i < keyLength - key.split('').length; i++) {
      newKey += newKey[i]
    }

    return newKey
  }

  _getEncryptCode(char1, char2) {
    return (char1.charCodeAt() + char2.charCodeAt() - this.startCode * 2) % this.codeAmount + this.startCode
  }

  _getDecryptCode(char1, char2) {
    const code = (char1.charCodeAt() - char2.charCodeAt() - this.startCode * 2) % this.codeAmount
    return code < 0 ? code + this.codeAmount + this.startCode : code + this.startCode
  }

  _isChar(char) {
    const code = char.charCodeAt()
    return code >= this.startCode && code <= this.endCode ? true : false 
  }
}

module.exports = VigenereCipheringMachine;

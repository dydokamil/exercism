class Crypto {
  constructor(text) {
    this.rawPlaintext = text
  }

  normalizePlaintext() {
    return this.rawPlaintext.replace(/\W/g, '').toLowerCase()
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length))
  }

  plaintextSegments() {
    return this.normalizePlaintext().match(
      new RegExp(`(.{1,${this.size()}})`, 'g'),
    )
  }

  ciphertext() {
    const plaintextSplit = this.plaintextSegments()

    let cipher = ''
    for (let i = 0; i < plaintextSplit.length; i++) {
      for (let j = 0; j < plaintextSplit[0].length; j++) {
        cipher += plaintextSplit[j][i] || ''
      }
    }

    return cipher
  }
}

module.exports = Crypto

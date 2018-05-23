function Cipher(key) {
  this.min = 97
  this.max = 122

  if (key === undefined) {
    // create key
    let keyArray = []
    for (let i = 0; i < 100; i++) {
      keyArray.push(this.randomChar())
    }
    this.key = keyArray.join('')
  } else if (
    key.length === 0 ||
    key
      .split('')
      .some((char) => char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122)
  ) {
    throw new Error('Bad key')
  } else {
    this.key = key
  }

  this.codeKey = this.key.split('').map((char) => char.charCodeAt(0))
  this.codeKeyNormalized = this.codeKey.map((char) => char - 97)
}

Cipher.prototype.randomChar = function() {
  return String.fromCharCode(
    Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
  )
}

Cipher.prototype.encode = function(plaintext) {
  const plaintextSplit = plaintext.split('')
  const plaintextCodes = plaintextSplit.map((char) => char.charCodeAt(0))
  const shift = plaintextCodes.map((char) => char - 97)
  const encoded = shift.map(
    (s, idx) => (s + this.codeKeyNormalized[idx % this.key.length]) % 26,
  )

  return encoded.map((code) => String.fromCharCode(code + 97)).join('')
}

Cipher.prototype.decode = function(encoded) {
  const encodedSplit = encoded.split('')
  const encodedCodes = encodedSplit.map((char) => char.charCodeAt(0))
  const shift = encodedCodes.map((char) => char - 97)

  const decoded = shift.map(
    (s, idx) => (26 + s - this.codeKeyNormalized[idx % this.key.length]) % 26,
  )

  return decoded.map((code) => String.fromCharCode(code + 97)).join('')
}

module.exports = Cipher

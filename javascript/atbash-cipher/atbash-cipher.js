const atbash = {
  encode: (plaintext) => {
    const plaintextParsed = plaintext.replace(/\W+/g, '')

    const encoded = plaintextParsed
      .split('')
      .map((char) => char.toLowerCase())
      .map(
        (char) =>
          (char.charCodeAt(0) >= 97 &&
            char.charCodeAt(0) <= 122 &&
            String.fromCharCode(219 - char.charCodeAt(0))) ||
          char,
      )
      .join('')

    return encoded.match(/(.{1,5})/g).join(' ')
  },
}

module.exports = atbash

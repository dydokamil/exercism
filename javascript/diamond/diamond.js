const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class Diamond {
  makeDiamond(letter) {
    const length = ALPHABET.indexOf(letter) * 2 + 1
    const halfLength = Math.floor(length / 2)
    let diamond = Array(length).fill(' '.repeat(length))

    for (let i = 0; i < length / 2; i++) {
      const idx1 = halfLength - i
      const idx2 = halfLength + i

      diamond[i] =
        diamond[i].substring(0, idx1) +
        ALPHABET[i] +
        diamond[i].substring(idx1 + 1)

      diamond[i] =
        diamond[i].substring(0, idx2) +
        ALPHABET[i] +
        diamond[i].substring(idx2 + 1)
    }

    for (let i = halfLength + 1; i < length; i++) {
      diamond[i] = diamond[length - i - 1]
    }

    return diamond.join('\n') + '\n'
  }
}

module.exports = Diamond

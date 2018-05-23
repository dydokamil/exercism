class RLE {
  static encode(rawString) {
    if (rawString === '') return ''

    let currentChar = rawString[0]
    let count = 0
    let encodedString = ''

    for (let i = 0; i < rawString.length + 1; i++) {
      if (rawString[i] !== currentChar) {
        encodedString +=
          count === 1 ? `${currentChar}` : `${count}${currentChar}`
        currentChar = rawString[i]
        count = 1
      } else {
        count++
      }
    }

    return encodedString
  }
  static decode(encodedString) {
    let count = 0
    let rawString = ''
    let char = null

    for (let i = encodedString.length - 1; i >= 0; ) {
      let j = i
      let num = 0
      let exp = 1

      if (isNaN(parseInt(encodedString[j], 10))) {
        if (char !== null) {
          rawString = char.concat(rawString)
        }
        char = encodedString[j]
        i--
      } else {
        while (!isNaN(parseInt(encodedString[j], 10))) {
          num += parseInt(encodedString[j], 10) * exp
          exp *= 10
          j--
          i--
        }
        rawString = char.repeat(num).concat(rawString)
        num = 0
        exp = 1
        char = null
      }
    }

    if (char !== null) {
      rawString = char.concat(rawString)
    }

    return rawString
  }
}

module.exports = RLE

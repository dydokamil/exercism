class PhoneNumber {
  constructor(numberRaw) {
    this.numberRaw = numberRaw
  }

  number() {
    let parsedNumber = this.numberRaw
      .replace(/\./g, '')
      .replace(/\-/g, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/\+/g, '')

    // remove country code if present
    if (parsedNumber[1] === ' ') parsedNumber = parsedNumber.slice(2)
    if (parsedNumber[0] === '1') parsedNumber = parsedNumber.slice(1)

    parsedNumber = parsedNumber.replace(/\ /g, '')

    if (parsedNumber.length !== 10) return null
    if (!parsedNumber.match(/^\d+$/)) return null
    if (parseInt(parsedNumber[3], 10) < 2) return null

    return parsedNumber
  }
}

module.exports = PhoneNumber

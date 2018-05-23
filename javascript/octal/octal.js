class Octal {
  constructor(code) {
    this.code = code
  }

  toDecimal() {
    if (this.code.match(/[^0-7]/g)) return 0

    return this.code
      .split('')
      .reverse()
      .reduce((acc, current, idx) => acc + current * 8 ** idx, 0)
  }
}

module.exports = Octal

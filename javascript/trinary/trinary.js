class Trinary {
  constructor(code) {
    this.code = code
  }

  toDecimal() {
    if (!this.code.match(/[0-9]/g)) return 0

    return this.code
      .split('')
      .reverse()
      .reduce((acc, current, idx) => acc + current * 3 ** idx, 0)
  }
}

module.exports = Trinary

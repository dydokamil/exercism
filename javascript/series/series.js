class Series {
  constructor(num) {
    this.num = num
    this.digits = (() => this.num.split('').map((num) => parseInt(num, 10)))()
  }
  slices(n) {
    if (n > this.digits.length) {
      throw new Error('Slice size is too big.')
    }

    return Array(this.digits.length + 1 - n)
      .fill()
      .map((_, idx) => this.digits.slice(idx, idx + n))
  }
}

module.exports = Series

class Series {
  constructor(series) {
    this.series = series.split('').map((strNum) => parseInt(strNum, 10))
  }

  largestProduct(n) {
    if (n === 0) return 1
    else if (n < 0) throw new Error('Invalid input.')

    this.series.forEach((num) => {
      if (isNaN(num)) throw new Error('Invalid input.')
    })

    if (n > this.series.length) {
      throw new Error('Slice size is too big.')
    }

    return Array(this.series.length + 1 - n)
      .fill()
      .map((_, idx) => this.series.slice(idx, idx + n))
      .reduce(
        (acc, curr) => Math.max(acc, curr.reduce((acc, curr) => acc * curr, 1)),
        0,
      )
  }
}

module.exports = Series

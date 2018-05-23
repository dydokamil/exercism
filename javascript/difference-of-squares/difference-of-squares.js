class Squares {
  constructor(num) {
    this.num = num

    this.squareOfSums = (() =>
      Array(this.num)
        .fill()
        .reduce((acc, _, idx) => acc + idx + 1, 0) ** 2)()

    this.sumOfSquares = (() =>
      Array(this.num)
        .fill()
        .reduce((acc, _, idx) => acc + (idx + 1) ** 2, 0))()

    this.difference = (() => this.squareOfSums - this.sumOfSquares)()
  }
}

module.exports = Squares

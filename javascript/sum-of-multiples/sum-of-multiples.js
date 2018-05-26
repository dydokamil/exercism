class SumOfMultiples {
  constructor(numbers) {
    this.numbers = numbers
  }

  to(n) {
    return Array(n - 1)
      .fill()
      .map((_, idx) => idx + 1)
      .filter((num) => this.numbers.some((number) => num % number === 0))
      .reduce((acc, curr) => acc + curr, 0)
  }
}

module.exports = SumOfMultiples

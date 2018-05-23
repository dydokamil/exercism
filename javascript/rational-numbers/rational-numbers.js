class Rational {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  add(rational) {
    this.a = this.a * rational.b + rational.a * this.b
    this.b = this.b * rational.b

    this.reduce()
    return this
  }
  sub(rational) {
    this.a = this.a * rational.b - rational.a * this.b
    this.b = this.b * rational.b

    this.reduce()
    return this
  }
  mul(rational) {
    this.a = this.a * rational.a
    this.b = this.b * rational.b

    this.reduce()
    return this
  }
  div(rational) {
    this.a = this.a * rational.b
    this.b = rational.a * this.b

    if (this.b < 0) {
      this.a *= -1
      this.b *= -1
    }

    return this
  }
  abs() {
    this.a = this.a >= 0 ? this.a : this.a * -1
    this.b = this.b >= 0 ? this.b : this.b * -1

    return this
  }
  exprational(exp) {
    this.a = this.a ** exp
    this.b = this.b ** exp
    return this
  }
  expreal(real) {
    return (real ** this.a) ** (1 / this.b)
  }
  reduce() {
    const greatestCommondDivisor = this.gcd()
    this.a /= greatestCommondDivisor
    this.b /= greatestCommondDivisor

    if (this.b < 0) {
      this.a *= -1
      this.b *= -1
    }

    return this
  }
  gcd() {
    if (this.a === this.b) {
      return this.a
    }
    let greater = this.a > this.b ? this.a : this.b
    let smaller = this.a < this.b ? this.a : this.b

    let remainder = 1
    // let divisor = 1

    if (this.a === 0 || this.b === 0) return greater

    while (true) {
      remainder = greater % smaller
      if (remainder === 0) return smaller
      greater = smaller
      smaller = remainder
    }

    return smaller
  }
}

module.exports = Rational

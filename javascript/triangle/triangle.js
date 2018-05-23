class Triangle {
  constructor(a, b, c) {
    let [x, y, z] = [a, b, c].sort((a, b) => a - b)
    this.a = x
    this.b = y
    this.c = z
  }

  kind() {
    if (this.a + this.b <= this.c) {
      throw new Error(this.a, '+', this.b, '<', this.c)
    }

    if (this.a !== this.b && this.a !== this.c && this.b !== this.c) {
      return 'scalene'
    }

    if (this.a === this.b && this.a === this.c) return 'equilateral'

    if (
      (this.a === this.b && this.c !== this.b) ||
      (this.b === this.c && this.a !== this.b)
    ) {
      return 'isosceles'
    }
  }
}

module.exports = Triangle

class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum() {
    return this.a + this.b + this.c
  }

  product() {
    return this.a * this.b * this.c
  }

  isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2
  }

  static where(options) {
    let factors = []

    for (let i = options.minFactor || 1; i <= options.maxFactor; i++) {
      for (let j = i; j <= options.maxFactor; j++) {
        for (let k = i; k <= options.maxFactor; k++) {
          let triplet = new Triplet(i, j, k)
          if (triplet.isPythagorean()) {
            if (
              options.hasOwnProperty('sum') &&
              options.sum !== triplet.sum()
            ) {
              continue
            }

            factors.push(new Triplet(i, j, k))
          }
        }
      }
    }

    return factors
  }
}

module.exports = Triplet

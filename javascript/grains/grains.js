const bigInt = require('./big-integer')

class Grains {
  square(num) {
    return bigInt(2)
      .pow(num - 1)
      .toString()
  }
  total() {
    return bigInt(2)
      .pow(64)
      .subtract(1)
      .toString()
  }
}

module.exports = Grains

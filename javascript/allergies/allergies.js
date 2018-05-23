const ALLERGIES = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
]

class Allergies {
  constructor(code) {
    this.code = code
    this.binaryCode = (code >>> 0)
      .toString(2)
      .split('')
      .reverse()
      .join('')
  }

  list() {
    return ALLERGIES.filter((item, index) => this.binaryCode[index] === '1')
  }

  allergicTo(item) {
    return this.binaryCode[ALLERGIES.indexOf(item)] === '1'
  }
}

module.exports = Allergies

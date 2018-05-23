class Luhn {
  constructor(number) {
    this.number = number
    this.valid = (() => {
      const numberParsed = this.number
        .replace(/ /g, '')
        .split('')
        .reverse()
        .join('')

      if (numberParsed.length <= 1) return false
      if (numberParsed.match(/[^0-9]/g)) return false

      const sum = numberParsed
        .split('')
        .map(
          (number, index) =>
            index % 2 === 0
              ? parseInt(number, 10)
              : parseInt(number, 10) >= 5
                ? parseInt(number * 2, 10) - 9
                : parseInt(number * 2, 10),
        )
        .reduce((acc, num) => acc + num, 0)

      return sum % 10 === 0
    })()
  }
}

module.exports = Luhn

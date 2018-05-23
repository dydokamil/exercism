const toRoman = (num) => {
  let roman = ''
  let currentNum = num

  while (currentNum > 0) {
    if (currentNum >= 1000) {
      roman += 'M'
      currentNum -= 1000
    } else if (currentNum >= 500) {
      roman += 'D'
      currentNum -= 500
    } else if (currentNum >= 100) {
      roman += 'C'
      currentNum -= 100
    } else if (currentNum >= 50) {
      roman += 'L'
      currentNum -= 50
    } else if (currentNum >= 10) {
      roman += 'X'
      currentNum -= 10
    } else if (currentNum >= 5) {
      roman += 'V'
      currentNum -= 5
    } else if (currentNum >= 1) {
      roman += 'I'
      currentNum -= 1
    }
  }

  return roman
}

module.exports = toRoman

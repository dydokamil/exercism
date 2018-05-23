const primeFactors = {
  for: (num) => {
    let factors = []
    let currentFactor = 2

    while (num >= currentFactor) {
      let remainder = num % currentFactor
      if (remainder === 0) {
        factors.push(currentFactor)
        num /= currentFactor
      } else {
        currentFactor++
      }
    }

    return factors
  },
}

module.exports = primeFactors

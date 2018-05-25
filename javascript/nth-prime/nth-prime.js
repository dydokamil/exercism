const prime = {
  nth: (n) => {
    if (n < 1) throw new Error('Prime is not possible')

    let currentPrime = 2
    let primeN = 1
    let primeFound

    for (let i = 2; primeN <= n; i++) {
      primeFound = true
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0 && i != j) {
          primeFound = false
          break
        }
      }
      if (primeFound) {
        currentPrime = i
        ++primeN
      }
    }
    return currentPrime
  },
}

module.exports = prime

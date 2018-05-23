const accumulate = (arr, accumulator) => {
  let altered = []

  for (element of arr) {
    altered.push(accumulator(element))
  }

  return altered
}

module.exports = accumulate

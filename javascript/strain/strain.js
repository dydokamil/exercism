const strain = {
  keep: (arr, predicate) => {
    let kept = []

    for (element of arr) {
      if (predicate(element)) kept.push(element)
    }

    return kept
  },
  discard: (arr, predicate) => {
    let discarded = []

    for (element of arr) {
      if (!predicate(element)) discarded.push(element)
    }

    return discarded
  },
}

module.exports = strain

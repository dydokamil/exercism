class Words {
  count(words) {
    const wordsArray = words
      .split(/[^a-zA-Z'éА-я0-9]/g)
      .filter((word) => word.length > 0)
      .map((word) => word.toLowerCase())
      .map(
        (word) =>
          (word.startsWith("'") &&
            word.endsWith("'") &&
            word.slice(1, word.length - 1)) ||
          word,
      )

    let wordsCount = wordsArray.reduce((acc, curr) => {
      if (acc.hasOwnProperty(curr)) acc[curr]++
      else acc[curr] = 1
      return acc
    }, {})

    return wordsCount
  }
}

module.exports = Words

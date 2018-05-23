class Anagram {
  constructor(word) {
    this.mainWord = word
    this.mainWordLowerCase = word.toLowerCase()
  }

  matches(arr) {
    if (arguments.length > 1) {
      // turn into an array
      arr = Array(arguments.length)
        .fill()
        .map((_, idx) => arguments[idx])
    } else if (arguments.length === 1 && typeof arguments[0] === 'string') {
      arr = [arguments[0]]
    }

    const arrLowerCase = arr.map((word) => word.toLowerCase())

    const mainWordSorted = this.mainWord
      .toLowerCase()
      .split('')
      .sort()
      .join('')

    const wordsSorted = arr.map((word) =>
      word
        .toLowerCase()
        .split('')
        .sort()
        .join(''),
    )

    const matched = []
    for (let i = 0; i < wordsSorted.length; i++) {
      if (wordsSorted[i] === mainWordSorted) {
        if (arrLowerCase[i] !== this.mainWordLowerCase) {
          matched.push(arr[i])
        }
      }
    }

    return matched
  }
}

module.exports = Anagram

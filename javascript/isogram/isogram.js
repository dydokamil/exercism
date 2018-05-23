class Isogram {
  constructor(text) {
    this.text = text
  }

  isIsogram() {
    const textParsed = this.text
      .replace(/-/g, '')
      .replace(/ /g, '')
      .toLowerCase()

    const textSplit = textParsed.split('')
    const charSet = new Set(textSplit)
    return charSet.size === textSplit.length
  }
}

module.exports = Isogram

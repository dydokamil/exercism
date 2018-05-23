class Acronyms {
  static parse(phrase) {
    const words = phrase.replace(/([a-z])([A-Z])/g, '$1 $2').split(/[\s\-]/g)
    const abbreviation = words.reduce(
      (acc, curr) => (acc += curr[0].toUpperCase()),
      '',
    )
    return abbreviation
  }
}

module.exports = Acronyms

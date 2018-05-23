class Flattener {
  static _flatten(arr) {
    return arr
      .reduce(
        (acc, curr) =>
          acc.concat(Array.isArray(curr) ? Flattener._flatten(curr) : curr),
        [],
      )
      .filter((element) => element !== null)
  }

  flatten(arr) {
    return Flattener._flatten(arr)
  }
}

module.exports = Flattener

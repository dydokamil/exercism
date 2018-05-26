class CustomSet {
  constructor(array) {
    this.array = new Set(array)
  }

  empty() {
    return this.array.size === 0
  }

  contains(x) {
    return this.array.has(x)
  }

  eql(customSet) {
    if (this.array.size === customSet.array.size && this.array.size === 0) {
      return true
    }
    return (
      customSet.size === this.array.size &&
      [...this.array].every((element) => customSet.array.has(element))
    )
  }

  difference(customSet) {
    return new CustomSet([...this.array].filter((x) => !customSet.array.has(x)))
  }

  subset(customSet) {
    if (this.array.size === customSet.array.size && this.array.size === 0) {
      return true
    }

    const setAsArray = [...this.array]
    const startIndices = [...customSet.array].reduce(function(a, e, i) {
      if (e === setAsArray[0]) a.push(i)
      return a
    }, [])

    return startIndices.some((start) =>
      new CustomSet(setAsArray.slice(start, customSet.array.size)).eql(
        customSet,
      ),
    )
  }

  intersection(customSet) {
    return new CustomSet([...this.array].filter((x) => customSet.array.has(x)))
  }
  union(customSet) {
    this.array = [...this.array, customSet.array]
  }

  add(value) {
    this.array.add(value)
    return this
  }

  disjoint() {}
}

module.exports = CustomSet

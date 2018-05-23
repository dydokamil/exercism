class List {
  constructor(list = []) {
    this.values = list
  }

  append(list) {
    this.values = [...this.values, ...list]
    return this
  }

  concat(list) {
    this.values = [...this.values, ...list]
    return this
  }

  filter(condition) {
    let filtered = []

    for (val in this.values) {
      if (condition(val)) {
        filtered.push(val)
      }
    }
    this.values = filtered

    return this
  }

  foldl() {}

  foldr() {}

  reverse() {
    let reversed = []

    for (let i = this.values.length - 1; i >= 0; i--) {
      reversed.push(this.values[i])
    }

    this.values = reversed

    return this
  }

  length() {
    return this.values.length
  }

  map(transform) {
    let mapped = this.values

    for (let i = 0; i < mapped.length; i++) {
      mapped[i] = transform(mapped[i])
    }

    this.values = mapped

    return this
  }
}

module.exports = List

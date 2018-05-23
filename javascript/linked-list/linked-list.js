class LinkedList {
  constructor() {
    this.list = []
  }

  push(val) {
    this.list.push(val)
  }
  pop() {
    const valAtBack = this.list[this.list.length - 1]
    this.list = this.list.slice(0, this.list.length - 1)
    return valAtBack
  }
  shift() {
    const valAtFront = this.list[0]
    this.list = this.list.slice(1, this.list.length)
    return valAtFront
  }
  unshift(val) {
    this.list = [val, ...this.list]
  }

  delete(val) {
    this.list = [
      ...this.list.slice(0, this.list.indexOf(val)),
      ...this.list.slice(this.list.indexOf(val) + 1, this.list.length),
    ]
  }

  count() {
    return this.list.length
  }
}

module.exports = LinkedList

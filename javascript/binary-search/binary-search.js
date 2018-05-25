function BinarySearch(arr) {
  this.arraySorted = Array.from(arr).sort((a, b) => a - b)

  let sorted = true
  for (let i = 0; i < this.arraySorted.length; i++) {
    if (this.arraySorted[i] !== arr[i]) {
      sorted = false
      break
    }
  }

  if (sorted) this.array = arr
  this.indexOf = (n) => this.array.indexOf(n)
  return this
}

module.exports = BinarySearch

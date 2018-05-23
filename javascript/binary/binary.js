function Binary(number) {
  this.number = number
}

Binary.prototype.toDecimal = function() {
  if (!/^[0-1]+$/.test(this.number)) return 0
  // return parseInt(this.number, 2)

  return this.number
    .split('')
    .reverse()
    .reduce((acc, currVal, idx) => acc + parseInt(currVal, 10) * 2 ** idx, 0)
}

module.exports = Binary

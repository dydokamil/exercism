function circularBuffer(size) {
  return new _circularBuffer(size)
}

const _circularBuffer = function(size) {
  this.buffer = Array(size).fill()
  this.size = size
  this.currentWriteIndex = 0
  this.currentReadIndex = 0
}

_circularBuffer.prototype.write = function(element) {
  if (!element) return
  if (this.buffer[this.currentWriteIndex] !== undefined) {
    throw bufferFullException()
  }
  this.buffer[this.currentWriteIndex] = element
  this.currentWriteIndex = ++this.currentWriteIndex % this.size
}

_circularBuffer.prototype.read = function() {
  const currentElement = this.buffer[this.currentReadIndex]
  if (!currentElement) {
    throw bufferEmptyException()
  }
  this.buffer[this.currentReadIndex] = undefined
  this.currentReadIndex = ++this.currentReadIndex % this.size
  return currentElement
}

_circularBuffer.prototype.clear = function() {
  this.buffer = this.buffer.fill()
  this.currentWriteIndex = 0
  this.currentReadIndex = 0
}
_circularBuffer.prototype.forceWrite = function(element) {
  if (!element) return
  this.buffer[this.currentWriteIndex] = element
  this.currentWriteIndex = ++this.currentWriteIndex % this.size
  if (this.currentWriteIndex !== this.currentReadIndex)
    this.currentReadIndex = ++this.currentReadIndex % this.size
}

const bufferEmptyException = () => new Error('Buffer empty.')
const bufferFullException = () => new Error('Buffer full')

module.exports = {
  circularBuffer,
  bufferEmptyException,
  bufferFullException,
}

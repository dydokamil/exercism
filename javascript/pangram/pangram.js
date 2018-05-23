function Pangram(text) {
  this.latinChars = []
  for (let i = 97; i <= 122; i++) {
    this.latinChars.push(String.fromCharCode(i))
  }
  this.text = text
}

Pangram.prototype.isPangram = function() {
  let charsInText = new Set(this.text.toLowerCase().split(''))

  for (char of this.latinChars) {
    if (charsInText.has(char)) continue
    else return false
  }

  return true
}

module.exports = Pangram

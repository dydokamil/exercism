//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
  //
  // YOUR CODE GOES HERE
  //
  this.year = year
}

Year.prototype.isLeap = function() {
  //
  // YOUR CODE GOES HERE
  //
  if (this.year % 400 === 0) {
    return true
  } else return this.year % 4 === 0 && this.year % 100 !== 0
}

module.exports = Year

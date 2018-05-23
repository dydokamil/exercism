function SpaceAge(seconds) {
  this.seconds = seconds
  this.eartOrbitTime = 31557600 // seconds
}

SpaceAge.prototype.onEarth = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime, 2)
}
SpaceAge.prototype.onMercury = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 0.2408467, 2)
}
SpaceAge.prototype.onVenus = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 0.61519726, 2)
}
SpaceAge.prototype.onMars = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 1.8808158, 2)
}
SpaceAge.prototype.onJupiter = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 11.862615, 2)
}
SpaceAge.prototype.onSaturn = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 29.447498, 2)
}
SpaceAge.prototype.onUranus = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 84.016846, 2)
}
SpaceAge.prototype.onNeptune = function() {
  return roundToDecimalPlaces(this.seconds / this.eartOrbitTime / 164.79132, 2)
}

function roundToDecimalPlaces(num, places) {
  return Math.round(num * 10 ** places) / 10 ** places
}

module.exports = SpaceAge

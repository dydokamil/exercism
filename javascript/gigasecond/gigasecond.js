function Gigasecond(datetime) {
  this.datetime = datetime
  this.milliseconds = datetime.getTime()
}

Gigasecond.prototype.date = function() {
  return new Date(this.milliseconds + 10 ** 12)
}

module.exports = Gigasecond

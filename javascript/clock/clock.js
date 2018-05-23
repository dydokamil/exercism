const Clock = {
  at: function(h = 0, m = 0) {
    let totalMinutes, hour, min

    h %= 24

    totalMinutes = h * 60 + m
    totalMinutes %= 60 * 24

    tidy()

    totalMinutes = totalMinutes < 0 ? 60 * 24 + totalMinutes : totalMinutes

    return { toString, equals, plus, minus, totalMinutes, hour, min, tidy }

    function tidy() {
      this.hour = Math.floor(this.totalMinutes / 60) % 24
      this.min = this.totalMinutes % 60
    }

    function toString() {
      hour = Math.floor(totalMinutes / 60) % 24
      min = totalMinutes % 60

      return `${this.hour < 10 ? '0' : ''}${this.hour}:${
        this.min < 10 ? '0' : ''
      }${this.min}`
    }

    function equals(other) {
      return this.totalMinutes === other.totalMinutes
    }

    function plus(minutes) {
      this.totalMinutes += minutes

      this.tidy()

      return this
    }

    function minus(minutes) {
      this.totalMinutes -= minutes % (60 * 24)
      this.totalMinutes =
        this.totalMinutes < 0 ? 60 * 24 + this.totalMinutes : this.totalMinutes

      this.tidy()

      return this
    }
  },
}

module.exports = Clock

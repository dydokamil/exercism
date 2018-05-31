function meetupDay(year, month, day, which) {
  const shortDay = day.slice(0, 3)
  switch (which) {
    case 'teenth':
      return findTeenth(year, month, shortDay)
    case 'last':
      return findLast(year, month, shortDay)
    case '1st':
    case '2nd':
    case '3rd':
    case '4th':
      return findNth(year, month, shortDay, parseInt(which[0], 10))
    default:
      throw new Error('')
  }
}

const findLast = (year, month, day) => {
  for (let i = 0; ; i--) {
    const date = new Date(year, month + 1, i)
    if (date.toString().slice(0, 3) === day) return date
  }
}

const findTeenth = (year, month, day) => {
  for (let i = 10; i < 20; i++) {
    const date = new Date(year, month, i)
    if (date.toString().slice(0, 3) === day) {
      return date
    }
  }
}

const findNth = (year, month, day, nth) => {
  let occurences = 0

  for (let i = 1; ; i++) {
    const date = new Date(year, month, i)
    if (date.toString().slice(0, 3) === day) ++occurences
    if (occurences === nth) return date
  }
}

module.exports = meetupDay

class BeerSong {
  verse(num) {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num -
      1} bottle${num > 1 ? 's' : ''} of beer on the wall.\n`
  }
  sing(start, end) {}
}

module.exports = BeerSong

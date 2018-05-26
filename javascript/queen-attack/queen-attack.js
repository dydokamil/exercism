class Queens {
  constructor(positioning = { white: [0, 3], black: [7, 3] }) {
    this.white = positioning.white
    this.black = positioning.black
  }

  canAttack() {
    return (
      this.white[0] === this.black[0] ||
      this.white[1] === this.black[1] ||
      Math.abs(this.white[0] - this.black[0]) ===
        Math.abs(this.white[1] - this.black[1])
    )
  }
  toString() {
    let board = ('_ '.repeat(7) + '_\n').repeat(8).split('')

    board[this.white[1] * 2 + this.white[0] * 16] = 'W'
    board[this.black[1] * 2 + this.black[0] * 16] = 'B'

    return board.join('')
  }
}

module.exports = Queens

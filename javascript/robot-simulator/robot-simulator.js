const POSSIBLE_DIRECTIONS = ['south', 'west', 'north', 'east']
const INSTRUCTIONS = {
  L: 'turnLeft',
  R: 'turnRight',
  A: 'advance',
}

class Robot {
  orient(direction) {
    if (!POSSIBLE_DIRECTIONS.includes(direction)) {
      throw new Error('Invalid Robot Bearing')
    }
    this.bearing = direction
  }

  turnRight() {
    const indexOfBearing = POSSIBLE_DIRECTIONS.indexOf(this.bearing)
    this.bearing =
      indexOfBearing === POSSIBLE_DIRECTIONS.length - 1
        ? POSSIBLE_DIRECTIONS[0]
        : POSSIBLE_DIRECTIONS[indexOfBearing + 1]
  }

  turnLeft() {
    const indexOfBearing = POSSIBLE_DIRECTIONS.indexOf(this.bearing)
    this.bearing =
      indexOfBearing === 0
        ? POSSIBLE_DIRECTIONS[POSSIBLE_DIRECTIONS.length - 1]
        : POSSIBLE_DIRECTIONS[indexOfBearing - 1]
  }

  at(x, y) {
    this.coordinates = [x, y]
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break
      case 'south':
        this.coordinates[1] -= 1
        break
      case 'west':
        this.coordinates[0] -= 1
        break
      case 'east':
        this.coordinates[0] += 1
        break
    }
  }

  instructions(instructionsString) {
    return instructionsString.split('').map((current) => INSTRUCTIONS[current])
  }

  evaluate(instructionsString) {
    this.instructions(instructionsString).forEach((fun) =>
      eval(`this.${fun}()`),
    )
  }

  place(options) {
    this.at(options.x, options.y)
    this.orient(options.direction)
  }
}

module.exports = Robot

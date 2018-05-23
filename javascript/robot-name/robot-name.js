let factory = []

class Robot {
  constructor() {
    this.name = this.generateName()
  }

  generateName() {
    let name
    while (true) {
      name =
        this.getRandomUpperCase() +
        this.getRandomUpperCase() +
        this.getRandomNum() +
        this.getRandomNum() +
        this.getRandomNum()
      if (!factory.includes(name)) {
        factory.push(name)
        return name
      }
    }
  }

  reset() {
    this.name = this.generateName()
  }

  getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * 10)
  }
}

module.exports = Robot

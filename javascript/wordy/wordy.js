class WordProblem {
  constructor(question) {
    this.question = question.slice(0, question.length - 1)
    this.questionParsed = this.parseQuestion()
  }

  parseQuestion() {
    let questionParsed = this.question

    const parseOperationsRegex = {
      '+': /plus/g,
      '-': /minus/g,
      '/': /divided by/g,
      '*': /multiplied by/g,
    }

    for (let key in parseOperationsRegex) {
      questionParsed = questionParsed.replace(parseOperationsRegex[key], key)
    }

    if (questionParsed === this.question) {
      throw new ArgumentError()
    }

    questionParsed = questionParsed.replace(/What is /g, '')

    return questionParsed
  }

  answer() {
    const equationSplit = this.questionParsed.split(' ')
    let sum = parseInt(equationSplit[0])

    for (let i = 1; i < equationSplit.length - 1; i++) {
      switch (equationSplit[i]) {
        case '+':
          sum += parseInt(equationSplit[i + 1], 10)
          break
        case '-':
          sum -= parseInt(equationSplit[i + 1], 10)
          break
        case '/':
          sum /= parseInt(equationSplit[i + 1], 10)
          break
        case '*':
          sum *= parseInt(equationSplit[i + 1], 10)
          break
      }
    }

    return sum
  }
}
class ArgumentError extends Error {
  constructor() {
    super()
  }
}

module.exports = { WordProblem, ArgumentError }

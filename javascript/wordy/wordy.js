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
    return eval(this.questionParsed)
  }
}
class ArgumentError extends Error {
  constructor() {
    super()
  }
}

module.exports = { WordProblem, ArgumentError }

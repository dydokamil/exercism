const bracket = (bracketStr) => {
  let currentLen = -1

  while (currentLen !== bracketStr.length) {
    currentLen = bracketStr.length
    for (let i = 0; i < bracketStr.length - 1; i++) {
      if (
        (bracketStr[i] === '{' && bracketStr[i + 1] === '}') ||
        (bracketStr[i] === '[' && bracketStr[i + 1] === ']') ||
        (bracketStr[i] === '(' && bracketStr[i + 1] === ')')
      ) {
        bracketStr = bracketStr.slice(0, i) + bracketStr.slice(i + 2)
        break
      }
    }
  }
  return bracketStr.length === 0
}

module.exports = bracket

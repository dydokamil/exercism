const zero = (' _ \n' + '| |\n' + '|_|\n' + '   ').split(/\\n/g)

const ocr = {
  convert: (str) => {
    const strParsed = str.split(/\\n/g)

    console.log('zero', zero)
    console.log('strparsed', zero)

    if (strParsed === zero) {
      return '0'
    }
  },
}

module.exports = ocr

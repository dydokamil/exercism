class ETL {
  transform(old) {
    return Object.entries(old).reduce((acc, [key, vals]) => {
      vals.forEach((val) => {
        acc[val.toLowerCase()] = +key
      })
      return acc
    }, {})
  }
}

module.exports = ETL

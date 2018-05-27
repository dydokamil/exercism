function Matrix(strMatrix) {
  this.strMatrix = strMatrix
  this.strRows = this.strMatrix.split('\n')
  this.strRows = this.strRows.map((row) => row.split(' '))

  this.intRows = this.strRows.map((row) =>
    row.map((element) => parseInt(element, 10)),
  )

  const rows = this.intRows
  const columns = Array(this.intRows[0].length)
    .fill()
    .reduce((acc, _, idx) => [...acc, this.intRows.map((row) => row[idx])], [])

  const calculateSaddlePoints = () => {
    const maxRowVals = rows.map((row) => Math.max(...row))
    const minColVals = columns.map((column) => Math.min(...column))

    let saddlePointArray = []

    // rows.forEach((row, rowIdx) => {
    //   row.forEach((element, elementIdx) => {
    //     if (element === maxRowVals[rowIdx]) {
    //       if (columns[elementIdx][rowIdx] === minColVals[elementIdx]) {
    //         saddlePointArray.push([rowIdx, elementIdx])
    //       }
    //     }
    //   })
    // })

    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        if (rows[i][j] === maxRowVals[i]) {
          if (columns[j][i] === minColVals[j]) {
            saddlePointArray.push([i, j])
          }
        }
      }
    }

    return saddlePointArray
  }

  const saddlePoints = calculateSaddlePoints()

  return { rows, columns, saddlePoints }
}

module.exports = Matrix

class Matrix {
  constructor(matrix) {
    this.matrix = matrix
    this.calculateRows()
    this.calculateColumns()
  }

  calculateRows() {
    const rawRows = this.matrix.split('\n')
    const numRows = rawRows.map((rawRow) =>
      rawRow.split(' ').map((strChar) => parseInt(strChar, 10)),
    )
    this.rows = numRows
  }

  calculateColumns() {
    const rowsLength = this.rows.length
    const columnsLength = this.rows[0].length
    const cols = []
    let col = []
    for (let i = 0; i < columnsLength; i++) {
      for (let j = 0; j < rowsLength; j++) {
        col.push(this.rows[j][i])
      }
      cols.push(col)
      col = []
    }
    this.columns = cols
  }
}

module.exports = Matrix

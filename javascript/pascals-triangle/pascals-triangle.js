class Triangle {
  constructor(rowsNum) {
    this.rowsNum = rowsNum
    this.rows = this.generateRows()
    this.lastRow = this.rows[this.rows.length - 1]
  }

  getElement(arr, x, y) {
    try {
      const element = arr[x][y]
      if (typeof element === 'undefined') return 0
      return element
    } catch (error) {
      return 0
    }
  }

  generateRows() {
    let rows = [[1]]
    if (this.rowsNum === 1) return rows

    let row = []
    for (let i = 1; i < this.rowsNum; i++) {
      for (let j = 0; j < i + 1; j++) {
        row.push(
          this.getElement(rows, i - 1, j) + this.getElement(rows, i - 1, j - 1),
        )
      }
      rows.push(row)
      row = []
    }

    return rows
  }
}

module.exports = Triangle

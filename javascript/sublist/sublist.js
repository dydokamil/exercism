class List {
  constructor(list = []) {
    this.list = list
  }

  compare(listTwoObj) {
    let equal = true
    const secondList = listTwoObj.list

    if (this.list.length === secondList.length) {
      // check if equal
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] !== secondList[i]) {
          equal = false
          break
        }
      }
      if (equal) return 'EQUAL'
      else return 'UNEQUAL'
    } else if (this.list.length < secondList.length) {
      // check if sublist
      for (let i = 0; i < secondList.length; i++) {
        let sublist = true
        for (let j = 0; j < this.list.length; j++) {
          if (secondList[i + j] !== this.list[j]) {
            sublist = false
            break
          }
        }
        if (sublist) return 'SUBLIST'
      }
    } else if (this.list.length > secondList.length) {
      // check if superlist
      for (let i = 0; i < this.list.length; i++) {
        let superlist = true
        for (let j = 0; j < secondList.length; j++) {
          if (this.list[i + j] !== secondList[j]) {
            superlist = false
            break
          }
        }
        if (superlist) return 'SUPERLIST'
      }
    }

    return 'UNEQUAL'
  }
}

module.exports = List

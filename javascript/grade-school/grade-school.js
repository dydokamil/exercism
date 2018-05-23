class School {
  constructor() {
    this.rosterObj = {}
  }
  add(student, grade) {
    if (!Object.keys(this.rosterObj).includes(grade.toString())) {
      this.rosterObj[grade] = []
    }
    this.rosterObj[grade].push(student)
    this.rosterObj[grade].sort()
  }
  grade(_grade) {
    return this.rosterObj[_grade] || []
  }
  roster() {
    return this.rosterObj
  }
}

module.exports = School

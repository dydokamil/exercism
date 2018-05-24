const PLANTS = {
  C: 'clover',
  G: 'grass',
  V: 'violets',
  R: 'radishes',
}

const STUDENTS = [
  'alice',
  'bob',
  'charlie',
  'david',
  'eve',
  'fred',
  'ginny',
  'harriet',
  'ileana',
  'joseph',
  'kincaid',
  'larry',
]

function Garden(plants, students = STUDENTS) {
  this.plants = plants.split('\n')
  this.students = students.map((student) => student.toLowerCase()).sort()

  this.getPlants = (index) => [
    PLANTS[this.plants[0][index * 2]],
    PLANTS[this.plants[0][index * 2 + 1]],
    PLANTS[this.plants[1][index * 2]],
    PLANTS[this.plants[1][index * 2 + 1]],
  ]

  return this.students.reduce(
    (acc, student, index) =>
      Object.assign(acc, { [student]: (() => this.getPlants(index))() }),
    {},
  )
}

module.exports = Garden

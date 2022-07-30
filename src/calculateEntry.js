const data = require('../data/zoo_data');

function countEntrants(entrants) {
  entrants.reduce((peoples, { age }) => {
    console.log(peoples, age);
    if (!peoples[age]) {
      peoples[age] = 1;
    } else if (peoples.age < 18) {
      peoples[age] += 1;
    } else if (peoples.age >= 18 && peoples.age < 50) {
      peoples[age] += 1;
    } else {
      peoples[age] += 1;
    }
    return peoples;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
}
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };

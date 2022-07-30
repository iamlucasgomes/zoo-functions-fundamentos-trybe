const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    }
    if (age >= 18 && age < 50) {
      acc.adult += 1;
    }
    if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return (countEntrants(entrants).adult * prices.adult)
    + (countEntrants(entrants).child * prices.child)
    + (countEntrants(entrants).senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };

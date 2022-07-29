const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((animals, specie) =>
      ({ ...animals, [specie.name]: specie.residents.length }), {});
  } if (Object.keys(animal).includes('sex')) {
    return species.find(({ name }) => name === animal.specie).residents
      .filter(({ sex }) => sex === animal.sex).length;
  } return species.find(({ name }) => name === animal.specie).residents.length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;

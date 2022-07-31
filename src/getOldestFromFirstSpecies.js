const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findAnimal = employees.find(({ id: ids }) => id === ids).responsibleFor
    .find((firstAnimal) => firstAnimal);
  const names = species.filter(({ id: ids }) => ids === findAnimal)
    .find(({ residents }) => residents).residents.sort((a, b) => b.age - a.age)
    .find((animal) => animal).name;
  const sexs = species.filter(({ id: ids }) => ids === findAnimal)
    .find(({ residents }) => residents).residents.sort((a, b) => b.age - a.age)
    .find((animal) => animal).sex;
  const ages = species.filter(({ id: ids }) => ids === findAnimal)
    .find(({ residents }) => residents).residents.sort((a, b) => b.age - a.age)
    .find((animal) => animal).age;
  return Object.values({ names, sexs, ages });
}

module.exports = getOldestFromFirstSpecies;

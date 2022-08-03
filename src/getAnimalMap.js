const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const locations = (direction) => {
  const local = species
    .filter(({ location }) => location.includes(direction))
    .reduce((arr, { name }) => {
      arr.push(name);
      return arr;
    }, []);
  return local;
};

function animalsFilter(animal) {
  return species
    .filter(({ location }) => location.includes(animal))
    .reduce((arr, curVal) => {
      const obj = {};
      obj[curVal.name] = curVal.residents.map(({ name }) => name);
      arr.push(obj);
      return arr;
    }, []);
}

function animalsFilterSorted(animal) {
  return species
    .filter(({ location }) => location.includes(animal))
    .reduce((arr, curVal) => {
      const obj = {};
      obj[curVal.name] = curVal.residents.map(({ name }) => name).sort();
      arr.push(obj);
      return arr;
    }, []);
}
function sexAnimals(direction, options) {
  return species
    .filter(({ location }) => location.includes(direction))
    .reduce((arr, curVal) => {
      const obj = {};
      const sexAnimal = curVal.residents.filter(({ sex }) => sex.includes(options.sex));
      obj[curVal.name] = sexAnimal.map(({ name }) => name);
      arr.push(obj);
      return arr;
    }, []);
}
const paramVoid = {
  NE: locations('NE'),
  NW: locations('NW'),
  SE: locations('SE'),
  SW: locations('SW'),
};

const includeNames = {
  NE: animalsFilter('NE'),
  NW: animalsFilter('NW'),
  SE: animalsFilter('SE'),
  SW: animalsFilter('SW'),
};

const sorted = {
  NE: animalsFilterSorted('NE'),
  NW: animalsFilterSorted('NW'),
  SE: animalsFilterSorted('SE'),
  SW: animalsFilterSorted('SW'),
};

const sexList = (options) => {
  const sexies = {
    NE: sexAnimals('NE', options),
    NW: sexAnimals('NW', options),
    SE: sexAnimals('SE', options),
    SW: sexAnimals('NW', options),
  };
  return sexies;
};

const sexVerify = (options) => {
  if (options.sex) {
    return sexList(options.sex);
  }
};
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return paramVoid;
  }
  if (options.sorted) {
    return sorted;
  }
  if (options.includeNames) {
    return includeNames;
  }
  return sexVerify(options);
}

module.exports = getAnimalMap;

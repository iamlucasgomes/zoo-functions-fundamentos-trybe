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

function animalsFilter(direction) {
  return species
    .filter(({ location }) => location.includes(direction))
    .reduce((arr, curVal) => {
      const obj = {};
      obj[curVal.name] = curVal.residents.map(({ name }) => name);
      arr.push(obj);
      return arr;
    }, []);
}

function animalsFilterSorted(direction) {
  return species
    .filter(({ location }) => location.includes(direction))
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
      const sexAnimal = curVal.residents.filter(({ sex }) => sex === options.sex);
      obj[curVal.name] = sexAnimal.map(({ name }) => name);
      arr.push(obj);
      return arr;
    }, []);
}

function sexAnimalsSort(direction, options) {
  return species
    .filter(({ location }) => location.includes(direction))
    .reduce((arr, curVal) => {
      const obj = {};
      const sexAnimal = curVal.residents.filter(({ sex }) => sex === options.sex);
      obj[curVal.name] = sexAnimal.map(({ name }) => name).sort();
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
    SW: sexAnimals('SW', options),
  };
  return sexies;
};

const sexListSort = (options) => {
  const sexies = {
    NE: sexAnimalsSort('NE', options),
    NW: sexAnimalsSort('NW', options),
    SE: sexAnimalsSort('SE', options),
    SW: sexAnimalsSort('SW', options),
  };
  return sexies;
};

const sexVerify = (options) => {
  if (!options.sorted && options.sex) {
    return sexList(options);
  }
  if (options.includeNames && !options.sex) {
    return includeNames;
  }
  return sexListSort(options);
};
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return paramVoid;
  }
  if (options.sorted && !options.sex) {
    return sorted;
  }
  return sexVerify(options);
}

module.exports = getAnimalMap;

const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.length === 0 ? [] : ids.map((id) => species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;

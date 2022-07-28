const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const findId = ids.map((id) => species.find((specie) => specie.id === id));
  if (ids.length === 0) { return []; }
  return ids.length === 1 ? findId : findId;
}

module.exports = getSpeciesByIds;

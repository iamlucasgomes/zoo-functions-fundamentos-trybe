const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return employees.filter(({ firstName, lastName }) => `${firstName} ${lastName}`)
      .map(({ id, firstName, lastName, responsibleFor }) => ({
        id,
        fullName: `${firstName} ${lastName}`,
        responsibleFor,
        locations: species.find(({ location }) => location).location,
      }));
  }
  // if (employees.filter(({ id }) => id.includes(objeto.name))) {
  //   return employees.filter(({ id }) => id);
  // }
  // if (employees.filter(({ firstName, lastName }) => firstName.includes(objeto.name)
  //   || lastName.includes(objeto.name))) {
  //   return employees.filter(({ firstName, lastName }) => `${firstName} ${lastName}`);
  // }
}
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;

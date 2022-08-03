const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const verification = (objeto) => employees.map(({ firstName }) => firstName).concat(employees
  .map(({ lastName }) => lastName)).includes(objeto.name);

const findName = (objeto) => employees.find(({ firstName, lastName }) => firstName === objeto.name
  || lastName === objeto.name);

function getEmployeesCoverage(objeto) {
  if (!verification(objeto)) {
    throw new Error('Informações inválidas');
  }
  if (verification(objeto)) {
    return {
      id: findName(objeto).id,
      fullName: `${findName(objeto).firstName} ${findName(objeto).lastName}`,
      species: findName(objeto).responsibleFor.reduce((arr, element) => {
        arr.push(species.find(({ id }) => id === element).name);
        return arr;
      }, []),
      locations: findName(objeto).responsibleFor.reduce((arr, element) => {
        arr.push(species.find(({ id }) => id === element).location);
        return arr;
      }, []),
    };
  }
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
// console.log(species.filter(({ id }) => id));

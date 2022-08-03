const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const verification = (objeto) => employees.map(({ firstName }) => firstName).concat(employees
  .map(({ lastName }) => lastName)).includes(objeto.name);

const findName = (objeto) => employees.find(({ firstName, lastName }) => firstName === objeto.name
  || lastName === objeto.name);

const findId = (objeto) => employees.find(({ id }) => id === objeto.id);

const verifyId = (objeto) => employees.map(({ id }) => id).includes(objeto.id);

const info = (employee) => {
  const obj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.reduce((arr, element) => {
      arr.push(species.find(({ id }) => id === element).name);
      return arr;
    }, []),
    locations: employee.responsibleFor.reduce((arr, element) => {
      arr.push(species.find(({ id }) => id === element).location);
      return arr;
    }, []),
  };
  return obj;
};
// console.log(employees.map((element) => infoList(element)));

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return employees.map((employeeList) => info(employeeList));
  }
  if (verification(objeto)) {
    return info(findName(objeto));
  }
  if (verifyId(objeto)) {
    return info(findId(objeto));
  } throw new Error('Informações inválidas');
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
// console.log(species.filter(({ id }) => id));

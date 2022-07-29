const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    if (isManager(managerId)) {
      return employees
        .filter((employee) => employee.managers.includes(managerId))
        .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    }
  } catch (error) {
    return error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };

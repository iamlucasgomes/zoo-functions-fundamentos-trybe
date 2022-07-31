const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const daysOfTheWeek = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter(({ availability }) => availability.includes('Tuesday'))
      .map(({ name }) => name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter(({ availability }) => availability.includes('Wednesday'))
      .map(({ name }) => name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter(({ availability }) => availability.includes('Thursday'))
      .map(({ name }) => name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter(({ availability }) => availability.includes('Friday'))
      .map(({ name }) => name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter(({ availability }) => availability.includes('Saturday'))
      .map(({ name }) => name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter(({ availability }) => availability.includes('Sunday'))
      .map(({ name }) => name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  if (Object.keys(daysOfTheWeek).includes(scheduleTarget)) {
    return { [scheduleTarget]: daysOfTheWeek[scheduleTarget] };
  }
  if (!scheduleTarget || species.map(({ name }) => name).includes(scheduleTarget) === false) {
    return daysOfTheWeek;
  }
  if (species.filter(({ name }) => name.includes(scheduleTarget))) {
    return species.filter(({ name }) => name === scheduleTarget)
      .find(({ availability }) => availability).availability;
  }
}
module.exports = getSchedule;

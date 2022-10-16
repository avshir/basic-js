const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  } 

  if (!(date instanceof Date) || Object.keys(date).length > 0) {
    throw new Error("Invalid date!");
  } 
  
  let seasons = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [0, 1, 11],
  };

  let month = date.getMonth(); // 0 - 11
  let nameSeason = '';
  for (let key in seasons) {
    if (seasons[key].includes(month)) {
      nameSeason = key;
    }
  }
  
  return nameSeason;
}

module.exports = {
  getSeason
};

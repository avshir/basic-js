const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    sampleActivity === undefined ||
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    sampleActivity <= 0
  ) {
    return false;
  }

  // console.log(HALF_LIFE_PERIOD); //15
  // console.log(MODERN_ACTIVITY); //5730
  let resAge = (HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sampleActivity)) / Math.log(2);

  if (resAge > 0) {
    return Math.ceil(resAge);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};

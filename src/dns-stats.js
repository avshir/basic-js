const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resObj = {};

  domains.forEach((elem) => {
    let elemArr = elem.split(".").reverse();
    let key = "";

    elemArr.forEach((item) => {
      key += `.${item}`;
      resObj.hasOwnProperty(key) ? resObj[key]++ : (resObj[key] = 1);
    });
  });

  return resObj;
}

module.exports = {
  getDNSStats
};

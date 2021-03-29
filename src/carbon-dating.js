const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === null || isNaN(parseFloat(sampleActivity)) || typeof(sampleActivity) !== 'string' 
  || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0){
    return false;
  }

  const sampleActivityNumber = parseFloat(sampleActivity, 10);
  const k = 0.693 / HALF_LIFE_PERIOD;

  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k)
  return result;
};

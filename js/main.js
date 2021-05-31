const randomInteger = function (min,max) {
  if (max > min && min >= 0 && max >0) {
    return Math.floor (min + Math.random()*(max + 1 - min));
  }
  throw new RangeError;
};

const randomNonInteger = function (min, max, decimalNumber) {
  if (max > min && min >= 0 && max >0) {
    return (min + Math.random() * (max + 1 - min)).toFixed(decimalNumber);
  }
  throw new RangeError;
};

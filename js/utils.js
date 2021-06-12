const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.abs(min), Math.abs(max));
  const upper = Math.floor(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return result.toFixed(digits);
};

const getRandomArrayElement = (array) => {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};

const getRandomArrayLength = (array) => array.slice(1, getRandomPositiveInteger(1, array.length - 1));

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayLength};

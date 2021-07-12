const getRandomPositiveInteger = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};

const getRandomPositiveFloat = (min, max, digits) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const randFloat = Math.random() * (upper - lower) + lower;

  return randFloat.toFixed(digits);
};

const getRandomArrayElement = (array) => {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};

const getRandomArrayLength = (array) => array.slice(1, getRandomPositiveInteger(1, array.length - 1));

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {isEscEvent};

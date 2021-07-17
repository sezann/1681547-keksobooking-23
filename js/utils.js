const ALERT_SHOW_TIME = 5000;

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

const isEnterEvent = (evt) => evt.key === 'Enter';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscEvent, isEnterEvent, showAlert, debounce};

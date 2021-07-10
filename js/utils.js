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

//Активная и неактивная форма
//=========================================================================================//

const adForm = document.querySelector('.ad-form');
const adFieldset = document.querySelector('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFilterSelect = document.querySelector('.map__filter');
const mapFeatures = document.querySelector('.map__features');

const toDisable = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  adFieldset.setAttribute('disabled', 'disabled');
  mapFilterSelect.setAttribute('disabled', 'disabled');
  mapFeatures.setAttribute('disabled', 'disabled');
};

const toActivate = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  adFieldset.removeAttribute('disabled', 'disabled');
  mapFilterSelect.removeAttribute('disabled', 'disabled');
  mapFeatures.removeAttribute('disabled', 'disabled');
};

toActivate();


//Блоки с сообщением об успехе и ошибке
//========================================================================================//

const successCard = () => {
  const successMessage = `<div class="success">
  <p class="success__message">Ваше объявление<br>успешно размещено!</p>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', successMessage);
};

const errorCard = () => {
  const errorMessage = `<div class="error">
  <p class="error__message">Ошибка размещения объявления</p>
  <button type="button" class="error__button">Попробовать снова</button>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', errorMessage);
};

export {successCard, errorCard};



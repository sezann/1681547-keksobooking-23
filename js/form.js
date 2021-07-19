import {sendData} from './api.js';

const SERVER = 'https://23.javascript.pages.academy/keksobooking';
const LOCATION_DIGITS_AMOUNT = 5;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_PER_NIGHT = 1000000;

const roomsValue = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0],
};

const minPriceForNight = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formTitle = adForm.querySelector('#title');
const address = adForm.querySelector('#address');
const roomsValueSelect = adForm.querySelector('#room_number');
const guestsCapacity = adForm.querySelectorAll('#capacity option');
const price = adForm.querySelector('#price');
const typeOfHouseSelect = adForm.querySelector('#type');
const checkIn = adForm.querySelector('#timein');
const checkOut = adForm.querySelector('#timeout');
const resetButton = adForm.querySelector('.ad-form__reset');


const validateGuests = (count) => {
  guestsCapacity.forEach((option) => {
    option.disabled = true;
  });
  roomsValue[count].forEach((seatsAmount) => {
    guestsCapacity.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

const onRoomChange = (evt) => {
  validateGuests(evt.target.value);
};

const onTypeOfHouseChange = () => {
  price.min = minPriceForNight[typeOfHouseSelect.value];
  price.placeholder = minPriceForNight[typeOfHouseSelect.value];
};

formTitle.addEventListener('input', () => {
  const valueLength = formTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else if (formTitle.validity.valueMissing) {
    formTitle.setCustomValidity('Обязательное поле');
  } else {
    formTitle.setCustomValidity('');
  }
    formTitle.reportValidity();
});

const onCheckInChange = () => {
  checkOut.value =  checkIn.value;
};

const onCheckOutChange = () => {
  checkIn.value = checkOut.value;
};

const onPriceChange = () => {
  const priceInput =price.value;
  const typeInput = typeOfHouseSelect.value;
  const minPrice = minPriceForNight[typeInput];

  if (priceInput < minPrice) {
    price.setCustomValidity(`Стоимость должна быть не менее ${minPrice}`);
  } else if (price > MAX_PRICE_PER_NIGHT) {
    price.setCustomValidity(`Стоимость не должна превышать ${MAX_PRICE_PER_NIGHT}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};

roomsValueSelect.addEventListener ('change', onRoomChange);
typeOfHouseSelect.addEventListener('change', onTypeOfHouseChange);
price.addEventListener('input', onPriceChange);
checkIn.addEventListener('change', onCheckInChange);
checkOut.addEventListener('change', onCheckOutChange);

const toDisableForm = () => {
  adForm.classList.add('.ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.classList.add('disabled');
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.classList.add('disabled');
  });

  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.add('disabled');
  });
};

const toEnableForm = () => {
  adForm.classList.remove('.ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.classList.remove('disabled');
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.classList.remove('disabled');
  });

  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.remove('disabled');
  });
  address.setAttribute('readonly', 'readonly');
};

const fillAddressInput = (lat, lng) => {
  const latitude = lat.toFixed(LOCATION_DIGITS_AMOUNT);
  const longitude = lng.toFixed(LOCATION_DIGITS_AMOUNT);
  address.value = `${latitude} ${longitude}`;
};

const onResetForm = () => {
  onTypeOfHouseChange();
  validateGuests(roomsValueSelect.value);
  onCheckInChange();
  onCheckOutChange();
};

const setFormSubmit = (onSuccess, onError) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

  sendData(
    SERVER,
    onSuccess,
    onError,
    new FormData(evt.target),
    );
  });
};

export {setFormSubmit, onResetForm, toDisableForm, toEnableForm, fillAddressInput, LOCATION_DIGITS_AMOUNT, minPriceForNight, resetButton, adForm};

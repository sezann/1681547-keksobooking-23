import {sendData} from './api.js';
import {successCard, errorCard, openSuccessCard, openErrorCard} from './user-modal.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const adForm = document.querySelector('.ad-form');
const formTitle = adForm.querySelector('#title');
const address = adForm.querySelector('#address');
const roomsValueSelect = adForm.querySelector('#room_number');
const guestsCapacity = adForm.querySelectorAll('#capacity option');
const price = adForm.querySelector('#price');
const typeOfHouseSelect = adForm.querySelector('#type');
const checkIn = adForm.querySelector('#timein');
const checkOut = adForm.querySelector('#timeout');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

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

const onRoomChange = (evt) => {
  guestsCapacity.forEach((option) => {
    option.disabled = true;
  });
  roomsValue[evt.target.value].forEach((seatsAmount) => {
    guestsCapacity.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

const onTypeOfHouseChange = () => {
  price.setAttribute('min', minPriceForNight[typeOfHouseSelect.value]);
  price.placeholder = minPriceForNight[typeOfHouseSelect.value];
};

// Заголовок объявления

formTitle.addEventListener('input', () => {
  const valueLength = formTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  }  else if (formTitle.validity.valueMissing) {
    formTitle.setCustomValidity('Обязательное поле');
  }  else {
    formTitle.setCustomValidity('');
  }
    formTitle.reportValidity();
});


// Количество комнат и количество мест

roomsValueSelect.addEventListener ('change', onRoomChange);

// Тип жилья и цена за ночь

typeOfHouseSelect.addEventListener('change', onTypeOfHouseChange);

// Время заезда и выезда

checkIn.addEventListener('change', () => {
  checkOut.value =  checkIn.value;
});

checkOut.addEventListener('change', () => {
  checkIn.value = checkOut.value;
});

// Filters

const mapFilters = document.querySelector('.map__filters');
const mapFilterType = mapFilters.querySelector('#housing-type');
const mapFilterPrice = mapFilters.querySelector('#housing-price');
const mapFilterRooms = mapFilters.querySelector('#housing-rooms');
const mapFilterGuests = mapFilters.querySelector('#housing-guests');
const mapFilterFeatures = mapFilters.querySelector('#housing-features');



// Отправка данных

const setFormSubmit = (sendData, onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

  sendData(
    () => onSuccess(),
    () => errorCard(),
    new FormData(evt.target),
    );

    adForm.reset();
  });
};

export {setFormSubmit};

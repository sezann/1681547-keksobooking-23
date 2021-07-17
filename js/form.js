import {sendData} from './api.js';
import {successCard, errorCard} from './user-modal.js';

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
  price.min = minPriceForNight[typeOfHouseSelect.value];
  price.placeholder = minPriceForNight[typeOfHouseSelect.value];
};

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

const onCheckInChange = () => {
  checkOut.value =  checkIn.value;
};

const onCheckOutChange = () => {
  checkIn.value = checkOut.value;
};

roomsValueSelect.addEventListener ('change', onRoomChange);
typeOfHouseSelect.addEventListener('change', onTypeOfHouseChange);
checkIn.addEventListener('change', onCheckInChange);
checkOut.addEventListener('change', onCheckOutChange);

const onResetForm = () => {
  onTypeOfHouseChange();
  onRoomChange();
  onCheckInChange();
  onCheckOutChange();
};

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


export {setFormSubmit, onResetForm, resetButton, minPriceForNight, adForm};

import './data.js';

// Заголовок объявления

const formTitle = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

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

const roomsValueSelect = document.querySelector('#room_number');
const guestsCapacity = document.querySelector('#capacity');

const roomsValue = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0],
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

roomsValueSelect.addEventListener ('change', onRoomChange);

// тип жилья и цена за ночь

const price = document.querySelector('#price');
const typeOfHouseSelect = document.querySelector('#type');

const minPriceForNight = {
  Бунгало: 0,
  Квартира: 1000,
  Отель: 3000,
  Дом: 5000,
  Дворец: 10000,
};

const onTypeOfHouseChange = () => {
  const typeOfHouse = typeOfHouseSelect.value;
  price.setAttribute('min', minPriceForNight[typeOfHouse]);
  price.placeholder = minPriceForNight[typeOfHouse];
};

typeOfHouseSelect.addEventListener('change', onTypeOfHouseChange);

// время заезда и выезда

const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');


checkIn.addEventListener('change', (evt) => {
  checkIn.value = evt.target.value;
  checkOut.value = evt.target.value;
});

checkOut.addEventListener('change', (evt) => {
  checkOut.value = evt.target.value;
  checkIn.value = evt.target.value;
});

export {formTitle, typeOfHouseSelect, roomsValueSelect, checkIn, checkOut};

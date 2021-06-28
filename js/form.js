// Заголовок объявления

const formTitle = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

formTitle.addEventListener('invalid', () => {
  if (formTitle.validity.tooShort) {
    formTitle.setCustomValidity('Заголовок объявления должен состоять минимум из 30 символов');
  } else if (formTitle.validity.tooLong) {
    formTitle.setCustomValidity('Заголовок объявления не должен превышать 100 символов');
  } else if (formTitle.validity.valueMissing) {
    formTitle.setCustomValidity('Обязательное поле');
  } else {
    formTitle.setCustomValidity('');
  }
});

formTitle.addEventListener('input', () => {
  const valueLength = formTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    formTitle.setCustomValidity('');
  }
    formTitle.reportValidity();
});

// Цена за ночь

const formPrice = document.querySelector('#price');
formPrice.addEventListener('input', () => {
  if (formPrice.validity.rangeUnderflow) {
    formPrice.setCustomValidity('Минимальная цена за ночь 0₽');
  } else if (formPrice.validity.rangeOverflow) {
    formPrice.setCustomValidity('Максимальная цена за ночь 1000000₽ ');
  } else if (formPrice.validity.valueMissing) {
    formPrice.setCustomValidity('Обязательное поле');
  } else {
    formPrice.setCustomValidity('');
  }
    formPrice.reportValidity();
});

formPrice.addEventListener('input', () => {
  if (formPrice.validity.badInput) {
    formPrice.setCustomValidity('Пожалуйста, введите число');
  } else {
    formPrice.setCustomValidity('');
  }
    formPrice.reportValidity();
});

// Количество комнат и количество мест

const roomsValue = document.querySelector('#room_number');
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
};

roomsValue[evt.target.value].forEach((seatsAmount) => {
  guestsCapacity.forEach((option) => {
    if (Number(option.value) === seatsAmount) {
      option.disabled = false;
      option.selected = true;
    }
  });
});


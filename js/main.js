//ДАННЫЕ

const AVATAR = [
      'img/avatars/user01.png',
      'img/avatars/user02.png',
      'img/avatars/user03.png',
      'img/avatars/user04.png',
      'img/avatars/user05.png',
      'img/avatars/user06.png',
      'img/avatars/user07.png',
      'img/avatars/user08.png',
      'img/avatars/user{{xx}}.png',
      'img/avatars/user{{xx}}.png'
];

const TITLE = ['title_1', 'title_2', 'title_3', 'title_4', 'title_5', 'title_6', 'title_7', 'title_8', 'title_9', 'title_10'];

const ADDRESS = [
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}'
];

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTION = ['desc_1', 'desc_2', 'desc_3', 'desc_4', 'desc_5', 'desc_6', 'desc_7', 'desc_8', 'desc_9', 'desc_10'];

const PHOTOS = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_OBJECTS_COUNT = 10;

//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

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

const getRandomArrayLength = (array) => array.slice(1, getRandomPositiveInteger(1, array.length));


//ГЕНЕРАЦИЯ ОБЪЕКТА

const createObject = (adNumber) => {
  const result = [];

  for (let i = 1; i <= adNumber; i += 1) {

    const locationX = Number(getRandomPositiveFloat(35.65000, 35.70000, 1));
    const locationY = Number(getRandomPositiveFloat(139.70000, 139.80000, 1));

    result.push({
      'author': {
        'avatar': `img/avatars/user0${i}.png`,
      },
      'offer': {
        'title': getRandomArrayElement(TITLE),
        'address': `${locationX}, ${locationY}`,
        'price': getRandomPositiveInteger(PRICE_MIN, PRICE_MAX),
        'type': getRandomArrayElement(TYPE),
        'rooms': getRandomPositiveInteger(ROOMS_MIN, ROOMS_MAX),
        'guests': getRandomPositiveInteger(GUESTS_MIN, GUESTS_MAX),
        'checkin': getRandomArrayElement(CHECKIN),
        'checkout': getRandomArrayElement(CHECKOUT),
        'features': getRandomArrayLength(FEATURES),
        'description': getRandomArrayElement(DESCRIPTION),
        'photos': getRandomArrayLength(PHOTOS),
      },
      'location': {
        'lat': locationX,
        'lng': locationY,
      },
    });
  }
  return result;
};

createObject(10);

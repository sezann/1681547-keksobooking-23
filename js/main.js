//ДАННЫЕ

const TITLE = ['Кандинский', 'Save The Rave', 'Guilty Pleasure', 'Three Little Pigs', 'Matrix', 'Back in USSR', 'Poker Face', 'Tokio Dreams', 'Хогвартс', 'Преступление и наказание'];

const ADDRESS = [
      '35.67861, 139.75819',
      '35.65253, 139.70217',
      '35.68412, 139.76094',
      '35.69493, 139.74379',
      '35.65725, 139.70495',
      '35.66351, 139.71302',
      '35.68119, 139.79325',
      '35.67374, 139.70203',
      '35.66443, 139.78504',
      '35.69815, 139.73552'
];

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTION = ['Бутик-отель с видом на океан', 'Стильный хостел', 'Квартира с бабушкиным ремонтом', 'Дом с привидениями', 'Японская классика', 'Дворец для трансгендеров и их животных', 'Сахарный отель для рафинированных принцесс', 'Избушка на курьих ножках', 'Бунгало в стиле советского реализма', 'Рай'];

const PHOTOS = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


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

const getRandomArrayLength = (array) => array.slice(1, getRandomPositiveInteger(1, array.length - 1));

const SIMILAR_ADS = createAd(10);


//ГЕНЕРАЦИЯ ОБЪЕКТА


const createAd = (adNumber) => {
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

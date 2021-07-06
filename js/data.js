import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayLength} from './utils.js';

const TITLE = ['Кандинский', 'Save The Rave', 'Guilty Pleasure', 'Three Little Pigs', 'Matrix', 'Back in USSR', 'Poker Face', 'Tokio Dreams', 'Хогвартс', 'Преступление и наказание'];

const AVATAR = [
  '../img/avatars/user01.png',
  '../img/avatars/user02.png',
  '../img/avatars/user03.png',
  '../img/avatars/user04.png',
  '../img/avatars/user05.png',
  '../img/avatars/user06.png',
  '../img/avatars/user07.png',
  '../img/avatars/user08.png',
  '../img/avatars/user09.png',
  '../img/avatars/user10.png',
  '../img/avatars/user11.png',
  '../img/avatars/default.png',
];

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const PRICE_MIN = 0;
const PRICE_MAX = 1000000;
const ROOMS_MIN = 1;
const ROOMS_MAX = 100;
const GUESTS_MIN = 1;
const GUESTS_MAX = 10;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Бутик-отель с видом на океан', 'Стильный хостел', 'Квартира с бабушкиным ремонтом', 'Дом с привидениями', 'Японская классика', 'Дворец для трансгендеров и их животных', 'Сахарный отель для рафинированных принцесс', 'Избушка на курьих ножках', 'Бунгало в стиле советского реализма', 'Рай'];
const PHOTOS = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const CREATE_AD = (adNumber) => {
  const result = [];

  for (let i = 1; i <= adNumber; i += 1) {

    const locationX = Number(getRandomPositiveFloat(35.65000, 35.70000, 5));
    const locationY = Number(getRandomPositiveFloat(139.70000, 139.80000, 5));


    result.push({
      'author': {
        'avatar': getRandomArrayElement(AVATAR),
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
        'lat': locationX,
        'lng': locationY,
    });
  }
  return result;
};

export {CREATE_AD};

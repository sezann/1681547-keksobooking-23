// В реализации Академии понравилось то, что нет конструкции if.
// Поэтому использую эти функции.


function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
  };

function getRandomPositiveFloat (a, b, digits = 1) {
    const lower = Math.min(Math.abs(a), Math.abs(b));
    const upper = Math.max(Math.abs(a), Math.abs(b));
    const result = Math.random() * (upper - lower) + lower;

    return result.toFixed(digits);
  };




//ЗАДАЧА => Написать функцию для создания массива (10 сгенерированных JS-объектов), используя утилиты.


//УСЛОВИЯ

/*Каждый объект массива - это описание похожего объявления неподалёку.

Объект состоит из трёх ключей, где каждый ключ - это объект:

   1. author = {
        avatar: 'img/avatars/user{{xx}}.png' ({{xx}} - это число от 1 до 8 с ведущим нулём, напрмер, 01, 02; адреса изображений не повторяются)
      };

   2. offer = {
        title: 'заголовок предложения'- значение из массива
        address: {{location.x}}, {{location.y}} - значение из массива
        price: случайное целое положительное число,
        type: 'palace', 'flat', 'bungalow', 'hotel' - значение из массива
        rooms: случайное целое положительное число,
        guests: случайное целое положительное число,
        checkin: '12:00', '13:00', '14:00' - значение из массива
        checkout: '12:00', '13:00', '14:00' - значение из массива
        features:
          'wifi',
          'dishwasher',
          'parking',
          'washer',
          'elevator',
          'conditioner'

          массив случайной длины из значений.
          значения не должны повторяться

        description: 'описание помещения' - значение из массива,

        photos:
          'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
          'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
          'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'

          массив случайной длины из значений.
      };

   3. location = {
        lat: число с плавающей точкой - широта, случайное значение от 35.65000 до 35.70000 - (function)
        lng: число с плавающей точкой - долгота, случайное значение от 139.70000 до 139.80000 - (function)
      }


//ДАННЫЕ

const avatar = [
      'img/avatars/user01.png',
      'img/avatars/user02.png',
      'img/avatars/user03.png',
      'img/avatars/user04.png',
      'img/avatars/user05.png',
      'img/avatars/user06.png',
      'img/avatars/user07.png',
      'img/avatars/user08.png',
      'img/avatars/user{{xx}}.png',
      'img/avatars/user{{xx}}.png',
];


const title = [
      'title_1',
      'title_2',
      'title_3',
      'title_4',
      'title_5',
      'title_6',
      'title_7',
      'title_8',
      'title_9',
      'title_10',
];


const address = [
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
      '{{location.x}}, {{location.y}}',
];

const price = function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
  };

const type = [
      'palace'
      'flat',
      'house',
      'bungalow',
      'hotel',
];

const rooms = function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
  };

const guests = function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
  };

const checkIn = [
      '12:00',
      '13:00',
      '14:00',
];

const checkOut = [
      '12:00',
      '13:00',
      '14:00',
];

const features = [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner',
];

const description = [
      'desc_1',
      'desc_2',
      'desc_3',
      'desc_4',
      'desc_5',
      'desc_6',
      'desc_7',
      'desc_8',
      'desc_9',
      'desc_10',
];

const photos = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const lat = function getRandomPositiveFloat (a, b, digits = 1) {
    const lower = Math.min(Math.abs(a), Math.abs(b));
    const upper = Math.max(Math.abs(a), Math.abs(b));
    const result = Math.random() * (upper - lower) + lower;

    return result.toFixed(digits);
  };

 const lng = function getRandomPositiveFloat (a, b, digits = 1) {
    const lower = Math.min(Math.abs(a), Math.abs(b));
    const upper = Math.max(Math.abs(a), Math.abs(b));
    const result = Math.random() * (upper - lower) + lower;

    return result.toFixed(digits);
  };

//ГЕНЕРИРОВАНИЕ ОБЪЕКТА

const createObject = () => {
  const randomAvatarIndex = getRandomPositiveInteger(0, avatar.length - 1);
  const randomTitleIndex = getRandomPositiveInteger(0, title.length - 1);
  const randomAddressIndex = getRandomPositiveInteger(0, address.length - 1);
  const randomTypeIndex = getRandomPositiveInteger(0, type.length - 1);
  const randomCheckInIndex = getRandomPositiveInteger(0, checkIn.length - 1);
  const randomCheckOutIndex = getRandomPositiveInteger(0, checkOut.length - 1);
  const randomFeaturesIndex = getRandomPositiveInteger(0, features.length - 1) // не доработано, пока не поняла
  const randomDescriptionIndex = getRandomPositiveInteger(0, description.length - 1);
  const randomPhotosIndex = getRandomPositiveInteger(0, photos.length - 1) // не доработано, пока не поняла как

  return {
    author: avatar[randomAvatarIndex],
    offer: {
      title[randomTitleIndex] + ' ' + address[randomAddressIndex] + ' ' + price + ' ' + type[randomTypeIndex] + ' ' + rooms + ' ' + guests + ' ' + checkIn[randomCheckInIndex] + ' ' + checkOut[randomCheckOutIndex] + ' ' + features[randomFeaturesIndex] + ' ' + description[randomDescriptionIndex] + ' ' + photos[randomPhotosIndex]
    },
    location: {
      lat: getRandomPositiveFloat(35.65000, 35.70000, digits = 1),
      lng: getRandomPositiveFloat(139.70000, 139.80000, digits = 1),
    },
  };
};


*/

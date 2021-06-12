import {TITLE, ADDRESS, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS} from './data.js';
import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayLength} from './utils.js';


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

const SIMILAR_ADS = createAd(10);

import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayLength} from './utils.js';

const CREATE_AD = (adNumber) => {
  const result = [];

  for (let i = 1; i <= adNumber; i += 1) {

    const locationX = Number(getRandomPositiveFloat(35.65000, 35.70000, 5));
    const locationY = Number(getRandomPositiveFloat(139.70000, 139.80000, 5));

    result.push({
      'author': {
        'avatar': getRandomArrayElement(avatar),
      },
      'offer': {
        'title': getRandomArrayElement(title),
        'address': `${locationX}, ${locationY}`,
        'price': getRandomPositiveInteger(price),
        'type': getRandomArrayElement(type),
        'rooms': getRandomPositiveInteger(rooms),
        'guests': getRandomPositiveInteger(guests),
        'checkin': getRandomArrayElement(checkin),
        'checkout': getRandomArrayElement(checkout),
        'features': getRandomArrayLength(features),
        'description': getRandomArrayElement(description),
        'photos': getRandomArrayLength(photos),
      },
      'location': {
        'lat': locationX,
        'lng': locationY,
      },
    });
  }
  return result;
};

export {CREATE_AD};

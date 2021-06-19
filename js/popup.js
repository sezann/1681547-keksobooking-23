import {CREATE_AD} from './data.js';

const notice = document.querySelector('#map-canvas');
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = CREATE_AD();

const similarListFragment = document.createDocumentFragment();

similarAds.forEach((offer) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__avatar').src = author.avatar;
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price}` + ' ' + '₽' + '/' + 'ночь';
  adElement.querySelector('.popup__type').textContent = offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms}` + ' ' + 'комнаты' + ' ' + 'для' + ' ' + `${offer.guests}` + ' ' + 'гостей';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд' + ' ' + 'после' + ' ' + `${offer.checkin}` + ',' + ' ' + 'выезд' + ' ' + 'до' + ' ' + `${offer.checkout}`;
  adElement.querySelector('.popup__features').textContent = offer.features;
  adElement.querySelector('.popup__description').textContent = offer.description;
  adElement.querySelector('.popup__photos').src = offer.photos;

  similarListFragment.appendChild(adElement);
});

notice.appendChild(similarListFragment);


// блок popup__features
// не понимаю как применить, где использовать переменную modifiers

const featureListElement = document.querySelector('.popup__features');

const modifiers = features.map((feature) => `popup__feature--${feature}`);

featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
  const modifier = item.classList[1];

  if(! modifiers.includes(modifier)) {
    item.remove();
  }
});

export {similarAds};

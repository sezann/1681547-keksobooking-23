import {CREATE_AD} from './data.js';

const similarAdTemplateElement = document.querySelector('#card');
const similarAdTemplate = similarAdTemplateElement.content.querySelector('.popup');

const renderFeatures = (adElement, features) => {
  const featureListElement = adElement.querySelector('.popup__features');
  featureListElement.innerHTML = '';

  features.forEach((item) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature');
    featureElement.classList.add(`popup__feature--${item}`);
    featureListElement.appendChild(featureElement);
  });
};

const renderPhotos = (adElement, photos) => {
  const photosListElement = adElement.querySelector('.popup__photos');
  photosListElement.innerHTML = '';

  photos.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    photosListElement.appendChild(img);
  });
};

const createCard = ({author, offer}) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__avatar').src = author.avatar;
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;
  adElement.querySelector('.popup__type').textContent = offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = offer.description;
  renderFeatures(adElement, offer.features);
  renderPhotos(adElement, offer.photos);

  return adElement;
};

const renderCard = (container, data) => {
    container.appendChild(createCard(data));
};

export {createCard, renderCard};

import {CREATE_AD} from './data.js';

const notice = document.querySelector('#map-canvas');
const similarAdTemplateElement = document.querySelector('#card');
const similarAdTemplate = similarAdTemplateElement.content.querySelector('.popup');
const similarAds = CREATE_AD();

const createCard = (data) => {
    const adElement = similarAdTemplate.cloneNode(true);

    const renderFeatures = (featureListElement, features) => {
      const featureListElement = adElement.querySelector('.popup__features');
      featureListElement.innerHTML = '';

      features.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add(item);
        featureListElement.appendChild(li);
      });
    };

    const renderPhotos = (photosListElement, photos) => {
      const photosListElement = adElement.querySelector('.popup__photos');
      photosListElement.innerHTML = '';

      photos.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        photosListElement.appendChild(img);
      });
    };

    adElement.querySelector('.popup__avatar').src = author.avatar;
    adElement.querySelector('.popup__title').textContent = offer.title;
    adElement.querySelector('.popup__text--address').textContent = offer.address;
    adElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;
    adElement.querySelector('.popup__type').textContent = offer.type;
    adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    adElement.querySelector('.popup__description').textContent = offer.description;

    return adElement;
};

const renderCard = (createCard) => {
    const similarListFragment = document.createDocumentFragment();
    notice.appendChild(similarListFragment, createCard(data));
};

export {renderCard};



/*код лайва

const featureListElement = document.querySelector('.popup__features');

const modifiers = features.map((feature) => `popup__feature--${feature}`);

featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
  const modifier = item.classList[1];

  if(! modifiers.includes(modifier)) {
    item.remove();
  }
}); */

const similarAdTemplateElement = document.querySelector('#card');
const similarAdTemplate = similarAdTemplateElement.content.querySelector('.popup');

const renderFeatures = (adElement, features) => {
  const featureListElement = adElement.querySelector('.popup__features');

  if(!features) {
    featureListElement.remove();
    return;
  };

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

  if(!photos) {
    photosListElement.remove();
    return;
  };

  photosListElement.innerHTML = '';
  photos.forEach((url) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = url;
    img.style.width = '45px';
    img.style.height = '40px';
    img.setAttribute('alt', 'Фотография жилья');
    photosListElement.appendChild(img);
  });
};

const createCard = (point) => {
  const adElement = similarAdTemplate.cloneNode(true);

  adElement.querySelector('.popup__avatar').src = point.author.avatar;
  adElement.querySelector('.popup__title').textContent = point.offer.title;
  adElement.querySelector('.popup__text--address').textContent = point.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${point.offer.price}₽/ночь`;
  adElement.querySelector('.popup__type').textContent = point.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = point.offer.description;
  renderFeatures(adElement, point.offer.features);
  renderPhotos(adElement, point.offer.photos);

  return adElement;
};

export {createCard};

import './form.js';
import {createCard, renderFeatures, renderPhotos} from './popup.js';
import {createMarker, getMainPinCoords} from './map.js';

const SIMILAR_ADS_COUNT = 10;

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    renderCards(data.slice(0, SIMILAR_ADS_COUNT));
  });

  const renderCards = (data) => {
    data.forEach((point) => {
      createMarker(point)
    });
  };


  const adForm = document.querySelector('.ad-form');

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(adForm);

    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        console.log(response.status);
        return response.json();
    })
      .then((json) => {
        console.log('Результат', json);
    });
  });

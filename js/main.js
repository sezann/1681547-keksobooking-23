import {CREATE_AD} from './data.js';
import {renderCard} from './popup.js';
import './form.js';
import './map.js';

const map = document.querySelector('.map__canvas');

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    renderCard(map, data);
  });

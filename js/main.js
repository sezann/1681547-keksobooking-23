import './popup.js';
import './activate-disable.js';
import {successCard} from './modal.js';
import {setFormSubmit} from './form.js';
import {createMarker} from './map.js';
import {getData, sendData} from './api.js';

const SIMILAR_ADS_COUNT = 10;

getData((data) => {
  renderCards(data.slice(0, SIMILAR_ADS_COUNT));
});

const renderCards = (data) => {
  data.forEach((point) => {
    createMarker(point)
  });
};

setFormSubmit(sendData, successCard);

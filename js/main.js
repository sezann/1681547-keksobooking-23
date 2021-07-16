import './loading.js';
import './popup.js';
import {successCard} from './user-modal.js';
import {setFormSubmit, debounce} from './form.js';
import {createMarker} from './map.js';
import {getData, sendData} from './api.js';
import {setTypeChange, setPriceChange, compareFeatures} from './map-filter.js';

const SIMILAR_ADS_COUNT = 10;
const RENDER_DELAY = 500;

getData((data) => {
  renderCards(data);
  setTypeChange(debounce(() => renderCards(data), RENDER_DELAY,));
  setPriceChange(debounce(() => renderCards(data), RENDER_DELAY));
});

const renderCards = (data) => {
  data
  .slice()
  .sort(compareFeatures)
  .slice(0, SIMILAR_ADS_COUNT)
  .forEach((point) => {
    createMarker(point)
  });
};

setFormSubmit(sendData, successCard);

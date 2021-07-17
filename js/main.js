import {getData, sendData} from './api.js';
import {successCard, errorCard} from './user-modal.js';
import {setFormSubmit, onResetForm, resetButton} from './form.js';
import {renderCards, setUpMap, mainPinAddress} from './map.js';
import {showAlert} from './utils';
import {mapFilters, toEnableFilters, toDisableFilters, setFilterChange} from './filter.js';
import './popup.js';

const SIMILAR_ADS_COUNT = 10;
const ALERT_MESSAGE = 'Не удалось загрузить объявления';

let addsToRender =[];

const setDefaults = () => {
  mapFilters.reset();
  mainPinAddress();
  onResetForm();
  renderCards(addsToRender);
};

toDisableFilters();

getData((data) => {
  addsToRender = data.slice(0, SIMILAR_ADS_COUNT);
  setUpMap(addsToRender);
  setFilterChange(addsToRender);
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    setDefaults();
  });
}, showAlert(ALERT_MESSAGE));


setFormSubmit(sendData, successCard);

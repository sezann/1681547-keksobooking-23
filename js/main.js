import './popup.js';
import './map.js';
import './utils.js';
import './api.js';
import './filter.js';
import './user-modal.js';
import './form.js';

import {getData} from './api.js';
import {showAlert} from './utils.js';
import {showSuccessCard, showErrorCard} from './user-modal.js';
import {setFormSubmit, setDisableForm, onResetForm, fillAddressInput, resetButton, adForm} from './form.js';
import {setUpMap, resetMainPinMarker, defaultCoordsLat, defaultCoordsLng, renderCards} from './map.js';
import {mapFilters, setDisableFilters, setFilterChange} from './filter.js';

const DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const ALERT_MESSAGE = 'Не удалось загрузить данные';

const setDefaults = () => {
  mapFilters.reset();
  adForm.reset();
  resetMainPinMarker();
  onResetForm();
  fillAddressInput(defaultCoordsLat, defaultCoordsLng);
};

setDisableForm();
setDisableFilters();

getData(DATA, (data) => {
  setUpMap(data);
  renderCards(data);
  setFilterChange(data);
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    setDefaults();
  });
}, showAlert(ALERT_MESSAGE));

setFormSubmit(() => {
  showSuccessCard();
  setDefaults();
}, showErrorCard);

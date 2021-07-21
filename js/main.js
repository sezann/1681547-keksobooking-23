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
import {setFormSubmit, toDisableForm, onResetForm, fillAddressInput, resetButton, adForm} from './form.js';
import {renderCards, setUpMap, resetMainPinMarker, defaultCoordsLat, defaultCoordsLng} from './map.js';
import {mapFilters, toDisableFilters, setFilterChange} from './filter.js';

const DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const ALERT_MESSAGE = 'Не удалось загрузить данные';

const setDefaults = () => {
  mapFilters.reset();
  adForm.reset();
  resetMainPinMarker();
  onResetForm();
  renderCards();
  fillAddressInput(defaultCoordsLat, defaultCoordsLng);
};

toDisableFilters();
toDisableForm();

getData(DATA, (data) => {
  setUpMap(data);
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

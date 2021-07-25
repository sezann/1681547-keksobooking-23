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
import {setFormSubmit, setDisableForm, setEnableForm, onResetForm, fillAddressInput, resetButton, adForm} from './form.js';
import {initMap, resetMainPinMarker, defaultCoordsLat, defaultCoordsLng, renderCards, removeMarkers} from './map.js';
import {mapFilters, setDisableFilters, setEnableFilters, setFilterChange} from './filter.js';

const DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const ALERT_MESSAGE = 'Не удалось загрузить данные';

const setDefaults = (data) => {
  mapFilters.reset();
  adForm.reset();
  resetMainPinMarker();
  onResetForm();
  removeMarkers();
  renderCards(data);
  fillAddressInput(defaultCoordsLat, defaultCoordsLng);
};

const onLoadForm = (data) => {
  setEnableForm();
  setEnableFilters();
  setFilterChange(data);
  fillAddressInput(defaultCoordsLat, defaultCoordsLng);
};


setDisableForm();
setDisableFilters();

initMap (() => {
  getData(DATA, (data) => {
    renderCards(data);
    onLoadForm(data);
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    setDefaults(data);
  });

  setFormSubmit(() => {
    showSuccessCard();
    setDefaults(data);
  }, showErrorCard);

  }, showAlert(ALERT_MESSAGE));
});

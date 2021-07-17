import {getData} from './api.js';
import {errorCard, successCard} from './user-modal.js';
import {setFormSubmit, onResetForm, toDisableForm, resetButton, adForm, addressInput} from './form.js';
import {renderCards, setUpMap, resetMainPinMarker, defaultCoordsLat, defaultCoordsLng} from './map.js';
import {showAlert} from './utils.js';
import {mapFilters, toDisableFilters, setFilterChange} from './filter.js';

import './popup.js';
import './map.js';
import './utils.js';
import './api.js';
import './filter.js';
import './user-modal.js';
import './form.js';


const SIMILAR_ADS_COUNT = 10;
const ALERT_MESSAGE = 'Не удалось загрузить объявления';

let addsToRender =[];

const setDefaults = () => {
  mapFilters.reset();
  adForm.reset();
  resetMainPinMarker();
  onResetForm();
  addressInput(defaultCoordsLat, defaultCoordsLng);
  renderCards(addsToRender);
};

toDisableFilters();
toDisableForm();

getData((data) => {
  addsToRender = data.slice(0, SIMILAR_ADS_COUNT);
  setUpMap(addsToRender);
  setFilterChange(addsToRender);
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    setDefaults();
  });
}, showAlert(ALERT_MESSAGE));


setFormSubmit(() => {
 successCard();
 setDefaults();
}, errorCard);

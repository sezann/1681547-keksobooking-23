const adForm = document.querySelector('.ad-form');
const adFieldset = document.querySelector('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFilterSelect = document.querySelector('.map__filter');
const mapFeatures = document.querySelector('.map__features');

const toDisable = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  adFieldset.setAttribute('disabled', 'disabled');
  mapFilterSelect.setAttribute('disabled', 'disabled');
  mapFeatures.setAttribute('disabled', 'disabled');
};

const toActivate = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  adFieldset.removeAttribute('disabled', 'disabled');
  mapFilterSelect.removeAttribute('disabled', 'disabled');
  mapFeatures.removeAttribute('disabled', 'disabled');
};

toDisable();

export {toActivate, toDisable};

import {removeMarkers, renderCards} from './map.js';
import {debounce} from './utils.js';

const RERENDER_DELAY = 500;
const USER_OPTION = 'any';
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const SIMILAR_ADS_COUNT = 10;

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = mapFilters.querySelector('.map__features');
const filterSelect = mapFilters.querySelectorAll('select');
const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRooms = mapFilters.querySelector('#housing-rooms');
const filterGuests = mapFilters.querySelector('#housing-guests');
const checkedFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');

const toDisableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  filterSelect.forEach((select) => {
    select.disabled = true;
  });
  mapFeatures.disabled = true;
};

const toEnableFilters = () => {
  mapFilters.classList.remove('map__filters--disable');
  filterSelect.forEach ((select) => {
    select.disabled = false;
  });
  mapFeatures.disabled = false;
};

const userFilterType = (point) => {
  const filterValue = filterType.value;
  return filterValue === USER_OPTION ? true : point.offer.type === filterValue;
};

const userFilterPrice = (point) => {
  switch (filterPrice.value) {
    case USER_OPTION:
      return true;
    case 'low':
      return point.offer.price < LOW_PRICE;
    case 'middle':
      return point.offer.price >= LOW_PRICE && point.offer.price < HIGH_PRICE;
    case 'high':
      return point.offer.price >= HIGH_PRICE;
    default:
      return false;
  }
};

function userFilterRooms (point) {
  return filterRooms.value === USER_OPTION || Number(filterRooms.value) === point.offer.rooms;
};

function userFilterGuests (point) {
  return filterGuests.value === USER_OPTION ? true : parseInt(filterGuests.value, 10) <= point.offer.guests;
};

const userFilterFeatures = (point) => {
  let count = 0;

  checkedFeatures.forEach((feature) => {
    if (point.offer.features.includes(feature.value)) {
      count++;
    }
  });

  return count === checkedFeatures.length;
};

const getFilteredPoints = (data) => {
  const filteredPoints = data.filter((point) => {
    return (
      userFilterType(point) &&
      userFilterPrice(point) &&
      userFilterRooms(point) &&
      userFilterGuests(point) &&
      userFilterFeatures(point)
    );
  });
  return filteredPoints;
};

const onFilterChange = (data) => {
  return debounce((evt) => {
    evt.preventDefault();
    const filteredAdds = getFilteredPoints(data);
    removeMarkers();
    renderCards(filteredAdds.slice(0, SIMILAR_ADS_COUNT));
  }, RERENDER_DELAY);
};

const setFilterChange = (data) => {
  mapFilters.addEventListener('change', onFilterChange(data));
};

export {toEnableFilters, toDisableFilters, setFilterChange, mapFilters};
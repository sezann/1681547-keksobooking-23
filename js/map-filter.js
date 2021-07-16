const DefaultFeature = {
  FEATURE: 'wi-fi',
};

const mapFiltersForm = document.querySelector('.map__filters');
const mapFilterType = mapFiltersForm.querySelector('#housing-type');
const mapFilterPrice = mapFiltersForm.querySelector('#housing-price');
const mapFilterRooms = mapFiltersForm.querySelector('#housing-rooms');
const mapFilterGuests = mapFiltersForm.querySelector('#housing-guests');
const mapFilterFeatures = mapFiltersForm.querySelector('#housing-features');

const setTypeChange = (cb) => {
  mapFilterType.addEventListener('change', (evt) => {
    const userType = mapFilterType.value;
    data.filter(({type}) => type === userType);
    cb();
  });
};

const setPriceChange = (cb) => {
  mapFilterPrice.addEventListener('change', (evt) => {
    const userPrice = mapFilterPrice.value;
    data.filter(({price}) => price === userPrice);
    cb();
  });
};

const getFeatureRank = (point) => {
  const filterWifi = mapFilterFeatures.querySelector('#filter-wifi');
  const filterDishwasher = mapFilterFeatures.querySelector('#filter-dishwasher');
  const filterParking = mapFilterFeatures.querySelector('#filter-parking');
  const filterWasher = mapFilterFeatures.querySelector('#filter-washer');
  const filterElevator = mapFilterFeatures.querySelector('#filter-elevator');
  const filterConditioner = mapFilterFeatures.querySelector('#filter-conditioner');

  let rank = 0;

  if (point.features === (filterWifi.value || DefaultFeature.FEATURE)) {
    rank +=1;
  }
  if(point.features === (filterDishwasher.value || DefaultFeature.FEATURE)) {
    rank +=1;
  }
  if (point.features === (filterParking.value || DefaultFeature.FEATURE)) {
    rank +=1;
  }
  if (point.features === (filterWasher.value || DefaultFeature.FEATURE)) {
    rank +=1;
  }
  if (point.features === (filterElevator.value || DefaultFeature.FEATURE)) {
    rank +=1;
  }
  if (point.features === (filterConditioner.value || DefaultFeature.FEATURE)) {
    rank +=1;
  }
  return rank;
};

const compareFeatures = (pointA, pointB) => {
  const rankA = getFeatureRank(pointA);
  const rankB = getFeatureRank(pointB);

  return rankB - rankA;
};

export {setTypeChange, setPriceChange, compareFeatures};

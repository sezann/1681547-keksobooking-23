import {createCard} from './popup.js';
import {toEnableFilters} from './filter.js';
import {onResetForm, resetButton} from './form.js';

const LOCATION_DIGITS_AMOUNT = 5;
const defaultCoordsLat = 35.68952;
const defaultCoordsLng = 139.69203;
const defaultZoom = 13;

const address = document.querySelector('#address');
const submitButton = document.querySelector('.ad-form__submit');

const map = L.map('map-canvas');

const onMapLoad = () => {
  toEnableFilters();
  mainPinAddress();
  onResetForm();
};

const setUpMap = () => {
  map.on('load',onMapLoad)
  .setView({
    lat: defaultCoordsLat,
    lng: defaultCoordsLng,
  }, defaultZoom);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  renderCards(data);
};

const markerGroup = L.layerGroup().addTo(map);

const initMainPinMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: defaultCoordsLat,
      lng: defaultCoordsLng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  return mainPinMarker;
};

const mainPinMarker = initMainPinMarker();

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const newCoordsLat = (evt.target.getLatLng().lat).toFixed(LOCATION_DIGITS_AMOUNT);
  const newCoordsLng = (evt.target.getLatLng().lng).toFixed(LOCATION_DIGITS_AMOUNT);
  address.setAttribute('placeholder', `${newCoordsLat}, ${newCoordsLng}`);
  address.setAttribute('value', `${newCoordsLat}, ${newCoordsLng}`);
});


const createMarker = (point) => {
  const {lat, lng} = point.location;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createCard(point),
      {
        keepInView: true,
      },
    );
};

const renderCards = (data) => {
  data.forEach((point) => {
    createMarker(point);
  })
};

const mainPinAddress = () => {
  mainPinMarker.setLatLng({
    lat: defaultCoordsLat,
    lng: defaultCoordsLng,
  });

  map.setView({
    lat: defaultCoordsLat,
    lng: defaultCoordsLng,
  }, 13);

  address.setAttribute('placeholder', `${defaultCoordsLat}, ${defaultCoordsLng}`);
  address.setAttribute('value', `${defaultCoordsLat}, ${defaultCoordsLng}`);
};

submitButton.addEventListener('click', () => {
  mainPinAddress();
});
resetButton.addEventListener('click', () => {
  mainPinAddress();
});

const removeMarkers = () => {
  markerGroup.forEach((marker) => {
    marker.remove();
  })
};

export {renderCards, setUpMap, removeMarkers, mainPinAddress};

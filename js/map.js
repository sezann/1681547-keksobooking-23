import {createCard} from './popup.js';
import {toEnableFilters} from './filter.js';
import {toEnableForm, onResetForm, addressInput, LOCATION_DIGITS_AMOUNT} from './form.js';

const defaultCoordsLat = 35.68952;
const defaultCoordsLng = 139.69203;
const defaultZoom = 13;

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const onMapLoad = () => {
  toEnableForm();
  toEnableFilters();
  addressInput(defaultCoordsLat, defaultCoordsLng);
  onResetForm();
};

const renderCards = (data) => {
  data.forEach((point) => {
    createMarker(point);
  })
};

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

const setUpMap = (data) => {
  map
  .on('load',onMapLoad)
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

const setUpMainPinMarker = () => {
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

const mainPinMarker = setUpMainPinMarker();

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const lat = (evt.target.getLatLng().lat).toFixed(LOCATION_DIGITS_AMOUNT);
  const lng = (evt.target.getLatLng().lng).toFixed(LOCATION_DIGITS_AMOUNT);
  addressInput(lat, lng);
});

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng(L.latLng(defaultCoordsLat, defaultCoordsLng));
};

const removeMarkers = () => {
  markerGroup.forEach((marker) => {
    marker.remove();
  })
};

export {renderCards, setUpMap, removeMarkers, resetMainPinMarker, defaultCoordsLat, defaultCoordsLng};

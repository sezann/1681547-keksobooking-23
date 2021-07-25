import {createCard} from './popup.js';
import {fillAddressInput, LOCATION_DIGITS_AMOUNT} from './form.js';

const SIMILAR_ADS_COUNT = 10;
const MAIN_POINT_WIDTH = 52;
const POINT_WIDTH = 40;

const defaultCoordsLat = 35.68952;
const defaultCoordsLng = 139.69203;
const defaultZoom = 13;

const map = L.map('map-canvas');
const markers = [];

const moveMainPin = (evt) => {
  const lat = evt.target.getLatLng().lat;
  const lng = evt.target.getLatLng().lng;
  fillAddressInput(lat, lng);
};

const createMarker = (point) => {
  const lat = (point.location.lat).toFixed(LOCATION_DIGITS_AMOUNT);
  const lng = (point.location.lng).toFixed(LOCATION_DIGITS_AMOUNT);

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [POINT_WIDTH, POINT_WIDTH],
    iconAnchor: [POINT_WIDTH / 2, POINT_WIDTH],
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
    .addTo(map)
    .bindPopup(
      createCard(point),
      {
        keepInView: true,
      },
    );

  markers.push(marker);
};

const renderCards = (data) => {
  data.slice(0, SIMILAR_ADS_COUNT).forEach((point) => {
    createMarker(point);
  });
};

const removeMarkers = () => {
  markers.forEach((marker) => {
    marker.remove();
  });
};

const initMap = (cb) => {
  map
    .on('load', cb)
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
};

const initMainPinMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [MAIN_POINT_WIDTH, MAIN_POINT_WIDTH],
    iconAnchor: [MAIN_POINT_WIDTH / 2, MAIN_POINT_WIDTH],
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

const mainMarker = initMainPinMarker();

mainMarker.addTo(map);
mainMarker.on('move', moveMainPin);

const resetMainPinMarker = () => {
  mainMarker.setLatLng(L.latLng(defaultCoordsLat, defaultCoordsLng));
};

export {initMap, removeMarkers, resetMainPinMarker, renderCards, defaultCoordsLat, defaultCoordsLng};

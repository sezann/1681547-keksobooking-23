import {createCard} from './popup.js';
import {toEnableFilters} from './filter.js';
import {toEnableForm, onResetForm, fillAddressInput} from './form.js';

const defaultCoordsLat = 35.68952;
const defaultCoordsLng = 139.69203;
const defaultZoom = 13;
const SIMILAR_ADS_COUNT = 10;

const map = L.map('map-canvas');
const markers = [];

const mainPinMove = (evt) => {
  const lat = evt.target.getLatLng().lat;
  const lng = evt.target.getLatLng().lng;
  fillAddressInput(lat, lng);
};

const renderCards = (data) => {
  data.slice(0, SIMILAR_ADS_COUNT).forEach(({author, offer, location}) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const lat = location.lat;
    const lng = location.lng;
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
        createCard({author, offer}),
        {
          keepInView: true,
        },
      );
    markers.push(marker);
  });
};

const removeMarkers = () => {
  markers.forEach((marker) => {
    marker.remove();
  });
};

const onMapLoad = () => {
  toEnableForm();
  toEnableFilters();
  fillAddressInput(defaultCoordsLat, defaultCoordsLng);
  onResetForm();
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
mainPinMarker.on('move', mainPinMove);

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng(L.latLng(defaultCoordsLat, defaultCoordsLng));
};

export {renderCards, setUpMap, removeMarkers, resetMainPinMarker, defaultCoordsLat, defaultCoordsLng};

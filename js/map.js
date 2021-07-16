import {createCard} from './popup.js';
import {toActivate} from './loading.js';

const LOCATION_DIGITS_AMOUNT = 5;
const defaultCoordsLat = 35.68952;
const defaultCoordsLng = 139.69203;

const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = document.querySelector('.ad-form__submit');

const map = L.map('map-canvas')
  .on('load', () => {
    toActivate();
  })
  .setView({
    lat: defaultCoordsLat,
    lng: defaultCoordsLng,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);


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

mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

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

const mainPinDefault = () => {
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

mainPinMarker.on('moveend', (evt) => {
  const newCoordsLat = (evt.target.getLatLng().lat).toFixed(LOCATION_DIGITS_AMOUNT);
  const newCoordsLng = (evt.target.getLatLng().lng).toFixed(LOCATION_DIGITS_AMOUNT);
  address.setAttribute('placeholder', `${newCoordsLat}, ${newCoordsLng}`);
  address.setAttribute('value', `${newCoordsLat}, ${newCoordsLng}`);
});

submitButton.addEventListener('click', () => {
  mainPinDefault();
});

resetButton.addEventListener('click', () => {
  mainPinDefault();
});

mainPinDefault();

export {createMarker, mainPinDefault};

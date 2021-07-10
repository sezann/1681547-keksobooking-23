import {createCard, renderFeatures, renderPhotos} from './popup.js';

const LOCATION_DIGITS_AMOUNT = 5;
const defaultCoordsLat = 35.68952;
const defaultCoordsLng = 139.69203;

const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
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

  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: defaultCoordsLat,
      lng: defaultCoordsLng,
    });

    map.setView({
      lat: defaultCoordsLat,
      lng: defaultCoordsLng,
    }, 13);

    address.setAttribute('placeholder', `${defaultCoordsLat}, ${defaultCoordsLng}`);
  });

  const getMainPinCoords = () => {
    address.setAttribute('placeholder', `${defaultCoordsLat}, ${defaultCoordsLng}`);
    address.setAttribute('value', `${defaultCoordsLat}, ${defaultCoordsLng}`);

    mainPinMarker.on('moveend', (evt) => {
      const newCoordLat = (evt.target.getLatLng().lat).toFixed(LOCATION_DIGITS_AMOUNT);
      const newCoordLng = (evt.target.getLatLng().lng).toFixed(LOCATION_DIGITS_AMOUNT);
      address.setAttribute('placeholder', `${newCoordLat}, ${newCoordLng}`);
      address.setAttribute('value', `${newCoordLat}, ${newCoordLng}`);
    });
  };

  getMainPinCoords();

  export {createMarker, getMainPinCoords};

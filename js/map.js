import {CREATE_AD} from './data.js';
import {createCard, renderCard} from './popup.js'

const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const data = CREATE_AD(8);


const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 35.689,
    lng: 139.692,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.688,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
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

  data.forEach((point) => {
    createMarker(point)
  });


  mainPinMarker.on('moveend', (evt) => {
    address.setAttribute('placeholder', evt.target.getLatLng());
  });

  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: 35.689,
      lng: 139.692,
    });

    map.setView({
      lat: 35.689,
      lng: 139.692,
    }, 13);

    address.setAttribute('placeholder', '35.68952, 139.69203');
  });

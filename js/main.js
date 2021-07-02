import {CREATE_AD} from './data.js';
import {renderCard} from './popup.js'
import './form.js';

const data = CREATE_AD(10);
const map = document.querySelector('.map__canvas');

renderCard(map, data[2]);

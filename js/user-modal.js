export {isEscEvent} from './utils.js';

const errorButton = document.querySelector('.error__button');
const successModal = document.createElement('div');
const errorModal = document.createElement('div');

successModal.classList.add('hidden');
errorModal.classList.add('hidden');

const successCard = () => {
  const successTemplate = document.querySelector('#success');
  const successTemplateElement = successTemplate.content.querySelector('.success');
  const successMessage = successTemplateElement.cloneNode(true);
  successMessage.querySelector('.success__message').textContent = `Ваше объявление\n` + `успешно размещено!`;
  successModal.appendChild(successMessage);

  document.body.append(successModal);
  openSuccessCard();
};

const errorCard = () => {
  const errorTemplate = document.querySelector('#error');
  const errorTemplateElement = errorTemplate.content.querySelector('.error');
  const errorMessage = errorTemplateElement.cloneNode(true);
  errorMessage.querySelector('.error__message').textContent = `Ошибка размещения объявления`;
  errorMessage.querySelector('.error__button').textContent = `Попробовать снова`;
  errorModal.appendChild(errorMessage);

  document.body.append(errorModal);
};

function openSuccessCard () {
  successModal.classList.remove('hidden');
  document.addEventListener('keydown', onCloseSuccessCard);
};

function closeSuccessCard () {
  successModal.classList.add('hidden');
  document.removeEventListener('keydown', onCloseSuccessCard);
};

function openErrorCard () {
  errorModal.classList.remove('hidden');
  document.addEventListener('keydown', onCloseErrorCard);
};

function closeErrorCard () {
  errorModal.classList.add('hidden');
  document.removeEventListener('keydown', onCloseErrorCard);
};

const onCloseSuccessCard = (evt) => {
  if (!successModal.contains(evt.target) || isEscEvent) {
    evt.preventDefault();
    closeSuccessCard();
  }
};

const onCloseErrorCard = (evt) => {
  if (!errorModal.contains(evt.target) || isEscEvent || errorButton(evt.target)) {
    evt.preventDefault();
    closeErrorCard();
  }
};

export {successCard, errorCard, openSuccessCard, openErrorCard};

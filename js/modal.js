export {isEscEvent} from './utils.js';

const errorButton = document.querySelector('.error__button');

const successCard = () => {
  const successModal = document.createElement('div');

  const successTemplate = document.querySelector('#success');
  const successTemplateElement = successTemplate.content.querySelector('.success');
  const successMessage = successTemplateElement.cloneNode(true);
  successMessage.querySelector('.success__message').textContent = `Ваше объявление\n` + `успешно размещено!`;
  successModal.appendChild(successMessage);

  document.body.append(successModal);
};

const errorCard = () => {
  const errorModal = document.createElement('div');

  const errorTemplate = document.querySelector('#error');
  const errorTemplateElement = errorTemplate.content.querySelector('.error');
  const errorMessage = errorTemplateElement.cloneNode(true);
  errorMessage.querySelector('.error__message').textContent = `Ошибка размещения объявления`;
  errorMessage.querySelector('.error__button').textContent = `Попробовать снова`;
  errorModal.appendChild(errorMessage);

  document.body.append(errorModal);
};

document.addEventListener('keydown', (evt) => {
  if (!successCard.contains(evt.target) || isEscEvent) {
    evt.preventDefault();
    successCard.style.display = 'none';
  }
});

document.addEventListener('keydown', (evt) => {
  if (!errorCard.contains(evt.target) || isEscEvent || errorButton(evt.target)) {
    evt.preventDefault();
    errorCard.style.display = 'none';
  }
});

export {successCard, errorCard};

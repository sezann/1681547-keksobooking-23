import { isEnterEvent, isEscEvent } from './utils.js';

const MODAL_ZINDEX = '10000';
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');

successMessage.classList.add('hidden');
errorMessage.classList.add('hidden');
document.body.append(successMessage);
document.body.append(errorMessage);

const onPopupKeydown = (modal) => {
  return (evt) => {
    if (isEscEvent(evt) || isEnterEvent(evt)) {
      evt.preventDefault();
      document.removeEventListener('keydown', onPopupKeydown(modal));
      modal.removeEventListener('click', onClick(modal));
      closeModal(modal);
    }
    if (modal === errorMessage) {
      errorButton.removeEventListener('click', onClick(errorMessage));
    }
  }
};

const onClick = (modal) => {
  return (evt) => {
    evt.preventDefault();
    closeModal(modal);
  }
};

const closeModal = (modal) => {
  modal.classList.add('hidden');
};

const showModal = (modal) => {
  modal.classList.remove('hidden');
  modal.style.zIndex = MODAL_ZINDEX;
  document.addEventListener('keydown', onPopupKeydown(modal));
  modal.addEventListener('click', onClick(modal));
}

const showSuccessCard = () => {
  showModal(successMessage);
};

const showErrorCard = () => {
  showModal(errorMessage);
  errorButton.addEventListener('click', onClick(errorMessage));
};

export {closeModal, showSuccessCard, showErrorCard};

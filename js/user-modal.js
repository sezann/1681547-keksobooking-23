export {isEscEvent} from './utils.js';

const successCard = () => {
  const successTemplate = document.querySelector('#success');
  const successTemplateElement = successTemplate.content.querySelector('.success');
  const successMessage = successTemplateElement.cloneNode(true)

  const onSuccessMessageClick = () => {
    successMessage.remove();
    successMessage.removeEventListener('click', onSuccessMessageClick);
  };

  successMessage.addEventListener('click', onSuccessMessageClick);
  document.body.append(successMessage);
};


const errorCard = () => {
  const errorTemplate = document.querySelector('#error');
  const errorTemplateElement = errorTemplate.content.querySelector('.error');
  const errorMessage = errorTemplateElement.cloneNode(true);

  const onErrorMessageClick = () => {
    errorMessage.remove();
    errorMessage.removeEventListener('click', onErrorMessageClick);
  };

  errorMessage.addEventListener('click', onErrorMessageClick);
  document.body.append(errorMessage);
};

export {successCard, errorCard};

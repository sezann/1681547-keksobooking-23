const successCard = () => {
  const successTemplate = document.querySelector('#success');
  const successTemplateElement = successTemplate.content.querySelector('.success');
  const successMessage = successTemplateElement.cloneNode(true);

  const onSuccessClick = () => {
    successMessage.remove();
    successMessage.removeEventListener('click', onSuccessClick);
  };

  successMessage.addEventListener('click', onSuccessClick);
  document.body.append(successMessage);
};

const errorCard = () => {
  const errorTemplate = document.querySelector('#error');
  const errorTemplateElement = errorTemplate.content.querySelector('.error');
  const errorMessage = errorTemplateElement.cloneNode(true);

  const onErrorClick = () => {
    errorMessage.remove();
    errorMessage.removeEventListener('click', onErrorClick);
  };

  errorMessage.addEventListener('çlick', onErrorClick);
  document.body.append(errorMessage);
};

export {successCard, errorCard};

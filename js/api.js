const Url = {
  SERVER: 'https://23.javascript.pages.academy/keksobooking',
  DATA: 'https://23.javascript.pages.academy/keksobooking/data',
};

const getData = (onSuccess, onFail) => {
  fetch(Url.DATA)
    .then((response => {
      if(response.ok) {
        return response.json();
      }
      onFail(`Не удалось загрузить объявления`);
    }))
    .then(onSuccess)
    .catch(onFail);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
     Url.SERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      onFail();
    })
    .catch (onFail);
};

export {getData, sendData};

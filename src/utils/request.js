const url = "https://norma.nomoreparties.space/api/";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
  if (res?.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${JSON.stringify(res)}`);
};

const request = (path, options) => {
  return fetch(`${url}${path}`, options)
    .then(checkResponse)
    .then(checkSuccess)
};

export default request;

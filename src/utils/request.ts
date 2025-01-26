import { refreshTokenRequest } from "./api";
import { TResponse } from "./types";

const url = "https://norma.nomoreparties.space/api/";

const checkResponse = (res: Response) => {
  if (res.ok || res.status === 403) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res:TResponse) => {
  if (res?.success) {
    return res;
  }
  return Promise.reject(res);
};

const request = (path: string, options: RequestInit) => {
  return fetch(`${url}${path}`, options)
    .then(checkResponse)
    .then(checkSuccess)
    .catch((err) => {
      if (err.message === "jwt expired") {
        refreshTokenRequest().then((res) => {
          if (!res?.success) {
            return Promise.reject(res);
          }
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          const headers = new Headers(options.headers);
          headers.set("Authorization", res.accessToken);
          options.headers = headers;
          request(path, options);
        });
      }
    });
};

export default request;

import request from "./request";

export const registerRequest = (email, password, name) =>
    request("auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password, name }),
    });

export const forgotPasswordRequest = (email) =>
  request("password-reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email }),
  });

export const resetPasswordRequest = (password, token) =>
  request("password-reset/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ password, token }),
  });

  export const authRequest = (password, token) =>
    request("password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ password, token }),
    });

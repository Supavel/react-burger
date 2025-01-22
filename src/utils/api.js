import request from "./request";

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

export const refreshTokenRequest = () =>
  request("auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  });

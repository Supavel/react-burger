import request from "./request";
import { TForgotPassword, TResetPassword } from "./types";

export const forgotPasswordRequest = ({email}:TForgotPassword) =>
  request("password-reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email }),
  });

export const resetPasswordRequest = ({password, token}:TResetPassword) =>
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

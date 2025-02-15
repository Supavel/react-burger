import request from "../../utils/request";
import { TRegister, TLogin, TProfileSettings, TUser, AppDispatch } from "../../utils/types";

type TAuthRegisterRequestAction = {
  readonly type: typeof REGISTER_REQUEST;
};
type TAuthRegisterSuccessAction = {
  readonly type: typeof REGISTER_SUCCESS;
};
type TAuthRegisterFailedAction = {
  readonly type: typeof REGISTER_FAILED;
};
type TAuthLoginRequestAction = {
  readonly type: typeof LOGIN_REQUEST;
};
type TAuthLoginSuccessAction = {
  readonly type: typeof LOGIN_SUCCESS;
};
type TAuthLoginFailedAction = {
  readonly type: typeof LOGIN_FAILED;
};
type TAuthLogoutRequestAction = {
  readonly type: typeof LOGOUT_REQUEST;
};
type TAuthLogoutSuccessAction = {
  readonly type: typeof LOGOUT_SUCCESS;
};
type TAuthLogoutFailedAction = {
  readonly type: typeof LOGOUT_FAILED;
};
type TAuthGetUserRequestAction = {
  readonly type: typeof GET_USER_REQUEST;
};
type TAuthGetUserSuccessAction = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly userData: TUser;
};
type TAuthGetUserFailedAction = {
  readonly type: typeof GET_USER_FAILED;
};
type TAuthUpdateUserRequestAction = {
  readonly type: typeof UPDATE_USER_REQUEST;
};
type TAuthUpdateUserSuccessAction = {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly userData: TUser;
};
type TAuthUpdateUserFailedAction = {
  readonly type: typeof UPDATE_USER_FAILED;
};

export type TAuthActions =
  | TAuthRegisterRequestAction
  | TAuthRegisterSuccessAction
  | TAuthRegisterFailedAction
  | TAuthLoginRequestAction
  | TAuthLoginSuccessAction
  | TAuthLoginFailedAction
  | TAuthLogoutRequestAction
  | TAuthLogoutSuccessAction
  | TAuthLogoutFailedAction
  | TAuthGetUserRequestAction
  | TAuthGetUserSuccessAction
  | TAuthGetUserFailedAction
  | TAuthUpdateUserRequestAction
  | TAuthUpdateUserSuccessAction
  | TAuthUpdateUserFailedAction;

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const register = ({ email, password, name }: TRegister) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    request("auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => {
        localStorage.setItem("accessToken", res?.accessToken || "");
        localStorage.setItem("refreshToken", res?.refreshToken || "");
        dispatch({ type: REGISTER_SUCCESS });
      })
      .catch((e) =>
        dispatch({
          type: REGISTER_FAILED,
        })
      );
  };
};

export const login = ({ email, password }: TLogin) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    request("auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        localStorage.setItem("accessToken", res?.accessToken || "");
        localStorage.setItem("refreshToken", res?.refreshToken || "");
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((e) =>
        dispatch({
          type: LOGIN_FAILED,
        })
      );
  };
};

export const logout = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    request("auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    })
      .then((res) => {
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((e) =>
        dispatch({
          type: LOGOUT_FAILED,
        })
      )
      .finally(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      });
  };
};
export const authCheckUser = () => (dispatch: AppDispatch) => {
  if (localStorage.getItem("accessToken")) {
    dispatch(getUserData());
  }
};
export const getUserData = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    request("auth/user", {
      headers: { Authorization: localStorage?.getItem("accessToken") || "" },
    })
      .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, userData: res?.user });
      })
      .catch((e) =>
        dispatch({
          type: GET_USER_FAILED,
        })
      );
  };
};

export const updateUserData = ({ email, password, name }: TProfileSettings) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    request("auth/user", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("accessToken") || "",
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => {
        dispatch({ type: UPDATE_USER_SUCCESS, userData: res?.user });
      })
      .catch((e) =>
        dispatch({
          type: UPDATE_USER_FAILED,
        })
      );
  };
};

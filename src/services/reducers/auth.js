import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from "../actions/auth";

const initialState = {
  requestExecute: false,
  registerRequestFailed: false,
  loginRequestFailed: false,
  logoutRequestFailed: false,
  getUserRequestFailed: false,
  updateUserrequestFailed: false,
  isUserLogged: false,
  userData: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        requestExecute: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequestFailed: false,
        requestExecute: false,
        isUserLogged: true,
      };
    }
    case REGISTER_FAILED: {
      return { ...state, registerRequestFailed: true, requestExecute: false };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        requestExecute: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequestFailed: false,
        requestExecute: false,
        isUserLogged: true,
      };
    }
    case LOGIN_FAILED: {
      return { ...state, loginRequestFailed: true, requestExecute: false };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        requestExecute: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequestFailed: false,
        requestExecute: false,
        isUserLogged: false,
      };
    }
    case LOGOUT_FAILED: {
      return { ...state, logoutRequestFailed: true, requestExecute: false };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        requestExecute: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        isUserLogged: true,
        getUserRequestFailed: false,
        requestExecute: false,
        userData: action.userData,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequestFailed: true,
        requestExecute: false,
        userData: null,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        requestExecute: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserrequestFailed: false,
        requestExecute: false,
        userData: action.userData,
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserrequestFailed: true,
        requestExecute: false,
        userData: null,
      };
    }
    default: {
      return state;
    }
  }
};

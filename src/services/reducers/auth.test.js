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
  UPDATE_USER_FAILED
} from "../actions/auth";
import { initialState, authReducer } from "./auth";

const userData = { email: "name@mail.ru", name: "name" };

describe("burgerConstructorReducer tests", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST action", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_REQUEST,
      })
    ).toEqual({ ...initialState, requestExecute: true });
  });
  it("should handle REGISTER_SUCCESS action", () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      registerRequestFailed: false,
      requestExecute: false,
      isUserLogged: true,
    });
  });
  it("should handle REGISTER_FAILED action", () => {
    expect(authReducer(initialState, { type: REGISTER_FAILED })).toEqual({
      ...initialState,
      registerRequestFailed: true,
      requestExecute: false,
    });
  });

  it("should handle LOGIN_REQUEST action", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_REQUEST,
      })
    ).toEqual({ ...initialState, requestExecute: true });
  });
  it("should handle LOGIN_SUCCESS action", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      loginRequestFailed: false,
      requestExecute: false,
      isUserLogged: true,
    });
  });
  it("should handle LOGIN_FAILED action", () => {
    expect(authReducer(initialState, { type: LOGIN_FAILED })).toEqual({
      ...initialState,
      loginRequestFailed: true,
      requestExecute: false,
    });
  });

  it("should handle LOGOUT_REQUEST action", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_REQUEST,
      })
    ).toEqual({ ...initialState, requestExecute: true });
  });
  it("should handle LOGOUT_SUCCESS action", () => {
    expect(
      authReducer(initialState, {
        type: LOGOUT_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      logoutRequestFailed: false,
      requestExecute: false,
      isUserLogged: false,
    });
  });
  it("should handle LOGOUT_FAILED action", () => {
    expect(authReducer(initialState, { type: LOGOUT_FAILED })).toEqual({
      ...initialState,
      logoutRequestFailed: true,
      requestExecute: false,
    });
  });

  it("should handle GET_USER_REQUEST action", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_REQUEST,
      })
    ).toEqual({ ...initialState, requestExecute: true });
  });
  it("should handle GET_USER_SUCCESS action", () => {
    expect(
      authReducer(initialState, {
        type: GET_USER_SUCCESS,
        userData: userData,
      })
    ).toEqual({
      ...initialState,
      isUserLogged: true,
      getUserRequestFailed: false,
      requestExecute: false,
      userData: userData,
    });
  });
  it("should handle GET_USER_FAILED action", () => {
    expect(authReducer(initialState, { type: GET_USER_FAILED })).toEqual({
      ...initialState,
      getUserRequestFailed: true,
      requestExecute: false,
      userData: null,
    });
  });

  it("should handle UPDATE_USER_REQUEST action", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_REQUEST,
      })
    ).toEqual({ ...initialState, requestExecute: true });
  });
  it("should handle UPDATE_USER_SUCCESS action", () => {
    expect(
      authReducer(initialState, {
        type: UPDATE_USER_SUCCESS,
        userData: userData,
      })
    ).toEqual({
      ...initialState,
      updateUserrequestFailed: false,
      requestExecute: false,
      userData: userData,
    });
  });
  it("should handle UPDATE_USER_FAILED action", () => {
    expect(authReducer(initialState, { type: UPDATE_USER_FAILED })).toEqual({
      ...initialState,
      updateUserrequestFailed: true,
      requestExecute: false,
      userData: null,
    });
  });
});

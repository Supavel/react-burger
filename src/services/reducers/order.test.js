import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../actions/order";
import { initialState, getOrderReducer } from "./order";

const order = {
  _id: "67b631c3133acd001be52428",
  ingredients: [
    "643d69a5c3f7b9001cfa0943",
    "643d69a5c3f7b9001cfa0942",
    "643d69a5c3f7b9001cfa093d",
    "643d69a5c3f7b9001cfa093d",
  ],
  owner: "67b4dd3d133acd001be51fcf",
  status: "done",
  name: "Space флюоресцентный spicy бургер",
  createdAt: "2025-02-19T19:32:19.055Z",
  updatedAt: "2025-02-19T19:32:19.727Z",
  number: 68882,
  __v: 0,
};

describe("getOrderReducer tests", () => {
  it("should return the initial state", () => {
    expect(getOrderReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_ORDER_REQUEST action", () => {
    expect(getOrderReducer(initialState, { type: GET_ORDER_REQUEST })).toEqual({
      ...initialState,
      orderRequest: true,
    });
  });
  it("should handle GET_ORDER_SUCCESS action", () => {
    expect(
      getOrderReducer(initialState, {
        type: GET_ORDER_SUCCESS,
        order: order,
      })
    ).toEqual({
      ...initialState,
      orderFailed: false,
      order: order,
      orderRequest: false,
    });
  });
  it("should handle GET_ORDER_FAILED action", () => {
    expect(getOrderReducer(initialState, { type: GET_ORDER_FAILED })).toEqual({
      ...initialState,
      orderFailed: true,
      orderRequest: false,
    });
  });
});

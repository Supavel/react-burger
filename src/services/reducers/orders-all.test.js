import {
  WS_ORDERS_ALL_SUCCESS,
  WS_ORDERS_ALL_ERROR,
  WS_ORDERS_ALL_CLOSED,
  WS_ORDERS_ALL_MESSAGE,
} from "../actions/orders-all";
import { initialState, wsOrdersAllReducer } from "./orders-all";

const message = {
  success: true,
  orders: [
    {
      _id: "67b6dde7133acd001be52577",
      ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
      status: "done",
      name: "Флюоресцентный бургер",
      createdAt: "2025-02-20T07:46:47.850Z",
      updatedAt: "2025-02-20T07:46:48.487Z",
      number: 68921,
    },
    {
      _id: "67b6d693133acd001be5255f",
      ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
      status: "done",
      name: "Флюоресцентный бургер",
      createdAt: "2025-02-20T07:15:31.817Z",
      updatedAt: "2025-02-20T07:15:32.455Z",
      number: 68920,
    },
  ],
  total: 68547,
  totalToday: 88,
};

describe("wsOrdersAllReducer tests", () => {
  it("should return the initial state", () => {
    expect(wsOrdersAllReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle WS_ORDERS_ALL_SUCCESS action", () => {
    expect(
      wsOrdersAllReducer(initialState, {
        type: WS_ORDERS_ALL_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      error: "",
      wsConnected: true,
    });
  });
  it("should handle WS_ORDERS_ALL_ERROR action", () => {
    expect(
      wsOrdersAllReducer(initialState, {
        type: WS_ORDERS_ALL_ERROR,
        error: "Error",
      })
    ).toEqual({
      ...initialState,
      error: "Error",
    });
  });
  it("should handle WS_ORDERS_ALL_CLOSED action", () => {
    expect(
      wsOrdersAllReducer(initialState, { type: WS_ORDERS_ALL_CLOSED })
    ).toEqual({
      ...initialState,
      error: "",
      wsConnected: false,
    });
  });
  it("should handle WS_ORDERS_ALL_MESSAGE action", () => {
    expect(
      wsOrdersAllReducer(initialState, {
        type: WS_ORDERS_ALL_MESSAGE,
        message: message,
      })
    ).toEqual({
      ...initialState,
      error: "",
      message: message,
    });
  });
});

import {
  WS_ORDERS_PERSONAL_SUCCESS,
  WS_ORDERS_PERSONAL_ERROR,
  WS_ORDERS_PERSONAL_CLOSED,
  WS_ORDERS_PERSONAL_MESSAGE,
} from "../actions/orders-personal";
import { initialState, wsOrdersPersonalReducer } from "./orders-personal";

const message = {
  success: true,
  orders: [
    {
      _id: "67894b0b133acd001be4ab1a",
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa093c",
      ],
      status: "done",
      name: "Краторный био-марсианский люминесцентный бургер",
      createdAt: "2025-01-16T18:08:11.916Z",
      updatedAt: "2025-01-16T18:08:13.188Z",
      number: 65750,
    },
    {
      _id: "67894b0c133acd001be4ab1b",
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa093c",
      ],
      status: "done",
      name: "Краторный био-марсианский люминесцентный бургер",
      createdAt: "2025-01-16T18:08:12.046Z",
      updatedAt: "2025-01-16T18:08:13.389Z",
      number: 65751,
    }
    
  ],
  total: 68547,
  totalToday: 88,
};
describe("wsOrdersAllReducer tests", () => {
  it("should return the initial state", () => {
    expect(wsOrdersPersonalReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle WS_ORDERS_PERSONAL_SUCCESS action", () => {
    expect(
      wsOrdersPersonalReducer(initialState, {
        type: WS_ORDERS_PERSONAL_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      error: "",
      wsConnected: true,
    });
  });
  it("should handle WS_ORDERS_PERSONAL_ERROR action", () => {
    expect(
      wsOrdersPersonalReducer(initialState, {
        type: WS_ORDERS_PERSONAL_ERROR,
        error: "Error",
      })
    ).toEqual({
      ...initialState,
      error: "Error",
    });
  });
  it("should handle WS_ORDERS_PERSONAL_CLOSED action", () => {
    expect(
      wsOrdersPersonalReducer(initialState, { type: WS_ORDERS_PERSONAL_CLOSED })
    ).toEqual({
      ...initialState,
      error: "",
      wsConnected: false,
    });
  });
  it("should handle WS_ORDERS_PERSONAL_MESSAGE action", () => {
    expect(
      wsOrdersPersonalReducer(initialState, {
        type: WS_ORDERS_PERSONAL_MESSAGE,
        message: message,
      })
    ).toEqual({
      ...initialState,
      error: "",
      message: message,
    });
  });
});

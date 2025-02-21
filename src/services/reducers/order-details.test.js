import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  CLOSE_ORDER,
} from "../actions/order-details";
import { initialState, orderDetailsReducer } from "./order-details";

describe("getOrderReducer tests", () => {
  it("should return the initial state", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle POST_ORDER_REQUEST action", () => {
    expect(
      orderDetailsReducer(initialState, { type: POST_ORDER_REQUEST })
    ).toEqual({
      ...initialState,
      orderRequest: true,
    });
  });
  it("should handle POST_ORDER_SUCCESS action", () => {
    expect(
      orderDetailsReducer(initialState, {
        type: POST_ORDER_SUCCESS,
        order: "123",
      })
    ).toEqual({
      ...initialState,
      orderFailed: false,
      order: "123",
      orderRequest: false,
    });
  });
  it("should handle POST_ORDER_FAILED action", () => {
    expect(
      orderDetailsReducer(initialState, { type: POST_ORDER_FAILED })
    ).toEqual({
      ...initialState,
      orderFailed: true,
      orderRequest: false,
    });
  });
  it("should handle CLOSE_ORDER action", () => {
    const state = { ...initialState, order: "123" };

    expect(orderDetailsReducer(state, { type: CLOSE_ORDER })).toEqual({
      ...initialState,
    });
  });
});

import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  CLOSE_ORDER
  } from "../actions/order-details";
  
  const initialState = {
    order: "",
    orderRequest: false,
    orderFailed: false,
  };
  
  export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_ORDER_REQUEST: {
        return {
          ...state,
          orderRequest: true
        };
      }
      case POST_ORDER_SUCCESS: {
        return { ...state, orderFailed: false, order: action.order, orderRequest: false };
      }
      case POST_ORDER_FAILED: {
        return { ...state, orderFailed: true, orderRequest: false };
      }
      case CLOSE_ORDER: {
        return initialState;
      }
      default: {
        return state;
      }
    }
  };
  
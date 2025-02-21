import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  TGetOrderActions,
} from "../actions/order";

import { TOrder } from "../../utils/types";

type TGetOrderState = {
  order: TOrder | null;
  orderRequest: boolean;
  orderFailed: boolean;
};

export const initialState: TGetOrderState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const getOrderReducer = (
  state = initialState,
  action: TGetOrderActions
) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }
    default: {
      return state;
    }
  }
};

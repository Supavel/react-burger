import {
  WS_ORDERS_ALL_SUCCESS,
  WS_ORDERS_ALL_ERROR,
  WS_ORDERS_ALL_CLOSED,
  WS_ORDERS_ALL_MESSAGE,
  TOrdersAllActions,
} from "../actions/orders-all";
import { TOrdersList } from "../../utils/types";

type TOrdersAllState = {
  wsConnected: boolean;
  message: TOrdersList | null;
  error: string;
};

export const initialState: TOrdersAllState = {
  wsConnected: false,
  message: null,
  error: "",
};

export const wsOrdersAllReducer = (
  state = initialState,
  action: TOrdersAllActions
) => {
  switch (action.type) {
    case WS_ORDERS_ALL_SUCCESS:
      return { ...state, error: "", wsConnected: true };
    case WS_ORDERS_ALL_ERROR:
      return { ...state, error: action.error };
    case WS_ORDERS_ALL_CLOSED:
      return { ...state, error: "", wsConnected: false };
    case WS_ORDERS_ALL_MESSAGE:
      return { ...state, error: "", message: action.message };
    default:
      return state;
  }
};

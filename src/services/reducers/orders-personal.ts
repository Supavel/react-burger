import {
  WS_ORDERS_PERSONAL_SUCCESS,
  WS_ORDERS_PERSONAL_ERROR,
  WS_ORDERS_PERSONAL_CLOSED,
  WS_ORDERS_PERSONAL_MESSAGE,
  TOrdersPersonalActions,
} from "../actions/orders-personal";
import { TOrdersList } from "../../utils/types";

type TOrdersPersonalState = {
  wsConnected: boolean;
  message: TOrdersList | null;
  error: string;
};

export const initialState: TOrdersPersonalState = {
  wsConnected: false,
  message: null,
  error: "",
};

export const wsOrdersPersonalReducer = (
  state = initialState,
  action: TOrdersPersonalActions
) => {
  switch (action.type) {
    case WS_ORDERS_PERSONAL_SUCCESS:
      return { ...state, error: "", wsConnected: true };
    case WS_ORDERS_PERSONAL_ERROR:
      return { ...state, error: action.error };
    case WS_ORDERS_PERSONAL_CLOSED:
      return { ...state, error: "", wsConnected: false };
    case WS_ORDERS_PERSONAL_MESSAGE:
      return { ...state, error: "", message: action.message };
    default:
      return state;
  }
};

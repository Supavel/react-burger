import { TOrdersList } from "../../utils/types";

export const WS_ORDERS_ALL_START = "WS_ORDERS_ALL_START";
export const WS_ORDERS_ALL_SUCCESS = "WS_ORDERS_ALL_SUCCESS";
export const WS_ORDERS_ALL_ERROR = "WS_ORDERS_ALL_ERROR";
export const WS_ORDERS_ALL_CLOSED = "WS_ORDERS_ALL_CLOSED";
export const WS_ORDERS_ALL_MESSAGE = "WS_ORDERS_ALL_MESSAGE";

type TOrdersAllStartAction = {
  readonly type: typeof WS_ORDERS_ALL_START;
};
type TOrdersAllSuccessAction = {
  readonly type: typeof WS_ORDERS_ALL_SUCCESS;
};
type TOrdersAllErrorAction = {
  readonly type: typeof WS_ORDERS_ALL_ERROR;
  readonly error: Event;
};
type TOrdersAllClosedAction = {
  readonly type: typeof WS_ORDERS_ALL_CLOSED;
};
type TOrdersAllMessageAction = {
  readonly type: typeof WS_ORDERS_ALL_MESSAGE;
  readonly message: TOrdersList;
};

export type TOrdersAllActions =
  | TOrdersAllStartAction
  | TOrdersAllSuccessAction
  | TOrdersAllErrorAction
  | TOrdersAllClosedAction
  | TOrdersAllMessageAction;

export type TWSOrdersAllActions = {
  wsInit: typeof WS_ORDERS_ALL_START;
  onOpen: typeof WS_ORDERS_ALL_SUCCESS;
  onClose: typeof WS_ORDERS_ALL_CLOSED;
  onError: typeof WS_ORDERS_ALL_ERROR;
  onMessage: typeof WS_ORDERS_ALL_MESSAGE;
};

export const wsOrdersAllActions: TWSOrdersAllActions = {
  wsInit: WS_ORDERS_ALL_START,
  onOpen: WS_ORDERS_ALL_SUCCESS,
  onClose: WS_ORDERS_ALL_CLOSED,
  onError: WS_ORDERS_ALL_ERROR,
  onMessage: WS_ORDERS_ALL_MESSAGE,
};

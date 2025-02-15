import { TOrdersList } from "../../utils/types";

export const WS_ORDERS_PERSONAL_START = "WS_ORDERS_PERSONAL_START";
export const WS_ORDERS_PERSONAL_SUCCESS = "WS_ORDERS_PERSONAL_SUCCESS";
export const WS_ORDERS_PERSONAL_ERROR = "WS_ORDERS_PERSONAL_ERROR";
export const WS_ORDERS_PERSONAL_CLOSED = "WS_ORDERS_PERSONAL_CLOSED";
export const WS_ORDERS_PERSONAL_MESSAGE = "WS_ORDERS_PERSONAL_MESSAGE";

type TOrdersPersonalStartAction = {
  readonly type: typeof WS_ORDERS_PERSONAL_START;
};
type TOrdersPersonalSuccessAction = {
  readonly type: typeof WS_ORDERS_PERSONAL_SUCCESS;
};
type TOrdersPersonalErrorAction = {
  readonly type: typeof WS_ORDERS_PERSONAL_ERROR;
  readonly error: Event;
};
type TOrdersPersonalClosedAction = {
  readonly type: typeof WS_ORDERS_PERSONAL_CLOSED;
};
type TOrdersPersonalMessageAction = {
  readonly type: typeof WS_ORDERS_PERSONAL_MESSAGE;
  readonly message: TOrdersList;
};

export type TOrdersPersonalActions =
  | TOrdersPersonalStartAction
  | TOrdersPersonalSuccessAction
  | TOrdersPersonalErrorAction
  | TOrdersPersonalClosedAction
  | TOrdersPersonalMessageAction;

export type TWSOrdersPersonalActions = {
  wsInit: typeof WS_ORDERS_PERSONAL_START;
  onOpen: typeof WS_ORDERS_PERSONAL_SUCCESS;
  onClose: typeof WS_ORDERS_PERSONAL_CLOSED;
  onError: typeof WS_ORDERS_PERSONAL_ERROR;
  onMessage: typeof WS_ORDERS_PERSONAL_MESSAGE;
};

export const wsOrdersPersonalActions: TWSOrdersPersonalActions = {
  wsInit: WS_ORDERS_PERSONAL_START,
  onOpen: WS_ORDERS_PERSONAL_SUCCESS,
  onClose: WS_ORDERS_PERSONAL_CLOSED,
  onError: WS_ORDERS_PERSONAL_ERROR,
  onMessage: WS_ORDERS_PERSONAL_MESSAGE,
};

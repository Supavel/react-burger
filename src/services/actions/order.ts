import request from "../../utils/request";
import { TOrder, AppDispatch } from "../../utils/types";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDERS_FAILED";

type TGetOrderRequestAction = {
  readonly type: typeof GET_ORDER_REQUEST;
};
type TGetOrderSuccessAction = {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: TOrder;
};
type TGetOrderFailedAction = {
  readonly type: typeof GET_ORDER_FAILED;
};

export type TGetOrderActions =
  | TGetOrderRequestAction
  | TGetOrderSuccessAction
  | TGetOrderFailedAction;

export const getOrder = (id:string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    request(`orders/${id}`, {
      headers: { Authorization: localStorage?.getItem("accessToken") || "" },
    })
      .then((res) => {
        dispatch({ type: GET_ORDER_SUCCESS, order: res?.orders && res?.orders[0]});
      })
      .catch((e) =>
        dispatch({
          type: GET_ORDER_FAILED,
        })
      );
  };
};

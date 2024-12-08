import request from "../../utils/request";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILED = "POST_ORDER_FAILED";
export const CLOSE_ORDER = "CLOSE_ORDER";

export const postOrder = (ingredients) => {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    });
    request("orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ingredients: [...ingredients] }),
    })
      .then((res) => {
        dispatch({ type: POST_ORDER_SUCCESS, order: res.order.number });
      })
      .catch((e) =>
        dispatch({
          type: POST_ORDER_FAILED,
        })
      );
  };
};

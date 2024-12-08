import request from "../../utils/request";

export const GET_INGREDIENTS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_ITEMS_FAILED";

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    request("ingredients")
      .then((res) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredients: res.data });
      })
      .catch((e) =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
};

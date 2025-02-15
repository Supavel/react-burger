import request from "../../utils/request";
import { TIngredient, AppDispatch } from "../../utils/types";

export const GET_INGREDIENTS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_ITEMS_FAILED";

type TIngredientsGetItemsRequestAction = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};
type TIngredientsGetItemsSuccessAction = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: Array<TIngredient>;
};
type TIngredientsGetItemsFailedAction = {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

export type TIngredientsActions =
  | TIngredientsGetItemsRequestAction
  | TIngredientsGetItemsSuccessAction
  | TIngredientsGetItemsFailedAction;

export const getIngredients = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    request("ingredients")
      .then((res) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredients: res?.data });
      })
      .catch((e) =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
};

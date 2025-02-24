import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  TIngredientsActions,
} from "../actions/burger-ingredients";

import { TIngredient } from "../../utils/types";

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
};

export const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const burgerIngredientsReducer = (
  state = initialState,
  action: TIngredientsActions
) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.ingredients,
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }
    default: {
      return state;
    }
  }
};

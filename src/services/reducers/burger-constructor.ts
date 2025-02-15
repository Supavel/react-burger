import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  ADD_BUN,
  SORT_INGREDIENTS,
  CLEAR_INGREDIENTS,
  TConstructorActions,
} from "../actions/burger-constructor";
import { TIngredientConstrutor } from "../../utils/types";

type TConsrtuctorState = {
  ingredients: Array<TIngredientConstrutor>;
  bun: TIngredientConstrutor | null;
};

const initialState: TConsrtuctorState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructorReducer = (
  state = initialState,
  action: TConstructorActions
) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter((item) => item.uniq_id !== action.id),
        ],
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        bun: action.ingredient,
      };
    }
    case SORT_INGREDIENTS: {
      const ingredients = [...state.ingredients];
      ingredients.splice(
        action.hoverIndex,
        0,
        ingredients.splice(action.dragIndex, 1)[0]
      );
      return {
        ...state,
        ingredients: ingredients,
      };
    }
    case CLEAR_INGREDIENTS: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

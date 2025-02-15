import { TIngredientConstrutor } from "../../utils/types";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const SORT_INGREDIENTS = "SORT_INGREDIENTS";
export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS";

type TConstructorAddIngredientAction = {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: TIngredientConstrutor;
};
type TConstructorDeleteIngredientAction = {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string;
};
type TConstructorAddBunAction = {
  readonly type: typeof ADD_BUN;
  readonly ingredient: TIngredientConstrutor;
};
type TConstructorSortIngredientAction = {
  readonly type: typeof SORT_INGREDIENTS;
  readonly hoverIndex: TIngredientConstrutor["index"];
  readonly dragIndex: TIngredientConstrutor["index"];

};
type TConstructorClearIngredientAction = {
  readonly type: typeof CLEAR_INGREDIENTS;
};

export type TConstructorActions =
  | TConstructorAddIngredientAction
  | TConstructorDeleteIngredientAction
  | TConstructorAddBunAction
  | TConstructorSortIngredientAction
  | TConstructorClearIngredientAction;

import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  ADD_BUN,
  SORT_INGREDIENTS,
  CLEAR_INGREDIENTS,
} from "../actions/burger-constructor";
import { initialState, burgerConstructorReducer } from "./burger-constructor";

const ingredient = {
  _id: "643d69a5c3f7b9001cfa093f",
  name: "Мясо бессмертных моллюсков Protostomia",
  type: "main",
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: "https://code.s3.yandex.net/react/code/meat-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
  __v: 0,
  uniq_id: "210cfbce-8732-498c-9ca1-083fc89c6e00",
};

const bun = {
  _id: "643d69a5c3f7b9001cfa093c",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
};

describe("burgerConstructorReducer tests", () => {
  it("should return the initial state", () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_INGREDIENT action", () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: ADD_INGREDIENT,
        ingredient: ingredient,
      })
    ).toEqual({ ...initialState, ingredients: [ingredient] });
  });
  it("should handle DELETE_INGREDIENT action", () => {
    expect(
      burgerConstructorReducer(initialState, {
        type: DELETE_INGREDIENT,
        id: "210cfbce-8732-498c-9ca1-083fc89c6e00",
      })
    ).toEqual({
      ...initialState,
      ingredients: [],
    });
  });
  it("should handle ADD_BUN action", () => {
    expect(
      burgerConstructorReducer(initialState, { type: ADD_BUN, ingredient: bun })
    ).toEqual({
      ...initialState,
      bun: bun,
    });
  });
  it("should handle SORT_INGREDIENTS action", () => {
    
    const ingredientSorted = { ...ingredient, name: "Sorted" };
    const state = {...initialState, ingredients: [ingredient, ingredientSorted]};
    expect(
      burgerConstructorReducer(state, {
        type: SORT_INGREDIENTS,
        dragIndex: 0,
        hoverIndex: 1,
      })
    ).toEqual({
      ...state,
      ingredients: [ingredientSorted, ingredient],
    });
  });
  it("should handle CLEAR_INGREDIENTS action", () => {
    expect(
      burgerConstructorReducer(initialState, { type: CLEAR_INGREDIENTS })
    ).toEqual({
      ...initialState,
    });
  });
});

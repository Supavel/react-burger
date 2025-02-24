import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/burger-ingredients";
import { initialState, burgerIngredientsReducer } from "./burger-ingredients";

const ingredients = [
  {
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
  },
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
];

describe("burgerIngredientsReducer tests", () => {
  it("should return the initial state", () => {
    expect(burgerIngredientsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS_REQUEST action", () => {
    expect(
      burgerIngredientsReducer(initialState, { type: GET_INGREDIENTS_REQUEST })
    ).toEqual({ ...initialState, ingredientsRequest: true });
  });
  it("should handle GET_INGREDIENTS_SUCCESS action", () => {
    expect(
      burgerIngredientsReducer(initialState, {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: ingredients,
      })
    ).toEqual({
      ...initialState,
      ingredientsFailed: false,
      ingredientsRequest: false,
      ingredients: ingredients,
    });
  });
  it("should handle GET_INGREDIENTS_FAILED action", () => {
    expect(
      burgerIngredientsReducer(initialState, { type: GET_INGREDIENTS_FAILED })
    ).toEqual({
      ...initialState,
      ingredientsFailed: true,
      ingredientsRequest: false,
    });
  });
});

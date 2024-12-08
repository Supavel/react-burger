import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { ingredientDetailsReducer } from "./ingredient-details";
import { orderDetailsReducer } from "./order-details";

const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer
});
const enhancer = composeWithDevTools(applyMiddleware(thunk));
const initialState = {};

export const store = createStore(rootReducer, initialState, enhancer);


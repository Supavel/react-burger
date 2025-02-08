import { createStore, applyMiddleware, Action, ActionCreator } from "redux";
import { thunk, ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";

import { orderDetailsReducer } from "./order-details";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,

  orderDetails: orderDetailsReducer,
  auth: authReducer,
});
const enhancer = composeWithDevTools(applyMiddleware(thunk));
const initialState = {};

export const store = createStore(rootReducer, initialState, enhancer);

import { createStore, applyMiddleware, Action, ActionCreator } from "redux";
import { thunk, ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";

import { orderDetailsReducer } from "./order-details";
import { authReducer } from "./auth";

import { socketMiddleware } from "../middleware/socket-middleware";
import { wsOrdersAllActions } from "../actions/orders-all";
import { wsOrdersAllReducer } from "./orders-all";
import { wsOrdersPersonalActions } from "../actions/orders-personal";
import { wsOrdersPersonalReducer } from "./orders-personal";
import { getOrderReducer } from "./order";

const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  auth: authReducer,
  ordersAll: wsOrdersAllReducer,
  ordersPersonal: wsOrdersPersonalReducer,
  getOrder: getOrderReducer,
});

const enhancer = composeWithDevTools(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware(wsOrdersAllActions)),
  applyMiddleware(socketMiddleware(wsOrdersPersonalActions))
);
const initialState = {};

export const store = createStore(rootReducer, initialState, enhancer);

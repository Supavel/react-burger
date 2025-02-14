import { store } from "../services/reducers";
import { TWSOrdersAllActions } from "../services/actions/orders-all";
import { TWSOrdersPersonalActions } from "../services/actions/orders-personal";

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredientConstrutor = TIngredient & {
  uniq_id: string;
  index: number;
};

export type TIngredientOrder = TIngredient & {
  quantity: number;
};

export type TIngredientCharacteristic = {
  name: string;
  value: number;
};

export type TIngredientsCounters = {
  [key: string]: number;
};

type TFormName = {
  name: string;
};

type TFormEmail = {
  email: string;
};

type TFormPassword = {
  password: string;
};

type TFormToken = {
  token: string;
};

export type TOrder = {
  ingredients: Array<string>;
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

type TGetOrder = Array<{
  _id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
}>;

export type TUser = TFormName & TFormEmail;

export type TForgotPassword = TFormEmail;

export type TResetPassword = TFormPassword & TFormToken;

export type TRegister = TFormName & TFormEmail & TFormPassword;

export type TLogin = TFormEmail & TFormPassword;

export type TProfileSettings = TFormName & TFormEmail & TFormPassword;

export type TResponse = {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  user?: TUser;
  order?: TOrder;
  data: { [key: string]: any };
  orders?: TGetOrder;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TOrdersList = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TWSActionsTypes = TWSOrdersAllActions | TWSOrdersPersonalActions;

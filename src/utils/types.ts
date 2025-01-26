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

export type TIngredientCharacteristic = {
  name: string;
  value: number;
};

export type TIngredientsCounters = {
  [key: string]: number;
};

type TFormName = {
  name: string;
}

type TFormEmail = {
  email: string;
};

type TFormPassword = {
  password: string;
};

type TFormToken = {
  token: string;
}

export type TForgotPassword = TFormEmail;

export type TResetPassword = TFormPassword & TFormToken;

export type TRegister = TFormName & TFormEmail & TFormPassword;

export type TLogin = TFormEmail & TFormPassword;

export type TProfileSettings = TFormName & TFormEmail & TFormPassword;

export type TResponse = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  data: {[key: string]: any};
}
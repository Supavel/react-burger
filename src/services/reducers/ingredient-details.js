import {
  SET_SELECTED_INGREDIENT,
  UNSET_SELECTED_INGREDIENT,
} from "../actions/ingredient-details";

const initialState = {
  selectedIngredient: {},
  modalVisible: false
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_INGREDIENT: {
      return {
        selectedIngredient: action.ingredient,
        modalVisible: true,
      };
    }
    case UNSET_SELECTED_INGREDIENT: {
      return {
        selectedIngredient:{},
        modalVisible: false,
      };
    }

    default: {
      return state;
    }
  }
};

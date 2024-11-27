import React from "react";
import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import PropTypes from "prop-types";
import styles from "./burger-ingredients-group.module.css";

const BurgerIngredientsGroup = ({
  ingredients,
  ingredientType,
  setselectedIngredient,
}: any) => {
  const name =
    ingredientType === "bun"
      ? "Булка"
      : ingredientType === "main"
        ? "Начинка"
        : "Соус";
  return (
    <>
      <div
        id={ingredientType}
        className="text text_type_main-medium mb-6 mt-10"
      >
        {name}
      </div>
      <ul className={styles["ingredients-grid"]}>
        {ingredients.map((ingredient: any) => {
          if (ingredient.type === ingredientType) {
            return (
              <li className={styles.ingredient}>
                <BurgerIngredientItem
                  ingredient={ingredient}
                  key={ingredient._id}
                  setselectedIngredient={setselectedIngredient}
                />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number
});

BurgerIngredientsGroup.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
  ingredientType: PropTypes.string.isRequired,
  setselectedIngredient: PropTypes.func,
};

export default BurgerIngredientsGroup;

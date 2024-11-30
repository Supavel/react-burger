import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import PropTypes from "prop-types";
import styles from "./burger-ingredients-group.module.css";
import ingredientPropTypes from "../../../utils/types";

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
              <li className={styles.ingredient} key={ingredient._id}>
                <BurgerIngredientItem
                  ingredient={ingredient}
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

BurgerIngredientsGroup.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  ingredientType: PropTypes.string.isRequired,
  setselectedIngredient: PropTypes.func,
};

export default BurgerIngredientsGroup;

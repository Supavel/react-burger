import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import PropTypes from "prop-types";
import styles from "./burger-ingredients-group.module.css";
import ingredientPropTypes from "../../../utils/types";

const BurgerIngredientsGroup = ({
  ingredients,
  ingredientType,
  ingredientsCounters
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
        className="text text_type_main-medium mb-6 mt-10 ml-25"
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
                  count={ingredientsCounters[ingredient._id]}
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
  ingredientsCounters: PropTypes.object
};

export default BurgerIngredientsGroup;

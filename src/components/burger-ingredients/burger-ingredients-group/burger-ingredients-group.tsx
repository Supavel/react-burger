import { FC } from "react";
import BurgerIngredientItem from "../burger-ingredient-item/burger-ingredient-item";
import styles from "./burger-ingredients-group.module.css";
import { TIngredient, TIngredientsCounters } from "../../../utils/types";

type TProps = {
  ingredients: TIngredient[];
  ingredientType: string;
  ingredientsCounters: TIngredientsCounters;
};

const BurgerIngredientsGroup: FC<TProps> = ({
  ingredients,
  ingredientType,
  ingredientsCounters
}) => {
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
        {ingredients.map((ingredient: TIngredient) => {
          if (ingredient.type === ingredientType) {
            return (
              <li key={ingredient._id}>
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

export default BurgerIngredientsGroup;

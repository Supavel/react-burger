import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import ingredientPropTypes from "../../../utils/types";

import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function BurgerIngredientItem({ ingredient, count }: any) {
  const location = useLocation();

  const [, dragRef] = useDrag({
    type: ingredient.type === "bun" ? "bun" : "ingredient",
    item: { ingredient },
  });

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      state={{ background: location }}
      className={styles.ingredient}
    >
      {count && (
        <Counter count={count} size="small" extraClass={styles.counter} />
      )}
      <img ref={dragRef} src={ingredient.image} alt="Булка" />
      <span>
        {ingredient.price} <CurrencyIcon type="primary" />
      </span>
      <span>{ingredient.name}</span>
    </Link>
  );
}

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  count: PropTypes.number,
};

export default BurgerIngredientItem;

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { TIngredient } from "../../../utils/types";
import { FC } from "react";

type TProps = {
  ingredient: TIngredient;
  count: number;
};

const BurgerIngredientItem: FC<TProps> = ({ ingredient, count }) => {
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
        <div data-cy="counter" className={styles.counter}>
          <Counter count={count} size="small" />
        </div>
      )}
      <img ref={dragRef} src={ingredient.image} alt="Булка" />
      <span>
        {ingredient.price} <CurrencyIcon type="primary" />
      </span>
      <span>{ingredient.name}</span>
    </Link>
  );
};

export default BurgerIngredientItem;

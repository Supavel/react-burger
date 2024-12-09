import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import ingredientPropTypes from "../../../utils/types";
import { SET_SELECTED_INGREDIENT } from "../../../services/actions/ingredient-details";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";

function BurgerIngredientItem({ ingredient, count }: any) {
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: ingredient.type === "bun" ? "bun" : "ingredient",
    item: {ingredient},
  });  

  return (
    <>
      {count && <Counter count={count} size="small" extraClass={styles.counter} />}
      <img ref={dragRef} src={ingredient.image} alt="Булка" onClick={() => dispatch({type: SET_SELECTED_INGREDIENT, ingredient:ingredient})} />
      <span>
        {ingredient.price} <CurrencyIcon type="primary" />
      </span>
      <span>{ingredient.name}</span>
    </>
  );
}

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  count: PropTypes.number
};

export default BurgerIngredientItem;

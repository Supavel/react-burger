import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../../utils/types";

function BurgerIngredientItem({ ingredient, setselectedIngredient }: any) {
  const handleImgClick = () => {
    setselectedIngredient(ingredient);
  }
  return (
    <>
      <Counter count={0} size="small" extraClass={styles.counter} />
      <img src={ingredient.image} alt="Булка" onClick={handleImgClick} />
      <span>
        {ingredient.price} <CurrencyIcon type="primary" />
      </span>
      <span>{ingredient.name}</span>
    </>
  );
}

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
   setselectedIngredient: PropTypes.func,
};

export default BurgerIngredientItem;

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient-item.module.css";
import PropTypes from "prop-types";

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

BurgerIngredientItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
   setselectedIngredient: PropTypes.func,
};

export default BurgerIngredientItem;

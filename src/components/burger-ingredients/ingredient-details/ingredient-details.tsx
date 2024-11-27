import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import IngredientDetailsCharacteristic from "./ingredient-details-characteristic/ingredient-details-characteristic";

const IngredientDetails = ({ ingredient }: any) => {
  return (
    <>
      <img src={ingredient.image_large} alt="Булка" />
      <span className="text text_type_main-medium mt-4 mb-8">
        {ingredient.name}
      </span>
      <div className={styles.characteristics}>
        <IngredientDetailsCharacteristic
          name="Каллории, ккал"
          value={ingredient.calories}
        />
        <IngredientDetailsCharacteristic
          name="Белки, г"
          value={ingredient.proteins}
        />
        <IngredientDetailsCharacteristic
          name="Жиры, г"
          value={ingredient.fat}
        />
        <IngredientDetailsCharacteristic
          name="Углеводы, г"
          value={ingredient.carbohydrates}
        />
      </div>
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
  
  IngredientDetails.propTypes = {
    ingredient: ingredientPropTypes,
  };

export default IngredientDetails;

import styles from "./ingredient-details.module.css";
import IngredientDetailsCharacteristic from "./ingredient-details-characteristic/ingredient-details-characteristic";
import ingredientPropTypes from "../../../utils/types";

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

  IngredientDetails.propTypes = {
    ingredient: ingredientPropTypes
  };

export default IngredientDetails;

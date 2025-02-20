import styles from "./ingredient-details.module.css";
import IngredientDetailsCharacteristic from "./ingredient-details-characteristic/ingredient-details-characteristic";
import { useParams } from "react-router-dom";
import { useSelector } from "../../hooks";
import Loader from "../loader/loader";
import { TIngredient } from "../../utils/types";

const IngredientDetails = () => {
  const { id } = useParams();
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (state) => state.burgerIngredients
  );

  const ingredient = ingredients.find((el: TIngredient) => el._id === id);

  return (
    <>
      {ingredientsRequest && <Loader />}
      {ingredientsFailed && (
        <div className="text text_type_main-default">Произошла ошибка</div>
      )}
      {ingredient && (
        <>
          <img src={ingredient.image_large} alt={ingredient.name} />
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
      )}
    </>
  );
};

export default IngredientDetails;

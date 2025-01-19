import { useEffect } from "react";
import styles from "./ingredient-details.module.css";
import IngredientDetailsCharacteristic from "./ingredient-details-characteristic/ingredient-details-characteristic";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/burger-ingredients";
import Loader from "../loader/loader";

const IngredientDetails = () => {
  const { id } = useParams();
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (state: any) => state.burgerIngredients
  );

  const ingredient = ingredients.find((el: any) => el._id === id);
  const dispatch: any = useDispatch();
  useEffect(() => {
    if (!ingredient) {
      dispatch(getIngredients());
    }
  }, []);

  return (
    <>
      {ingredientsRequest && <Loader />}
      {ingredientsFailed && (
        <div className="text text_type_main-default">Произошла ошибка</div>
      )}
      {ingredient && (
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
      )}
    </>
  );
};

export default IngredientDetails;

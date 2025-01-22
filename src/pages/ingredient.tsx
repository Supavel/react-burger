import IngredientDetails from "../components/ingredient-details/ingredient-details";
import style from "./ingredient.module.css";

export function IngredientPage() {
  return (
    <main className={`${style.main} mt-25`}>
      <header className="text text_type_main-large">Детали ингредиента</header>
      <IngredientDetails />
    </main>
  );
}

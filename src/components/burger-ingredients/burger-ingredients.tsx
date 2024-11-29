import {useState} from "react";
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientsDetails from "./ingredient-details/ingredient-details";
import ingredientPropTypes from "../../utils/types";

const BurgerIngredients = ({ ingredients}: any) => {
  const [current, setCurrent] = useState("one");
  const [selectedIngredient, setselectedIngredient] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleIngredientClick = (ingredient:any) => {
    setselectedIngredient(ingredient);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 ml-30">Соберите бургер</h1>
      <nav
        className={`${styles.nav} "mt-5"`}
      >
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>

        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинка
        </Tab>
      </nav>
      <div className={`${styles.scroll} ml-30`}>
        <BurgerIngredientsGroup
          ingredients={ingredients}
          ingredientType="bun"
          setselectedIngredient = {handleIngredientClick}
        />
        <BurgerIngredientsGroup
          ingredients={ingredients}
          ingredientType="main"
          setselectedIngredient = {handleIngredientClick}
        />
        <BurgerIngredientsGroup
          ingredients={ingredients}
          ingredientType="sauce"
          setselectedIngredient = {handleIngredientClick}
        />
        {modalVisible && (
          <Modal onClose={handleCloseModal} header="Детали ингредиента">
            <IngredientsDetails ingredient={selectedIngredient} />
          </Modal>
        )}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default BurgerIngredients;

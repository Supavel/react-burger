import React from "react";
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientsDetails from "./ingredient-details/ingredient-details";

const BurgerIngredients = ({ ingredients}: any) => {
  const [current, setCurrent] = React.useState("one");
  const [selectedIngredient, setselectedIngredient] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

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

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
};

export default BurgerIngredients;

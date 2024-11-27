import React from "react";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";

const BurgerConstructor = ({ ingredients }: any) => {
  const total = ingredients.reduce((acc: number, p: any) => acc + p.price, 0);
  const [orderModalVisible, setOrderModalVisible] = React.useState(false);
  const handleOrderClick = () => {
    setOrderModalVisible(true);
  };

  const handleCloseModal = () => {
    setOrderModalVisible(false);
  };
  const bun = ingredients.find((el: any) => el.type === "bun");
  return (
    <section className={`${styles.section} mt-25`}>
      {bun && 
      <div className={styles.bun}>
        <ConstructorElement
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          type="top"
        />
      </div>}
      <div className={styles.scroll}>
        <ul className={styles["ingredients-list"]}>
          {ingredients.map((ingredient: any) => {
            return (
              ingredient.type !== "bun" && (
                <li className={`${styles.ingredient} mb-4`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    isLocked={false}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                    key={ingredient._id}
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
      {bun &&
      <div className={styles.bun}>
        <ConstructorElement
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          type="bottom"
        />
      </div>}
      <div className={`${styles["order-information"]} mt-10`}>
        <p className="text text_type_digits-medium">{total}</p>
        <CurrencyIcon type="primary" className="mr-10 ml-2" />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={handleOrderClick}
        >
          Оформить заказ
        </Button>
        {orderModalVisible && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails orderNumber="034536" />
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
  __v: PropTypes.number,
});

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
};

export default BurgerConstructor;

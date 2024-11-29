import {useState} from "react";
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
import ingredientPropTypes from "../../utils/types";

const BurgerConstructor = ({ ingredients }: any) => {
  const total = ingredients.reduce((acc: number, p: any) => acc + p.price, 0);
  const [orderModalVisible, setOrderModalVisible] = useState(false);
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
          text={`${bun.name} (верх)`}
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
                <li key={ingredient._id} className={`${styles.ingredient} mb-4`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    isLocked={false}
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
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
          text={`${bun.name} (низ)`}
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

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default BurgerConstructor;

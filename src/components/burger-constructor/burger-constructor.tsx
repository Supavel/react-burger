import { useState, useMemo } from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import {
  ADD_INGREDIENT,
  ADD_BUN,
} from "../../services/actions/burger-constructor";
import { CLOSE_ORDER } from "../../services/actions/order-details";
import { v4 as uuidv4 } from "uuid";
import BurgerConstructorItem from "./burger-constuctor-item/burger-constuctor-item";
import ProtectedRouteElement from "../protected-route/protected-route";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { ingredients, bun } = useSelector(
    (state: any) => state.burgerConstructor
  );
  const total = useMemo(
    () =>
      ingredients.reduce((acc: number, p: any) => acc + p.price, 0) +
      (bun?.price || 0) * 2,
    [ingredients, bun]
  );
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const handleOrderClick = () => {
    if (!bun) {
      return;
    }
    setOrderModalVisible(true);
  };

  const handleCloseModal = () => {
    setOrderModalVisible(false);
    dispatch({ type: CLOSE_ORDER });
  };

  const [{ isIngredientHover }, dropTargetIngredient] = useDrop({
    accept: "ingredient",
    drop(ingredient: any) {
      ingredient = { ...ingredient.ingredient, uniq_id: uuidv4() };
      dispatch({ type: ADD_INGREDIENT, ingredient });
    },
    collect: (monitor) => ({
      isIngredientHover: monitor.isOver(),
    }),
  });

  const [{ isBunHover }, dropTargetBun] = useDrop({
    accept: "bun",
    drop(ingredient: any) {
      dispatch({ type: ADD_BUN, ...ingredient });
    },
    collect: (monitor) => ({
      isBunHover: monitor.isOver(),
    }),
  });

  return (
    <section className={`${styles.section} mt-25`}>
      <div ref={dropTargetBun}>
        {!bun && (
          <div className={styles.bun}>
            <div
              className={`constructor-element constructor-element_pos_top mb-4 ${isBunHover === true ? styles.onHover : ""}`}
            >
              <span
                className={`constructor-element__row text text_type_main-small ${styles["emty-element"]}`}
              >
                Выберите булки
              </span>
            </div>
          </div>
        )}
        {bun && (
          <div className={`${styles.bun} mb-4`}>
            <ConstructorElement
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
              type="top"
            />
          </div>
        )}

        <div ref={dropTargetIngredient} className={styles.scroll}>
          <ul className={styles["ingredients-list"]}>
            {ingredients.length === 0 && (
              <div className={styles.bun}>
                <div
                  className={`constructor-element ${isIngredientHover === true ? styles.onHover : ""}`}
                >
                  <span
                    className={`constructor-element__row text text_type_main-small ${styles["emty-element"]}`}
                  >
                    Выберите начинку
                  </span>
                </div>
              </div>
            )}
            {ingredients.map((ingredient: any, index: any) => {
              return (
                <li
                  key={ingredient.uniq_id}
                  className={`${styles.ingredient} mb-4`}
                >
                  <BurgerConstructorItem
                    ingredient={ingredient}
                    index={index}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {!bun && (
          <div className={styles.bun}>
            <div
              className={`constructor-element constructor-element_pos_bottom mt-4 ${isBunHover === true ? styles.onHover : ""}`}
            >
              <span
                className={`constructor-element__row text text_type_main-small  ${styles["emty-element"]}`}
              >
                Выберите булки
              </span>
            </div>
          </div>
        )}
        {bun && (
          <div className={`${styles.bun} mt-4`}>
            <ConstructorElement
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
              type="bottom"
            />
          </div>
        )}
      </div>
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
          <ProtectedRouteElement>
            <Modal onClose={handleCloseModal}>
              <OrderDetails />
            </Modal>
          </ProtectedRouteElement>
        )}
      </div>
    </section>
  );
};

export default BurgerConstructor;

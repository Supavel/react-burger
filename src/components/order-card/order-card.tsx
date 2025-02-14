import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks";
import { useParams } from "react-router";
import { getOrder } from "../../services/actions/order";
import Loader from "../loader/loader";

import styles from "./order-card.module.css";
import { TIngredientOrder } from "../../utils/types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { ...messageAll } = useSelector((state) => state.ordersAll);
  const { ...messagePersonal } = useSelector((state) => state.ordersPersonal);
  const { ...getOrderState } = useSelector((state) => state.getOrder);
  let order =
    messageAll.message?.orders.find((order) => String(order.number) === id) ||
    messagePersonal.message?.orders.find(
      (order) => String(order.number) === id
    ) ||
    getOrderState.order;

  useEffect(() => {
    if (!order && id) {
      dispatch(getOrder(id));
    }
  }, [dispatch, id, order]);

  const { ingredients } = useSelector((state) => state.burgerIngredients);
  if (getOrderState.orderRequest || !order) {
    return <Loader />;
  }
  if (ingredients.length === 0) {
    return <div className="text text_type_main-default">Произошла ошибка</div>;
  }

  let orderIngredients: TIngredientOrder[] = [];
  let orderIngredient: Record<string, TIngredientOrder> = {};

  for (const item of order.ingredients) {
    const ingredient = ingredients.find(
      (ingredient) => ingredient._id === item
    );
    if (ingredient) {
      if (!orderIngredient[item]) {
        orderIngredient[item] = { ...ingredient, quantity: 0 };
      }
      orderIngredient[item].quantity += 1;
    }
  }
  for (const item of order.ingredients) {
    if (orderIngredient[item]) {
      orderIngredients.push(orderIngredient[item]);
    }
  }

  const orderStatus =
    order.status === "done"
      ? "Выполнен"
      : order.status === "created"
        ? "Создан"
        : "Готовится";

  const totalSum = orderIngredients.reduce((acc, p) => acc + p.price, 0);

  return (
    <main className="ml-10 mr-10 mb-10">
      <h1
        className={`${styles["order-number"]} text text_type_digits-default text-center mb-10`}
      >
        #0{String(order.number)}
      </h1>
      <p className={`text text_type_main-medium mb-3`}>{order.name}</p>
      <p
        className={`text text_type_main-default mb-15 ${order.status === "done" ? styles["status-done"] : ""}`}
      >
        {orderStatus}
      </p>
      <p className="text text_type_main-medium mb-2">{"Состав:"}</p>
      <section className={styles["order-ingredients"]}>
        {orderIngredients.map((item, i) => {
          return (
            <li key={i} className="mt-4 mr-6">
              <div className={styles.ingredient}>
                <div className={styles["ingredient-left"]}>
                  <div className={styles.image}>
                    <img src={item.image_mobile} alt={item.name} />
                  </div>
                  <p className={`text text_type_main-default ml-4`}>
                    {item.name}
                  </p>
                </div>
                <div className={styles.price}>
                  <span className="text text_type_digits-default mr-2">{`${item.quantity} x ${item.price}`}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </li>
          );
        })}
      </section>
      <section
        className={`text text_type_main-default mt-10 mb-6 ${styles.footer}`}
      >
        <p className="text text_type_main-default text_color_inactive">
          <FormattedDate
            date={new Date(order.createdAt)}
            className="text text_type_main-default text_color_inactive"
          />
        </p>

        <div className={styles.price}>
          <span className={`text text_type_digits-default mr-2`}>
            {totalSum}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </section>
    </main>
  );
};

export default OrderCard;

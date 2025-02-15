import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orders-item.module.css";
import { useSelector } from "../../../hooks";
import { TOrder, TIngredient } from "../../../utils/types";

type TProps = {
  order: TOrder;
  isPersonal?:boolean;
};

const OrdersItem: FC<TProps> = ({ order, isPersonal }) => {

  const location = useLocation();

  const { ingredients } = useSelector((state) => state.burgerIngredients);
  if (ingredients.length === 0) {
    return null;
  }
  const status =
    order.status === "done"
      ? "Выполнен"
      : order.status === "created"
        ? "Создан"
        : "Готовится";

  const orderIngredients = order.ingredients.reduce<TIngredient[]>(
    (acc, orderIngredientId) => {
      const ingredient = ingredients.find(
        (ingredient) => ingredient._id === orderIngredientId
      );
      if (ingredient) {
        acc.push(ingredient);
      }
      return acc;
    },
    []
  );

  const total = orderIngredients.reduce((acc, p) => acc + p.price, 0);

  const visibleIngredients = orderIngredients.slice(0, 6);

  return (
    <div className={`p-6 mb-4 ${styles.order}`}>
    <Link
       className={styles["order-link"]}
      to={`${location.pathname}/${order.number}`}
      state={{ background: location }}
    >
      <div className={`mb-6 ${styles["order-header"]}`}>
        <p className="text text_type_digits-default">
          #0{String(order.number)}
        </p>
        <FormattedDate
          date={new Date(order.createdAt)}
          className="text text_type_main-default text_color_inactive"
        />
      </div>

      <p
        className={`${isPersonal ? "mb-2" : "mb-6"} ${styles["order-title"]} text text_type_main-medium`}
      >
        {order.name}
      </p>

      {isPersonal && (
        <p
          className={`mb-6 text text_type_main-default ${order.status === "done" ? styles["status-done"] : ""}`}
        >
          {status}
        </p>
      )}

      <div className={styles.row}>
        <div className={styles.images}>
          {visibleIngredients.map((ingredient, index) => {
            const countHide = order.ingredients.length - 6;
            return (
              <li key={index} className={styles.image}>
                <img src={ingredient.image_mobile} alt={ingredient.name} />
                {countHide > 0 && index === 5 && (
                  <span
                    className={`${styles["count-hidden"]} text text_type_main-default`}
                  >
                    +{countHide}
                  </span>
                )}
              </li>
            );
          })}
        </div>
        <div className={styles.price}>
          <span className={`text text_type_digits-default`}>{total}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
    </div>
  );
};

export default OrdersItem;

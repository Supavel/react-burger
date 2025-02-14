import { FC } from "react";
import { TOrdersList } from "../../utils/types";
import styles from "./orders-state.module.css";

type TProps = {
  orders: TOrdersList;
};

const OrdersState: FC<TProps> = ({ orders }) => {
  const maxRows = 10;
  const maxColumns = 2;

  const splitOrders = (arr: Array<number>) =>
    arr.reduce(
      (acc: Array<Array<number>>, cur) => {
        if (acc[acc.length - 1].length === maxRows) {
          if (acc.length <= maxColumns) {
            acc.push([]);
          }
        }
        if (acc[acc.length - 1].length < maxRows && acc.length <= maxColumns) {
          acc[acc.length - 1].push(cur);
        }
        return acc;
      },
      [[]]
    );
  const doneOrders = splitOrders(
    orders.orders
      .filter((order) => order.status === "done")
      .map((order) => order.number)
  );

  const pendingOrders = splitOrders(
    orders.orders
      .filter((order) => order.status === "pending")
      .map((order) => order.number)
  );

  return (
    <>
      <div className={`${styles["orders-state"]} mb-6 ml-15`}>
        <section>
          <p className="text text_type_main-medium">Готовы:</p>
          <div
            className={styles["orders-colunms"]}
          >
            {doneOrders.map((columnItem, i) => (
              <ul key={i} className={styles.ul}>
                {columnItem.map((item, index) => (
                  <li key={index} className="mt-2 mr-8">
                    <span
                      className={`${styles["orders-done"]} text text_type_digits-default`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
        <section>
          <p className="text text_type_main-medium">В работе:</p>
          <div className={styles["orders-colunms"]}>
            {pendingOrders.map((columnItem, i) => (
              <ul key={i} className={styles.ul}>
                {columnItem.map((item, index) => (
                  <li key={index} className="mt-2 mr-8">
                    <span className="text text_type_digits-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
        <section className={`${styles.total} mt-15`}>
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <p className="text text_type_digits-large">{orders.total}</p>
        </section>
        <section className={`${styles["total-today"]} mt-15`}>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <p className="text text_type_digits-large">{orders.totalToday}</p>
        </section>
      </div>
    </>
  );
};

export default OrdersState;

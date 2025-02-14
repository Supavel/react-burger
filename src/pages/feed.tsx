import { useEffect } from "react";
import { useDispatch, useSelector } from "../hooks";
import {
  WS_ORDERS_ALL_START,
  WS_ORDERS_ALL_CLOSED,
} from "../services/actions/orders-all";

import { Snackbar } from "@material-ui/core";
import OrdersList from "../components/orders-list/orders-list";
import OrdersState from "../components/orders-state/orders-state";
import Loader from "../components/loader/loader";
import styles from "./feed.module.css";

export function FeedPage() {
  const { wsConnected, message, error } = useSelector(
    (state) => state.ordersAll
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_ORDERS_ALL_START,
      url: "wss://norma.nomoreparties.space/orders/all",
    });
    return () => {
      dispatch({ type: WS_ORDERS_ALL_CLOSED });
    };
  }, [dispatch]);

  return (
    <main>
      <Snackbar open={!!error} message="Приозошла ошибка" />
      <div className={styles.feed}>
        <div></div>
        <h1 className="text text_type_main-large mt-10">Лента заказов</h1>
      </div>
      <div className={styles.feed}>
        <div></div>
        {!wsConnected && <Loader />}
        {wsConnected && !error && message && (
          <>
            <OrdersList orders={message} />
            <OrdersState orders={message} />
          </>
        )}
      </div>
    </main>
  );
}

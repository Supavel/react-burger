import { FC } from "react";
import OrdersListItem from "./orders-item/orders-item";
import { TOrder, TOrdersList } from "../../utils/types";
import styles from "./orders-list.module.css";

type TProps = {
  orders: TOrdersList;
  isPersonal?: boolean
};

const OrdersList: FC<TProps>= ({orders, isPersonal}) => {
  return  <div className={`mt-4 ${styles.scroll}`}>
  {orders.orders && orders.orders.map((order: TOrder, index: number) =>
      <OrdersListItem key={index} order={order} isPersonal={isPersonal} />
  )}
</div>
};

export default OrdersList;

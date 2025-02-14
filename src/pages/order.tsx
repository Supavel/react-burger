import OrderCard from "../components/order-card/order-card";
import style from "./ingredient.module.css";

export function OrderPage() {
  return (
    <main className={`${style.main} mt-25`}>
      <OrderCard />
    </main>
  );
}

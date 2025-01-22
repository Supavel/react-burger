import styles from "./form.module.css";
import { NavLink, Outlet } from "react-router-dom";

export function ProfilePage() {
  return (
    <div className={`${styles["profile-form"]} mt-30`}>
      <div></div>
      <div className={`${styles["profile-title"]}`}>
        <NavLink to="" end className={styles.link}>
          {({ isActive }) => (
            <p
              className={
                isActive
                  ? `text text_type_main-medium pt-6 ${styles["active-link"]}`
                  : "text text_type_main-medium pt-6 text_color_inactive"
              }
            >
              Профиль
            </p>
          )}
        </NavLink>
        <NavLink to="orders" className={styles.link}>
          {({ isActive }) => (
            <p
              className={
                isActive
                  ? `text text_type_main-medium pt-6 ${styles["active-link"]}`
                  : "text text_type_main-medium pt-6 text_color_inactive"
              }
            >
              История заказов
            </p>
          )}
        </NavLink>
        <NavLink to="/logout" className={styles.link}>
          {({ isActive }) => (
            <p
              className={
                isActive
                  ? `text text_type_main-medium pt-6 ${styles["active-link"]}`
                  : "text text_type_main-medium pt-6 text_color_inactive"
              }
            >
              Выход
            </p>
          )}
        </NavLink>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.form}>
        <Outlet />
      </div>
    </div>
  );
}

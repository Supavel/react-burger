import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header>
      <ul className={styles.menu}>
        <li className={`${styles.constructor} m-2`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles["active-link"]} text text_type_main-default`
                : `${styles.link} text text_type_main-default text_color_inactive`
            }
          >
            {({ isActive }) => (
              <>
                <BurgerIcon
                  className="mr-2"
                  type={isActive ? "primary" : "secondary"}
                />
                Конструктор
              </>
            )}
          </NavLink>
        </li>

        <li className={styles["order-tape"]}>
          <ListIcon className="mr-2" type="secondary" />
          <div className="text text_type_main-default text_color_inactive">
            Лента заказов
          </div>
        </li>

        <li className={styles.logo}>
          <Logo />
        </li>

        <li className={styles["sign-in"]}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles["active-link"]} text text_type_main-default`
                : `${styles.link} text text_type_main-default text_color_inactive`
            }
          >
            {({ isActive }) => (
              <>
                <ProfileIcon
                  className="mr-2"
                  type={isActive ? "primary" : "secondary"}
                />
                Личный кабинет
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default AppHeader;

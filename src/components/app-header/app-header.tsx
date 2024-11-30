import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css'

const AppHeader = () => {
  return (
    <header>
      <ul
        className={styles.menu}
      >
        <li className={`${styles.constructor} m-2`}>
          <BurgerIcon className="mr-2" type="secondary" />
          <div className="text text_type_main-default text_color_inactive">
            Конструктор
          </div>
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
          <ProfileIcon className="mr-2" type="secondary" />
          <div className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </div>
        </li>
      </ul>
    </header>
  );
}
export default AppHeader;

import { Link } from "react-router-dom";
import styles from "./form.module.css";

export function NotFound404Page() {
  return (
    <div className={`${styles.form} mt-30`}>
      <h1 className="text text_type_main-large">Страница не найдена</h1>
      <p className="text text_type_main-large">404</p>
      <br />
      <br />
      <p>
        Перейти на <br />
        <Link className={styles.link} to="/">главную страницу</Link>
      </p>
    </div>
  );
}

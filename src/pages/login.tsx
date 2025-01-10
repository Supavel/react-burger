import { useState } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event: any) => {
    const target = event.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };
  return (
    <form className={`${styles.form} mt-30`}>
      <h1 className="text text_type_main-large mb-6">Вход</h1>
      <EmailInput
        name={"email"}
        value={state.email}
        onChange={handleInputChange}
        extraClass="mb-6"
      />
      <PasswordInput
        placeholder={"Пароль"}
        onChange={handleInputChange}
        value={state.password}
        name={"password"}
        size={"default"}
        extraClass="mb-6"
      />
      <Button htmlType="button" type="primary" size="large" extraClass="mb-20">
        Войти
      </Button>
      <p className="text text_type_main-default text_color_inactive">
        Вы - новый пользователь?{" "}
        <Link className={styles.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <Link className={styles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </form>
  );
}

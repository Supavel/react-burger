import { useState } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../services/actions/auth";
import { Snackbar } from "@material-ui/core";
import Loader from "../components/loader/loader";

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

  const dispatch: any = useDispatch();

  const { loginRequestFailed, requestExecute } = useSelector(
    (state: any) => state.auth
  );

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <>
      <Snackbar open={loginRequestFailed} message="Приозошла ошибка авторизации" />
      {requestExecute && <Loader />}
      {!requestExecute && (
        <form className={`${styles.form} mt-30`} onSubmit={onSubmit}>
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
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            extraClass="mb-20"
          >
            Войти
          </Button>
          <p className="text text_type_main-default text_color_inactive">
            Вы - новый пользователь?
            <Link className={styles.link} to="/register">
              Зарегистрироваться
            </Link>
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Забыли пароль?
            <Link className={styles.link} to="/forgot-password">
              Восстановить пароль
            </Link>
          </p>
        </form>
      )}
    </>
  );
}

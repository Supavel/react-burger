import { useState } from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../services/actions/auth";
import { Snackbar } from "@material-ui/core";
import Loader from "../components/loader/loader";

export function RegisterPage() {
  const [state, setState] = useState({
    name: "",
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

  const { registerRequestFailed, requestExecute } = useSelector(
    (state: any) => state.auth
  );

  const onSubmit = (e:any) => {
    e.preventDefault();
    dispatch(register(state))
  }

  return (
    <>
      <Snackbar
        open={registerRequestFailed}
        message="Приозошла ошибка при регистрации"
      />
      {requestExecute && <Loader />}
      {!requestExecute && (
        <form className={`${styles.form} mt-30`} onSubmit={onSubmit}>
          <h1 className="text text_type_main-large mb-6">Регистрация</h1>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={handleInputChange}
            value={state.name}
            name={"name"}
            error={false}
            ref={null}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
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
            Зарегистрироваться
          </Button>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?{" "}
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </p>
        </form>
      )}
    </>
  );
}

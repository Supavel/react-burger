import { useState } from "react";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../utils/api";

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

  const navigate = useNavigate();

  const register = () => {
    registerRequest(state.email, state.password, state.name)
      .then(() => {
        navigate("/login");
      })
      .catch((e) => {
        alert("Ошибка. Попробуйте еще раз");
      });
  };

  return (
    <form className={`${styles.form} mt-30`}>
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
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <EmailInput
        name={'email'}
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
      <Button htmlType="button" type="primary" size="large" extraClass="mb-20" onClick={register}>
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
}

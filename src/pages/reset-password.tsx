import { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { resetPasswordRequest } from "../utils/api";

export function ResetPasswordPage() {
  const canResetPassword = localStorage.getItem("resetPassword");
  const navigate = useNavigate();

  const [state, setState] = useState({
    password: "",
    token: "",
  });
  const handleInputChange = (event: any) => {
    const target = event.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
    resetPasswordRequest(state.password, state.token)
      .then(() => {
        localStorage.removeItem("resetPassword");
        navigate("/");
      })
      .catch(() => {
        alert("Ошибка. Попробуйте еще раз");
      });
  };

  return (
    <>
      {" "}
      {!canResetPassword && <Navigate to={"/"} />}
      {canResetPassword && (
        <form className={`${styles.form} mt-30`} onSubmit={onSubmit}>
          <h1 className="text text_type_main-large mb-6">
            Восстановление пароля
          </h1>
          <PasswordInput
            placeholder={"Введите новый пароль"}
            onChange={handleInputChange}
            value={state.password}
            name={"password"}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={handleInputChange}
            value={state.token}
            name={"token"}
            error={false}
            ref={null}
            onIconClick={() => {}}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            extraClass="mb-20"
          >
            Сохранить
          </Button>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?{" "}
            <Link className={styles.link} to="/login">
              Войти
            </Link>
          </p>
        </form>
      )}
    </>
  );
}

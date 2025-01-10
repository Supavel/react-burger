import { useState } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordRequest } from "../utils/api";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const forgotPassword = () => {
    forgotPasswordRequest(email)
      .then(() => {
        navigate("/reset-password");
      })
      .catch((e) => {
        alert("Ошибка. Попробуйте еще раз");
      });
  };

  return (
    <form className={`${styles.form} mt-30`}>
      <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
      <EmailInput
        value={email}
        onChange={event => setEmail(event.target.value)}
        extraClass="mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass="mb-20"
        onClick={forgotPassword}
      >
        Восстановить
      </Button>
      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
}

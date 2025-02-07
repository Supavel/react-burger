import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordRequest } from "../utils/api";
import useForm from "../hooks/use-form";
import { TForgotPassword } from "../utils/types";

export function ForgotPasswordPage() {
  const { values, handleChange } = useForm<TForgotPassword>({
    email: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotPasswordRequest(values)
      .then(() => {
        localStorage.setItem("resetPassword", "true");
        navigate("/reset-password");
      })
      .catch(() => {
        alert("Ошибка. Попробуйте еще раз");
      });
  };

  return (
    <form className={`${styles.form} mt-30`} onSubmit={onSubmit}>
      <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
      <EmailInput
        value={values.email}
        name={"email"}
        onChange={handleChange}
        extraClass="mb-6"
      />
      <Button htmlType="submit" type="primary" size="large" extraClass="mb-20">
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

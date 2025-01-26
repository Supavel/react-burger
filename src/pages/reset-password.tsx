import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { resetPasswordRequest } from "../utils/api";
import useForm from "../hooks/use-form";
import { TResetPassword } from "../utils/types";

export function ResetPasswordPage() {
  const canResetPassword = localStorage.getItem("resetPassword");
  const navigate = useNavigate();

  const { values, handleChange } = useForm<TResetPassword>({
    password: "",
    token: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPasswordRequest(values)
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
            onChange={handleChange}
            value={values.password}
            name={"password"}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={handleChange}
            value={values.token}
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

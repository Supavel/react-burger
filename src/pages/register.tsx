import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "../hooks";
import { register } from "../services/actions/auth";
import { Snackbar } from "@material-ui/core";
import Loader from "../components/loader/loader";
import useForm from "../hooks/use-form";
import { TRegister } from "../utils/types";

export function RegisterPage() {
  const { values, handleChange } = useForm<TRegister>({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { registerRequestFailed, requestExecute } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(values));
  };

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
            onChange={handleChange}
            value={values.name}
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
            value={values.email}
            onChange={handleChange}
            extraClass="mb-6"
          />
          <PasswordInput
            placeholder={"Пароль"}
            onChange={handleChange}
            value={values.password}
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

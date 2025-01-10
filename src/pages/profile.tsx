import { useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";

export function ProfilePage() {
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
  return (
    <form className={`${styles["profile-form"]} mt-30`}>
      <div className={`${styles["profile-title"]}`}>
        <p className="text text_type_main-medium text_color_inactive pt-6">
          Профиль
        </p>
        <p className="text text_type_main-medium text_color_inactive pt-6">
          История заказов
        </p>
        <p className="text text_type_main-medium text_color_inactive pt-6">
          Выход
        </p>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={`${styles.form} ml-15`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={handleInputChange}
          icon={"EditIcon"}
          value={state.name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          type={"text"}
          placeholder={"E-mail"}
          onChange={handleInputChange}
          icon={"EditIcon"}
          value={state.email}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          type={"text"}
          placeholder={"Пароль"}
          onChange={handleInputChange}
          icon={"EditIcon"}
          value={state.password}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <div className={styles["profile-buttons"]}>
          <Button
            htmlType="button"
            type="secondary"
            size="large"
            onClick={() => {}}
          >
            <p className="text text_type_main-default">Отмена</p>
          </Button>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass="mb-20"
            onClick={() => {}}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </form>
  );
}

import { useState, useEffect } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, updateUserData } from "../../services/actions/auth";
import { Snackbar } from "@material-ui/core";
import styles from "./profile-settings.module.css";
import useForm from "../../hooks/use-form"

const ProfileSettings = () => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });


  const dispatch: any = useDispatch();
  const { getUserRequestFailed, updateUserrequestFailed, userData } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      setValues({ ...values, name: userData.name, email: userData.email });
    }

    if (getUserRequestFailed)
      setValues({
        ...values,
        name: "Ошибка получения данных",
        email: "Ошибка получения данных",
      });
  }, [userData, getUserRequestFailed]);

   const onSubmit = (e:any) => {
    e.preventDefault();
    dispatch(updateUserData(values));
  };

  const onReset = (e:any) => {
    e.preventDefault();
    setValues({ name: userData?.name || "", email: userData?.email || "", password: "" });
  };

  const isModified = (userData?.name !== values.name ||  userData?.email !== values.email || values.password !== "") ? true : false;

  return (
    <>
    <form onSubmit={onSubmit} onReset={onReset}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={handleChange}
        icon={"EditIcon"}
        value={values.name}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
        onPointerEnterCapture={()=>{}}
        onPointerLeaveCapture={()=>{}}
      />
      <Input
        type={"text"}
        placeholder={"E-mail"}
        onChange={handleChange}
        icon={"EditIcon"}
        value={values.email}
        name={"email"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
        onPointerEnterCapture={()=>{}}
        onPointerLeaveCapture={()=>{}}
      />
      <PasswordInput
        placeholder={"Пароль"}
        onChange={handleChange}
        value={values.password}
        name={"password"}
        size={"default"}
        extraClass="mb-6"
   
      />
      {isModified && <div className={styles["profile-buttons"]}>
         <Button
          htmlType="reset"
          type="secondary"
          size="large"
        >
          <p className="text text_type_main-default">Отмена</p>
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Сохранить
        </Button>
      </div>}
    </form>
    <Snackbar open={updateUserrequestFailed} message="Приозошла изменения данных пользователя" />
    </>
  );
};
export default ProfileSettings;

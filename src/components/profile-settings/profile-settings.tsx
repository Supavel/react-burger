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

const ProfileSettings = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const dispatch: any = useDispatch();
  const { getUserRequestFailed, updateUserrequestFailed, userData } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      setState({ ...state, name: userData.name, email: userData.email });
    }

    if (getUserRequestFailed)
      setState({
        ...state,
        name: "Ошибка получения данных",
        email: "Ошибка получения данных",
      });
  }, [userData, getUserRequestFailed]);

  const handleInputChange = (event: any) => {
    const target = event.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
    dispatch(updateUserData(state));
  };

  const onReset = (e:any) => {
    e.preventDefault();
    setState({ name: userData?.name || "", email: userData?.email || "", password: "" });
  };

  const isModified = (userData?.name !== state.name ||  userData?.email !== state.email || state.password !== "") ? true : false;

  return (
    <>
    <form onSubmit={onSubmit} onReset={onReset}>
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
        onPointerEnterCapture={()=>{}}
        onPointerLeaveCapture={()=>{}}
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
        onPointerEnterCapture={()=>{}}
        onPointerLeaveCapture={()=>{}}
      />
      <PasswordInput
        placeholder={"Пароль"}
        onChange={handleInputChange}
        value={state.password}
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

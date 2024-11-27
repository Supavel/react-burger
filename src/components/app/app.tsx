import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundry/error-boundry";

const App = () => {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    const url = "https://norma.nomoreparties.space/api";
    fetch(`${url}/ingredients`).then((res) =>
      res
        .json()
        .then((res) => {
          if (res.success) {
            setIngredients(res.data);
          } else {
            throw new Error("свойство success не равно true");
          }
        })
        .catch((e) => console.log(`Ошибка при получении данных ${e}`))
    );
  }, []);
  return (
    <>
      <ErrorBoundary>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} />
        </main>
      </ErrorBoundary>
    </>
  );
};

export default App;

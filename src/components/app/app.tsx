import { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundry/error-boundry";
import request from "../../utils/request";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    request("ingredients")
      .then((res) => setIngredients(res.data))
      .catch((e) => console.log(`Ошибка при получении данных ${e}`));
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

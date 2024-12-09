import { useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ErrorBoundary from "../error-boundry/error-boundry";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <main className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;

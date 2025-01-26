import { useState, useRef, useMemo } from "react";
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { TIngredientConstrutor, TIngredientsCounters } from "../../utils/types";


const BurgerIngredients = () => {
  const [current, setCurrent] = useState("bun");

  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (state: any) => state.burgerIngredients
  );
  const tabRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const tabBottom = tabRef.current?.getBoundingClientRect().bottom || 0;
    const bunDistance = Math.abs(
      tabBottom - (bunRef.current?.getBoundingClientRect().top || 0)
    );
    const sauceDistance = Math.abs(
      tabBottom - (sauceRef.current?.getBoundingClientRect().top || 0)
    );
    const mainDistance = Math.abs(
      tabBottom - (mainRef.current?.getBoundingClientRect().top || 0)
    );

    const closest =
      bunDistance < sauceDistance && bunDistance < mainDistance
        ? "bun"
        : sauceDistance < bunDistance && sauceDistance < mainDistance
          ? "sauce"
          : "main";

    if (closest !== current) {
      setCurrent(closest);
    }
  };

  const ingredientsConstructor = useSelector(
    (state: any) => state.burgerConstructor.ingredients
  );

  const ingredientsCounters = useMemo(
    () =>
      ingredientsConstructor?.reduce(
        (acc: TIngredientsCounters, currentItem: TIngredientConstrutor) => (
          (acc[currentItem._id] = 1 + acc[currentItem._id] || 1), acc
        ),
        {}
      ),
    [ingredientsConstructor]
  );

  const bun = useSelector((state: any) => state.burgerConstructor.bun?._id);
  let bunCounters = {};
  if (bun) {
    bunCounters = { [bun]: 2 };
  }

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 ml-30">Соберите бургер</h1>
      <nav ref={tabRef} className={`${styles.nav} "mt-5"`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>

        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинка
        </Tab>
      </nav>
      {ingredientsFailed && (
        <div className="text text text_type_main-medium">Произошла ошибка</div>
      )}
      {ingredientsRequest && (
        <div className="text text text_type_main-medium">Загрузка</div>
      )}
      {!ingredientsFailed && !ingredientsRequest && (
        <div className={`${styles.scroll} ml-30`} onScroll={handleScroll}>
          <div ref={bunRef}>
            <BurgerIngredientsGroup
              ingredients={ingredients}
              ingredientsCounters={bunCounters}
              ingredientType="bun"
            />
          </div>
          <div ref={mainRef}>
            <BurgerIngredientsGroup
              ingredients={ingredients}
              ingredientsCounters={ingredientsCounters}
              ingredientType="main"
            />
          </div>
          <div ref={sauceRef}>
            <BurgerIngredientsGroup
              ingredients={ingredients}
              ingredientsCounters={ingredientsCounters}
              ingredientType="sauce"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BurgerIngredients;

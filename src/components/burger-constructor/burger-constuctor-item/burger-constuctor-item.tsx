import { TIngredientConstrutor } from "../../../utils/types";
import {
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
} from "../../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { useRef, FC } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constuctor-item.module.css";

type TProps = {
  ingredient: TIngredientConstrutor;
  index: number;
};

const BurgerConstructorItem: FC<TProps> = ({ ingredient, index }) => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "ingredientInt",
    hover(item: TIngredientConstrutor, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = Number(clientOffset?.y) - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch({
        type: SORT_INGREDIENTS,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });

      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: "ingredientInt",
    item: () => {
      return { ...ingredient, index };
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={styles.item}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() =>
          dispatch({
            type: DELETE_INGREDIENT,
            id: ingredient.uniq_id,
          })
        }
      />
    </div>
  );
};

export default BurgerConstructorItem;

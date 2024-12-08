import ingredientPropTypes from "../../../utils/types";
import {
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
} from "../../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorItem({ ingredient, index }: any) {
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "ingredientInt",
    hover(item: any, monitor) {
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
      return { ...ingredient.id, index };
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref}>
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
}

BurgerConstructorItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  index: PropTypes.number.isRequired,
};

export default BurgerConstructorItem;

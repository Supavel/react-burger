import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "../../../hooks";
import { useEffect } from "react";
import { postOrder } from "../../../services/actions/order-details";
import { TIngredientConstrutor } from "../../../utils/types";

const OrderDetails = () => {
  const dispatch = useDispatch();

  const { ingredients, bun } = useSelector(
    (state) => state.burgerConstructor
  );
  const ingredientsIds = ingredients.map((el: TIngredientConstrutor) => el._id);
  ingredientsIds.unshift(bun?._id || "");
  ingredientsIds.push(bun?._id || "");

  useEffect(() => dispatch(postOrder(ingredientsIds)), []);

  const { order, orderFailed, orderRequest } = useSelector(
    (state) => state.orderDetails
  );

  return (
    <>
      {orderFailed && (
        <div className="text text text_type_main-medium">Произошла ошибка</div>
      )}
      {orderRequest && (
        <div className="text text text_type_main-medium">Оформляем заказ...</div>
      )}
      {!orderFailed && !orderRequest && (
        <>
          <p className="text text_type_digits-large mb-8">{order}</p>
          <p className="text text text_type_main-medium mb-15">
            Идентификатор заказа
          </p>
          <p className="mb-15">
            <CheckMarkIcon type="primary" />
          </p>
          <p className="text text text_type_main-small mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text text_type_main-small text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </>
  );
};

export default OrderDetails;

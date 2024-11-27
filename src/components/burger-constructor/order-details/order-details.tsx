import PropTypes from "prop-types";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = ({orderNumber}:any) => {
  return (<>
  <p className="text text_type_digits-large mb-8">{orderNumber}</p>
  <p className="text text text_type_main-medium mb-15">Идентификатор заказа</p>
  <p  className="mb-15"><CheckMarkIcon type="primary" /></p>
  <p className="text text text_type_main-small mb-2">Ваш заказ начали готовить</p>
  <p className="text text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
  </>);
};

OrderDetails.propTypes = {
    orderNumber: PropTypes.string.isRequired
}

export default OrderDetails;

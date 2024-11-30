import PropTypes from "prop-types";

const IngredientDetailsCharacteristic = ({ name, value }: any) => {
  return (
    <>
      <span className="text text_type_main-medium text_color_inactive mr-5">
        <div>{name}</div>
        <div className="text_type_digits-medium">{value}</div>
      </span>
    </>
  );
};

IngredientDetailsCharacteristic.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string
}

export default IngredientDetailsCharacteristic;

import { TIngredientCharacteristic } from "../../../utils/types";
import { FC } from "react";

const IngredientDetailsCharacteristic: FC<TIngredientCharacteristic> = ({
  name,
  value,
}) => {
  return (
    <>
      <span className="text text_type_main-medium text_color_inactive mr-5">
        <div>{name}</div>
        <div className="text_type_digits-medium">{value}</div>
      </span>
    </>
  );
};

export default IngredientDetailsCharacteristic;

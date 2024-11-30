import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ children, onClose }: any) => {

  return (
    <div
      className={styles["modal-overlay"]}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

export default ModalOverlay;

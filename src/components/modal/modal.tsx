import {useEffect} from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modalRoot: any = document.getElementById("react-modals");

const Modal = ({ children, header, onClose }: any) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  const onClickStop = (e: any) => {
    e.stopPropagation();
  };
  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div
        className={styles.modal}
        onClick={onClickStop}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`${styles["close-icon"]} mt-15 mr-10`}
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </div>
        <header
          className={`${styles["modal-header"]} mt-10 text text_type_main-large`}
        >
          {header}
        </header>
        <div className={`${styles["modal-container"]} mt-10`}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;

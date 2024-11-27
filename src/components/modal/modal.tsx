import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay"

const modalRoot: any = document.getElementById("react-modals");

const Modal = ({ children, header, onClose }: any) => {
    const onClickStop = (e:any) => {
        e.stopPropagation()
    }  
    return ReactDOM.createPortal(
      <ModalOverlay onClose={onClose}>
      <div className={styles.modal} onClick={onClickStop}>
        <div className={`${styles["close-icon"]} mt-15 mr-10`} onClick={onClose}>
          <CloseIcon type="primary" />
        </div>
        <header className= {`${styles["modal-header"]} mt-10 text text_type_main-large`}>{header}</header>
        <div className={`${styles["modal-container"]} mt-10`}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  header: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;

import { useEffect, FC } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

type TProps = {
  header?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: FC<TProps> = ({ children, header, onClose }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  const onClickStop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div data-cy="modal" className={styles.modal} onClick={onClickStop}>
        <div
          data-cy="modal-close-icon"
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

export default Modal;

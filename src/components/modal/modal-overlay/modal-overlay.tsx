import { FC, ReactNode } from "react";
import styles from "./modal-overlay.module.css";

type TProps = {
  onClose: () => void;
  children: ReactNode;
};

const ModalOverlay: FC<TProps> = ({ children, onClose }) => {
  return (
    <div data-cy="modal-overlay" className={styles["modal-overlay"]} onClick={onClose}>
      {children}
    </div>
  );
};

export default ModalOverlay;

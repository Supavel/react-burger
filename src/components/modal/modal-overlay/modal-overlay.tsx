import React from "react";
import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ children, onClose }: any) => {
  React.useEffect(() => {
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
  return (
    <div
      className={styles["modal-overlay"]}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;

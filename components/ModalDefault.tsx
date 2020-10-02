// import propTypes from "prop-types";
import React from "react";
import { Modal, ModalBody, ModalHeader } from "./Modal";

interface ModalDefault {
  children: React.ReactNode,
  title: React.ReactNode,
  isOpen: boolean,
  onDismiss: () => void,
  toggle: () => void,
}

const ModalDefault: React.FC<ModalDefault> = ({ onDismiss, toggle, isOpen, title, children }) => {
  const onDissmissClick = () => {
    if (onDismiss) {
      onDismiss();
    }
    toggle();
  };
  return (
      <Modal unmountOnClose isOpen={isOpen} toggle={onDissmissClick}>
          <ModalHeader toggle={onDissmissClick}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
      </Modal>
  );
};

export default ModalDefault;

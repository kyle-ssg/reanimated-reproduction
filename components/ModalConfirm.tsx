import React from "react";
// I don't know why we have this import because we didn't use it.
// import { Interface } from "readline";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./Modal";

interface Confirm {
  children: React.ReactNode,
  title: React.ReactNode,
  isOpen: boolean,
  onYes?: () => void,
  onNo?: () => void,
  noText?: string,
  yesText?: string,
  toggle?: () => void,
}

const Confirm: React.FC<Confirm>  = ({ onNo, toggle, onYes, isOpen, title, children, yesText = "OK", noText = "Cancel" }) => {
  const no = () => onNo ? onNo() : toggle();
  const yes = () => onYes ? onYes() : toggle();

  return (
      <Modal unmountOnClose isOpen={isOpen} toggle={no}>
          <ModalHeader toggle={no}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={yes}>
                  {yesText}
              </Button>{" "}
              <Button color="secondary" onClick={no}>
                  {noText}
              </Button>
          </ModalFooter>
      </Modal>
  );
};

export default Confirm;

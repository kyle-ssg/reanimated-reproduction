import React from "react";
// I don't know why we have this import because we didn't use it.
// import { Interface } from "readline";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./Modal";
import { ButtonDanger } from "./base/forms/Button";

interface Confirm {
  children: React.ReactNode,
  title: React.ReactNode,
  isOpen: boolean,
  isDanger?: boolean,
  onYes?: () => void,
  onNo?: () => void,
  noText?: string,
  disabled?:boolean,
  disabledYes?:boolean,
  yesText?: string,
  toggle?: () => void,
}

const Confirm: React.FC<Confirm>  = ({ onNo, isDanger,disabled,disabledYes, toggle, onYes, isOpen, title, children, yesText = "OK", noText = "Cancel" }) => {
  const no = () => onNo ? onNo() : toggle();
  const yes = () => onYes ? onYes() : toggle();

  return (
      <Modal unmountOnClose isOpen={isOpen} toggle={no}>
          <ModalHeader toggle={no}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
              <ButtonSecondary data-test="confirm-no" disabled={disabled} onClick={no}>
                {noText}
              </ButtonSecondary>
            {isDanger? (
              <ButtonDanger data-test="confirm-yes" disabled={disabled||disabledYes} icon="fas fa-trash"
                onClick={yes}
              >
                {yesText}
              </ButtonDanger>
            ): (
              <ButtonPrimary data-test="confirm-yes" disabled={disabled||disabledYes} icon="fas fa-save"
                onClick={yes}
              >
                {yesText}
              </ButtonPrimary>
            )}
            {" "}
          </ModalFooter>
      </Modal>
  );
};

export default Confirm;

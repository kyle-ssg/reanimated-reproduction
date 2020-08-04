import propTypes from 'prop-types';
import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal';

const ModalAlert = (props) => {
  const onDismiss = () => {
    if (props.onDismiss) {
      props.onDismiss();
    }
    props.toggle();
  };
  return (
      <Modal
        unmountOnClose
        isOpen={props.isOpen}
        toggle={onDismiss}
        >
          <ModalHeader toggle={onDismiss}>
              {props.title}
          </ModalHeader>
          <ModalBody>
              {props.children}
          </ModalBody>
          <ModalFooter>
              <Button
                color="primary" onClick={onDismiss}
                >
                  {props.okText}
              </Button>
          </ModalFooter>
      </Modal>
  );
};

ModalAlert.defaultProps = {
  okText: 'OK',
};
ModalAlert.propTypes = {
  okText: propTypes.string,
  children: propTypes.node,
  title: propTypes.node,
  isOpen: propTypes.bool,
  onDismiss: propTypes.func,
  toggle: propTypes.func,
};

export default ModalAlert;

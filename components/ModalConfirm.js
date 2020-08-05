import propTypes from 'prop-types';
import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal';

const Confirm = props => {
  const no = () => {
    if (props.onNo) {
      props.onNo();
    }
    props.toggle();
  };
  const yes = () => {
    if (props.onYes) {
      props.onYes();
    }
    props.toggle();
  };
  return (
      <Modal unmountOnClose isOpen={props.isOpen} toggle={no}>
          <ModalHeader toggle={no}>{props.title}</ModalHeader>
          <ModalBody>{props.children}</ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={yes}>
                  {props.yesText}
              </Button>{' '}
              <Button color="secondary" onClick={no}>
                  {props.noText}
              </Button>
          </ModalFooter>
      </Modal>
  );
};

Confirm.defaultProps = {
  noText: 'Cancel',
  yesText: 'OK',
};

Confirm.propTypes = {
  children: propTypes.node,
  title: propTypes.node,
  isOpen: propTypes.bool,
  onYes: propTypes.func,
  onNo: propTypes.func,
  noText: propTypes.string,
  yesText: propTypes.string,
  toggle: propTypes.func,
};

export default Confirm;

import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

const _propTypes = {
  /** The element's children */
  children: propTypes.node,
  /** The element's class name */
  className: propTypes.string,
};

/**
 * Div with standard vertical padding
 */
export class FormGroup extends PureComponent {
  static displayName = 'FormGroup';

  static propTypes = _propTypes;

  render() {
    const {
      props: { className, ...rest },
    } = this;
    return <div {...rest} className={cn(className, 'form-group')} />;
  }
}

global.FormGroup = FormGroup;
export default FormGroup;

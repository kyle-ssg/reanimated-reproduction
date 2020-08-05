import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

const Select = class extends PureComponent {
  static displayName = 'Select';

  static propTypes = {
    title: propTypes.string,
    children: propTypes.node,
  }

  render() {
    const { title, children } = this.props;
    return (
        <div className="select">
            <span className="select__text">{title}</span>
            <select {...this.props}>
                {children}
            </select>
        </div>
    );
  }
};

global.Select = Select;
export default Select;

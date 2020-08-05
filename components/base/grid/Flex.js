// propTypes: value: OptionalNumber
import React, { PureComponent } from "react";
import propTypes from "prop-types";

const cn = require("classnames");

const _propTypes = {
  /** The element's children */
  children: propTypes.node,
  /** The element's class name */
  className: propTypes.string,
  /** The flex value */
  value: propTypes.number,
};

/**
 * Div with flex
 */
export class Flex extends PureComponent {
  static displayName = "Flex";

  static propTypes = _propTypes;

  static defaultProps = {
    value: 1,
  };

  render() {
    const {
      props: { className, children, value, ...rest },
    } = this;
    return (
      <div
        {...rest}
        className={cn(
          {
            flex: true,
          },
          `flex-${value}`,
          className
        )}
      >
        {children}
      </div>
    );
  }
}

global.Flex = Flex;
export default Flex;

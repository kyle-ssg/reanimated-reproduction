import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import cn from 'classnames';

const _propTypes = {
  /** What class to add to the button */
  className: propTypes.string,
  /** The element's children */
  children: propTypes.node,
  /** What to do on click */
  onClick: propTypes.func,
};

/**
 * Default Button without any styles
 */
export class Button extends PureComponent {
  static displayName = 'Button';

  static propTypes = _propTypes

  render() {
    const { children, ...rest } = this.props;
    return (
        <button
          type="button"
          {...rest}
          onMouseUp={this.onMouseUp}
          className={cn({
              'btn': true,
            }, (this.props.className))}
        >
            {children}
        </button>
    );
  }
}
global.Button = Button;
export default Button;

/** Default button added btn-primary * */
export class ButtonPrimary extends React.PureComponent {
  static displayName = 'ButtonPrimary';

  static propTypes = _propTypes;

  render() {
    const { props } = this;
    return (
        <Button
          {...props}
          className={cn(props.className, 'btn btn-primary')}
        />
    );
  }
}
global.ButtonPrimary = ButtonPrimary;

/** Default button added btn-secondary * */
export class ButtonSecondary extends React.PureComponent {
  static displayName = 'ButtonSecondary';

  static propTypes = _propTypes;

  render() {
    const { props } = this;
    return (
        <Button
          {...props}
          className={cn(props.className, 'btn btn-secondary')}
        />
    );
  }
}
global.ButtonSecondary = ButtonSecondary;

/** Default button added btn-outline-primary * */
export class ButtonTertiary extends React.PureComponent {
  static displayName = 'ButtonButtonTertiary';

  static propTypes = _propTypes;

  render() {
    const { props } = this;
    return (
        <Button
          {...props}
          className={cn(props.className, 'btn btn-outline-primary')}
        />
    );
  }
}

global.ButtonTertiary = ButtonTertiary;
